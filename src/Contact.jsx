import { motion } from "framer-motion";
import { Mail, FileText, MapPin } from "lucide-react";

const CV_URL = "/Yabsra_Melaku_CV_ATS.pdf";

const Contact = () => {
  return (
    <section id="contact" className="contact-wrapper">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="contact-mono">05. What's Next?</p>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
          I'm a software engineering graduate looking for a software developer
          role where I can contribute to a team and keep learning. Whether you
          have a question about my projects or want to talk about React,
          Node.js or Python work, my inbox is always open.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:yabmelaku3@gmail.com"
            className="contact-btn email-btn"
          >
            <Mail size={20} /> Say Hello
          </a>

          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn cv-btn"
          >
            <FileText size={20} /> Download CV
          </a>
        </div>

        <p className="contact-location">
          <MapPin size={16} /> Debre Markos, Ethiopia
        </p>

        <footer className="footer-text">
          Designed &amp; Built by Yabsra Melaku
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;
