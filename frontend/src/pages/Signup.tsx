import Auth from "../components/Auth"
import Quote from "../components/quote"

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
                <Quote quote={'"You should have some vision to go far in life. That will add some good motivation for doing things"'} />
            </div>
        </div>
    </>
  )
}

export default Signup