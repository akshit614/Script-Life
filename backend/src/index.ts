import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>()

app.get('/api/v1/blog:id', (c) => {
  return c.text('getting blog')
})

app.post('/api/v1/user/signup', async (c) => {
  
  return c.text('signing up')

})

app.post('/api/v1/user/signin', (c) => {
  return c.text('signing in')
})

app.post('/api/v1/blog', (c) => {
  return c.text('posting blogs')
})

app.put('/api/v1/blog/', (c) => {
  return c.text('updating blogs')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('getting blogs')
})

export default app
