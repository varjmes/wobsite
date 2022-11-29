import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { pageview } from '../lib/gtm'

import '../styles/globals.css'
import styles from '../styles/page.module.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
     pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
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
        </ul>
      </nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://strangeobject.space/@james"
            rel="me noopener noreferrer"
          >
            mastodon
          </a>
          |
          <a
            href="https://twitter.com/varjmes"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          |
          <a
            href="https://github.com/varjmes"
            rel="noopener noreferrer"
          >
            github
          </a>
        </footer>
      </div>
    </>
  )
}

export default App
