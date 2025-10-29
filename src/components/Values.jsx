// src/components/Values.jsx
import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./Values.module.css";

const values = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
    title: "Creativity",
    description:
      "Innovating and thinking outside the box to solve problems and create value.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    title: "Innovation",
    description:
      "Always exploring new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
    title: "Precision",
    description:
      "Attention to detail and commitment to delivering high-quality, bug-free code.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
    title: "Collaboration",
    description:
      "Working effectively with teams and clients to achieve the best possible outcomes.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: "Continuous Learning",
    description:
      "Constantly updating skills and knowledge to stay ahead in the tech industry.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
    title: "Passion",
    description:
      "Genuine love for coding and creating solutions that make a difference.",
  },
];

function Values() {
  return (
    <section id="values" className={styles.valuesSection}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>My Values</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            These principles guide my work and approach to every project
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
