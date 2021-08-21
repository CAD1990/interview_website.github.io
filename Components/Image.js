
import profilePic from '../public/me.jpeg'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function HeroText({ heroText }) {
    return (
        <Image src={profilePic} layout={"intrinsic"} className={styles.imageFix} width={80} height={80} alt="Picture of the author" />
    )
}