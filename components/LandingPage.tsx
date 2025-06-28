"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Element, Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import AboutSection from "./about";
import UpcomingEventsSection from "./Events";
import ContactSection from "./contactus";
import { GitHubIds } from "./Github";
import Navbar from "./Navbar";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground py-12 md:py-24"
      >
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Explore, Learn, and Innovate</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Club Celestius is a student-run organization dedicated to fostering a community of competitive programming and
            technology enthusiasts.
          </p>
          <Link href="https://cit-celestius.vercel.app/hiringpage" target="_blank">
            <Button variant="secondary" className="mt-4">
              Join Now
            </Button>
          </Link>
        </div>
      </motion.section>

      <Element name="about" className="bg-background">
        <AboutSection />
      </Element>

      <Element name="events" className="bg-muted">
        <UpcomingEventsSection />
      </Element>

      <Element name="contact" className="bg-background">
        <ContactSection />
      </Element>

      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  );
}
