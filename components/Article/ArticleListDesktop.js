import { useState, useEffect } from 'react'
import { SlideDown } from 'react-slidedown'
import useMedia from './../../hooks/useMedia'

// Styles
import common from './../../styles/common.module.sass'
import articles_styles from './../../styles/components/Article/ArticleList.module.sass'

// React Components
import LoadMoreButton from './../Button/LoadMoreButton'
import Article from './../Article/Article'

const ArticleListDesktop = ({ articles }) => {
    // State
    const [LoadMore, SetLoadMore] = useState(false)
    const [SecondPartOfList, SetSecondPartOfList] = useState(null)

    // Click Handlers
    const OnButtonClickHandler = () => {
        SetLoadMore(true)
    }

    // UseEffects
    useEffect(() => {
        if (LoadMore) {
            const List = articles.map((article, id) => {
                if (id > 2) return
                return <Article article={article} key={id} />
            })
            const NewList = articles.map((article, id) => {
                if (id < 3) return
                return <Article article={article} key={id} />
            })

            SetSecondPartOfList(NewList)
        }
    }, [LoadMore])

    return (
        <div className={common.container}>
            <div className={articles_styles.articles}>
                <div className={articles_styles.articles__section_name}>
                    Статьи
                </div>
                <div className={articles_styles.articles__list}>
                    {articles.map((article, index) => {
                        if (index > 2) return
                        return <Article article={article} key={index} />
                    })}
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
