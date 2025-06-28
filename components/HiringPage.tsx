// "use client"

// import { useEffect, useState } from 'react'
// import Link from "next/link"
// import { motion, AnimatePresence } from 'framer-motion'
// import ApplicationForm from './ApplicationForm'

// interface Team {
//   id: number;
//   name: string;
//   description: string;
// }

// const teams: Team[] = [
//   { id: 1, name: "Frontend Development", description: "Join our Frontend Development team to bring user interfaces to life! As a frontend developer, you'll be responsible for creating engaging and responsive web applications that provide a seamless user experience." },
//   { id: 2, name: "Backend Development", description: "Become a key player in our Backend Development team, where you'll design and implement the server-side logic and database interactions that power our applications." },
//   { id: 3, name: "Artificial Intelligence", description: "Dive into the exciting world of AI Development with our team! As an AI developer, you'll work on creating intelligent systems and algorithms that learn from data and make predictions or decisions." },
//   { id: 4, name: "UI/UX Designing", description: "Join our UI/UX Design team and help craft intuitive and delightful user experiences! As a UI/UX designer, you'll conduct user research, create wireframes, and design visually stunning interfaces that enhance usability and engagement." },
//   { id: 5, name: "Looking for Something Else", description: "If you have other skills or interests of domains that aren't visible, which could contribute to our club, we encourage you to apply! Your creativity and passion can help shape our community and make a difference." },
// ];

// export default function HiringPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3500);

//     return () => clearTimeout(timer);
//   }, []);

//   const openForm = (team: Team) => {
//     setSelectedTeam(team);
//   };

//   const closeForm = () => {
//     setSelectedTeam(null);
//   };

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
//         <Link href="/" className="flex items-center gap-2" prefetch={false}>
//           <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
//           <span className="text-xl font-bold">Celestius</span>
//         </Link>
//         <nav className="flex items-center gap-6">
//           <Link href="/" className="hover:underline underline-offset-4">Home</Link>
//         </nav>
//       </header>

//       <main className="flex-grow flex items-center justify-center p-4">
//         {isLoading ? (
//           <motion.div
//             className="flex flex-col justify-center items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="w-16 h-16 border-t-4 border-primary rounded-full mb-4"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             />
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-lg font-semibold text"
//             >
//               Irunga Bhaii ..
//             </motion.p>
//           </motion.div>
//         ) : (
//           <div className="w-full max-w-4xl">
//             <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">We're Recruiting!</h1>
//             <div className="space-y-6">
//               {teams.map((team) => (
//                 <div key={team.id} className="bg-card text-card-foreground shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
//                   <div className="mb-4 md:mb-0 md:mr-4">
//                     <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
//                     <p className="text-muted-foreground">{team.description}</p>
//                   </div>
//                   <button
//                     onClick={() => openForm(team)}
//                     className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
//                   >
//                     Apply Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </main>

//       <AnimatePresence>
//         {selectedTeam && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-background p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             >
//               <ApplicationForm team={selectedTeam} onClose={closeForm} />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
//         <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }

// "use client"

// import { useEffect, useState, useRef } from 'react'
// import Link from "next/link"
// import { motion, useMotionValue, useTransform } from 'framer-motion'
// import { Card, CardContent } from "@/components/ui/card"

// export default function HiringPage() {
//   const [isLoading, setIsLoading] = useState(true)
//   const constraintsRef = useRef(null)

//   const x = useMotionValue(0)
//   const y = useMotionValue(0)
//   const rotateX = useTransform(y, [-100, 100], [30, -30])
//   const rotateY = useTransform(x, [-100, 100], [-30, 30])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 2000) // Simulating a 2-second loading time

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       {/* Header */}
//       <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
//         <Link href="/" className="flex items-center gap-2" prefetch={false}>
//           <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
//           <span className="text-xl font-bold">Celestius</span>
//         </Link>
//         <nav className="flex items-center gap-6">
//           <Link href="/" className="hover:underline underline-offset-4">Home</Link>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center p-4" ref={constraintsRef}>
//         <motion.div
//           drag
//           dragConstraints={constraintsRef}
//           style={{
//             x,
//             y,
//             rotateX,
//             rotateY,
//             z: 100,
//           }}
//           className="w-full max-w-md mx-auto perspective-1000"
//         >
//           <Card className="w-full">
//             <CardContent className="p-6 text-center">
//               {isLoading ? (
//                 <motion.div
//                   className="flex justify-center items-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 >
//                   <motion.div
//                     className="w-16 h-16 border-t-4 border-primary rounded-full"
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                   />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <h1 className="text-3xl font-bold mb-4">Hiring Currently Closed</h1>
//                   <p className="text-muted-foreground mb-4">
//                     Thank you for your interest in joining Celestius. We are not accepting applications at this time. Please check back later for future opportunities. 
//                   </p>
//                   <p>
//                   (P.S.  Feel free to drag this box around)
//                   </p>
//                   <Link href="/" className="inline-block mt-6 font-bold text-primary-foreground hover:underline">
//                     Return to Home
//                   </Link>
//                 </motion.div>
//               )}
//             </CardContent>
//           </Card>
//         </motion.div>
//       </main>

//       <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
//         <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }

"use client"

import { useEffect, useState, useRef } from 'react'
import Link from "next/link"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

export default function HiringPage() {
  const [isLoading, setIsLoading] = useState(true)
  const constraintsRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // Loading duration in milliseconds (currently set to 3.5 seconds)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Celestius</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4" ref={constraintsRef}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100,
          }}
          className="w-full max-w-md mx-auto perspective-1000"
        >
          <Card className="w-full">
            <CardContent className="p-6 text-center">
              {isLoading ? (
                <motion.div
                  className="flex flex-col justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-16 h-16 border-t-4 border-primary rounded-full mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg font-semibold text-primary-foreground  "
                  >
                    Irunga Bhaii ..
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold mb-4">Hiring Currently Closed</h1>
                  <p className="text-muted-foreground mb-4">
                    Thank you for your interest in joining Celestius. We are not accepting applications at this time. Please check back later for future opportunities.
                  </p>
                  <p>
                    (P.S.  Feel free to drag this box around)
                  </p>
                  <Link href="/" className="inline-block mt-6 font-bold text-primary-foreground hover:underline">
                    Return to Home
                  </Link>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  )
}