import { useState } from "react"
import InputBox from "./InputBox"
import { SignupInput, SigninInput } from "@aksh4code/blog-app-common"
import { Link } from "react-router-dom"

const Auth = ({type} : { type : "signin" | "signup"}) => {

    // type === "signup" ? (
        const [postInputs, setPostInputs] = useState<SignupInput>({
            name : "",
            email : "",
            password  :""
        })
    // )
    // :
    // (const [postInputs, setPostInputs] = useState<SigninInput>({
    //     name : "",
    //     email : "",
    //     password  :""
    // }))
    

  return (

    <div className=" h-screen flex flex-col justify-center">
        <div className="px-5 py-10 rounded-lg border-black shadow-2xl hover:shadow-sky-400">    
            <div className="">
                <div>
                    <div className="font-bold text-xl text-center md:text-2xl">
                        {type === "signup" ? "Create a account" : "Login to your account"}
                    </div>
                    <div className="text-sm text-slate-500 text-center">
                    {type === "signup" ? "Already have a account ?" : "Don't have account. Create one"} 
                    <Link className="underline px-1 font-semibold" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Login" : "SignUp"}</Link> 
                    </div>
                </div>
                <div>
                    <InputBox label={"Username"} onChange={ (e) => {
                        setPostInputs({
                            ...postInputs,
                            name  : e.target.value
                        })
                    }
                    } placeholder={"Exapmle12"} />
                    <InputBox label={"Email"} onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email  : e.target.value
                        })
                    }} placeholder={"abc@gmail.com"} />
                    <InputBox label={"Password"} onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password  : e.target.value
                        })
                    }} placeholder={"12345678"} />
                    <div className="pt-2">
                        <button className="p-1 w-full bg-slate-900 rounded-lg text-white font-bold text-xl" >{type === "signup" ? "SignUp" : "SignIn" }</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Auth