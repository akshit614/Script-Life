

const InputBox = ({label,onChange,placeholder}) => {
  return (
    <div className="pt-2 ">
        <div className="font-semibold ">
            {label}
        </div>
        <input className="border px-3 rounded w-full p-1"
        onChange={onChange} 
        placeholder={placeholder} 
        type="text" 
        name="input" />
    </div>
  )
}

export default InputBox