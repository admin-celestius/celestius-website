'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BriefcaseIcon, CodeIcon, TrophyIcon } from '@/components/ui/svgs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/utils/projects';

const ProjectsSection = () => {
  // Filter projects by status
  const openProjects = projects.filter(project => 
    project.status === "Open" || project.status === "In Progress"
  );
  const completedProjects = projects.filter(project => 
    project.status === "Completed"
  );

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              {project.status === "In Progress" && <BriefcaseIcon className="w-5 h-5 mr-2 inline" />}
              {project.status === "Open" && <CodeIcon className="w-5 h-5 mr-2 inline" />}
              {project.status === "Completed" && <TrophyIcon className="w-5 h-5 mr-2 inline" />}
              <span>{project.status}</span>
            </div>
            <Link href={project.link} target="_blank">
              <Button variant="secondary" size="sm">
                {project.status === "Completed" ? "View" : "Contribute"}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
      className="bg-background text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6 space-y-12">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-begin text-center" data-aos="fade-up">
          Projects
        </h2> */}
        
        {/* Open Projects Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-begin" data-aos="fade-up">
            Open for Contribution
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {openProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Completed Projects Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-begin" data-aos="fade-up">
            Completed Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;