import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const projectData = [
  {
    title: "Opposite Lab",
    subtitle: "Web & Mobile Collaboration Platform",
    type: "Personal Project",
    description:
      "A web and Android app that brings together people from different careers, matched by shared interests, so they can team up and solve problems together. A React web interface and an Android app run on the same backend through REST APIs, with user profiles, interest-based matching and secure login.",
    tech: ["React", "Android", "Node.js", "Express", "REST API", "Database"],
  },
  {
    title: "Mesra HMS",
    subtitle: "Hospital Management System",
    type: "Team Project",
    description:
      "A web-based system that helps a hospital manage patient records, appointments and staff in one place. I designed the database and wrote REST APIs with full create, read, update and delete operations, testing each endpoint in Postman.",
    tech: ["React", "Node.js", "Express", "REST API", "Database"],
  },
  {
    title: "Trust Graph",
    subtitle: "Fraud Detection System",
    type: "Team Project",
    description:
      "A fraud detection tool that represents users and their interactions as a trust graph to spot suspicious behavior. Accounts and relationships are stored in Neo4j, graph analysis scores trust and flags unusual connection patterns, and the results are exposed through REST APIs.",
    tech: ["Python", "Neo4j", "Graph Analysis", "REST API"],
  },
  {
    title: "Netflix Clone",
    subtitle: "Movie Streaming Web App",
    type: "Personal Project",
    description:
      "A Netflix-style web app where users can search for movies and shows and browse what is popular and trending. Movie data is pulled from an API into reusable React components, organized into browsable categories with a responsive layout for desktop and mobile.",
    tech: ["React", "JavaScript", "REST API", "CSS3"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-wrapper">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Things I've Built
        </motion.h2>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="project-card"
            >
              <div className="project-header">
                <FolderGit2 className="project-folder" size={30} />
                <span className="project-meta">{project.type}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
