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

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = await c.req.param('id');
    try {
        const blog  = await prisma.post.findFirst({
            where : {
                id : id
            }
        })

        if (!blog) {
            c.text("can't find blog with id" + id)
        }

        c.status(200)
        return c.json({blog : blog})

    } catch (error) {
        c.status(403)
        return c.text('error in getting blog')
    }

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

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.post.findMany()
        if (!blogs) {
            c.status(403)
            return c.text("Error while fetching blogs")
        }

        return c.json ({
            blogs
        })
    } catch (error) {
        c.status(403)
        return c.text("Error while fetching blogs")
    }



})