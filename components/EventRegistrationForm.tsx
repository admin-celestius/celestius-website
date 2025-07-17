//To Register for the Tech Event
import React, { useState } from "react";
import validateRegistration from "@/hooks/EventHooks/validateRegistration";
import RegisterText from "./ui/registertextinput";
import SelectInput from "./ui/selectinput";
const  EventRegistrationForm=()=> {
  const [name,setName] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [register_number,setRegisterNumber] = useState<string>('');
  const [department,setDepartment] = useState<string>('');
  const [year,setYear] = useState<string>('');
  const [section,setSection] = useState<string>('');
  const [result,setResult] = useState('');
  return (
    <main className="flex items-center justify-center min-h-[90vh] bg-[#d8bb96] px-4">
      <div className="w-full max-w-md bg-[#f2e6d8] rounded-xl p-6 shadow-md">
        <h1 className="text-3xl md:text-3.5xl font-bold text-center text-[#2d1b0e] mb-6">
          Register for AI Workshop
        </h1>
        <form className="flex flex-col space-y-2" onSubmit={async(e)=>{
          setResult('');
          e.preventDefault();
          if(name && email && register_number && department && year && section){
          let result = await validateRegistration({name,email,register_number,department,year,section})
          if (result.success){
            alert("Registration Successfull!")
            setName('');setEmail('');setRegisterNumber('');setDepartment('');setYear('');setSection('');setYear('');
          }
          else{
            alert(result.error?.message);
          }
          }}}>
          
          <RegisterText label="Full Name" value={name } placeholder="Your Name" type="text" onChange={setName}/>
          <RegisterText label="College Mail Address" value={email as string} placeholder="Your College Email" type="email" onChange={setEmail}/>
          <RegisterText label="Register Number" value={register_number as string} placeholder="Your Register Number" type="text" onChange={setRegisterNumber} />
          <SelectInput label={"Department"}
          onChange={setDepartment}
          value={department}
          options={[
          { value: "", text: "Select Your Program" },
          { value: "CSE", text: "B.E. Computer Science and Engineering" },
          { value: "CSE-CS", text: "B.E. Computer Science and Engineering  Cyber Security" },
          { value: "CSE-AIML", text: "B.E. Computer Science and Engineering  Artificial Intelligence & Machine Learning" },
          { value: "ECE", text: "B.E. Electronics and Communication Engineering" },
          { value: "ECE-ACT", text: "B.E. Electronics and Communication  Advanced Communication Technology" },
          { value: "EEE-VLSI", text: "B.E. Electronics Engineering  VLSI Design & Technology" },
          { value: "BME", text: "B.E. Biomedical Engineering" },
          { value: "EEE", text: "B.E. Electrical and Electronics Engineering" },
          { value: "MCT", text: "B.E. Mechatronics" },
          { value: "MECH", text: "B.E. Mechanical Engineering" },
          { value: "CIVIL", text: "B.E. Civil Engineering" },
          { value: "IT", text: "B.Tech Information Technology" },
          { value: "AI-DS", text: "B.Tech. Artificial Intelligence & Data Science" },
          { value: "CSBS", text: "B.Tech. Computer Science & Business Systems" }
        ]
        }/>
          <SelectInput label={"Year"} 
          onChange={setYear}
          value={year}
          options={[{value: "",text:"Select your Year"},
            {value: "II",text:"II"},
            {value: "III",text:"III"},
            {value: "IV",text:"IV"}]} />
          <SelectInput label={"Section"} 
          value={section}
          onChange={setSection}
          options={[
          { value: "", text: "Select Your Section" },
          { value: "A", text: "A" },
          { value: "B", text: "B" },
          { value: "C", text: "C" },
          { value: "D", text: "D" },
          { value: "E", text: "E" },
          { value: "F", text: "F" },
          { value: "G", text: "G" },
          { value: "H", text: "H" },
          { value: "I", text: "I" },
          { value: "J", text: "J" },
          { value: "K", text: "K" },
          { value: "L", text: "L" },
          { value: "M", text: "M" },
          { value: "N", text: "N" },
          { value: "O", text: "O" },
          { value: "P", text: "P" },
          { value: "Q", text: "Q" }
]} />
            <p>{result}</p>
          <button
            type="submit"
            className="w-full py-3 bg-[#c2a476] text-[#2d1b0e] font-semibold rounded-lg hover:bg-[#a6825b] transition-colors"
          >
            Register Now
          </button>
        </form>
      </div>
    </main>
  );
}
export default EventRegistrationForm;
