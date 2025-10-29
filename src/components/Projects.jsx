// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import { projects } from "../Projects-data/projects";

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((p) => (
          <div key={p.id} className={styles.card}>
            <img src={p.image} alt={p.title} className={styles.image} />
            <div className={styles.overlay}>
              <h3>{p.title}</h3>
              <p>{p.tech}</p>
              <div className={styles.buttons}>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.demoBtn}
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.githubBtn}
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
