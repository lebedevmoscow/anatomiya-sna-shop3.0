import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Assets
// import EyeSVG from './../../assets/svg/eye.svg'

// Styles
import article_styles from './../../styles/components/Article/ArticleProductPage.module.sass'

const EqualHeightElement = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeightElement),
    { ssr: false }
)

const Article = ({ article }) => {
    return (
        <Link href={`https://www.anatomiyasna.ru/journal/${article.Slug}`}>
            <a>
                <div className={article_styles.article}>
                    <Image
                        className={article_styles.article__image}
                        height={148.19}
                        width={264.63}
                        src={article.Image}
                    />

                    <EqualHeightElement name="ArticleTitle">
                        <div className={article_styles.article__title}>
                            {article.Title}
                        </div>
                    </EqualHeightElement>
                    <div className={article_styles.aritcle__author}>
                        <Image
                            src={article.AuthorImage}
                            height={50}
                            width={50}
                            className={article_styles.article__author_avatar}
                        />

                        <div className={article_styles.aritcle__author_info}>
                            <div
                                className={article_styles.article__author_name}
                            >
                                {article.AuthorName}
                            </div>
                            <div
                                className={article_styles.article__author_stats}
                            >
                                {article.ArticleType && (
                                    <div
                                        className={`${article_styles.article__author_rank}`}
                                    >
                                        {article.ArticleType}
                                    </div>
                                )}

                                <div
                                    style={
                                        !article.ArticleType
                                            ? { marginLeft: '0' }
                                            : null
                                    }
                                    className={
                                        article_styles.article__author_view
                                    }
                                >
                                    <div
                                        className={
                                            article_styles.article__author_view_eye
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 497.6 497.6"
                                            fill="#b5b5b5"
                                        >
                                            <path d="M495.2 242.4c-36.8-70.4-136-116.8-246.4-116.8S39.2 172 2.4 240.8c-3.2 4.8-3.2 9.6 0 14.4C39.2 325.6 138.4 372 248.8 372s209.6-46.4 246.4-115.2c3.2-4.8 3.2-9.6 0-14.4zM248.8 340c-94.4 0-179.2-35.2-212.8-91.2 33.6-56 118.4-91.2 212.8-91.2s179.2 35.2 212.8 91.2C428 303.2 343.2 340 248.8 340z" />
                                            <path d="M340 138.4c-4.8-8-14.4-9.6-22.4-4.8S308 148 312.8 156c9.6 12.8 14.4 28.8 14.4 44.8 0 43.2-35.2 78.4-78.4 78.4s-78.4-35.2-78.4-78.4c0-14.4 4.8-30.4 12.8-43.2 4.8-8 3.2-17.6-4.8-22.4-8-4.8-17.6-3.2-22.4 4.8-12.8 19.2-19.2 40-19.2 62.4 0 60.8 49.6 110.4 110.4 110.4 62.4 0 112-49.6 112-112 0-22.4-6.4-43.2-19.2-62.4z" />
                                        </svg>
                                    </div>
                                    <span>{article.ViewCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Article
