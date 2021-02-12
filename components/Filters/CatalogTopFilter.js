import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { LoadByFilters } from './../../actions/NewCatalogProductList'

import Url from './../../components/URLComponent'

import styles from './../../styles/components/Filters/CatalogTopFilter.module.sass'

const CatalogTopFilter = ({
    updateViewType,
    desktopViewType,
    headers,
    filterProductsIds,
    catalogSlug,
    subCatalogSlug,
    oldMin,
    oldMax,
}) => {
    const SelectedSizeReducer = useSelector(
        (store) => store.SelectedSizeReducer
    )
    const CatalogCommonReducer = useSelector(
        (store) => store.CatalogCommonReducer
    )

    const dispatch = useDispatch()

    const barFirstRef = useRef(null)
    const barSecondRef = useRef(null)

    const onClickBarHandler = (bar) => {
        updateViewType(bar)
    }

    const [isPopularShowMore, setIsPopularShowMore] = useState(false)
    const [isSortByShowMore, setIsSortByShowMore] = useState(false)
    const [sortType, setSortType] = useState([
        { title: 'Популярности', isActive: false, sort: null },
        { title: 'Цене', isActive: true, sort: 'up-to-down' },
        { title: 'Дате доставки', isActive: false, sort: null },
        { title: 'Скидка', isActive: false, sort: null },
        { title: 'Новинка', isActive: false, sort: null },
        { title: 'Бесплатная доставка', isActive: false, sort: null },
    ])

    const [clicks, setClicks] = useState(0)
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
                    n.push({
                        title: headers.popularLinks[i].title,
                        link: headers.popularLinks[i].link,
                    })
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
                    n.push({
                        title: headers.popularLinks[i].title,
                        link: headers.popularLinks[i].link,
                    })
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
            if (i < headers.popularLinks.length) {
                arr.push({
                    title: headers.popularLinks[i].title,
                    link: headers.popularLinks[i].link,
                })
            }
        }
        setPopularList(arr)
    }, [])

    useEffect(() => {
        if (clicks > 0) {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    CatalogCommonReducer.page,
                    SelectedSizeReducer.sizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    null,
                    null,
                    sortType
                )
            )
        }
    }, [sortType])

    const onSortByClickHandler = (title) => {
        const clone = sortType.concat()

        for (let i = 0; i < clone.length; i++) {
            if (title === 'Цене') {
                for (let j = 0; j < clone.length; j++) {
                    if (clone[j].title === 'Популярности') {
                        clone[j].isActive = false
                    }
                }
                if (clone[i].title === 'Цене') {
                    clone[i].isActive = true
                    if (clone[i].sort === 'up-to-down') {
                        clone[i].sort = 'down-to-up'
                    } else if (clone[i].sort === 'down-to-up') {
                        clone[i].sort = 'up-to-down'
                    }
                }
            } else if (title === 'Популярности') {
                if (clone[i].title === 'Популярности') {
                    clone[i].isActive = !clone[i].isActive
                    for (let j = 0; j < clone.length; j++) {
                        if (clone[j].title === 'Цене') {
                            clone[j].isActive = false
                        }
                    }
                }
            } else {
                if (
                    clone[i].title === title &&
                    title !== 'Цене' &&
                    title !== 'Популярности'
                ) {
                    clone[i].isActive = !clone[i].isActive
                }
            }
        }
        setSortType(clone)
    }

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
                            <Link href={'http://localhost:3000' + element.link}>
                                <li
                                    key={index}
                                    className={
                                        styles.catalog_top_filter__popular_list_item
                                    }
                                >
                                    <a href="#">{element.title}</a>
                                </li>
                            </Link>
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
                            let additionalClassName = ''
                            if (
                                (element === 'Популярности' ||
                                    element === 'Цене') &&
                                sortType[index].isActive
                            ) {
                                additionalClassName = styles.red_border
                            } else if (
                                (element !== 'Популярности' ||
                                    element !== 'Цене') &&
                                sortType[index].isActive
                            ) {
                                additionalClassName = styles.blue_border
                            }

                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        onSortByClickHandler(element)
                                        setClicks((p) => ++p)
                                    }}
                                    className={
                                        styles.catalog_top_filter__sortby_list_item +
                                        ' ' +
                                        additionalClassName
                                    }
                                >
                                    {element}
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
