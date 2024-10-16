import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { decode, sign, verify } from 'hono/jwt'
import { withAccelerate } from '@prisma/extension-accelerate'
import { userRoutes } from './routes/user'
import { blogRoutes } from './routes/blog'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()

// User Routes
app.route('/api/v1/user', userRoutes);
app.route('/api/v1/blog', blogRoutes);



export default app
