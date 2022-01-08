import Head from 'next/head'
import Link from 'next/link'

import '../styles/globals.css'
import styles from '../styles/page.module.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>james spencer</title>
      </Head>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
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
          |
          <a
            href="mailto:jmes.spncer@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </footer>
      </div>
    </>
  )
}

export default App
