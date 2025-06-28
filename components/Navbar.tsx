'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Celestius</span>
      </Link>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-primary-foreground focus:outline-none">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <nav className="hidden md:flex items-center justify-center flex-1 gap-6">
        <Link href="/" className="hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="/projects" className="hover:underline underline-offset-4">
          Projects
        </Link>
      </nav>

      <div className="hidden md:block">
        <Link href="https://chat.whatsapp.com/GmdMBVnnppv1TuMTbGgAKo" target="_blank">
          <Button variant="secondary">Join Now</Button>
        </Link>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-primary text-primary-foreground py-4 px-6 absolute top-16 left-0 right-0 z-40">
          <ul className="flex flex-col gap-4">
            <Link href="/" className="hover:underline" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/projects" className="hover:underline" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="https://chat.whatsapp.com/GmdMBVnnppv1TuMTbGgAKo" target="_blank" onClick={toggleMenu}>
              Join Now
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
} 