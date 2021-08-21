import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from '../../styles/Home.module.css'
import Left from '../Sections/Section3/Left'
import Col from 'react-bootstrap/Col'
import Right from '../Sections/Section3/Right'
import Button from '../Button'


export default function SectionThree() {
    return (
        <section className={styles.section} id="SectionThree">
            <Container>
                <main className={styles.container}>

                    <Row md={12}>
                        <Col md={6} sm={12, { order: "last" }} ><Right></Right></Col>

                        <Col md={6} sm={12, { order: "first" }}><Left></Left></Col>

                    </Row>

                    <div className={styles.ButtonContainer
                    }>

                        <Button variant={"danger"} name={"Previous Section"} anchor={"SectionThree"}></Button>
                        <Button variant={"success"} name={"Next Section"} anchor={"SectionFour"}></Button>
                    </div>

                </main>

            </Container>
        </section>

    )
}