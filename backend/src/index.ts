import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET  : string
	}
}>()

app.get('/api/v1/blog:id', (c) => {
  return c.text('getting blog')
})

app.post('/api/v1/user/signup', async (c) => {
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

app.post('/api/v1/user/signin', async (c) => {
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
      token : jwtToken})
})

app.post('/api/v1/blog', (c) => {
  return c.text('posting blogs')
})

app.put('/api/v1/blog', (c) => {
  return c.text('updating blogs')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('getting blogs')
})

export default app
