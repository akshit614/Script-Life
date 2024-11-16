import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <div className="font-bold text-xl text-center md:text-2xl">
                    Create a Account
                </div>
                <div className="text-sm text-slate-500 text-center">
                    Already have a account ?
                    <Link className="underline px-1 font-semibold" to={'/signin'}>Login</Link>
                </div>
    </div>
  )
}

export default Header