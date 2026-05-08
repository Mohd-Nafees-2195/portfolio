import { useState } from 'react'
import scaler from "../assets/scaler.jpg";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile1 from '../assets/tag.jpeg'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10'>
            <nav className='max-w-6xl mx-auto px-5 h-16 flex justify-between items-center'>
                <img src={profile1} alt="Profile1"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-3 border-slate-950"
                />
                <a href='#' className='text-xl text-left font-bold text-cyan-400'>Nafees.dev</a>



                <div className="flex items-center gap-6">

                    <a
                        href="https://www.linkedin.com/in/nafees3785/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>

                    <a
                        href="https://github.com/Mohd-Nafees-2195"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition"
                    >
                        <FaGithub size={24} />
                    </a>

                    <a
                        href="https://leetcode.com/u/nafees2195/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-full justify-center border-white/10 hover:opacity-80 transition"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                            alt="LeetCode"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://www.hackerrank.com/profile/mohdnafees2195"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-white rounded-full border border-white/10 hover:opacity-80 transition"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
                            className="w-5 h-5"
                            alt="HackerRank"
                        />
                    </a>

    
                    <a
                        href="https://www.scaler.com/academy/profile/65b81e2e27d0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center rounded-full justify-center bg-white/25 rounded-full border border-white/10 hover:bg-white/40 hover:scale-110 transition"
                    >
                        <img
                            src={scaler}
                            className="w-5 h-5 object-contain"
                            alt="Scaler"
                        />
                    </a>

                </div>

                

                <ul className='hidden md:flex gap-8 text-slate-300'>
                    <li><a href='#about' className='hover:text-cyan-400'>About</a></li>
                    <li><a href='#experience' className='hover:text-cyan-400'>Experience</a></li>
                    <li><a href='#projects' className='hover:text-cyan-400'>Projects</a></li>
                    <li><a href='#skills' className='hover:text-cyan-400'>Skills</a></li>
                    <li><a href='#contact' className='hover:text-cyan-400'>Contact</a></li>
                </ul>

                <button onClick={() => setOpen(!open)} className='md:hidden text-white text-2xl'>☰</button>
            </nav>

            {open && (
                <div className='md:hidden px-5 pb-5 bg-slate-900 text-slate-300 space-y-3'>
                    <a href='#about' className='block'>About</a>
                    <a href='#experience' className='block'>Experience</a>
                    <a href='#projects' className='block'>Projects</a>
                    <a href='#skills' className='block'>Skills</a>
                    <a href='#contact' className='block'>Contact</a>
                </div>
            )}
        </header>
    )
}