import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET  : string
	},
    Variables : {
        userId : string
    }
}>()

blogRouter.use('/*', async (c, next) => {
    const header = c.req.header("Authorization") || "";
    const response =  await verify(header, c.env.JWT_SECRET)
    
    if (response && response.id) {
        c.set("userId", response.id as string)
        await next()
    } else {
        c.status(403)
        return c.json({msg : "unauthorized"})
    }
})

// things to do :: Add pagination 

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    console.log("bulk triggered");
    
    try {
        const blogs = await prisma.post.findMany();
        console.log('Fetched blogs:', blogs)

        if (!blogs || blogs.length === 0) {
            c.status(404)
            return c.text("Error while fetching blogs")
        }

        return c.json ({
            blogs : blogs
        })
    } catch (error) {
        c.status(500)
        return c.text("Error while fetching blogs")
    }
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const authorId = c.get("userId")
    try {
        const blog = await prisma.post.create({
            data : {
                title : body.title,
                content : body.content,
                aurhorId: authorId
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

blogRouter.put('/update', async (c) => {
    console.log("put triggerd");
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    try {
        const blog = await prisma.post.update({
            where : {
                id: body.id,
                aurhorId : userId
            },
            data : {
                title : body.title,
                content : body.content,
            }
        })

        return c.json({
            msg : "blog with id " + blog.id + " is updated"
        })
        
        
    } catch (error) {
        c.status(403)
        return c.json({msg : "some error happend in updating blog"})
    }
})