// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header
      className={`${styles.outer_div} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.first_div}>
        {/* Logo - Now in one line */}
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

        {/* Right Section */}
        <div className={styles.header_right}>
          {/* Search */}
          <div
            className={`${styles.search_container} ${
              isSearchOpen ? styles.search_open : ""
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className={styles.search_input}
            />
          </div>

          <div className={styles.icon_links}>
            <button className={styles.icon_button} onClick={toggleSearch}>
              <SearchIcon />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className={styles.menu_toggle} onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${styles.mobile_nav} ${
          isMenuOpen ? styles.mobile_nav_open : ""
        }`}
      >
        <a href="#home" onClick={closeMenu}>
          <span className={styles.navText}>Home</span>
        </a>
        <a href="#about" onClick={closeMenu}>
          <span className={styles.navText}>About</span>
        </a>
        <a href="#skills" onClick={closeMenu}>
          <span className={styles.navText}>Skills</span>
        </a>
        <a href="#projects" onClick={closeMenu}>
          <span className={styles.navText}>Projects</span>
        </a>
        <a href="#contact" onClick={closeMenu}>
          <span className={styles.navText}>Contact</span>
        </a>

        <div className={styles.mobile_actions}>
          <button className={styles.mobile_icon_button}>
            <SearchIcon />
            <span>Search</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
