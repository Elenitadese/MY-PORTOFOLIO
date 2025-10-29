// src/components/Process.jsx
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import BugReportIcon from "@mui/icons-material/BugReport";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SupportIcon from "@mui/icons-material/Support";
import styles from "./Process.module.css";

const processSteps = [
  {
    icon: <SearchIcon sx={{ fontSize: 30 }} />,
    title: "Research & Planning",
    description:
      "Understanding the problem, gathering requirements, and planning the best approach.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 30 }} />,
    title: "Design & Prototyping",
    description:
      "Creating wireframes, mockups, and prototypes to visualize solutions.",
  },
  {
    icon: <DeveloperModeIcon sx={{ fontSize: 30 }} />,
    title: "Development",
    description:
      "Building and testing the solution using modern technologies and best practices.",
  },
  {
    icon: <BugReportIcon sx={{ fontSize: 30 }} />,
    title: "Testing & Quality",
    description:
      "Rigorous testing to ensure the solution works perfectly across all scenarios.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 30 }} />,
    title: "Deployment",
    description:
      "Launching the project and ensuring everything runs smoothly in production.",
  },
  {
    icon: <SupportIcon sx={{ fontSize: 30 }} />,
    title: "Support & Maintenance",
    description:
      "Providing ongoing support and updates to keep the project running optimally.",
  },
];

function Process() {
  return (
    <section id="process" className={styles.processSection}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>My Process</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            A structured approach to delivering high-quality solutions
          </p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.processCard}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
