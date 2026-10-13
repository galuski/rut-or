import styles from './VideoSec.module.css';
import Image from 'next/image';

export default function VideoSec({ imageSrc, videoSrc }) {
  return (
    <section className={styles.section} id="videos-section">
      <div className={styles.container}>
        <h2 className={styles.title}>טעימה מהסשנים</h2>
        
        <div className={styles.imageWrapper}>
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt="אווירה מהסשן" 
              fill
              className={styles.image}
            />
          ) : (
             <div className={styles.placeholder}>כאן תופיע התמונה...</div>
          )}
        </div>

        <div className={styles.videoWrapper}>
           {videoSrc ? (
              <video 
                className={styles.videoPlayer}
                controls 
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                הדפדפן שלך אינו תומך בנגן הוידאו.
              </video>
           ) : (
              <div className={styles.placeholder}>כאן יופיע הוידאו...</div>
           )}
        </div>
      </div>
    </section>
  );
}