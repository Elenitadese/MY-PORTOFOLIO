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
      "I approach every challenge with imagination and originality, crafting solutions that stand out.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    title: "Innovation",
    description:
      "I continuously explore new technologies and methods to deliver cutting-edge solutions.",
  },
  {
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
    title: "Precision",
    description:
      "I prioritize attention to detail and clean, efficient, bug-free code in every project.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
    title: "Collaboration",
    description:
      "I work seamlessly with clients and teams to ensure projects exceed expectations.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: "Continuous Learning",
    description:
      "I constantly update my skills and knowledge to stay at the forefront of the tech industry.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
    title: "Passion",
    description:
      "I bring genuine enthusiasm and dedication to every project I undertake.",
  },
];

function Values() {
  return (
    <section id="values" className={styles.valuesSection}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>Core Values</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            These principles guide my approach to development and design,
            shaping every project I take on.
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
