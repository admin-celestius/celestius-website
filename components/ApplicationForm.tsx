// "use client";

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { X } from 'lucide-react';
// import { db } from '@/lib/firebase';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';
// import { CldUploadWidget } from "next-cloudinary";

// interface Team {
//   id: number;
//   name: string;
//   description: string;
// }

// interface ApplicationFormProps {
//   team: Team;
//   onClose: () => void;
// }

// const jobDescriptions: { [key: string]: string } = {
//   "Frontend Development": "As a Frontend Developer, you'll be responsible for creating engaging and responsive user interfaces. Please fill out the form below and mention in the comment box how you'd be a fit, what you're interested in doing, learning, and teaching. How would you contribute to the community? What technologies do you know?",
//   "Backend Development": "As a Backend Developer, you'll be working on server-side logic and database interactions. Please fill out the form below and describe your experience with backend technologies, what you hope to learn, and how you can contribute to our projects.",
//   "Artificial Intelligence": "For the AI team, we're looking for individuals passionate about machine learning and data science. Please fill out the form and explain your AI/ML experience, projects you've worked on, and areas you're excited to explore.",
//   "UI UX Designing": "As a UI/UX Designer, you'll be crafting intuitive and delightful user experiences. Please fill out the form and share your design philosophy, tools you're proficient with, and how you approach user-centered design.",
//   "Looking for Something Else": "If you're not seeing a tech stack you're skilled in, let us know below. Please fill out the form and provide relevant information on your expertise in your specific stack. We're always open to new skills and perspectives!"
// };

// export default function ApplicationForm({ team, onClose }: ApplicationFormProps) {

//   // useEffect(() => {
//   //   console.log("Cloud name:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
//   // }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     dept: '',
//     sec: '',
//     rollNo: '',
//     githubId: '',
//     comments: '',
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.phoneNumber.trim()) {
//       newErrors.phoneNumber = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       newErrors.phoneNumber = "Phone number must be 10 digits";
//     }
//     if (!formData.dept.trim()) newErrors.dept = "Department is required";
//     if (!formData.sec.trim()) newErrors.sec = "Section is required";
//     if (!formData.rollNo.trim()) newErrors.rollNo = "Roll number is required";
//     if (!formData.comments.trim()) newErrors.comments = "Comments are required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
  
  
//     if (validateForm()) {
//       try {
//         const collectionName = team.name.replace(/\s+/g, "_").toLowerCase();
//         const teamCollectionRef = collection(db, collectionName);
//         await addDoc(teamCollectionRef, {
//           ...formData,
//           teamId: team.id,
//           teamName: team.name,
//           submittedAt: Timestamp.now(),
//         });
  
//         setIsSubmitted(true);
//         setTimeout(() => {
//           onClose();
//         }, 3000);
//       } catch (err) {
//         console.error("Error adding document: ", err);
//         setErrors({ submit: "There was an error submitting your application. Please try again." });
//       }
//     }
//   };
  

//   const Confetti = () => {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
//         {[...Array(50)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="w-2 h-2 bg-primary rounded-full"
//             initial={{ opacity: 0, y: 0, x: 0 }}
//             animate={{
//               opacity: [1, 1, 0],
//               y: [0, -100 - Math.random() * 500],
//               x: [-50 + Math.random() * 100, -100 + Math.random() * 200]
//             }}
//             transition={{ duration: 2, ease: "easeOut", times: [0, 0.7, 1] }}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">
//           {team.name === "Looking for Something Else" ? "Looking for Something Else" : `Apply for ${team.name}`}
//         </h2>
//         <Button variant="ghost" size="icon" onClick={onClose}>
//           <X className="h-4 w-4" />
//           <span className="sr-only">Close</span>
//         </Button>
//       </div>
      
//       <p className="text-muted-foreground mb-4">{jobDescriptions[team.name]}</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="name">Name</Label>
//           <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
//           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//         </div>
//         <div>
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>
//         <div>
//           <Label htmlFor="phoneNumber">Phone Number</Label>
//           <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleInputChange} required />
//           {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
//         </div>
//         <div>
//           <Label htmlFor="dept">Department</Label>
//           <Input id="dept" name="dept" value={formData.dept} onChange={handleInputChange} required />
//           {errors.dept && <p className="text-red-500 text-sm mt-1">{errors.dept}</p>}
//         </div>
//         <div>
//           <Label htmlFor="sec">Section</Label>
//           <Input id="sec" name="sec" value={formData.sec} onChange={handleInputChange} required />
//           {errors.sec && <p className="text-red-500 text-sm mt-1">{errors.sec}</p>}
//         </div>
//         <div>
//           <Label htmlFor="rollNo">Roll Number</Label>
//           <Input id="rollNo" name="rollNo" value={formData.rollNo} onChange={handleInputChange} required />
//           {errors.rollNo && <p className="text-red-500 text-sm mt-1">{errors.rollNo}</p>}
//         </div>
//         <div>
//           <Label htmlFor="githubId">GitHub Profile URL (Optional)</Label>
//           <Input id="githubId" name="githubId" type="url" value={formData.githubId} onChange={handleInputChange} />
//         </div>
//       </div>
      
//       <div>
//         <Label htmlFor="resume">Resume (PDF only) <strong>Must Click Done after Uploading<sup style={{color: 'red'}}> *</sup></strong></Label>
//         <CldUploadWidget
//           uploadPreset="resumes"
//           onUpload={(result) => {
//             console.log("Upload result:", result);
//             const uploadedURL = typeof result.info === 'object' ? result.info.secure_url : '';
//             if (uploadedURL) {
//               setFormData((prev) => ({
//                 ...prev,
//                 resumeURL: uploadedURL,
//               }));
//               setErrors((prev) => ({ ...prev, resume: '' })); 
//             } else {
//               console.error("Upload failed: secure_url not found");
//             }
//           }}
//         >
//           {({ open }) => (
//             <Button type="button" onClick={() => open()} className="w-full">
//               Upload Resume
//             </Button>
//           )}
//         </CldUploadWidget>

//         {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
//       </div>

//       <div>
//         <Label htmlFor="comments">Comments</Label>
//         <Textarea id="comments" name="comments" value={formData.comments} onChange={handleInputChange}
//           placeholder="Tell us about your fit for this role, your interests, what you want to learn and teach, how you'd contribute to the community, and your relevant skills."
//           required />
//         {errors.comments && <p className="text-red-500 text-sm mt-1">{errors.comments}</p>}
//       </div>

//       <Button type="submit" className="w-full">Submit Application</Button>
      
//       <AnimatePresence>
//         {isSubmitted && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           >
//             <div className="bg-background p-8 rounded-lg text-center">
//               <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
//               <p>Thank you for applying. We'll be in touch soon.</p>
//               <Confetti />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </form>
//   );
// }
