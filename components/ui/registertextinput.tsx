import { HTMLInputTypeAttribute } from "react";

type RegisterTextProp ={
    label:string,
    placeholder:string,
    type:HTMLInputTypeAttribute,
    onChange:any,
    value:string;
}
const RegisterText = ({label,placeholder,type,onChange,value}:RegisterTextProp)=>{
    return(
        <div>
            <label className="block mb-1 text-[#2d1b0e]">{label}</label>
            <input
              type={type}
              value={value}
              className="w-full px-4 py-2 rounded-lg border border-[#c2a476] focus:outline-none focus:ring-2 focus:ring-[#a6825b] bg-[#f9f4ee]"
              placeholder={placeholder}
              onChange={(e)=>onChange(e.target.value)}
              required
            />
          </div>
    )
}
export default RegisterText;