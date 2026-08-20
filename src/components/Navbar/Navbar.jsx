import styles from "./Navbar.module.css";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const handleClick = () => {
    // סגירת התפריט בלחיצה (שימושי במובייל)
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={`${styles.navbarListContainer} ${menuOpen ? styles.open : ""}`}>
        <li><a href="#about" onClick={handleClick}>אודות</a></li>
        <li><a href="#experience" onClick={handleClick}>החוויה</a></li>
        <li><a href="#audience" onClick={handleClick}>קהל יעד</a></li>
        <li><a href="#contact" onClick={handleClick}>הרשמה</a></li>
      </ul>
    </nav>
  );
}