import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      to: "home", 
      label: "Home", 
      icon: FaHome, 
      gradient: "from-purple-400 to-pink-500",
      hoverBg: "hover:bg-purple-500/20"
    },
    { 
      to: "about", 
      label: "About", 
      icon: FaUser, 
      gradient: "from-blue-400 to-cyan-500",
      hoverBg: "hover:bg-blue-500/20"
    },
    { 
      to: "skills", 
      label: "Skills", 
      icon: FaTools, 
      gradient: "from-green-400 to-emerald-500",
      hoverBg: "hover:bg-green-500/20"
    },
    { 
      to: "projects", 
      label: "Projects", 
      icon: FaProjectDiagram, 
      gradient: "from-orange-400 to-red-500",
      hoverBg: "hover:bg-orange-500/20"
    },
    { 
      to: "contact", 
      label: "Contact", 
      icon: FaEnvelope, 
      gradient: "from-pink-400 to-violet-500",
      hoverBg: "hover:bg-pink-500/20"
    },
  ];

  return (
    <>
      {/* Enhanced Mobile Menu Button */}
      <div className="fixed top-4 right-4 md:hidden flex justify-end z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`text-white text-3xl z-50 cursor-pointer backdrop-blur-md p-3 rounded-2xl border transition-all duration-300 hover:scale-110 ${
            scrolled 
              ? 'bg-slate-900/80 border-purple-500/30 shadow-lg shadow-purple-500/20' 
              : 'bg-slate-800/60 border-white/10'
          }`}
        >
          {!isOpen && <FiMenu className="drop-shadow-lg" />}
        </button>
      </div>

      {/* Enhanced Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Enhanced Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl border-r border-purple-500/20 shadow-2xl shadow-purple-500/10 z-40 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden overflow-hidden`}
      >
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl cursor-pointer p-2 rounded-xl hover:bg-white/10 transition-all duration-300 hover:rotate-90 hover:scale-110"
          >
            <FiX />
          </button>
        </div>

        {/* Logo/Brand area */}
        <div className="px-8 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Nishant Kumar
          </h2>
          <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-3 animate-pulse"></div>
        </div>

        {/* Enhanced Nav links */}
        <nav className="flex flex-col px-6 gap-2 text-white relative">
          {navLinks.map(({ to, label, icon: Icon, gradient, hoverBg }, index) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              onClick={() => setIsOpen(false)}
              onSetActive={() => setActiveSection(to)}
              activeClass="nav-active"
              className={`group relative flex items-center gap-4 cursor-pointer transition-all duration-300 p-4 rounded-2xl ${hoverBg} hover:scale-105 hover:translate-x-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Active indicator */}
              <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b ${gradient} rounded-full transition-all duration-300 group-hover:h-05`}></div>
              
              {/* Icon with gradient background */}
              <div className={`relative p-3 rounded-xl bg-gradient-to-r ${gradient} bg-opacity-20 group-hover:scale-110 transition-all duration-300`}>
                <Icon className="text-lg relative z-10" />
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}></div>
              </div>
              
              {/* Label */}
              <span className="font-medium group-hover:text-white transition-colors duration-300 relative">
                {label}
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:w-full`}></div>
              </span>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </Link>
          ))}
        </nav>

        

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none"></div>
      </div>

      {/* Desktop Navigation (Optional Enhancement) */}
      <div className={`hidden lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        scrolled ? 'translate-y-0' : 'translate-y-2'
      }`}>
        <div className={`bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl px-2 py-2 shadow-2xl shadow-purple-500/10 transition-all duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}>
          <nav className="flex gap-2">
            {navLinks.map(({ to, label, icon: Icon, gradient, hoverBg }, index) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70}
                onSetActive={() => setActiveSection(to)}
                activeClass="desktop-nav-active"
                className={`group relative flex items-center gap-3 cursor-pointer transition-all duration-300 px-4 py-3 rounded-xl ${hoverBg} hover:scale-105`}
              >
                <Icon className="text-lg" />
                <span className="font-medium text-sm whitespace-nowrap">{label}</span>
                
                {/* Active indicator */}
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:h-0.5 group-hover:w-4/5`}></div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .nav-active {
          background: rgba(168, 85, 247, 0.1);
          color: white;
          transform: translateX(8px) scale(1.02);
        }

        .nav-active .absolute.left-0 {
          height: 2rem;
        }

        .desktop-nav-active {
          background: rgba(168, 85, 247, 0.15);
          color: white;
          transform: scale(1.05);
        }

        .desktop-nav-active .absolute.bottom-1 {
          width: 80%;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .group {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .group:nth-child(1) { animation-delay: 0.1s; }
        .group:nth-child(2) { animation-delay: 0.2s; }
        .group:nth-child(3) { animation-delay: 0.3s; }
        .group:nth-child(4) { animation-delay: 0.4s; }
        .group:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </>
  );
}