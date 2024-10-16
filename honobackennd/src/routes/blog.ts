import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { verify } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@naveenbisht/medium-common";

export const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: any;
  }
}>()

// Middlewar for every api starting with /api/v1/blog/*
blogRoutes.use('/*', async (c, next) => {
  const header = await c.req.header("authorization") || "";

  // if Bearer token => ["Bearer", "token"]
  // const token = header.split("")[1]

  try {
    const user = await verify(header, c.env.JWT_SECRET);

    if (!user.id) {
      c.status(403)
      return c.json({ error: "unauthorized" })
    }

    c.set('userId', user.id);
    await next();
  } catch (e) {
    c.status(403);
    return c.json({
      message: "You are not logged in..."
    })
  }
})

// create new blog post
blogRoutes.post('/', async (c) => {
  const body = await c.req.json();
  //Zod validation
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "incorrect input" })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const userId = c.get("userId");

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId
    }
  })
  return c.json({ id: blog.id })
})


// TO update blog.
blogRoutes.put('/', async (c) => {
  const body = await c.req.json();

  //Zod validation
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "incorrect input" })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const blog = await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content,
    }
  })

  return c.json({ id: blog.id })
})


// Get all Blogs to display on Main Page.
// Todo Add Pagination, So that user can ask for 10 Blogs first and then 10 more and so on.
blogRoutes.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany();
  return c.json({ blogs });
})


// Get blogs by id.
blogRoutes.get('/:id', async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: Number(id)
      }
    })
    return c.json({ blog });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error While Featching Blog Posts."
    })
  }
})
