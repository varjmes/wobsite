import Link from 'next/link'
import styles from './content-list.module.css'

const ContentList = ({ posts }) => {
  return (
    <>
      <h2 className={styles['content-list-heading']}>Posts</h2>
      <ul className={styles['content-list']}>
        {posts.map(post => 
          <li className={styles['content-item']} key={post.matter.title}>
            <span className={styles['content-title']}>
              <em>({new Date(post.matter.date).toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })})</em>
              &nbsp;<Link href={`/posts/${post.path}`}>
                <a>
                  {post.matter.title}
                </a>
              </Link>
            </span>
          </li>
        )}
      </ul>
    </>
  )
}

export default ContentList
