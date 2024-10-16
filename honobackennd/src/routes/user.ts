import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { sign } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupInput, signinInput } from "@naveenbisht/medium-common"

export const userRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()

// For new user signin
userRoutes.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  // zod validation
  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ message: "Input not correct." })
  }

  const userEmail = await prisma.user.findUnique({
    where: {
      email: body.email,
    }
  })

  if (userEmail) {
    c.status(403);
    return c.json({ error: "User already Exist..." })
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    }
  })

  // Generating New JWT Token for User.
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    jwt: token,
  });
})

// User Signin Auth
userRoutes.post('/signin', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  // zod validation
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Input not correct." })
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  })

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found." })
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    jwt: token,
  });

})
