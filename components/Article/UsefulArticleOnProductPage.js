import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import Article from './ArticleProductPage'
import RevealButton from './../Button/RevealButton'
import styles from './../../styles/components/Article/UsefulArticleOnProductPage.module.sass'

// Hooks
import useMedia from './../../hooks/useMedia'

const EqualHeight = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeight),
    { ssr: false }
)

const UsefulArticles = ({ articles }) => {
    const breakpoint769 = useMedia(769)

    const [loadMore, setLoadMore] = useState(false)
    const [list, setList] = useState(null)
    const [maxHeight, setMaxHeight] = useState(0)

    const onShowMoreClickButtonHandler = () => {
        setLoadMore(true)
    }

    useEffect(() => {
        // Рендер списка статей
        // if (breakpoint769) {
        //     setList(<Article height={maxHeight} article={articles[0]} />)

        //     if (loadMore) {
        //         const first = (
        //             <Article height={maxHeight} article={articles[0]} />
        //         )
        //         lst = articles.map((article, id) => {
        //             return (
        //                 <Article
        //                     height={maxHeight}
        //                     key={id}
        //                     article={article}
        //                 />
        //             )
        //         })
        //         setList(lst)
        //     }
        // }

        if (!breakpoint769) {
            const final = []
            let sub = []

            articles.map((article, id) => {
                if (id > 3) return
                if (id !== 0 && id % 2 === 1) {
                    sub.push(<Article article={article} key={id} />)
                    final.push(<EqualHeight>{sub}</EqualHeight>)
                    sub = []
                } else sub.push(<Article article={article} key={id} />)
            })
            setList(<EqualHeight>{final}</EqualHeight>)
            // if (loadMore) {
            //     lst = articles.map((article, id) => {
            //         if (id > 3) return
            //         return (
            //             <Article
            //                 height={maxHeight}
            //                 article={article}
            //                 imgHeight={'165.39px'}
            //                 key={id}
            //             />
            //         )
            //     })
            //     const newLst = articles.map((article, id) => {
            //         if (id < 4) return
            //         return (
            //             <Article
            //                 height={maxHeight}
            //                 article={article}
            //                 imgHeight={'165.39px'}
            //                 key={id}
            //             />
            //         )
            //     })
            //     setList([...lst, newLst])
            // }
        }
    }, [loadMore, maxHeight])

    // useEffect(() => {
    //     const titleList = document.querySelectorAll('#userful_articles__title')

    //     if (titleList) {
    //         for (let i = 0; i < titleList.length; i++) {
    //             if (titleList[i].scrollHeight > maxHeight) {
    //                 setMaxHeight(titleList[i].scrollHeight)
    //             }
    //         }
    //     }
    // })

    return (
        <div className={styles.useful_articles}>
            <div
                id="userful_articles__title"
                className={styles.userful_articles__title}
            >
                Полезные статьи
            </div>
            <div className={styles.userful_articles__list}>{list}</div>
            <RevealButton
                onClick={onShowMoreClickButtonHandler}
                state={!loadMore ? 'folded' : 'unfolded'}
                text={'Показать еще +'}
                textAdditional={'Перейти в раздел'}
                href="https://www.anatomiyasna.ru/journal/"
            />
        </div>
    )
}

export default UsefulArticles
