import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "Lebawinet Trading",
    period: "March – June 2025",
    tech: ["React", "Node.js", "Express", "Git"],
    icon: <Briefcase size={18} />,
    points: [
      "Worked in a team of developers to build an internal project management system for a company that had no tool for organizing project work.",
      "The system lets managers create projects, break them into tasks and assign those tasks to interns and employees, then follow each task's progress and leave comments and feedback.",
      "The system is in real use at the company, saving time and cost and giving management a clearer view of project progress.",
    ],
  },
  {
    role: "BSc in Software Engineering",
    company: "University of Debre Markos",
    period: "September 2022 – June 2026",
    tech: ["Software Engineering"],
    icon: <GraduationCap size={18} />,
    points: [
      "Bachelor of Science in Software Engineering, Debre Markos, Ethiopia.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-wrapper">
      <div className="experience-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Where I've Worked
        </motion.h2>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.article
              key={item.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="job-header">
                <h3 className="job-role">
                  {item.role}{" "}
                  <span className="job-company">@ {item.company}</span>
                </h3>
                <span className="job-meta">{item.period}</span>
              </div>

              <div className="job-tech">
                {item.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="job-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
