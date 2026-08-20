import styles from "./Logo.module.css";

export function Logo() {
    return (
        <div className={styles.logo}>
            <img src="/logo.svg" alt="Logo" />
        </div>
    );
}