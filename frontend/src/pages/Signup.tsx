import Auth from "../components/Auth"
import Quote from "../components/quote"

Auth
const Signup = () => {
  return (
    <>
        <div className="grid grid-cols-2">
            <div className="flex justify-center ">
                <div className="w-7/12">
                    <Auth />
                </div>
            </div>
            <div className="invisible md:visible">
                <Quote />
            </div>
        </div>
    </>
  )
}

export default Signup