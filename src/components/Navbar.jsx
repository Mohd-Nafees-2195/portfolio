import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile1 from '../assets/tag.jpeg'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10'>
            <nav className='max-w-6xl mx-auto px-5 h-16 flex justify-between items-center'>
                <img src={profile1} alt="Profile1"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full  border-3 border-slate-950"
                />
                <a href='#' className='text-xl text-left font-bold text-cyan-400'>Nafees.dev</a>
                

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