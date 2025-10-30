import React, { useState, useEffect } from "react";
import styles from "./CursorFollower.module.css";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    const touchDevice = checkTouchDevice();
    setIsTouchDevice(touchDevice);

    // Only enable cursor effects for non-touch devices
    if (touchDevice) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.style.cursor === "pointer"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't render cursor on touch devices
  if (!isVisible || isTouchDevice) {
    return null;
  }

  return (
    <>
      <div
        className={`${styles.cursor} ${isPointer ? styles.cursorHover : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`${styles.cursorDot} ${
          isPointer ? styles.cursorDotHover : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CursorFollower;
