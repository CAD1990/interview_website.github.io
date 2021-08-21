import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Left() {

    return (

        <Row md={12}>
            <Col md={12}>
                <div className={styles.DataWrapper3}><DWChart title="ASHE 2019: 30th Percentile" src="https://datawrapper.dwcdn.net/bGC3X/5/" /></div>


            </Col>


        </Row>



    )
}