import Auth from "../components/Auth"
import Quote from "../components/Quote"

const Signup = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center ">
                <div className="w-7/12">
                    <Auth type="signup"/>
                </div>
            </div>
            <div className="hidden md:block">
                <Quote name={"Nelson Mandela"} quote={'"The greatest glory in living lies not in never falling, but in rising every time we fall."'} />
            </div>
        </div>
    </>
  )
}

export default Signup