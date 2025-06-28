import ProjectsSection from "@/components/projects"
import Navbar from "@/components/Navbar"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ProjectsSection />
      </main>
    </div>
  )
} 