import { HTMLInputTypeAttribute } from "react";

type RegisterTextProp = {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: (val: string) => void;
  value: string;
};

const RegisterText = ({ label, placeholder, type, onChange, value }: RegisterTextProp) => {
  const isNumber = type === "number";

  return (
    <div>
      <label className="block mb-1 text-[#2d1b0e]">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
        className={`w-full px-4 py-2 rounded-lg border border-[#c2a476] focus:outline-none focus:ring-2 focus:ring-[#a6825b] bg-[#f9f4ee] ${
          isNumber ? 'appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]' : ''
        }`}
      />
    </div>
  );
};

export default RegisterText;