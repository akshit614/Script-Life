import { ChangeEvent } from "react"
interface inputBoxType {
  label : string,
  placeholder : string,
  onChange : (e : ChangeEvent<HTMLInputElement>) => void
}

const InputBox = ({label,onChange,placeholder} : inputBoxType) => {
  return (
    <div className="pt-2 ">
        <div className="font-semibold ">
            {label}
        </div>
        <input className="border px-3 rounded-lg w-full p-1"
        onChange={onChange} 
        placeholder={placeholder} 
        type="text" 
        name="input" />
    </div>
  )
}

export default InputBox