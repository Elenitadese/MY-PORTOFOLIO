// src/components/About.js
import React from "react";
import styles from "./About.module.css";
import aboutImage from "../assets/intro-bg.jpg"; // Make sure the image exists

function About() {
  const localCV = "/Eleni_Tadese_CV.pdf"; // ✅ Put your CV in /public folder
  const driveCV =
    "https://drive.google.com/uc?export=download&id=1g2n-90tFUzJIY0OZJysaKrw1lpsCpy9w"; // ✅ Direct download link

  // Function to handle CV download with fallback
  const handleDownload = () => {
    fetch(localCV, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          // If file exists locally, trigger direct download
          const link = document.createElement("a");
          link.href = localCV;
          link.download = "Eleni_Tadese_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // If local file missing, open Google Drive fallback
          window.open(driveCV, "_blank");
        }
      })
      .catch(() => {
        // Network or file error -> fallback to Drive
        window.open(driveCV, "_blank");
      });
  };

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          {/* ==== IMAGE SECTION ==== */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img
                src={aboutImage}
                alt="Eleni Tadese portrait"
                className={styles.aboutImage}
              />
            </div>

            {/* ==== Stats + Actions ==== */}
            <div className={styles.imageBottomContent}>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>4+</div>
                  <div className={styles.statLabel}>Projects Completed</div>
                </div>
              </div>

              <div className={styles.actions}>
                <a href="#projects" className={styles.primaryBtn}>
                  Discover My Work
                </a>
                <button
                  onClick={handleDownload}
                  className={styles.secondaryBtn}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* ==== TEXT SECTION ==== */}
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
