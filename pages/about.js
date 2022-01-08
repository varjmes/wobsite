import Head from 'next/head'
import styles from '../styles/page.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>james spencer: about</title>
      </Head>
      <h1 className={styles.title}>
        about james spencer
      </h1>
      <p className={styles.description}>
        i am a new artist exploring multiple mediums<br></br>
        i am a self-taught senior full stack developer with 6 years of experience<br></br>
        i put people above code and have experience in line management<br></br>
      </p>
      <section className={styles['content-section']}>
        <h2>i create</h2>
        <ul>
          <li>photos</li>
          <li><em>(beginner)</em> 3d models</li>
          <li><em>(beginner)</em> paper and digital drawings</li>
        </ul>
      </section>
      <section className={styles['content-section']}>
        <h2>i code</h2>
        <ul>
          <li>accessibly</li>
          <li>html &amp; css</li>
          <li>javascript &amp; node</li>
          <li>react &amp; graphql</li>
        </ul>
      </section>
      <section className={styles['content-section']}>
        <h2>i work</h2>
        <ul>
          <li>the financial times</li>
          <li>vogue <em>(condé nast)</em></li>
          <li>uSwitch <em>(ZPG)</em></li>
          <li>marks and spencer</li>
        </ul>
      </section>
    </>
  )
}

export default About
