import styles from './../../styles/components/URLComponent/index.module.sass'
import Link from 'next/link'

const Url = ({ breadcrumbs }) => {
    const render = () => {
        if (breadcrumbs) {
            const data = []
            for (let i = 0; i < breadcrumbs.length; i++) {
                if (i === 0) {
                    data.push(
                        <Link href={'http://localhost:3000'}>
                            <a>
                                <span className={styles.black}>Главная</span>
                            </a>
                        </Link>
                    )

                    data.push(<span className={styles.delimiter}>/</span>)
                } else {
                    let st
                    if (i === breadcrumbs.length - 1) {
                        st = `${styles.last}`
                    } else {
                        st = `${styles.delimiter}`
                    }

                    data.push(
                        <Link
                            href={'http://localhost:3000' + breadcrumbs[i].url}
                        >
                            <a>
                                <span className={st}>
                                    {breadcrumbs[i].title}
                                </span>
                            </a>
                        </Link>
                    )
                    if (i !== breadcrumbs.length - 1) {
                        data.push(<span className={styles.delimiter}>/</span>)
                    }
                }
            }

            return data
        }
    }

    return <div className={styles.url_list}>{render()}</div>
}

export default Url
