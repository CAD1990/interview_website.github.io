import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Left() {

    return (

        <Row md={12}>
            <Col md={12}>
                <div className={styles.DataWrapper3}><DWChart title="Constituency Analysis: Bottom 30% of Workers" src="https://datawrapper.dwcdn.net/bGC3X/6/" /></div>


            </Col>


        </Row>



    )
}