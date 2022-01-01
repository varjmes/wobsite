import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        welcome to <a href="https://twitter.com/varjmes">jmes</a>
      </h1>

      <p className={styles.description}>
        yet another wobsite <span role="img" aria-label="rolling eyes emoji">🙄</span>
      </p>
    </>
  )
}
