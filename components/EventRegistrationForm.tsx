//To Register for the Tech Event
import React, { useState } from "react";
import validateRegistration from "@/hooks/EventHooks/validateRegistration";
import RegisterText from "./ui/registertextinput";
import SelectInput from "./ui/selectinput";
const  EventRegistrationForm=()=> {
  const [name,setName] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [college,setCollege] = useState<string>('');
  const [department,setDepartment] = useState<string>('');
  const [year,setYear] = useState<string>('');
  const [event,setEvent] = useState<string>('');
  const [result,setResult] = useState('');
  return (
    <main className="flex items-center justify-center min-h-[90vh] bg-[#d8bb96] px-4">
      <div className="w-full max-w-md bg-[#f2e6d8] rounded-xl p-6 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2d1b0e] mb-6">
          Register for ByteBlaze
        </h1>
        <form className="flex flex-col space-y-2" onSubmit={async(e)=>{
          setResult('');
          e.preventDefault();
          if(name && email && college && department && year && event){
          let result = await validateRegistration({name,email,college,department,year,event})
          if (result.success){
            setResult("Registration Successfull!")
            setName('');setEmail('');setCollege('');setDepartment('');setYear('');setEvent('');setEvent('');setYear('');

          }
          else{
            setResult("Error Registering Information.Please Try again");
          }
          }}}>
          
          <RegisterText label="Full Name" value={name } placeholder="Your Name" type="text" onChange={setName}/>
          <RegisterText label="Email Address" value={email as string} placeholder="Your Email" type="email" onChange={setEmail}/>
          <RegisterText label="College" value={college as string} placeholder="Your College Name" type="text" onChange={setCollege} />
          <RegisterText label="Department" value={department as string} placeholder="Your Department" type="text" onChange={setDepartment}/>
          <SelectInput label={"Year"} 
          onChange={setYear}
          value={year}
          options={[{value: "",text:"Select your Year"},
            {value: "II",text:"II"},
            {value: "III",text:"III"},
            {value: "IV",text:"IV"}]} />
          <SelectInput label={"Event"} 
          value={event}
          onChange={setEvent}
          options={[{value: "",text:"Select an Event"},
            {value: "techtrivia",text:"Tech Trivia"},
            {value: "aestheticarchitects",text:"Aesthetics Architects"}]} />
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
