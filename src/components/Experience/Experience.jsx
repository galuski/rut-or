import Image from 'next/image';
import styles from './Experience.module.css';

import icon1 from './../../../public/icons/1.svg';
import icon2 from './../../../public/icons/2.svg';
import icon3 from './../../../public/icons/3.svg';
import icon4 from './../../../public/icons/4.svg';

export default function Experience() {
  const experiences = [
    { icon: icon1, text: 'מסע של צלילים ותדרים באמצעות כלי סאונד שונים.' },
    { icon: icon2, text: 'זמן לעצור ולהתנתק מהשגרה והעומס.' },
    { icon: icon3, text: 'תרגול של נשימה, הקשבה והרפיה.' },
    { icon: icon4, text: 'מרחב שבו לא צריך לעשות דבר - רק להיות ולקבל את החוויה.' },
  ];

  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>מה מחכה לך במפגש?</h2>
        <div className={styles.grid}>
          {experiences.map((item, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.icon}>
                {/* שימוש ברכיב Image של Next.js להצגת האובייקט */}
                <Image src={item.icon} alt={`icon-${index + 1}`} />
              </span>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}