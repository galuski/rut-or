import styles from './Hero.module.css';

export default function Hero({ title, subtitle, thirdTitle, image }) {
  return (
    <section
      className={styles.heroSection}
      // אנחנו מעבירים את התמונה כמשתנה CSS בשם --hero-bg
      style={image ? { '--hero-bg': `url(${image})` } : {}}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title || 'הרמוניה של הלב'}</h1>
        <h2 className={styles.subtitle}>{subtitle || 'Sound Healing – צלילים מרפאים'}</h2>
        <h3 className={styles.thirdtitle}>{thirdTitle || 'שעה של צלילים מרגיעים ומנוחה'}</h3>
        <a href="#contact" className={styles.btn}>שמרו לעצמכם מקום</a>
      </div>
    </section>
  );
}