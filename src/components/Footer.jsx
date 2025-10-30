import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p className={styles.copyright}>
            © 2025 Eleni Tadese. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Building the future, one line of code at a time
          </p>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/Elenitadese"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <div className={styles.socialIcon}>
              <GitHubIcon />
            </div>
            <span>GitHub</span>
            <OpenInNewIcon className={styles.externalIcon} />
          </a>

          <a
            href="mailto:elenitade1221@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <div className={styles.socialIcon}>
              <EmailIcon />
            </div>
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/et0021/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <div className={styles.socialIcon}>
              <LinkedInIcon />
            </div>
            <span>LinkedIn</span>
            <OpenInNewIcon className={styles.externalIcon} />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Made with ❤️ using React</p>
      </div>
    </footer>
  );
}

export default Footer;
