import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET  : string
	}
}>()

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
    
    try {
        const user = await prisma.user.create({
            data : {
                email : body.email,
                password : body.password
              }
            })
      const jwtToken = await sign({id:user.id},c.env.JWT_SECRET)
      return c.json({token : jwtToken})
      
    } catch (e) {
      return c.text("Got an error in creating a user" + e)
    }
    
})
  
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate())
      
    const body = await c.req.json()
      
    const user = await prisma.user.findFirst({
        where : {
          email : body.email
        }
    })
    if (!user) {
        c.status(403)
        return c.json({mag : "user not found"})
    }
    const jwtToken = await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
        email : user.email,
        passowrd : user.password,
        token : jwtToken
    })
})