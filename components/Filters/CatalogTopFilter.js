import { useState, useRef } from 'react'

import Url from './../../components/URLComponent'

import styles from './../../styles/components/Filters/CatalogTopFilter.module.sass'

const CatalogTopFilter = ({ updateViewType, desktopViewType }) => {
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

    const [popularList, setPopularList] = useState([
        'Двуспальные',
        'Недорого',
        'Трансформер',
        'Подъемные',
        'С матрасом',
        'Односпальные',
    ])

    const onShowMoreClickHandler = (title) => {
        if (title === 'popular' && !isPopularShowMore) {
            const clone = popularList.concat()
            const n = [
                'С ящиками',
                'Изголовье кровати',
                'Двухъярусные',
                'Аскона',
                'Мягкие',
                'Белые',
                '140x200',
                '160x200',
                '200x200',
                'Из дерева',
                'Большие',
                'Распродажа',
                'Железные',
                'Тахта',
                'Малогаборитные',
                'Круглые',
                'Угловые',
                'Орматек',
                'На заказ',
                '90x200',
            ]
            const result = [...clone, ...n]
            setIsPopularShowMore((p) => !p)
            setPopularList(result)
        }

        if (title === 'popular' && isPopularShowMore) {
            const n = [
                'Двуспальные',
                'Недорого',
                'Трансформер',
                'Подъемные',
                'С матрасом',
                'Односпальные',
            ]
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

    const onSortByClickHandler = (e) => {}

    const showmoreClassname = isPopularShowMore
        ? styles.catalog_top_filter__popular_list_item_show_more
        : styles.catalog_top_filter__popular_list_item_show_less
    return (
        <div className={styles.catalog_top_filter}>
            <Url />
            <div className={styles.catalog_top_filter__title}>Кровати</div>
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
