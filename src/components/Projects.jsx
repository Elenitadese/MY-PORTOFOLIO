import React, { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../Projects-data/projects";
import GitHubIcon from "@mui/icons-material/GitHub";

const ITEMS_PER_PAGE = 5;

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>

      <div className={styles.projectGrid}>
        {currentProjects.map((p) => (
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

        {/* GitHub CTA Card */}
        {currentPage === totalPages && (
          <a
            href="https://github.com/Elenitadese"
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} ${styles.githubCTA}`}
          >
            <div className={styles.overlay}>
              <GitHubIcon className={styles.githubIcon} />
              <h3>See More Projects</h3>
              <p>Explore all my work on GitHub and follow my updates.</p>
              <span className={styles.ctaLabel}>Visit GitHub →</span>
            </div>
          </a>
        )}
      </div>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={styles.pageBtn}
          >
            Prev
          </button>
          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={styles.pageBtn}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
