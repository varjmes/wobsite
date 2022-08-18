import Link from 'next/link'
import styles from './content-list.module.css'

const ContentList = ({ titles }) => {
  return (
    <>
      <h2 className={styles['content-list-heading']}>Posts</h2>
      <ul className={styles['content-list']}>
        {titles.map(title => 
          <li className={styles['content-item']} key={title.title}>
            <span className={styles['content-title']}>
              <Link href={`/posts/${title.path}`}>
                <a>
                  {title.title}
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
