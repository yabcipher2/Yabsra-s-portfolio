import { motion } from "framer-motion";
import { createElement } from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiNeo4J,
  SiAndroidstudio,
  SiGit,
} from "react-icons/si";

const techData = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Neo4j", icon: SiNeo4J },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "Git", icon: SiGit },
];

const skillGroups = [
  {
    label: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Responsive Web Design",
      "Component-Based Architecture",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "RESTful API Development",
      "Authentication & Authorization",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Neo4j (Graph Database)",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    label: "Mobile",
    items: ["Android Development", "Android Studio", "Room Database"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    label: "Languages",
    items: ["Amharic (Native)", "English (Professional)"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const skillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-wrapper">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Technical Stack
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {techData.map(({ name, icon }) => (
            <motion.div
              key={name}
              className="skill-card"
              variants={skillVariants}
              whileHover={{ scale: 1.06, y: -6 }}
            >
              {createElement(icon, {
                className: "skill-svg",
                "aria-hidden": true,
              })}
              <p className="skill-name">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skill-groups"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>{group.label}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
