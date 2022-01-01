import Head from 'next/head'
import Image from 'next/image'

import '../styles/globals.css'
import styles from '../styles/page.module.css'

function App({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>james spencer</title>
        <meta name="description" content="james spencer's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/varjmes"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        |
        <a
          href="https://github.com/varjmes"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        |
        <a
          href="https://instagram.com/varjmes"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </footer>
    </div>
  )
}

export default App
