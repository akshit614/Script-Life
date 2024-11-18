import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"


const Blogs = () => {

  const {loading, blogs} = useBlogs()

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <div>
        <Appbar />
    <div className="p-10 flex justify-center">
      <div className="max-w-xl">
      {
        blogs.map(blog => <BlogCard 
          id = {blog.id}
          author={blog.author.name  || "Anonymous" } 
          title={blog.title} 
          content={blog.content} 
          publishedDate={"18 nov 2024"} /> )
      }
    </div>
    </div>
    </div>
  )
}

export default Blogs