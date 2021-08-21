import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'

export default function Left() {
   
    return (
        <div className={styles.DataWrapper2}><DWChart title="Composition of PLP by Occupation" src="https://datawrapper.dwcdn.net/3Q1zc/5/" /></div>
 
    )
}