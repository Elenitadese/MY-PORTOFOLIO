// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <header
      className={`${styles.outer_div} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.first_div}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <span className={styles.logoText}>
            <span className={styles.logoFirst}>Eleni </span>
            <span className={styles.logoLast}>Tadese</span>
          </span>
          <div className={styles.logoUnderline}></div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav_links}>
          <a href="#home">
            <span className={styles.navText}>Home</span>
          </a>
          <a href="#about">
            <span className={styles.navText}>About</span>
          </a>
          <a href="#skills">
            <span className={styles.navText}>Skills</span>
          </a>
          <a href="#projects">
            <span className={styles.navText}>Projects</span>
          </a>
          <a href="#contact">
            <span className={styles.navText}>Contact</span>
          </a>
        </nav>

        {/* Right Section - Simplified */}
        <div className={styles.header_right}>
          {/* Contact CTA - Professional alternative */}
          <a href="#contact" className={styles.cta_button}>
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <button className={styles.menu_toggle} onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className={styles.mobile_overlay} onClick={handleOverlayClick}>
          <nav
            className={`${styles.mobile_nav} ${
              isMenuOpen ? styles.mobile_nav_open : ""
            }`}
          >
            {/* Close Button */}
            <div className={styles.mobile_header}>
              <button className={styles.mobile_close} onClick={closeMenu}>
                <CloseIcon />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={styles.mobile_links}>
              <a
                href="#home"
                onClick={closeMenu}
                className={styles.mobile_link}
              >
                <span className={styles.navText}>Home</span>
                <div className={styles.link_underline}></div>
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className={styles.mobile_link}
              >
                <span className={styles.navText}>About</span>
                <div className={styles.link_underline}></div>
              </a>
              <a
                href="#skills"
                onClick={closeMenu}
                className={styles.mobile_link}
              >
                <span className={styles.navText}>Skills</span>
                <div className={styles.link_underline}></div>
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className={styles.mobile_link}
              >
                <span className={styles.navText}>Projects</span>
                <div className={styles.link_underline}></div>
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className={styles.mobile_link}
              >
                <span className={styles.navText}>Contact</span>
                <div className={styles.link_underline}></div>
              </a>
            </div>

            {/* Mobile CTA */}
            <div className={styles.mobile_actions}>
              <a
                href="#contact"
                className={styles.mobile_cta}
                onClick={closeMenu}
              >
                Start a Conversation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
