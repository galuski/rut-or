"use client";

import { useState } from 'react';
import styles from './ContactArea.module.css';
import { Logo } from '../Logo/Logo';

export default function ContactArea() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('שולח...');

    console.log("My Access Key is:", process.env.NEXT_PUBLIC_ACCESS_KEY_MAIL);
    const formData = new FormData(e.target);
    
    // השם ש-Web3Forms דורש, מקושר למשתנה הציבורי מה-env
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY_MAIL);
    
    // אופציונלי: הגדרת נושא ברור למייל שיתקבל
    formData.append("subject", "פנייה חדשה מהאתר - סדנאות סאונד הילינג");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('הודעתך נשלחה בהצלחה! ניצור קשר בקרוב.');
        e.target.reset();
      } else {
        setStatus('משהו השתבש. אנא נסה שוב או פנה בוואטסאפ.');
      }
    } catch (error) {
      console.error(error);
      setStatus('שגיאת רשת. אנא נסה שוב.');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>

        <div className={styles.mainContent}>

          {/* צד ימין - הטופס (מופיע ראשון ב-RTL) */}
          <div className={styles.formSide}>
            <div className={styles.formHeader}>
              <h2 className={styles.title}>מוכנים להתחיל?</h2>
              <p className={styles.subtitle}>
                השאירו פרטים ואחזור אליכם תוך 24 שעות ללא התחייבות.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
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
                <label htmlFor="message">כתבו לי כל דבר שתירצו לשאול</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>

              <div className={styles.formFooter}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="terms" required />
                  <span>אני מסכים ומאשר את <a href="/privacy">מדיניות הפרטיות</a></span>
                </label>
                <button type="submit" className={styles.submitBtn}>
                  שליחת טופס
                </button>
              </div>
              {status && <p className={styles.statusMessage}>{status}</p>}
            </form>
          </div>

          {/* צד שמאל - אזור המידע והפעולות */}
          <div className={styles.infoSide}>
            <div className={styles.brandInfo}>
              <Logo />
              <p className={styles.description}>
                סדנאות סאונד הילינג ומרחב שקט שבו שום דבר לא דורש ממך כלום.
              </p>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="WhatsApp">Wa</a>
              <a href="#" aria-label="Instagram">Ig</a>
              <a href="#" aria-label="LinkedIn">In</a>
              <a href="#" aria-label="Email">Em</a>
            </div>

          </div>

        </div>

        {/* שורה תחתונה - פוטר */}
        <div className={styles.bottomSection}>
          <div className={styles.legalLinks}>
            <a href="/accessibility">נגישות</a>
            <a href="/terms">תנאי שימוש</a>
            <a href="/privacy">מדיניות פרטיות</a>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} כל הזכויות שמורות | עוצב ופותח על ידי{' '}
            <a
              href="https://www.gal-code.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.devLink}
            >
              Gal-Code
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

