import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET  : string
	}
}>()

blogRouter.use('*', async (c, next) => {
    const header = c.req.header("Authorization") || "";
    const response =  await verify(header, c.env.JWT_SECRET)
  
    if (response.id) {
      await next()
    } else {
      c.status(403)
      return c.json({msg : "unauthorized"})
    }
  
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    try {
        const blog = await prisma.post.create({
            data : {
                title : body.title,
                content : body.content,
                aurhorId: "1"
            }
        })

        return c.json({
            id : blog.id
        })
        
    } catch (error) {
        c.status(403)
        return c.json({msg : "some error happend in ceating blog"})
    }
})

blogRouter.get('/:id', (c) => {
    
    return c.text('getting blog')
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    try {
        const blog = await prisma.post.update({
            where : {
                id: body.id
            },
            data : {
                title : body.title,
                content : body.content,
            }
        })

        return c.json({
            id : blog.id
        })
        
    } catch (error) {
        c.status(403)
        return c.json({msg : "some error happend in updating blog"})
    }
    return c.text(' blogs')
})

blogRouter.get('/bulk', (c) => {
    return c.text('getting blogs')
})