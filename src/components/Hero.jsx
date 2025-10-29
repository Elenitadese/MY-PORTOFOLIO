// src/components/Hero.js
import React from "react";
import styles from "./Hero.module.css";
// import profileImage from "../assets/sk.png";
// import profileImage from "../assets/p1.jpg";
import profileImage from "../assets/p3.jpg";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.greeting}>Hello, I'm</h1>
            <h2 className={styles.name}>
              <span className={styles.highlight}>Eleni Tadese</span>
            </h2>
            <h3 className={styles.title}>Junior MERN stack developer</h3>

            <div className={styles.ctaButtons}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Work
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                Contact Me
              </a>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.profileImage}>
              <div className={styles.imageContainer}>
                <img
                  src={profileImage}
                  alt="Eleni Tadese"
                  className={styles.profileImg}
                />
                <div className={styles.imageOverlay}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;