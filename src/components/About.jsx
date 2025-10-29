// src/components/About.js
import React from "react";
import styles from "./About.module.css";
import aboutImage from "../assets/intro-bg.jpg"; // Make sure to add your image

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img
                src={aboutImage}
                alt="Eleni Tadese"
                className={styles.aboutImage}
              />
            </div>

            {/* Stats and Actions below the image */}
            <div className={styles.imageBottomContent}>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>4+</div>
                  <div className={styles.statLabel}>Projects Complete</div>
                </div>
              </div>

              <div className={styles.actions}>
                <a href="#projects" className={styles.primaryBtn}>
                  Discover My Work
                </a>
                <button className={styles.secondaryBtn}>Download CV</button>
              </div>
            </div>
          </div>

          <div className={styles.textSection}>
            <h2 className={styles.title}>About Me</h2>
            <h3 className={styles.subtitle}>
              Hello! <span className={styles.highlight}>I'm Eleni Tadese.</span>
            </h3>

            <div className={styles.description}>
              <p>
                I’m a 4th-year Computer Science and Engineering student at Adama
                Science and Technology University. I'm passionate about using
                technology to solve real-world problems and build meaningful
                digital experiences.
              </p>

              <p>
                Currently, I’m improving my skills in Python, HTML, CSS, and
                JavaScript while developing personal projects such as a GPA
                calculator platform and an initiative to empower students,
                especially young women, to explore the tech field.
              </p>

              <p>
                I'm committed to delivering projects with a focus on quality,
                creativity, and impact — always aiming to stay on schedule and
                within scope. My goal is to grow into a full-stack developer and
                contribute to building innovative solutions that serve my
                community and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
