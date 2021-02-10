import { useState, useRef, useEffect } from 'react'

import Url from './../../components/URLComponent'

import styles from './../../styles/components/Filters/CatalogTopFilter.module.sass'

const CatalogTopFilter = ({ updateViewType, desktopViewType, headers }) => {
    const barFirstRef = useRef(null)
    const barSecondRef = useRef(null)

    const onClickBarHandler = (bar) => {
        updateViewType(bar)
    }

    const [isPopularShowMore, setIsPopularShowMore] = useState(false)
    const [isSortByShowMore, setIsSortByShowMore] = useState(false)

    const [sortByList, setSortByList] = useState([
        'Популярности',
        'Цене',
        'Дате доставки',
        'Скидка',
        'Новинка',
    ])

    const [popularList, setPopularList] = useState([])

    const onShowMoreClickHandler = (title) => {
        if (title === 'popular' && !isPopularShowMore) {
            const clone = popularList.concat()

            const n = []
            for (let i = 6; i < headers.popularLinks.length; i++) {
                if (i < headers.popularLinks.length) {
                    n.push(headers.popularLinks[i].title)
                }
            }

            const result = [...clone, ...n]
            setIsPopularShowMore((p) => !p)
            setPopularList(result)
        }

        if (title === 'popular' && isPopularShowMore) {
            const n = []
            for (let i = 0; i < 6; i++) {
                if (i < headers.popularLinks.length) {
                    n.push(headers.popularLinks[i].title)
                }
            }
            setIsPopularShowMore((p) => !p)
            setPopularList(n)
        }

        if (title === 'sortby' && !isSortByShowMore) {
            const clone = sortByList.concat()
            const n = ['Бесплатная доставка']
            const result = [...clone, ...n]
            setIsSortByShowMore((p) => !p)
            setSortByList(result)
        }

        if (title === 'sortby' && isSortByShowMore) {
            const n = [
                'Популярности',
                'Цене',
                'Дате доставки',
                'Скидка',
                'Новинка',
            ]
            setIsSortByShowMore((p) => !p)
            setSortByList(n)
        }
    }

    useEffect(() => {
        const arr = []
        for (let i = 0; i < 6; i++) {
            console.log('headers.popularLinks[i].title', headers.popularLinks)
            if (i < headers.popularLinks.length) {
                arr.push(headers.popularLinks[i].title)
            }
        }
        setPopularList(arr)
    }, [])

    const onSortByClickHandler = (e) => {}

    const showmoreClassname = isPopularShowMore
        ? styles.catalog_top_filter__popular_list_item_show_more
        : styles.catalog_top_filter__popular_list_item_show_less
    return (
        <div className={styles.catalog_top_filter}>
            <Url breadcrumbs={headers.breadcrumbs} />
            <div className={styles.catalog_top_filter__title}>
                {headers.heading}
            </div>
            <div className={styles.catalog_top_filter__list_wrapper}>
                <div className={styles.catalog_top_filter__before_list}>
                    Популярное:
                </div>
                <ul className={styles.catalog_top_filter__popular_list}>
                    {popularList.map((element, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    styles.catalog_top_filter__popular_list_item
                                }
                            >
                                <a href="#">{element}</a>
                            </li>
                        )
                    })}
                    <li
                        onClick={() => {
                            onShowMoreClickHandler('popular')
                        }}
                        className={
                            `${styles.catalog_top_filter__popular_list_item}` +
                            ' ' +
                            showmoreClassname
                        }
                    >
                        <span className={styles.wrapper}>
                            {isPopularShowMore && (
                                <span className={styles.cross}></span>
                            )}
                            {!isPopularShowMore && (
                                <span className={styles.arrow}></span>
                            )}
                        </span>
                    </li>
                </ul>
            </div>
            <div className={styles.catalog_top_filter__list_wrapper}>
                <div className={styles.first_wrap}>
                    <div className={styles.catalog_top_filter__before_list}>
                        Сортировать по:
                    </div>
                    <ul className={styles.catalog_top_filter__sortby_list}>
                        {sortByList.map((element, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={onSortByClickHandler}
                                    className={
                                        styles.catalog_top_filter__sortby_list_item
                                    }
                                >
                                    <a href="#">{element}</a>
                                </li>
                            )
                        })}
                        <li
                            onClick={() => {
                                onShowMoreClickHandler('sortby')
                            }}
                            className={
                                `${styles.catalog_top_filter__sortby_list_item}` +
                                ' ' +
                                showmoreClassname
                            }
                        >
                            <span className={styles.wrapper}>
                                {isSortByShowMore && (
                                    <span className={styles.cross}></span>
                                )}
                                {!isSortByShowMore && (
                                    <span className={styles.arrow}></span>
                                )}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={styles.second_wrap}>
                    <div className={styles.title}>Вид:</div>
                    <span
                        onClick={() => onClickBarHandler('single')}
                        ref={barFirstRef}
                        className={`${styles.bar_first} ${
                            desktopViewType === 'single'
                                ? `${styles.active}`
                                : ''
                        }`}
                    ></span>
                    <span
                        onClick={() => onClickBarHandler('several')}
                        ref={barSecondRef}
                        className={`${styles.bar_second} ${
                            desktopViewType === 'several'
                                ? `${styles.active}`
                                : ''
                        }`}
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default CatalogTopFilter
