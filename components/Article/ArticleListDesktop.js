import { useState, useEffect } from 'react'
import { SlideDown } from 'react-slidedown'
import useMedia from './../../hooks/useMedia'
import dynamic from 'next/dynamic'

// Styles
import articles_styles from './../../styles/components/Article/ArticleList.module.sass'

// React Components
import LoadMoreButton from './../Button/LoadMoreButton'
import Article from './../Article/Article'

const EqualHeight = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeight),
    { ssr: false }
)

const ArticleListDesktop = ({ articles }) => {
    const breakpoint450 = useMedia(450)

    // State
    const [LoadMore, SetLoadMore] = useState(false)
    const [FirstPartOfList, SetFirstPartOfList] = useState(null)
    const [SecondPartOfList, SetSecondPartOfList] = useState(null)

    // Click Handlers
    const OnButtonClickHandler = () => {
        SetLoadMore(true)
    }

    // UseEffects

    useEffect(() => {
        const arr = []
        articles.map((article, index) => {
            if (index > 2) return
            if (breakpoint450 && index === 0) {
                return arr.push(<Article article={article} key={index} />)
            } else if (!breakpoint450) {
                return arr.push(<Article article={article} key={index} />)
            }
        })
        SetFirstPartOfList(<EqualHeight>{arr}</EqualHeight>)
    }, [])

    useEffect(() => {
        if (LoadMore) {
            const NewList = articles.map((article, id) => {
                if (id < 3) return
                return <Article article={article} key={id} />
            })

            // SetSecondPartOfList(NewList)
            SetSecondPartOfList(<EqualHeight>{NewList}</EqualHeight>)
        }
    }, [LoadMore])

    return (
        <div className={articles_styles.container}>
            <div className={articles_styles.articles}>
                <div className={articles_styles.articles__section_name}>
                    Статьи
                </div>
                <div className={articles_styles.articles__list}>
                    {FirstPartOfList}
                    <SlideDown
                        className={articles_styles.articles__slidedown}
                        closed={!LoadMore}
                    >
                        {SecondPartOfList}
                    </SlideDown>
                </div>
                <div
                    className={articles_styles.articles__btn}
                    onClick={OnButtonClickHandler}
                >
                    <LoadMoreButton
                        href={'https://www.anatomiyasna.ru/journal/'}
                        firstText={'Показать еще +'}
                        secondText={'Перейти в раздел'}
                        ready={LoadMore}
                    />
                </div>
            </div>
        </div>
    )
}

export default ArticleListDesktop
