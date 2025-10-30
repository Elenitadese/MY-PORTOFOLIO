import React from "react";
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

// Skills data with links
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
      {
        icon: <LeetcodeLogo />,
        name: "LeetCode",
        link: "https://leetcode.com/u/elenitadese/",
        external: true,
      },
      {
        icon: <CodeforcesLogo />,
        name: "Codeforces",
        link: "https://codeforces.com/profile/elenitadese",
        external: true,
      },
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

function Skills() {
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

        {/* Show ALL skills without pagination */}
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${
                skill.title === "Problem Solving"
                  ? styles.problemSolvingCard
                  : ""
              }`}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillDescription}>{skill.description}</p>
              <div
                className={`${styles.technologies} ${
                  skill.technologies.length <= 2 ? styles.twoItems : ""
                }`}
              >
                {skill.technologies.map((tech, techIndex) => {
                  // If technology has a link, make it clickable
                  if (tech.link) {
                    return (
                      <a
                        key={techIndex}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.techItemLink}
                      >
                        <div className={styles.techItem}>
                          <div className={styles.techIcon}>{tech.icon}</div>
                          <span className={styles.techName}>{tech.name}</span>
                          {tech.external && (
                            <OpenInNewIcon
                              className={styles.externalLinkIcon}
                            />
                          )}
                        </div>
                      </a>
                    );
                  }

                  // Regular non-clickable tech item
                  return (
                    <div key={techIndex} className={styles.techItem}>
                      <div className={styles.techIcon}>{tech.icon}</div>
                      <span className={styles.techName}>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
