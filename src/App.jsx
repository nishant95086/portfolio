import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Projects from "./pages/project";
import Skills from "./pages/Skill";
import Nav from "./pages/Nav";
import { Element } from "react-scroll";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Universal Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid"></div>
        
        {/* Mouse follower gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Nav />
        
        {/* Sections wrapped in <Element> for react-scroll spy */}
        <Element name="home" className="min-h-screen">
          <Home />
        </Element>
        
        <Element name="about" className="min-h-screen">
          <About />
        </Element>
        
        <Element name="skills" className="min-h-screen">
          <Skills />
        </Element>
        
        <Element name="projects" className="min-h-screen">
          <Projects />
        </Element>
        
        <Element name="contact" className="min-h-screen">
          <Contact />
        </Element>
      </div>

      {/* Background Animation Styles */}
      <style jsx>{`
        @keyframes grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .animate-grid {
          animation: grid 20s linear infinite;
        }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }

        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}

export default App;