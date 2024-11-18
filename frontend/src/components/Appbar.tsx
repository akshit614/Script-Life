
const Appbar = () => {
  return (
    <div className="flex justify-between border-b px-5 sm:px-10 items-center p-4">
      <div className="font-bold text-4xl items-center">
        BlogApp
      </div>
      <div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-400 rounded-full mx-2">
              <span className="font-bold text-2xl text-black ">A</span>
        </div>   
      </div>
    </div>
  )
}

export default Appbar