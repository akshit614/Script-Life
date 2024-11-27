import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 p-8 max-w-4xl">
          <div className="col-span-8 px-6">
            <Link to={'/blogs'}>
                <div className="text-3xl ">
                <FaArrowCircleLeft />
                </div>
            </Link>
            <div className="text-4xl font-extrabold">{blog.title}</div>
            <div className="text-slate-600 pt-1">Posted on 2 Nov 2024</div>
            <div className="text-gray-800 pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4  px-6">
            <div className="pl-2 text-slate-700">Author</div>
            <div className="flex">
              <div className="flex flex-col justify-center ">
                <div className="relative inline-flex text-center items-center justify-center w-6 h-6 overflow-hidden bg-gray-400 rounded-full mx-2">
                  <span className="font-medium text-black ">
                    {blog.author.name[0] || "A"}
                  </span>
                </div>
              </div>
              <div className="justify-center items-center">
                <div className="font-semibold text-xl">
                  {blog.author.name || "Anonymous"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
