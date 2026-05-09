import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import scaler from "../assets/scaler.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";




const Contact = () => {

    return (
        <section id='contact' className='py-24 bg-slate-900'>
            <div className='max-w-2xl mx-auto px-6'>
                <h2 className='text-4xl text-cyan-400 font-bold text-center'>Contact</h2>

                <div className='mt-10 space-y-4'>
                    <p className='text-slate-300 text-center'>I am currently open for new opportunities and collaborations. If you have any questions, project ideas, or just want to say hello, feel free to reach out to me using the contact below. I look forward to connecting with you!</p>
                    <div className='flex flex-col items-center gap-4 justify-center mt-6'>
                        <a href="mailto:mohdnafees3785@gmail.com" className='text-slate-200 hover:text-cyan-400 transition'>
                            mohdnafees3785@gmail.com
                        </a>
                        <a href="tel:+917408514306" className='text-slate-200 hover:text-cyan-400 transition'>
                            +91 74085 14306
                        </a>
                        <a href="tel:+916394755358" className='text-slate-200 hover:text-cyan-400 transition'>
                            +91 63947 55358
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-6 mt-10 justify-center">

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

            </div>
        </section>
    )
}
export default Contact
