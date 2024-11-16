import Header from "./Header"
import InputBox from "./InputBox"

const Auth = () => {
  return (
 
    <div className=" h-screen flex flex-col justify-center">
        <div className="px-5 py-10 rounded-lg border-black shadow-2xl hover:shadow-sky-400">    
            <div className="">
                <Header />
                <div>
                    <InputBox  label={"Username"} onChange={""} placeholder={"Exapmle12"} />
                    <InputBox label={"Email"} onChange={""} placeholder={"abc@gmail.com"} />
                    <InputBox label={"Password"} onChange={""} placeholder={"12345678"} />
                    <div className="pt-2">
                        <button className="p-1 w-full bg-slate-900 rounded-lg text-white font-bold text-xl" >SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Auth