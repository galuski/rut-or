import styles from './Upcoming.module.css';
import Image from 'next/image'; // אל תשכח להוסיף את שורת הייבוא הזו למעלה

export default function Upcoming({
  location = 'במתחם ״ הקן ״ באליעד',
  date = '2.9',
  time = '17:00',
  price = '100',
  paymentLink = 'https://pay.grow.link/f26173359aff30effea8a287db79d15e-Mzg2MzQ5Mw'
}) {
  return (
    <section className={styles.section} id="upcoming-session">
      <div className={styles.container}>
        <h2 className={styles.title}>הזמנת אירועים</h2>

        <div className={styles.card}>
          <div className={styles.infoGroup}>

            {/* <div className={styles.infoRow}>
              <Image src="/location.svg" alt="מיקום" width={24} height={24} className={styles.icon} />
              <p><strong>מיקום:</strong> {location}</p>
            </div> */}

            {/* <div className={styles.infoRow}>
              <Image src="/calendar.svg" alt="תאריך" width={24} height={24} className={styles.icon} />
              <p><strong>תאריך:</strong> {date}</p>
            </div> */}

            {/* <div className={styles.infoRow}>
              <Image src="/clock.svg" alt="שעה" width={24} height={24} className={styles.icon} />
              <p><strong>שעה:</strong> {time}</p>
            </div> */}

          </div>

          <div className={styles.textBlock}>
            {/* <p>
              העלות לאירוע - כל אחד על פי ליבו וכיסו,<br />
              כי אני מאד מאמינה בפתיחת הלב, ורוצה להתחשב בכולם !
            </p> */}
            <p className={styles.price}>{price} ש"ח</p>
          </div>

          <p>להזמנה ופרטים נוספים - <strong>050-755-2588</strong></p>
          <p>ניתן ליצור קשר לצורך הזמנות לסשנים קבוצתיים אצלכם</p>
          <p>באהבה וחמלה</p>
        </div>
      </div>
    </section>
  );
}