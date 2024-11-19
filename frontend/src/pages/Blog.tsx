import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import BlogDetails from "../components/BlogDetails"

const Blog = () => {
    const {id} = useParams()
    const {loading, blog} = useBlog({
        id : id || ""
    })
    console.log(id);
    
    if (loading) {
        return <div className="flex flex-col items-center justify-center">
            Loading
        </div>
        
    }

    return (
        <div>
            <BlogDetails blog={blog}/>
        </div>
  )

}
export default Blog