import Link from 'next/link'
import styles from './content-list.module.css'

const ContentList = ({ titles }) => {
  return (
    <ul className={styles['content-list']}>
      {titles.map(title => 
        <li className={styles['content-item']} key={title}>
          <h2 className={styles['content-title']}>
            <Link href={`/art/${title.path}`}>
              <a>
                {title.title}
              </a>
            </Link>
          </h2>
        </li>
      )}
    </ul>
  )
}

export default ContentList
