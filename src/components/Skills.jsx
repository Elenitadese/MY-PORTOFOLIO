import React, { useState } from "react";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiCplusplus,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

import styles from "./Skills.module.css";

// Custom icon components
const ReactLogo = () => <FaReact className={styles.reactIcon} />;
const NodejsLogo = () => <FaNodeJs className={styles.customIcon} />;
const ExpressLogo = () => <SiExpress className={styles.customIcon} />;
const MysqlLogo = () => <SiMysql className={styles.customIcon} />;
const PythonLogo = () => <FaPython className={styles.customIcon} />;
const CppLogo = () => <SiCplusplus className={styles.customIcon} />;
const GitLogo = () => <FaGitAlt className={styles.customIcon} />;
const LeetcodeLogo = () => <SiLeetcode className={styles.leetcodeIcon} />;
const CodeforcesLogo = () => <SiCodeforces className={styles.codeforcesIcon} />;

// Sample skills/projects
const skills = [
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: "Frontend Development",
    description: "Building modern, responsive web applications",
    technologies: [
      { icon: <HtmlIcon />, name: "HTML5" },
      { icon: <CssIcon />, name: "CSS3" },
      { icon: <JavascriptIcon />, name: "JavaScript" },
      { icon: <ReactLogo />, name: "React" },
    ],
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: "Backend Development",
    description: "Server-side development and APIs",
    technologies: [
      { icon: <NodejsLogo />, name: "Node.js" },
      { icon: <ExpressLogo />, name: "Express" },
      { icon: <MysqlLogo />, name: "MySQL" },
      { icon: <StorageIcon />, name: "REST APIs" },
    ],
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: "Programming Languages",
    description: "Multiple programming languages",
    technologies: [
      { icon: <PythonLogo />, name: "Python" },
      { icon: <CppLogo />, name: "C++" },
      { icon: <JavascriptIcon />, name: "JavaScript" },
      { icon: <CodeIcon />, name: "Java" },
    ],
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: "Problem Solving",
    description: "Algorithms, competitive programming & challenges",
    technologies: [
      { icon: <LeetcodeLogo />, name: "LeetCode" },
      { icon: <CodeforcesLogo />, name: "Codeforces" },
    ],
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 40 }} />,
    title: "Version Control",
    description: "Managing projects with Git & GitHub",
    technologies: [
      { icon: <GitLogo />, name: "Git" },
      { icon: <GitHubIcon />, name: "GitHub" },
    ],
  },
];

const ITEMS_PER_PAGE = 5;

function Skills() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSkills = skills.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>Skills & Expertise</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            4th Year Computer Science & Engineering Undergraduate | Full-Stack
            Developer
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {currentSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillDescription}>{skill.description}</p>
              <div className={styles.technologies}>
                {skill.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className={styles.techItem}>
                    <div className={styles.techIcon}>{tech.icon}</div>
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Previous
          </button>
          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
