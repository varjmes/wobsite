import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight';

export const getParsedFileContentBySlug = (slug, postsPath) => {
  const postFilePath = join(postsPath, `${slug}.mdx`)
  const fileContents = fs.readFileSync(postFilePath)

  const { data, content } = matter(fileContents)

  return {
    matter: data,
    content
  }
}

export const renderMarkdown = markdownContent => {
  return serialize(markdownContent || '', {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  });
}
