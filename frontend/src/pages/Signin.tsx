import Quote from "../components/quote"
import Auth from "../components/Auth"

const Signin = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center ">
          <div className="w-7/12">
          <Auth type="signin"/>
          </div>
      </div>
      <div className="invisible md:visible">
          <Quote  quote={'"Quote from my side and it should be above of your head. and what you are doing awiht ksadba adasdjhajs dasdh asd dfgsdfgdsf fdf"'} />
      </div>
    </div>
  )
}

export default Signin