import fs from 'fs'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

import { getParsedFileContentBySlug, renderMarkdown } from '../../lib/markdown'

import Img from '../../components/Img'
import styles from './posts.module.css'

const components = {
  Img,
  p: props => <p className={styles.p} {...props} />
}

const POSTS_PATH = join(process.cwd(), '_posts')

export const getStaticProps = async ({ params }) => {
  const articleMarkdownContent = getParsedFileContentBySlug(params.slug, POSTS_PATH)
  const renderedHtml = await renderMarkdown(articleMarkdownContent.content)

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderedHtml
    }
  }
}

export const getStaticPaths = async () => {
  const paths = fs.readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug } }))
  
  return {
    paths,
    fallback: false
  }
}

const Posts = ({ frontMatter, html }) => {
  const date = new Date(frontMatter.date)
  return (
    <>
      <Head>
        <title>james spencer: {frontMatter.title.toLowerCase()}</title>
      </Head>
      <article>
        <h1 className={styles.h1}>{frontMatter.title}</h1>
        <span>{date.toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <MDXRemote {...html} components={components} />
      </article>
    </>
  )
}

export default Posts
