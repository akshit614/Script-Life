import Quote from "../components/Quote"
import Auth from "../components/Auth"

const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center ">
          <div className="w-7/12">
          <Auth type="signin"/>
          </div>
      </div>
      <div className="hidden md:block">
          <Quote name="Steve Jobs" quote={"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking."} />
      </div>
    </div>
  )
}

export default Signin