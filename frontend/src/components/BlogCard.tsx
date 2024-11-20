import { Link } from "react-router-dom"

interface BlogCardProps {
  id : string,
  author : string,
  title : string,
  content : string,
  publishedDate : string
}

const BlogCard = ({id,author,title,content,publishedDate} : BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-3 font-serif border-b border-slate-300 ">
      <div className="hover:shadow-lg cursor-pointer">
      <div className="flex items-center">
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-400 rounded-full mx-2">
            <span className="font-medium text-black ">{author[0]}</span>
        </div>      
        {author} . <div className="pl-1 text-slate-400">{publishedDate}</div>
      </div>
      <div className="pl-2 pt-2">
      <div className="font-bold text-2xl"> 
        {title}
      </div>
      <div className="text-slate-500">
        {content.slice(0,100) + "..."}
      </div>
      <div className="font-thin text-slate-700">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
      </div>
      </div>
      </div>
    </div>
    </Link>
  )
}

export default BlogCard