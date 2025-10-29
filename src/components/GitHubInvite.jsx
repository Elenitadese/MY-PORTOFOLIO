// src/components/GitHubInvite.jsx
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import styles from "./GitHubInvite.module.css";

function GitHubInvite() {
  return (
    <section className={styles.githubInvite}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <GitHubIcon className={styles.githubIcon} />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Want to See More?</h2>
            <p className={styles.description}>
              Explore my GitHub repository for additional projects, experiments,
              and works in progress. I'm constantly learning and building new
              things!
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Repositories</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>In Progress</span>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/Elenitadese"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Visit My GitHub
            <ArrowOutwardIcon className={styles.arrowIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default GitHubInvite;
