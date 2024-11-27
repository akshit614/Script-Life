import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  author: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  author,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className=" border-b border-slate-300 py-2 ">
        <div className="hover:shadow-md hover:shadow-slate-500 cursor-pointer rounded-lg  transition-all duration-700 hover:scale-110 hover:bg-gray-100 py-2">
          <div className="flex items-center">
            <div className="relative inline-flex  items-center justify-center w-6 h-6 overflow-hidden bg-gray-400 rounded-full mx-2">
              <span className="font-bold text-lg text-black ">{author[0]}</span>
            </div>
            <div className="font-semibold">{author} .</div>
            <div className="pl-1 text-slate-500">{publishedDate}</div>
          </div>
          <div className="pl-2 pt-2">
            <div className="font-bold text-2xl">{title}</div>
            <div className="text-slate-500">
              {content.slice(0, 100) + "..."}
            </div>
            <div className="font-thin text-slate-700 font-serif">
              {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
