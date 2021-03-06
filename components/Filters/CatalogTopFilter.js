import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import Link from 'next/link'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { CATALOG_SET_TOP_FILTER_DESKTOP } from './../../actions/CatalogCommon'
import {
    LoadByFilters,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY,
} from './../../actions/NewCatalogProductList'

import { CATALOG_PRODUCT_LIST_SET_EMPTY } from './../../actions/CatalogProductList'

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
    setFirstProductList,
    setList,
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

    // useLayoutEffect(() => {
    //     const arr = []
    //     for (let i = 0; i < 6; i++) {
    //         if (i < headers.popularLinks.length) {
    //             arr.push({
    //                 title: headers.popularLinks[i].title,
    //                 link: headers.popularLinks[i].link,
    //             })
    //         }
    //     }
    //     setPopularList(arr)
    // }, [])

    useEffect(() => {
        if (clicks > 0) {
            dispatch({
                type: CATALOG_SET_TOP_FILTER_DESKTOP,
                payload: sortType,
            })

            setFirstProductList([])
            setList([])

            dispatch(
                LoadByFilters(
                    null,
                    1,
                    SelectedSizeReducer.sizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    CatalogCommonReducer.desktopTopFilter,
                    false,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive
                )
            )
            // dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY })
            // dispatch({ type: CATALOG_PRODUCT_LIST_SET_EMPTY })
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
                    {/* {popularList.map((element, index) => {
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
                    })} */}
                    {headers.popularLinks.map((element, index) => {
                        if (index >= 6) return
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
                                    <span>{element}</span>{' '}
                                    {element === 'Цене' &&
                                        sortType[1].sort === 'up-to-down' && (
                                            <svg
                                                viewBox="0 0 14.566 14.566"
                                                id="sort"
                                                xmlns="https://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path d="M0 .196h4.955v2.486H0zM0 3.929h8.272v2.486H0zM0 7.907h10.871v2.485H0zM0 11.885h14.566v2.485H0zM9.362 4.062l2.415 2.35s.16.187.327.019c.23-.229 2.355-2.425 2.355-2.425s.294-.292-.096-.292h-1.011v-.429V.336s.004-.14-.176-.14H10.69c-.252 0-.209.167-.209.167v3.42H9.386c-.321 0-.024.279-.024.279z"></path>
                                                </g>
                                            </svg>
                                        )}
                                    {element === 'Цене' &&
                                        sortType[1].sort === 'down-to-up' && (
                                            <svg
                                                style={{
                                                    transform:
                                                        'rotate(180deg) scale(-1, 1)',
                                                }}
                                                viewBox="0 0 14.566 14.566"
                                                id="sort"
                                                xmlns="https://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path d="M0 .196h4.955v2.486H0zM0 3.929h8.272v2.486H0zM0 7.907h10.871v2.485H0zM0 11.885h14.566v2.485H0zM9.362 4.062l2.415 2.35s.16.187.327.019c.23-.229 2.355-2.425 2.355-2.425s.294-.292-.096-.292h-1.011v-.429V.336s.004-.14-.176-.14H10.69c-.252 0-.209.167-.209.167v3.42H9.386c-.321 0-.024.279-.024.279z"></path>
                                                </g>
                                            </svg>
                                        )}
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
