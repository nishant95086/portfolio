import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Zap, Shield } from "lucide-react";

const projects = [
  {
    title: "Aarsh Wedding Studio",
    subtitle: "Full-Stack Photography Portfolio",
    description:
      "A premium, full-stack wedding photography and videography portfolio website. Features a 3D WebGL circular image carousel, interactive Instagram-style stories, a secure folder-based media uploader, and dual-channel booking notifications.",
    github: "https://github.com/nishantkumar35/wedding-portfolio",
    demo: "https://www.aarshwadding.studio",
    image: "https://www.aarshwadding.studio/assets/hero.jpeg",
    technologies: ["Next.js", "MongoDB", "Redis", "Cloudinary", "Shadcn UI", "NextAuth", "Tailwind", "Zod"],
    color: "#2D3539",
    accent: "rgba(45,53,57,0.08)",
    accentBorder: "rgba(45,53,57,0.18)",
    metrics: [
      { icon: <Star size={13} />, text: "Image Management System" },
      { icon: <Zap size={13} />,  text: "Instagram Stories Engine" },
      { icon: <Shield size={13} />,text: "NextAuth + Redis Security" },
    ],
  },
  {
    title: "Social Microservices Hub",
    subtitle: "Scalable Social Media Platform",
    description:
      "A production-ready social media platform built with a distributed microservices architecture — secure auth, post management, real-time search, API Gateway, and RabbitMQ messaging.",
    github: "https://github.com/nishantkumar35/micro-service-social-media",
    demo: "#",
    image: "https://i.ibb.co/DPMLwvhs/Screenshot-2026-03-24-205138.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "Tailwind", "JWT", "Argon2", "Winston", "Helmet"],
    color: "#0EA5E9",
    accent: "rgba(14,165,233,0.08)",
    accentBorder: "rgba(14,165,233,0.18)",
    metrics: [
      { icon: <Star size={13} />,   text: "Microservices Architecture" },
      { icon: <Zap size={13} />,    text: "RabbitMQ Messaging" },
      { icon: <Shield size={13} />, text: "Rate Limiting + Helmet" },
    ],
  },
  {
    title: "DocMatch",
    subtitle: "AI Healthcare System",
    description:
      "An advanced healthcare platform leveraging AI to match patients with specialists based on symptoms, with Google Auth, multimedia uploads, and ML-powered recommendations.",
    github: "https://github.com/nishantkumar35/doctor_reviews_and_recommendations",
    demo: "https://doctor-reviews-and-recommendations.vercel.app/",
    image: "https://i.ibb.co/HTSPMVpJ/Screenshot-2026-03-15-222643.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Google Auth", "Transformers.js", "Cloudinary", "JWT"],
    color: "#7C3AED",
    accent: "rgba(124,58,237,0.08)",
    accentBorder: "rgba(124,58,237,0.18)",
    metrics: [
      { icon: <Star size={13} />,   text: "AI Symptom Matching" },
      { icon: <Zap size={13} />,    text: "Google OAuth" },
      { icon: <Shield size={13} />, text: "Cloudinary Storage" },
    ],
  },
  {
    title: "PiggyPal",
    subtitle: "Personal Finance Dashboard",
    description:
      "A modern personal finance management app that helps users track incomes, savings, expenses, wishes, loans, and tasks — all in one elegant dashboard.",
    github: "https://github.com/nishantkumar35/piggypal",
    demo: "https://piggypal-theta.vercel.app/",
    image: "https://i.ibb.co/hRrtrv3S/Screenshot-2026-03-15-222427.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Framer Motion", "JWT"],
    color: "#2563EB",
    accent: "rgba(37,99,235,0.08)",
    accentBorder: "rgba(37,99,235,0.18)",
    metrics: [
      { icon: <Star size={13} />, text: "Full CRUD Finance Tracker" },
      { icon: <Zap size={13} />,  text: "Real-time Dashboard" },
      { icon: <Shield size={13} />,text: "JWT Auth" },
    ],
  },
];



const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] } },
};

function BrowserMockup({ src, alt, color }) {
  return (
    <div className="browser-mockup">
      <div className="browser-bar">
        <div className="browser-dot" style={{ background: "#FF5F57" }} />
        <div className="browser-dot" style={{ background: "#FEBC2E" }} />
        <div className="browser-dot" style={{ background: "#28C840" }} />
        <div
          style={{
            flex: 1,
            marginLeft: 8,
            height: 20,
            background: "rgba(37,99,235,0.08)",
            borderRadius: 4,
            border: `1px solid ${color}22`,
          }}
        />
      </div>
      <div style={{ position: "relative", overflow: "hidden", height: 200 }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            display: "block",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 64,
            background: "linear-gradient(to top, rgba(255,255,255,0.9), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      aria-label="Projects section"
      style={{ padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 72 }}
      >
        <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>
          🚀 Featured Work
        </span>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>
          Featured <span>Projects</span>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          A selection of my recent work — production-quality, full-stack web applications
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 28,
        }}
      >
        {projects.map((project, idx) => (
          <motion.article
            key={idx}
            variants={cardVariant}
            onHoverStart={() => setHoveredIdx(idx)}
            onHoverEnd={() => setHoveredIdx(null)}
            style={{
              background: "rgba(255,255,255,0.82)",
              border: `1.5px solid ${hoveredIdx === idx ? project.accentBorder : "rgba(255,255,255,0.90)"}`,
              borderRadius: 20,
              boxShadow: hoveredIdx === idx
                ? `0 24px 64px ${project.color}20, 0 4px 20px ${project.color}14, inset 0 1px 0 rgba(255,255,255,0.9)`
                : "0 8px 32px rgba(37,99,235,0.09), inset 0 1px 0 rgba(255,255,255,0.9)",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              transform: hoveredIdx === idx ? "translateY(-8px)" : "translateY(0)",
              display: "flex",
              flexDirection: "column",
            }}
            aria-label={`${project.title} — ${project.subtitle}`}
          >
            {/* Browser mockup image */}
            <BrowserMockup src={project.image} alt={project.title} color={project.color} />

            {/* Content */}
            <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              {/* Title */}
              <div style={{ marginBottom: 14 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: project.color,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {project.subtitle}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#1E293B",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: "#64748B",
                  lineHeight: 1.7,
                  marginBottom: 16,
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Metrics */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  padding: "12px 14px",
                  background: project.accent,
                  borderRadius: 12,
                  border: `1px solid ${project.color}18`,
                  marginBottom: 16,
                }}
              >
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      fontSize: 12,
                      color: project.color,
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ opacity: 0.8 }}>{m.icon}</span>
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Tech badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {project.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "3px 10px",
                      borderRadius: 99,
                      fontSize: 11,
                      fontWeight: 600,
                      background: project.accent,
                      color: project.color,
                      border: `1px solid ${project.color}22`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: 99,
                      fontSize: 11,
                      fontWeight: 600,
                      background: "rgba(100,116,139,0.08)",
                      color: "#64748B",
                      border: "1px solid rgba(100,116,139,0.15)",
                    }}
                  >
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 10 }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 7,
                    padding: "10px 0",
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                    color: "white",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: `0 4px 14px ${project.color}30`,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 8px 22px ${project.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 4px 14px ${project.color}30`;
                  }}
                >
                  <Github size={14} />
                  Code
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      padding: "10px 0",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.80)",
                      color: project.color,
                      border: `1.5px solid ${project.color}28`,
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = project.accent;
                      e.currentTarget.style.borderColor = `${project.color}44`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.80)";
                      e.currentTarget.style.borderColor = `${project.color}28`;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
