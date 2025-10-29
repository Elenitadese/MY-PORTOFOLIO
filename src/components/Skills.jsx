// src/components/Skills.jsx
import React from "react";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Frontend Icons
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";

// Tools
import GitHubIcon from "@mui/icons-material/GitHub";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

// React Icons for technology logos
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiCplusplus,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";

import styles from "./Skills.module.css";

// Custom icon components using react-icons
const ReactLogo = () => <FaReact className={styles.reactIcon} />;
const NodejsLogo = () => <FaNodeJs className={styles.customIcon} />;
const ExpressLogo = () => <SiExpress className={styles.customIcon} />;
const MysqlLogo = () => <SiMysql className={styles.customIcon} />;
const PythonLogo = () => <FaPython className={styles.customIcon} />;
const CppLogo = () => <SiCplusplus className={styles.customIcon} />;
const GitLogo = () => <FaGitAlt className={styles.customIcon} />;
const LeetcodeLogo = () => <SiLeetcode className={styles.leetcodeIcon} />;
const CodeforcesLogo = () => <SiCodeforces className={styles.codeforcesIcon} />;

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

        {/* Skills Grid - 3 cards in one row */}
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
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

        {/* Tools & Platforms and Problem Solving in one row */}
        <div className={styles.bottomRow}>
          {/* Tools & Platforms Card */}
          <div className={styles.toolsCard}>
            <div className={styles.skillIcon}>
              <PsychologyIcon sx={{ fontSize: 40 }} />
            </div>
            <h3 className={styles.skillTitle}>Tools & Platforms</h3>
            <p className={styles.skillDescription}>
              Development tools and environments
            </p>
            <div className={styles.technologies}>
              <div className={styles.techItem}>
                <div className={styles.techIcon}>
                  <GitLogo />
                </div>
                <span className={styles.techName}>Git</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIcon}>
                  <GitHubIcon />
                </div>
                <span className={styles.techName}>GitHub</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIcon}>
                  <CodeIcon />
                </div>
                <span className={styles.techName}>VS Code</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIcon}>
                  <ChromeReaderModeIcon />
                </div>
                <span className={styles.techName}>Chrome Dev</span>
              </div>
            </div>
          </div>

          {/* Problem Solving Section */}
          <div className={styles.codingProfiles}>
            <div className={styles.profilesHeader}>
              <PsychologyIcon className={styles.profileIcon} />
              <h3 className={styles.profilesTitle}>Problem Solving</h3>
            </div>
            <p className={styles.profilesDescription}>
              I regularly practice algorithmic problem solving on these
              platforms
            </p>
            <div className={styles.profilesGrid}>
              <a
                href="https://leetcode.com/u/elenitadese/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
              >
                <div className={styles.profileCard}>
                  <div className={styles.platformIcon}>
                    <LeetcodeLogo />
                  </div>
                  <div className={styles.platformInfo}>
                    <h4>LeetCode</h4>
                    <p>Algorithm Challenges</p>
                  </div>
                  <OpenInNewIcon className={styles.externalIcon} />
                </div>
              </a>

              <a
                href="https://codeforces.com/profile/elenitadese"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
              >
                <div className={styles.profileCard}>
                  <div className={styles.platformIcon}>
                    <CodeforcesLogo />
                  </div>
                  <div className={styles.platformInfo}>
                    <h4>Codeforces</h4>
                    <p>Competitive Programming</p>
                  </div>
                  <OpenInNewIcon className={styles.externalIcon} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
