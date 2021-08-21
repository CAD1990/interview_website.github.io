import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'
import Accordion from 'react-bootstrap/Accordion'

export default function Left() {

    return (
        <div className={styles.AccordionFormat} >
            <Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Mobilise Members</Accordion.Header>
                    <Accordion.Body>
                        Due to changes in the political fund our ability to invest in the Labour party has been reduced: 
                        <ul>
                            <li>Use surveys to map affiliated members and promote regular campaigning.</li>
                            <li>Use political module of reps training as an opportunity to spot potential talent.</li>
                            <li>Mentor interested members to make sure they have the support they need to get involved.</li>
                        </ul>
                       
    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Be a critical friend</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Raise concerns over policy in the appropriate forum.</li>
                            <li>Ensure that political support given is returned through industrial policy.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. MP&apos;s on Picket Lines</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Already happening we just need to make sure we entrench best practice (eg. Steph in Barnsley)</li>
                            <li>Make sure we have a Yorkshire GMB&apos;s WhatsApp group to facilitate coordination and communication</li>
                        </ul>
    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Union Learning</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Work with Labour councils and Members of Parliament to fund a new local workplace learning programme.</li>
                            <li>Promote existing funding to ensure members have a path towards life long learning.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Councillors Network</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Develop and train a range of new council candidates from our activist base.</li>
                            <li>Create value for money by holding yearly post-mortems to discuss campaigning against different parties.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>



            </Accordion>
        </div>

    )
}