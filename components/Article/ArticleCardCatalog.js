import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from './../../styles/components/Article/ArticleCardCatalog.module.sass'

const EqualHeightElement = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeightElement),
    { ssr: false }
)

const ArticleCardCatalog = ({ data }) => {
    console.log('data', data)
    return (
        <div className={styles.article_catalog_column}>
            <Link href={'https://anatomiyasna.ru/journal/' + data.Slug}>
                <a>
                    <div
                        className={styles.article_catalog_column__image_wrapper}
                        style={{
                            height: '167px',
                            width: '298px',
                            position: 'relative',
                        }}
                    >
                        <Image
                            className={styles.article_catalog_column__image}
                            // width={298}
                            // height={167}
                            layout={'fill'}
                            src={data.Image}
                        />
                    </div>
                    <div className={styles.article_catalog_column__text}>
                        <EqualHeightElement name="catalog__title">
                            <div
                                className={
                                    styles.article_catalog_column__text_title
                                }
                            >
                                {data.Title}
                            </div>
                        </EqualHeightElement>

                        <div
                            className={
                                styles.article_catalog_column__text_author
                            }
                        >
                            <div
                                className={
                                    styles.article_catalog_column__text_author__image_wrapper
                                }
                            >
                                <Image
                                    src={data.AuthorImage}
                                    width={50}
                                    height={50}
                                    className={
                                        styles.article_catalog_column__text_author_image
                                    }
                                />
                            </div>
                            <div
                                className={
                                    styles.article_catalog_column__text_author__text
                                }
                            >
                                <div
                                    className={
                                        styles.article_catalog_column__text_author__text__name
                                    }
                                >
                                    {data.AuthorName}
                                </div>
                                <div
                                    className={
                                        styles.article_catalog_column__text_author__text__stats
                                    }
                                >
                                    <div
                                        className={`article__articletype article__articletype__${data.ArticleTypeClass}`}
                                    >
                                        {data.ArticleType}
                                    </div>
                                    <div
                                        className={
                                            styles.article_catalog_column__text_author__text__stats__views
                                        }
                                    >
                                        <div
                                            className={
                                                styles.article_catalog_column__text_author__text__stats__views__icon_wrapper
                                            }
                                        >
                                            <Image
                                                width={15}
                                                height={15}
                                                src={
                                                    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 497.6 497.6' fill='%23b5b5b5'%3E%3Cpath d='M495.2 242.4c-36.8-70.4-136-116.8-246.4-116.8S39.2 172 2.4 240.8c-3.2 4.8-3.2 9.6 0 14.4C39.2 325.6 138.4 372 248.8 372s209.6-46.4 246.4-115.2c3.2-4.8 3.2-9.6 0-14.4zM248.8 340c-94.4 0-179.2-35.2-212.8-91.2 33.6-56 118.4-91.2 212.8-91.2s179.2 35.2 212.8 91.2C428 303.2 343.2 340 248.8 340z'/%3E%3Cpath d='M340 138.4c-4.8-8-14.4-9.6-22.4-4.8S308 148 312.8 156c9.6 12.8 14.4 28.8 14.4 44.8 0 43.2-35.2 78.4-78.4 78.4s-78.4-35.2-78.4-78.4c0-14.4 4.8-30.4 12.8-43.2 4.8-8 3.2-17.6-4.8-22.4-8-4.8-17.6-3.2-22.4 4.8-12.8 19.2-19.2 40-19.2 62.4 0 60.8 49.6 110.4 110.4 110.4 62.4 0 112-49.6 112-112 0-22.4-6.4-43.2-19.2-62.4z'/%3E%3C/svg%3E"
                                                }
                                            />
                                        </div>

                                        <span>{data.ViewCount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ArticleCardCatalog
