import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const educationData = [
    {
      title: "High School",
      duration: "2020",
      institution: "Utkramit M.S. Babhangama, Bihar",
      icon: "🎓",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Intermediate",
      duration: "2021 - 2023",
      institution: "M.S. College Manjhaul, Bihar",
      icon: "📚",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "BACHELOR OF TECHNOLOGY: COMPUTER SCIENCE & ENGINEERING",
      duration: "2023 - 2027",
      institution: "Lovely Professional University, Punjab",
      icon: "💻",
      color: "from-green-400 to-emerald-500",
    },
  ];

  // Enhanced animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-float animation-delay-2000"></div>

        {/* Interactive mouse follower */}
        <div
          className="absolute w-80 h-80 bg-gradient-radial from-purple-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 160}px, ${
              mousePosition.y - 160
            }px)`,
            transition: "transform 0.5s ease-out",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-20 mb-16"
        >
          <h1 className="text-4xl p-2 md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent relative">
            ABOUT ME
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-[90%] lg:w-[85%] mx-auto font-mono gap-12">
          {/* Enhanced Left Section: About Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <motion.div
              variants={scaleIn}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl animate-bounce-slow">
                    👨‍💻
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    My Journey
                  </h2>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-6">
                {[
                  "I'm a Full-Stack Developer & UI/UX Designer specializing in the MERN stack, Tailwind CSS, and Figma. I love building modern, responsive, and user-friendly web applications — from designing intuitive interfaces to developing secure, scalable backend systems.",
                  "My focus is on crafting digital experiences that are functional, efficient, and visually engaging, while continuously learning and adapting to new technologies. Every project is an opportunity to push boundaries and create something amazing.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-gray-300 text-md lg:text-lg leading-relaxed hover:text-white transition-colors duration-300"
                  >
                    {text}
                  </motion.p>
                ))}

                {/* Skills Tags */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap gap-2 mt-6"
                >
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Tailwind",
                    "Figma",
                    "JavaScript",
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300 hover:border-purple-400 transition-colors duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Section: Education Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <motion.div
              variants={scaleIn}
              className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >
              <motion.div variants={fadeUp} className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
                    🎓
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Education Timeline
                  </h2>
                </div>
              </motion.div>

              <div className="relative">
                {/* Enhanced Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50"></div>

                <div className="space-y-8">
                  {educationData.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="relative group"
                    >
                      {/* Enhanced Timeline Dot */}
                      <div className="absolute left-5.5 top-2 w-6 h-6 bg-gradient-to-br from-white to-gray-200 border-4 border-transparent bg-clip-padding rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div
                          className={`absolute inset-1 bg-gradient-to-r ${item.color} rounded-full animate-pulse`}
                        ></div>
                      </div>

                      {/* Enhanced Content Card */}
                      <div className="ml-16 bg-gradient-to-r from-slate-700/30 to-slate-600/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group">
                        <div className="flex items-start gap-3">
                          <span
                            className="text-2xl animate-bounce-slow"
                            style={{ animationDelay: `${index * 0.5}s` }}
                          >
                            {item.icon}
                          </span>
                          <div className="flex-1">
                            <h3
                              className={`font-bold text-md lg:text-lg px-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                            >
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                              <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                                {item.duration}
                              </p>
                            </div>
                            <p className="italic text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                              {item.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes grid-slow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-grid-slow {
          animation: grid-slow 25s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }

        /* Hover effects for cards */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
