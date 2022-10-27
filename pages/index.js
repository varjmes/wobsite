
import fs from 'fs'
import { join } from 'path'
import styles from '../styles/page.module.css'
import ContentList from '@/components/ContentList'
import { getParsedFileContentBySlug } from '../lib/markdown'

const POSTS_PATH = join(process.cwd(), '_posts')

export const getStaticProps = async ({ params }) => {
  const paths = fs.readdirSync(POSTS_PATH).map(path => path.replace(/\.mdx?$/, ''))

  const posts = paths.map(path => {
    const { matter } = getParsedFileContentBySlug(path, POSTS_PATH)
    return {
      path,
      matter
    }
  }).sort((a, b) => {
      return new Date(b.matter.date) - new Date(a.matter.date)
  })

  return {
    props: {
      posts
    }
  }
}

const Home = ({ posts }) => {
  return (
    <>
      <h1 className={styles.title}>
        james spencer
      </h1>

      <p className={styles.subtitle}>
        senior developer &amp; human being
      </p>
      <ContentList posts={posts} />
    </>
  )
}

export default Home
