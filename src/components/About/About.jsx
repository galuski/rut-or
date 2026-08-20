import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          יש ימים שבהם הראש פשוט לא מפסיק לעבוד. משימות, עבודה, ילדים, דאגות ועומס מצטברים - עד שכל מה שאנחנו רוצים הוא רגע אחד שבו לא צריך להספיק כלום.
        </p>
        <p className={styles.paragraph}>
          בסדנת <strong>Sound Healing – צלילים מרפאים</strong> ניצור מרחב שקט ומאפשר שבו אפשר להניח לרגע את מה שמעסיק אותך, להקשיב לגוף ופשוט לנוח.
        </p>
      </div>
    </section>
  );
}