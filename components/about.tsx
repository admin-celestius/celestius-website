import { motion } from 'framer-motion';
import { HandIcon, CombineIcon, InfoIcon, MilestoneIcon } from '@/components/ui/svgs'; // Adjust the import path as needed

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      className="min-h-screen flex items-center justify-center bg-background text-foreground py-12 md:py-24"
    >
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">About Club Celestius</h2>
          <p className="text-justify md:text-left max-w-lg mx-auto md:mx-0">
            Club Celestius is a student-run organization that aims to provide a platform for competitive programming and
            technology enthusiasts to develop their skills, collaborate on innovative projects, and connect with
            industry professionals.
          </p>
          <p className="text-justify md:text-left">
            Our mission is to create a vibrant community where members can explore new technologies, participate in
            coding challenges, and work on real-world industrial projects. We believe in the power of mentorship and
            strive to connect our members with experienced professionals who can guide them in their academic and
            professional journeys.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
          <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <HandIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold mt-2 text-center">Skill Development</h3>
            <p className="text-muted-foreground text-center mt-1">
              Enhance your programming skills through workshops, coding challenges, and hands-on projects.
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <CombineIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold mt-2 text-center">Collaboration</h3>
            <p className="text-muted-foreground text-center mt-1">
              Collaborate with fellow members on innovative projects and learn from each other's experiences.
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <InfoIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold mt-2 text-center">Innovation</h3>
            <p className="text-muted-foreground text-center mt-1">
              Explore new technologies and participate in coding competitions to showcase your innovative ideas.
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <MilestoneIcon className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold mt-2 text-center">Mentorship</h3>
            <p className="text-muted-foreground text-center mt-1">
              Benefit from the guidance and expertise of our senior members, alumni, and industry professionals.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;