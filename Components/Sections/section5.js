import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from '../../styles/Home.module.css'
import Left from '../Sections/Section5/Left'
import Col from 'react-bootstrap/Col'
import Right from '../Sections/Section5/Right'
import Button from '../Button'


export default function SectionFive() {
    return (
        <section className={styles.section} id="SectionFive">
            <Container>
                <main className={styles.container}>
                    <Row md={12}>
                        <Col md={6} sm={12, { order: "first" }} ><Right></Right></Col>
                        <Col md={6} sm={12, { order: "last" }}><Left></Left></Col>
                    </Row>

                    <div className={styles.ButtonContainer}>
                        <Button variant={"danger"} name={"Back to Top"} anchor={"SectionOne"}></Button>
                        
                    </div>
                </main>
           </Container>
        </section>

    )
}