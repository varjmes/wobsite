
import fs from 'fs'
import { join } from 'path'
import styles from '../styles/page.module.css'
import ContentList from '@/components/ContentList'

const POSTS_PATH = join(process.cwd(), '_art')

export const getStaticProps = async ({ params }) => {
  const paths = fs.readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.mdx?$/, ''))

  const titles = paths.map(path => {
    const title = path.split('-').join(' ').toLowerCase()
    return {
      title,
      path
    }
  })

  return {
    props: {
      titles
    }
  }
}

const Home = ({ titles }) => {
  return (
    <>
      <h1 className={styles.title}>
        james spencer
      </h1>

      <p className={styles.subtitle}>
        senior developer &amp; art boy
      </p>
      <ContentList titles={titles} />
    </>
  )
}

export default Home
