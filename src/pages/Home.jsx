import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

const Home=()=>{
    return (
        <>
          <div className="w-full overflow-x-hidden">
            <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects /> 
          <Skills />
          <Contact />
          <Footer />
          </div>
        </>
    );
}
export default Home;