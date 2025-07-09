type OptionProp = {
    value:string,
    text:string,
}
type SelectInputProps = {
    label:string,
    options:OptionProp[],
    onChange:any,
    value:string
}
const SelectInput = ({label,options,onChange,value}:SelectInputProps)=>{
    return(
        <div>
            <label className="block mb-1 text-[#2d1b0e]">{label}</label>
            <select
            value={value}
              className="w-full px-4 py-2 rounded-lg border border-[#c2a476] focus:outline-none focus:ring-2 focus:ring-[#a6825b] bg-[#f9f4ee]"
              onChange={(e)=>onChange(e.target.value)}
              required
            >
                {options.map((op,idx)=><option key={idx} value={op.value}>{op.text}</option>)}
            </select>
          </div>
    )
}
export default SelectInput;