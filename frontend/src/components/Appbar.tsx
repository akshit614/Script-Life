import { Link } from "react-router-dom"

const Appbar = () => {
  return (
    <div className="flex justify-between border-b px-5 sm:px-10 items-center p-4">
      <Link to={"/blogs"} className="cursor-pointer">
        <div className="font-bold text-4xl items-center">
          BlogApp
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Link to={"/blogs"} className="cursor-pointer">
          <div className="flex flex-col justify-center font-bold ">
            Home
          </div>
        </Link>
        <div> 
          <Link to={"/blog/publish"}>
          <button type="button" className=" text-white font-bold bg-green-600 hover:bg-green-500 rounded-full text-sm px-5 py-2.5 text-center">New Blog</button>
          </Link>
        </div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-400 rounded-full ">
              <span className="font-bold text-2xl text-black ">A</span>
        </div>   
      </div> 
    </div>
  )
}

export default Appbar