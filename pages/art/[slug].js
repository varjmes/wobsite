import fs from 'fs'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote'

import { getParsedFileContentBySlug, renderMarkdown } from '../../lib/markdown'

import Img from '../../components/Img'

const components = { Img }

const POSTS_PATH = join(process.cwd(), '_art')

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

const Art = ({ frontMatter, html }) => {
  return (
    <article>
      <h1>{frontMatter.title}</h1>
      <div>by { frontMatter.author.name }</div>
      <MDXRemote {...html} components={components} />
    </article>
  )
}

export default Art
