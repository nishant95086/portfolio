import React, { useState, useEffect } from "react";
import { TextEffect } from "../../components/motion-primitives/text-effect";
import { TextLoop } from "../../components/motion-primitives/text-loop";
import CustomNavLink from "../comps/CustomNavLink";
import { Link } from "react-scroll";
import CustomButton from "../comps/CustomButton";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import MorphingPhotoBox from "../comps/MorphingPhotoBox";
import ScrollIndicator from "../comps/ScrollIndicator";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skill" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="lg:py-60 font-mono flex flex-col justify-center items-center w-screen sm:h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div>
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-3/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Mouse follower gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 192}px, ${
              mousePosition.y - 192
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col mt-20 lg:flex-row items-center lg:items-start justify-center w-full lg:w-[90%] gap-10 px-4">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="px-2 pt-2 flex flex-col lg:text-2xl text-xl leading-tight text-gray-300 animate-fade-in-up">
            <TextEffect per="char" delay={0.5}>
              Hello, I'm
            </TextEffect>
          </div>

          <div className="px-2 pt-2 lg:text-5xl text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-500">
            <TextEffect per="char" delay={1.5}>
              Nishant Kumar
            </TextEffect>
          </div>

          <div className="px-2 pt-2 tracking-widest text-gray-300 lg:text-lg text-sm animate-fade-in-up animation-delay-1000">
            <div className="inline-block">
              I'm passionate about{" "}
              <TextLoop className="inline-block overflow-y-clip">
                <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent font-bold border-b-2 border-red-400">
                  frontend development
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold border-b-2 border-blue-400">
                  backend development
                </span>
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent font-bold border-b-2 border-green-400">
                  full stack development
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold border-b-2 border-yellow-400">
                  UI/UX design
                </span>
              </TextLoop>{" "}
              from India.
            </div>
          </div>

          <nav className="hidden lg:flex pt-4 gap-4 animate-fade-in-up animation-delay-1500">
            {navLinks.map(({ to, label }, index) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70}
                activeClass="text-purple-400 font-bold border-b-2 border-purple-400 px-2"
                className="cursor-pointer text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg relative group"
                style={{ animationDelay: `${1500 + index * 100}ms` }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex mt-5 gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-2000">
            <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-3">
              <CustomButton
                href="https://www.linkedin.com/in/nishant-kumar-05990624a/"
                icon={FaLinkedin}
                label="LinkedIn"
              />
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:-rotate-3">
              <CustomButton
                href="https://github.com/nishant95086/"
                icon={FaGithub}
                label="GitHub"
              />
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-3">
              <CustomButton
                href="https://codolio.com/profile/TZGtOMBe"
                imageSrc="https://i.ibb.co/Nn1ssp7d/idi-QOXRYwr-logos-removebg-preview.png"
                label="Codolio"
              />
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:-rotate-3">
              <CustomButton
                href="https://www.instagram.com/n.i.s.h.a.n.t.2/"
                icon={FaInstagram}
                label="Instagram"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-2500">
            {/* Enhanced Resume Button */}
            <a
              href="/Nishant_C.V.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="animate-spin-slow">✦</span>
                View Resume
                <span className="animate-spin-slow animation-delay-1000">
                  ✦
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        <div className="flex z-50 items-center justify-center animate-fade-in-right animation-delay-1000">
          <div className="relative">
            <MorphingPhotoBox photoUrl="https://i.ibb.co/KpQ9pn4L/img.jpg" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-20 space-y-1 justify-center animate-bounce-slow animation-delay-3000">
        <ScrollIndicator />
      </div>

      {/* Add custom animations to your CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes grid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-grid {
          animation: grid 20s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
