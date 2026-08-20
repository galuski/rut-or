import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>הרמוניה של הלב</h1>
        <h2 className={styles.subtitle}>Sound Healing – צלילים מרפאים</h2>
        <h3 className={styles.thirdtitle}>שעה של צלילים מרגיעים ומנוחה</h3>
        <a href="#contact" className="btn">שמרו לעצמכם מקום</a>
      </div>
    </section>
  );
}