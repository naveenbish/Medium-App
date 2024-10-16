import z from 'zod';

// These are for Backend
export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
})

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number()
})

// These are for Frontend React Code
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>
