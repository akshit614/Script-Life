import BlogCard from "../components/BlogCard"
import Navbar from "../components/Navbar"
import { useBlogs } from "../hooks"


const Blogs = () => {

  const {loading, blogs} = useBlogs()

  // if (loading) {
  //   return <div>Loading</div>
  // }

  return (
    <div>
        <Navbar />
    <div className="p-10 flex justify-center ">
      <div className="max-w-2xl w-full">
      {
        !loading ?
        blogs.map(blog => <BlogCard 
          id = {blog.id}
          author={blog.author.name  || "Anonymous" } 
          title={blog.title} 
          content={blog.content} 
          publishedDate={"18 nov 2024"} /> )
          : <Skeleton />
      }
    </div>
    </div>
    </div>
  )
}

function Skeleton() {
  return <div>
    <div role="status" className="max-w-xl p-4  rounded  animate-pulse md:p-6">
      <div className="flex items-center ">
         <svg className="w-10 h-10 me-3 text-gray-500 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
          <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
      </div>
      <div className="h-2.5 mt-4 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
    <div role="status" className="max-w-xl p-4  rounded  animate-pulse md:p-6">
      <div className="flex items-center ">
         <svg className="w-10 h-10 me-3 text-gray-500 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
          <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
      </div>
      <div className="h-2.5 mt-4 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
    <div role="status" className="max-w-xl p-4  rounded  animate-pulse md:p-6">
      <div className="flex items-center ">
         <svg className="w-10 h-10 me-3 text-gray-500 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
          <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
      </div>
      <div className="h-2.5 mt-4 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
    <div role="status" className="max-w-xl p-4  rounded  animate-pulse md:p-6">
      <div className="flex items-center ">
         <svg className="w-10 h-10 me-3 text-gray-500 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
          <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
      </div>
      <div className="h-2.5 mt-4 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
    
  </div>
  
}

export default Blogs