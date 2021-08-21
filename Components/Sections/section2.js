import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from '../../styles/Home.module.css'
import Left from '../Sections/Section2/Left'
import Col from 'react-bootstrap/Col'
import Right from '../Sections/Section2/Right'
import Button from '../Button'


export default function SectionTwo() {
    return (
        <section className={styles.section} id="SectionTwo">
            <Container>
                <main className={styles.container}>

                    <Row md={12}>
                        <Col md={12}>
                        <div className={styles.Header2}><h2> - Beyond Culture - </h2></div></Col>
                        
                       
                        <Col md={12}><Left></Left></Col>
                        <div className={styles.ButtonContainer}>

                            <Button variant={"danger"} name={"Previous Section"} anchor={"SectionOne"}></Button>
                            <Button variant={"success"} name={"Next Section"} anchor={"SectionThree"}></Button>
                        </div>
                        

                    </Row>

                </main>


            </Container>
        </section>

    )
}