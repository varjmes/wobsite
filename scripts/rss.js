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
        matter: data,
        content
    };
}

const generateRss = () => {
    const url = 'https://jmes.tech'
    const paths = fs.readdirSync(POSTS_PATH).map(path => path.replace(/\.mdx?$/, ''))

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
        const {matter, content} = getParsedFileContentBySlug(path, POSTS_PATH)
        return {
            content,
            matter
        }
    }).sort((a, b) => {
        return new Date(b.matter.date) - new Date(a.matter.date)
    }).map(post => {
        const html = marked(post.content)
        feed.item({
            title: post.matter.title,
            url: `${url}/posts/${path}`,
            date: post.matter.date,
            description: html.replace(/(<p><Img([^>]+)><\/p>\n)/ig, '')
        })
    })

    fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generateRss()
