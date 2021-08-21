import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Right() {

    return (
        
        <div className={styles.LeftContainer}>
            <Row md={12}>
                <Col md={12}>
                    <div className={styles.Header}><h1>Do unions still have a role in helping Labour back to Government?</h1></div>
                </Col>
                <Col md={12}><div className={styles.Header2}><h2>#1. Recruiting Candidates</h2></div></Col>
            </Row>
</div>

    )
}