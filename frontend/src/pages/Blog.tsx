import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import BlogDetails from "../components/BlogDetails";
import Navbar from "../components/Navbar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  return (
    <div>
      <Navbar />
      {!loading && blog ? <BlogDetails blog={blog} /> : <MiniSkeleton />}
    </div>
  );
};

function MiniSkeleton() {
  return (
    <div className="flex justify-center">
      <div
        role="status"
        className="flex justify-between w-full max-w-2xl p-4  rounded  animate-pulse md:p-6 gap-4"
      >
        <div className="w-full">
          <div className="h-5 mt-4 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="flex pt-5">
          <svg
            className="w-10 h-10 me-3 text-gray-500 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-400 w-36 mb-2 pr-6"></div>
            <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-400 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
