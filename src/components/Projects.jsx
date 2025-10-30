import React, { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../Projects-data/projects";
import GitHubIcon from "@mui/icons-material/GitHub";

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [page, setPage] = useState(1);

  const visibleProjects = projects.slice(0, page * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const loadMore = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>

      {/* Projects Grid - Only contains actual projects */}
      <div className={styles.projectGrid}>
        {visibleProjects.map((p) => (
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

      {/* GitHub CTA Section - Outside the grid */}
      <div className={styles.githubCTASection}>
        <a
          href="https://github.com/Elenitadese"
          target="_blank"
          rel="noreferrer"
          className={styles.githubCTACard}
        >
          <GitHubIcon className={styles.githubIcon} />
          <div className={styles.githubContent}>
            <h3>Want to see more projects?</h3>
            <p>
              Explore all my work, contributions, and coding journey on GitHub
            </p>
            <span className={styles.ctaLabel}>Visit My GitHub →</span>
          </div>
        </a>
      </div>

      {/* Load More Button */}
      {page < totalPages && (
        <div className={styles.loadMoreContainer}>
          <button onClick={loadMore} className={styles.loadMoreBtn}>
            Load More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
