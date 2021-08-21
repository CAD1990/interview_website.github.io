
import styles from '../styles/Home.module.css'

export default function HeroText({ heroText }) {
    return (
        <div className={styles.heroText}>
            <p>{heroText}</p>
        </div>

    )
}