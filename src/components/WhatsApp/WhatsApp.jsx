import styles from './WhatsApp.module.css'; 

export function WhatsApp() {
    return (
        <a 
            className={styles.whatsapp} 
            aria-label="Chat on WhatsApp" 
            href="https://wa.me/972507552588"
            target="_blank" 
            rel="noopener noreferrer"
        >
            <span className={styles['whatsapp-pulse']}></span>
            <img 
                alt="Chat on WhatsApp" 
                src="/whatsapp.svg" 
                className={styles['whatsapp-icon']} 
            />
        </a>
    );
}