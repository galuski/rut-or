"use client";

import { useState } from "react";
import styles from "./HamburgerButton.module.css";

// מחקנו את ה-interface של TypeScript
// ושינינו מ-export default ל-export רגיל
export function HamburgerButton({ onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <label className={styles.hamburger}>
      <input
        type="checkbox"
        checked={isOpen}
        onChange={handleChange}
        className={styles.input}
      />
      <svg viewBox="0 0 32 32" className={styles.svg}>
        <path
          className={`${styles.line} ${styles.lineTopBottom}`}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 
             9 3.5 10.8 2 13 2 
             15.2 2 17 3.8 17 6 
             L17 26C17 28.2 18.8 30 21 30 
             23.2 30 25 28.2 25 26 
             25 23.8 23.2 22 21 22 
             L7 22"
        ></path>
        <path className={styles.line} d="M7 16 27 16"></path>
      </svg>
    </label>
  );
}