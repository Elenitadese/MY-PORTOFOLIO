// src/components/Testimonials.jsx
import React from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    text: "Nahom is a dedicated and creative problem solver. His passion for technology and helping others is inspiring.",
    author: "Mentor, ASTU",
    role: "University Mentor",
  },
  {
    id: 2,
    text: "His projects demonstrate exceptional skill and attention to detail. Highly recommended for any development work!",
    author: "Client",
    role: "Project Client",
  },
  {
    id: 3,
    text: "Nahom's commitment to quality and continuous learning makes him a valuable team member on any project.",
    author: "Colleague",
    role: "Team Member",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>Testimonials</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            What people say about working with me
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{testimonial.author}</h4>
                <p className={styles.authorRole}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
