import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Fixed handleSubmit (EmailJS working)
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });

          // Clear success message after 3s
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");

          // Clear error message after 3s
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  // Animations
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
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email",
      value: "nk0090807@gmail.com",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "hover:from-purple-500/30 hover:to-pink-500/30",
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9508619804",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "hover:from-blue-500/30 hover:to-cyan-500/30",
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Location",
      value: "Begusarai, Bihar, India",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "hover:from-green-500/30 hover:to-emerald-500/30",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div>
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float animation-delay-1000 opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float animation-delay-2000 opacity-60"></div>

        <div className="absolute top-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        {/* Mouse follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 192}px, ${
              mousePosition.y - 192
            }px)`,
            transition: "transform 0.6s ease-out",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pt-20 mb-16"
        >
          <h1 className="text-4xl p-2 md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent relative">
            Get in Touch
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 mt-4 text-lg"
          >
            Let's create something amazing together
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-[90%] lg:w-[85%] mx-auto font-mono gap-8">
          {/* Left Form */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <motion.div variants={fadeUp} className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl animate-bounce-slow">
                    💬
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Send Me a Message
                  </h2>
                </div>
              </motion.div>

              <motion.form
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {[
                  { field: "name", placeholder: "Your name", icon: "👤" },
                  { field: "email", placeholder: "Enter your email", icon: "📧" },
                  { field: "subject", placeholder: "What is this regarding?", icon: "📝" },
                ].map(({ field, placeholder, icon }) => (
                  <motion.div
                    key={field}
                    variants={fadeUp}
                    className="relative group"
                  >
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg z-10">
                      {icon}
                    </div>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-4 bg-slate-700/50 border rounded-2xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                        focusedField === field
                          ? "border-purple-400 shadow-lg shadow-purple-500/20 bg-slate-700/70"
                          : "border-slate-600 hover:border-slate-500"
                      }`}
                      placeholder={placeholder}
                    />
                  </motion.div>
                ))}

                {/* Message textarea */}
                <motion.div variants={fadeUp} className="relative group">
                  <div className="absolute left-3 top-4 text-lg z-10">💭</div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows="5"
                    required
                    className={`w-full pl-12 pr-4 py-4 bg-slate-700/50 border rounded-2xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-sm resize-none ${
                      focusedField === "message"
                        ? "border-purple-400 shadow-lg shadow-purple-500/20 bg-slate-700/70"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>

                {/* Status */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-300"
                  >
                    ✅ Your message has been sent successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-red-500/20 border border-red-400/30 rounded-2xl text-red-300"
                  >
                    ❌ Something went wrong. Please try again.
                  </motion.div>
                )}
              </motion.form>
            </div>
          </motion.div>

          {/* Right Info */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <motion.div variants={fadeUp} className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
                    📞
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                className="space-y-6"
              >
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    variants={fadeUp}
                    className={`flex items-center gap-4 p-6 bg-gradient-to-r ${info.bgGradient} backdrop-blur-sm rounded-2xl border border-white/10 ${info.hoverGradient} transition-all duration-300 hover:scale-105 group cursor-pointer`}
                  >
                    <div
                      className={`p-4 bg-gradient-to-r ${info.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 pr-2">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <motion.footer
                variants={fadeUp}
                className="text-center mt-12 p-6 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-2xl border border-white/10"
              >
                <p className="text-gray-300">
                  © {new Date().getFullYear()} — Made with
                  <span className="text-red-500 mx-2 animate-pulse text-xl">
                    ❤️
                  </span>
                  by{" "}
                  <a
                    href="https://www.instagram.com/n.i.s.h.a.n.t.2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                  >
                    Nishant
                  </a>
                </p>
              </motion.footer>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Extra Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
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
        textarea::-webkit-scrollbar {
          width: 6px;
        }
        textarea::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
