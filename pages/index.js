import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HomeButton from '../Components/Button'
import IntroHeader from '../Components/Intro'
import SectionOne from '../Components/Sections/section1'
import SectionTwo from '../Components/Sections/section2'
import SectionThree from '../Components/Sections/section3'
import SectionFour from '../Components/Sections/section4'
import SectionFive from '../Components/Sections/section5'





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GMB: Political Website</title>
        <meta name="GMB: Political Website" content="Developed by Craig Dawson" />
        <link rel="icon" href="/favicon.ico" />
         </Head>


      <section className={styles.section} id="home">
        <Container>
          <main className={styles.container}>

            <Row md={12}>
              <Col md={12}><IntroHeader title={"Labour"} subtitle={"2025: Age and Education"}></IntroHeader></Col>

              <Col md={12}><HomeButton name={"Begin Pesentation"} anchor={"SectionOne"} variant={"success"}></HomeButton></Col>

            </Row>

          </main>


        </Container>
      </section>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>


      <footer className={styles.footer}>
        <a
          href="www.twitter.com/craigdawson90"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by <span> Craig Dawson</span>
  
        </a>
      </footer>
    </div>
  )
}
