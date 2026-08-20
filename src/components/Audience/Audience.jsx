import styles from './Audience.module.css';

export default function Audience() {
  return (
    <section className={styles.audienceSection}>
      <div className={styles.container}>
        
        <div className={styles.column}>
          <h3 className={styles.titleGood}>למי זה מתאים?</h3>
          <ul className={styles.list}>
            <li>לכל מי שמרגיש/ה צורך ברגע לעצמו/ה</li>
            <li>אנשים שחווים עומס וסטרס</li>
            <li>אמהות שרוצות לעצור לרגע</li>
            <li>וכל מי שמתגעגע לתחושה של שקט ומנוחה אמיתית</li>
          </ul>
        </div>

        <div className={`${styles.column} ${styles.columnNotFor}`}>
          <h3 className={styles.titleBad}>למי זה פחות מתאים?</h3>
          <ul className={styles.list}>
            <li>למי שמחפש/ת טיפול רפואי או פתרון מיידי לבעיה.</li>
            <li>זו חוויה של הרפיה, הקשבה והתבוננות - לא תחליף לטיפול רפואי או נפשי.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}