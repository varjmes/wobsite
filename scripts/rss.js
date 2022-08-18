const fs = require('graceful-fs')
const path = require('path')
const { marked } = require('marked')
const matter = require('gray-matter')
const RSS = require('rss')

const POSTS_PATH = path.join(process.cwd(), '_posts')

const getParsedFileContentBySlug = (slug, postsPath) => {
    const postFilePath = path.join(postsPath, `${slug}.mdx`);
    const fileContents = fs.readFileSync(postFilePath);

    const { data, content } = matter(fileContents);

    return {
        frontMatter: data,
        content
    };
}

const generateRss = () => {
    const url = 'https://jmes.tech'
    const paths = fs.readdirSync(POSTS_PATH).sort((a, b) => {
        return fs.statSync(POSTS_PATH + `/${a}`).mtime.getTime() - fs.statSync(POSTS_PATH + `/${b}`).mtime.getTime()
    }).map(path => path.replace(/\.mdx?$/, ''))

    const feed = new RSS({
        title: 'jmes',
        description: 'words from james spencer',
        site_url: url,
        feed_url: `${url}/feed.xml`,
        language: 'en',
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, James Spencer`,
    })

    paths.map(path => {
        const {frontMatter, content} = getParsedFileContentBySlug(path, POSTS_PATH)
        const html = marked(content)

        feed.item({
            title: frontMatter.title,
            url: `${url}/posts/${path}`,
            date: frontMatter.date,
            description: html.replace(/(<p><Img([^>]+)><\/p>\n)/ig, '')
        })
    })

    fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generateRss()
