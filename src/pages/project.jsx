import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Eye, Code, Zap } from "lucide-react";

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const projects = [
    {
      title: "Event Photography & Videography Website",
      description:
        "Aarsh Wedding Videography is a professional event photography and videography website I developed for a small business. It showcases services, a dynamic portfolio gallery, and a client-friendly contact section. Built with the MERN stack, Tailwind CSS, and Cloudinary, the site delivers an elegant, responsive, and user-focused design tailored for weddings and special events.",
      image: "https://i.ibb.co/XrPG9mKK/Screenshot-2025-08-16-231710.png",
      github: "https://github.com/nishant95086/Aarsh_wedding_videography",
      demo: "https://aarsh-wedding-videography.vercel.app",
      category: "Full-Stack Web App",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Cloudinary"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      featured: true,
    },
    {
      title: "PiggyPal - Personal Finance Dashboard",
      description:
        "PiggyPal is a modern personal finance management web app I built to help users track incomes, savings, expenses, wishes, loans (Udhar), and tasks (ToDos). It features authentication (signup, login, password change), CRUD operations for financial records, and a clean responsive UI. Built with the MERN stack, Tailwind CSS, and Framer Motion, PiggyPal provides an intuitive and interactive way to manage money effectively.",
      image: "https://i.ibb.co/7tpXwXCC/Screenshot-2025-09-26-112136.png",
      github: "https://github.com/nishant95086/piggypal",
      demo: "https://piggypal-theta.vercel.app/",
      category: "Full-Stack Web App",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Framer Motion",
      ],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10",
      featured: true,
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div>
        {/* Floating project icons */}
        <div className="absolute top-20 left-10 text-purple-400/20 text-4xl animate-float">
          <Code />
        </div>
        <div className="absolute top-1/3 right-20 text-cyan-400/20 text-5xl animate-float animation-delay-1000">
          <Zap />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-pink-400/20 text-3xl animate-float animation-delay-2000">
          <Star />
        </div>
        <div className="absolute top-1/2 right-1/3 text-green-400/20 text-4xl animate-float animation-delay-3000">
          <Eye />
        </div>

        {/* Large floating orbs */}
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Interactive mouse follower */}
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-radial from-purple-500/12 via-blue-500/6 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 250}px, ${
              mousePosition.y - 250
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      <div className="relative z-10 font-mono text-white px-6 py-20">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl p-2 md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent relative mb-6">
            My Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-xl mt-6"
          >
            Crafting digital experiences with passion and precision
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Project Card */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-3xl border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 z-20">
                    <div
                      className={`bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-full text-white text-[10px] lg:text-sm font-semibold flex items-center gap-2 animate-pulse`}
                    >
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-6 z-20">
                  <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-300 text-[10px] lg:text-sm font-medium border border-cyan-500/30">
                    {project.category}
                  </div>
                </div>

                <div
                  className={`flex flex-col lg:flex-row items-center gap-0 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Enhanced Image Section */}
                  <motion.div
                    variants={imageVariants}
                    className="w-full lg:w-1/2 relative group/image lg:ml-5"
                  >
                    <div className="relative overflow-hidden rounded-2xl  p-5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 lg:h-96 object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
                      />

                      {/* Image overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      {/* Hover overlay with quick actions */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover/image:bg-slate-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                        <div className="flex gap-4">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                          >
                            <Eye className="w-6 h-6" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-6 h-6" />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.bgGradient} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                    ></div>
                  </motion.div>

                  {/* Enhanced Content Section */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h2
                        className={`text-2xl lg:text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-6 leading-tight`}
                      >
                        {project.title}
                      </h2>

                      <p className="text-gray-300 mb-8 leading-relaxed text-md lg:text-lg">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-3 py-1 bg-slate-700/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-4">
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 text-[10px] bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 group/btn`}
                        >
                          <Github className="w-5 h-5  transition-transform group-hover/btn:rotate-12" />
                          View Code
                        </motion.a>

                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 bg-transparent border-2 border-gradient-to-r ${project.gradient
                            .replace("from-", "border-")
                            .replace(
                              "to-",
                              "border-"
                            )} text-white px-6 py-3 rounded-2xl text-[10px] font-semibold transition-all duration-300 hover:bg-gradient-to-r ${
                            project.gradient
                          } group/btn border-purple-400 hover:border-transparent`}
                        >
                          <ExternalLink className="w-5 h-5  transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                          Live Demo
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Card background decorations */}
                <div
                  className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${project.bgGradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-bl ${project.bgGradient} rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
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
            opacity: 0.2;
          }
          50% {
            transform: translateY(-40px) rotate(15deg);
            opacity: 0.4;
          }
        }

        @keyframes mesh-flow {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(120px, 120px) rotate(1deg);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-mesh-flow {
          animation: mesh-flow 50s linear infinite;
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

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        .group/btn:hover .group-hover\\/btn\\:rotate-12 {
          transform: rotate(12deg);
        }

        .group/btn:hover .group-hover\\/btn\\:translate-x-1 {
          transform: translateX(4px) translateY(-4px);
        }
      `}</style>
    </div>
  );
}
