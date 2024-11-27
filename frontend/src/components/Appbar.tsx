import { Link } from "react-router-dom"

const Appbar = () => {
  const name = localStorage.getItem("userName") || "A"

  return (
    <div className="flex justify-between border-b px-5 sm:px-10 items-center p-4">
      <Link to={"/blogs"} className="cursor-pointer">
        <div className="font-bold text-4xl items-center">
          ScriptLife
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <Link to={"/blogs"} className="cursor-pointer">
          <div className="flex flex-col justify-center font-bold ">
            Home
          </div>
        </Link>
        <div> 
          <Link to={"/blog/publish"}>
          <button type="button" className=" text-white bg-gradient-to-br from-black to-slate-500 font-bold rounded-full text-md px-5 py-2 text-center">New Blog</button>
          </Link>
        </div>
        <div> 
          <Link to={"/"}>
          <button type="button" className="text-white bg-gradient-to-br from-black to-slate-500 font-bold rounded-full text-md px-5 py-2 text-center">Logout</button>
          </Link>
        </div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gradient-to-br from-black to-slate-500 rounded-full ">
              <span className="font-bold text-2xl text-white ">{name[0].toUpperCase()}</span>
        </div>   
      </div> 
    </div>
  )
}

export default Appbar