import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import profile1 from "../assets/tag.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between overflow-x-clip">
        
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <img
            src={profile1}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover"
          />

          <a
            href="#"
            className="text-lg sm:text-xl font-bold text-cyan-400"
          >
            Mohd Nafees
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7 text-slate-300 font-medium">
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-slate-900 border-t border-white/10">
          <div className="flex flex-col px-6 py-5 space-y-5 text-slate-300 font-medium">
            
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Experience
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}