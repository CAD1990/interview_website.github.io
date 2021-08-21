import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'
import Accordion from 'react-bootstrap/Accordion'

export default function Left() {

    return (
        <div className={styles.AccordionFormat} >
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Tory Renewal</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Despite ten years in government the Tories have managed to renew themselves three times due to new Prime Ministers.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Party Division</Accordion.Header>
                    <Accordion.Body>
                        The Party has spent more than a decade divided between political factions, first between Blairite and Brownite then between David and Ed supporters before finally being riven with infighting between Momentum and moderate groupings.
    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Unpopular Leadership</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>By the time of the election Gordon Brown, Ed Miliband and Jeremy Corbyn were deeply unpopular with the electorate.</li>

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Trust</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Economic trust following the 2009 financial crisis.</li>
                            <li>Mistrust from working class voters over Labour&apos; approach to Brexit.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>6. Scottish Nationalism</Accordion.Header>
                    <Accordion.Body>
                             <ul>
                                <li>Scottish and growing English nationalism have shattered the bonds of solidarity between English and Scottish working class voters.</li>
                                <li>If Labour were on the cusp of election victory the Conservative&apos; would use the prospect of any coalition with the SNP as a divisive wedge issue.</li>
                            </ul> 
                    </Accordion.Body>
                </Accordion.Item>



            </Accordion>
        </div>

    )
}