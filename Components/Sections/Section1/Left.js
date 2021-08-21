import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Left() {

    return (

<div className={styles.LeftContainer}>
            <Row md={12}>
                <Col md={12}>
                    <div className={styles.Header}><h1>Why is the Labour Party not attracting widespread support from the electorate?</h1></div>
                </Col>
                <Col md={12}>
                    <div className={styles.Header2}><h2>#1. Culture: Immigration and Brexit</h2></div>
                </Col>
            </Row>
</div>
       
    )
}