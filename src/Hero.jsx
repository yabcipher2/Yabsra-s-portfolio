import { motion } from "framer-motion";
import { GitBranch as FaGithub, Users as FaLinkedin, Mail, MapPin } from "lucide-react";
import profileImg from "./assets/profile.png";

const Hero = () => {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-container hero-flex">
        {/* Left Side: Text Content */}
        <div className="hero-text-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-mono-text"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-main-title"
          >
            Yabsra Melaku.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="hero-sub-title"
          >
            I build full-stack web applications.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hero-bio"
          >
            Software engineering graduate with hands-on experience building
            full-stack web apps through a company internship and team projects.
            I work mainly with React, Node.js, Express and Python, and I enjoy
            turning real problems into working software.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="hero-location"
          >
            <MapPin size={16} /> Debre Markos, Ethiopia · Open to opportunities
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hero-actions"
          >
            <a href="#projects" className="hero-work-btn">
              Check out my work <span aria-hidden="true">→</span>
            </a>

            <div className="hero-socials">
              <a
                href="https://github.com/yabcipher22"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yab-melaku-aa6077360/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:yabmelaku3@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hero-image-container"
        >
          <div className="image-float">
            <div className="image-border">
              <img
                src={profileImg}
                alt="Yabsra Melaku"
                className="profile-image"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#skills" className="hero-scroll-hint" aria-label="Scroll to skills">
        <span>scroll</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
};

export default Hero;
