import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from '../../styles/Home.module.css'
import Left from '../Sections/Section1/Left'
import Col from 'react-bootstrap/Col'
import Right from '../Sections/Section1/Right'
import Button from '../Button'


export default function SectionOne() {
    return (
        <section className={styles.section} id="SectionOne">
            <Container>
                <main className={styles.container}>

                    <Row md={12}>
                        <Col md={6} sm={12}><Left></Left></Col>
                        <Col md={6} sm={12}><Right></Right></Col>

                        <div className={styles.ButtonContainer
                        }>

                            <Button variant={"danger"} name={"Previous Section"} anchor={"Home"}></Button>
                            <Button variant={"success"} name={"Next Section"} anchor={"SectionTwo"}></Button>
                        </div>


                    </Row>

                </main>


            </Container>
        </section>

    )
}