import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiRender,
  SiVercel,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    category: "Programming Languages",
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-500/10 to-purple-600/10",
    borderGradient: "from-blue-500/30 to-purple-600/30",
    emoji: "💻",
    skills: [
      { name: "C", icon: <SiC />, color: "hover:text-blue-400" },
      { name: "C++", icon: <SiCplusplus />, color: "hover:text-blue-500" },
      { name: "Python", icon: <SiPython />, color: "hover:text-yellow-400" },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "hover:text-yellow-500",
      },
      { name: "Java", icon: <FaJava />, color: "hover:text-orange-500" },
    ],
  },
  {
    category: "Web Technologies",
    gradient: "from-green-500 to-cyan-600",
    bgGradient: "from-green-500/10 to-cyan-600/10",
    borderGradient: "from-green-500/30 to-cyan-600/30",
    emoji: "🌐",
    skills: [
      { name: "React", icon: <SiReact />, color: "hover:text-cyan-400" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-green-400" },
      { name: "Express.js", icon: <SiExpress />, color: "hover:text-gray-300" },
      { name: "Redux", icon: <SiRedux />, color: "hover:text-purple-400" },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "hover:text-teal-400",
      },
    ],
  },
  {
    category: "Databases",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/10 to-red-600/10",
    borderGradient: "from-orange-500/30 to-red-600/30",
    emoji: "🗄️",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "hover:text-blue-400" },
      { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-green-400" },
    ],
  },
  {
    category: "Web Hosting / Deployment",
    gradient: "from-pink-500 to-violet-600",
    bgGradient: "from-pink-500/10 to-violet-600/10",
    borderGradient: "from-pink-500/30 to-violet-600/30",
    emoji: "🚀",
    skills: [
      { name: "Render", icon: <SiRender />, color: "hover:text-purple-400" },
      { name: "Vercel", icon: <SiVercel />, color: "hover:text-white" },
    ],
  },
];

export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div>
        {/* Floating code symbols */}
        <div className="absolute top-20 left-10 text-purple-400/30 text-6xl animate-float font-mono">
          &lt;/&gt;
        </div>
        <div className="absolute top-1/3 right-20 text-cyan-400/30 text-4xl animate-float animation-delay-1000 font-mono">
          {}
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-pink-400/30 text-5xl animate-float animation-delay-2000 font-mono">
          ( )
        </div>
        <div className="absolute top-1/2 right-1/3 text-green-400/30 text-3xl animate-float animation-delay-3000 font-mono">
          []
        </div>

        {/* Large floating orbs */}
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Interactive mouse follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 192}px, ${
              mousePosition.y - 192
            }px)`,
            transition: "transform 0.4s ease-out",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-white font-mono flex flex-col items-center justify-center px-6 py-20">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl p-2 md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent relative mb-4">
            My Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-xl mt-6"
          >
            Technologies I work with
          </motion.p>
        </motion.div>

        {/* Enhanced Grid layout for categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-2 max-w-7xl w-full"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="group relative"
            >
              {/* Enhanced Category Card */}
              <div
                className={`bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm p-8 rounded-3xl border  shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20 relative overflow-hidden`}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg animate-bounce-slow`}
                    >
                      {category.emoji}
                    </div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.category}
                    </h2>
                  </div>
                </div>

                {/* Enhanced Skill badges */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -2, 2, 0],
                        y: -5,
                      }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredSkill(`${idx}-${i}`)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group/skill relative cursor-pointer"
                    >
                      <div
                        className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm text-white rounded-2xl shadow-lg border border-white/10 transition-all duration-300 hover:border-white/30 ${skill.color}`}
                      >
                        <span className="text-2xl transition-transform duration-300 group-hover/skill:scale-125 group-hover/skill:rotate-12">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-sm md:text-base">
                          {skill.name}
                        </span>

                        {/* Skill hover effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-20 rounded-2xl transition-opacity duration-300`}
                        ></div>

                        {/* Animated border */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-100 rounded-2xl p-[2px] transition-opacity duration-300`}
                        >
                          <div className="bg-slate-700 rounded-2xl w-full h-full"></div>
                        </div>
                      </div>

                      {/* Floating tooltip */}
                      {hoveredSkill === `${idx}-${i}` && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: -10, scale: 1 }}
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-xs shadow-lg border border-purple-500/30 whitespace-nowrap z-20"
                        >
                          {skill.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Category background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.bgGradient} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${category.bgGradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
            opacity: 0.6;
          }
        }

        @keyframes grid-flow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-grid-flow {
          animation: grid-flow 40s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }

        /* Custom hover effects */
        .group/skill:hover .group-hover\\/skill\\:scale-125 {
          transform: scale(1.25) rotate(12deg);
        }
      `}</style>
    </div>
  );
}
