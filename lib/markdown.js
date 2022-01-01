import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'

export const getParsedFileContentBySlug = (slug, postsPath) => {
  const postFilePath = join(postsPath, `${slug}.mdx`)
  const fileContents = fs.readFileSync(postFilePath)

  const { data, content } = matter(fileContents)

  return {
    frontMatter: data,
    content
  }
}

export const renderMarkdown = markdownContent => {
  return serialize(markdownContent || '')
}
