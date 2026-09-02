import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            {/* ניתן להחליף את הטקסט בלוגו SVG אמיתי */}
            <h3 className={styles.logo}>רות אור</h3>
            <p className={styles.description}>
              סדנאות סאונד הילינג ומרחב שקט שבו שום דבר לא דורש ממך כלום.
            </p>
          </div>

          <div className={styles.socialAndActions}>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="WhatsApp">Wa</a>
              <a href="#" aria-label="Instagram">Ig</a>
              <a href="#" aria-label="LinkedIn">In</a>
              <a href="#" aria-label="Email">Em</a>
            </div>

            <div className={styles.actionButtons}>
              <a
                href="https://wa.me/972507552588?text=היי%20רות,%20אשמח%20לפרטים"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                דברו איתי בוואטסאפ
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                לשיחת ייעוץ חינם
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.legalLinks}>
            <Link href="/accessibility">נגישות</Link>
            <Link href="/terms">תנאי שימוש</Link>
            <Link href="/privacy">מדיניות פרטיות</Link>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} כל הזכויות שמורות לרות אור.
          </p>
        </div>
      </div>
    </footer>
  );
}