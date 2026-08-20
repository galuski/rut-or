import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>מוכנים להתחיל?</h2>
          <p className={styles.subtitle}>
            יש לכם פרויקט, רעיון, או שאלה?
            <br />
            השאירו פרטים ואחזור אליכם תוך 24 שעות. בלי התחייבות.
          </p>
        </div>

        {/* החלף את ה-YOUR_ACCESS_KEY_HERE במפתח שתקבל מ-Web3Forms */}
        <form action="https://api.web3forms.com/submit" method="POST" className={styles.form}>
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">שם מלא</label>
              <input type="text" id="name" name="name" placeholder="ישראל ישראלי" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">טלפון</label>
              <input type="tel" id="phone" name="phone" placeholder="050-7552588" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">מה על הפרק?</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <div className={styles.formFooter}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="terms" required />
              <span>בלחיצת שלח אתם מאשרים את <a href="/privacy">מדיניות הפרטיות</a></span>
            </label>
            <button type="submit" className={styles.submitBtn}>
              שליחת טופס
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}