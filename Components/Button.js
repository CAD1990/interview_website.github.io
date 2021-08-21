import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import SectionOne from '../Components/Sections/section1'




export default function HomeButton({ name, anchor, variant}) {
  
    return (
        <div className={styles.ButtonWrapper}>
            <Link href={"/#" + anchor} passHref><Button variant={variant} size="lg" >{name}</Button></Link>
            
        </div>

    )
}