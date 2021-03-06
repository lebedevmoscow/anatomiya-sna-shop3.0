import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import URL from './../../components/URLComponent'
import Link from 'next/link'
import Modal from './../Modal'

import { useSelector, useDispatch } from 'react-redux'

// Constants
import {
    CATALOG_SET_SORT_MOBILE,
    CATALOG_SET_UPDATE_LIST,
    CATALOG_SET_PAGE,
} from './../../catalog_actions_rebuild/catalog'

// Actions
import { CatalogLoadProductsByFilter } from './../../catalog_actions_rebuild/catalog'

import styles from './../../styles/components/Mobile/CatalogLeftMobile.module.sass'

const CatalogLeftMobile = ({
    onClick,
    onCompositionClick,
    onMainFilterClick,
    updateViewType,
    viewType,
    headers,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
}) => {
    const CatalogReducer = useSelector((store) => store.CatalogReducer)

    const dispatch = useDispatch()

    const CatalogCommonReducer = useSelector(
        (store) => store.CatalogCommonReducer
    )
    const SelectedSizeReducer = useSelector(
        (store) => store.SelectedSizeReducer
    )

    const [countActiveFilter, setCountActiveFilter] = useState(1)

    useEffect(() => {
        let c = 0
        if (CatalogCommonReducer.filters.length > 0) {
            for (let i = 0; i < CatalogCommonReducer.filters.length; i++) {
                if (CatalogCommonReducer.filters[i].inner.length > 0) {
                    for (
                        let j = 0;
                        j < CatalogCommonReducer.filters[i].inner.length;
                        j++
                    ) {
                        if (
                            CatalogCommonReducer.filters[i].inner[j].status !==
                            'closed'
                        ) {
                            c++
                        }
                    }
                }
            }
        }
        if (CatalogCommonReducer.colors.length > 0) {
            for (let i = 0; i < CatalogCommonReducer.colors.length; i++) {
                c++
            }
        }

        if (SelectedSizeReducer.selectedSizeSlug) {
            c++
        }

        if (c === 0) c = 1
        setCountActiveFilter(c)
    }, [CatalogCommonReducer])

    const [sortType, setSortType] = useState([
        { title: 'По популярности', status: 'disabled' },
        { title: 'По убыванию цены', status: 'disabled' },
        { title: 'По возрастанию цены', status: 'active' },
        { title: 'Со скидкой', status: 'disabled' },
        { title: 'Новинка', status: 'disabled' },
        { title: 'С подарком', status: 'disabled' },
        { title: 'Выбор покупателей', status: 'disabled' },
        { title: 'Бесплатная доставка', status: 'disabled' },
    ])

    const getActiveSortTypeCount = () => {
        let count = 0
        for (let i = 3; i < sortType.length; i++) {
            if (sortType[i].status === 'active') {
                count++
            }
        }
        return count
    }

    const getMainActiveSortType = () => {
        for (let i = 0; i < sortType.length; i++) {
            if (
                sortType[i].title === 'По популярности' &&
                sortType[i].status === 'active'
            ) {
                return sortType[i].title
            }
            if (
                sortType[i].title === 'По убыванию цены' &&
                sortType[i].status === 'active'
            ) {
                return sortType[i].title
            }
            if (
                sortType[i].title === 'По возрастанию цены' &&
                sortType[i].status === 'active'
            ) {
                return sortType[i].title
            }
        }
    }

    const onSortClickHandler = (title) => {
        const clone = sortType.concat()

        if (title === 'По популярности') {
            clone[0].status = 'active'
            clone[1].status = 'disabled'
            clone[2].status = 'disabled'
        }
        if (title === 'По убыванию цены') {
            clone[0].status = 'disabled'
            clone[1].status = 'active'
            clone[2].status = 'disabled'
        }
        if (title === 'По возрастанию цены') {
            clone[0].status = 'disabled'
            clone[1].status = 'disabled'
            clone[2].status = 'active'
        }
        if (title === 'Со скидкой') {
            if (clone[3].status === 'disabled') {
                clone[3].status = 'active'
            } else {
                clone[3].status = 'disabled'
            }
        }
        if (title === 'Новинка') {
            if (clone[4].status === 'disabled') {
                clone[4].status = 'active'
            } else {
                clone[4].status = 'disabled'
            }
        }
        if (title === 'С подарком') {
            if (clone[5].status === 'disabled') {
                clone[5].status = 'active'
            } else {
                clone[5].status = 'disabled'
            }
        }
        if (title === 'Выбор покупателей') {
            if (clone[6].status === 'disabled') {
                clone[6].status = 'active'
            } else {
                clone[6].status = 'disabled'
            }
        }
        if (title === 'Бесплатная доставка') {
            if (clone[7].status === 'disabled') {
                clone[7].status = 'active'
            } else {
                clone[7].status = 'disabled'
            }
        }
        dispatch({ type: CATALOG_SET_SORT_MOBILE, payload: clone })
        dispatch({ type: CATALOG_SET_UPDATE_LIST })
        dispatch({ type: CATALOG_SET_PAGE, payload: 1 })
        dispatch(
            CatalogLoadProductsByFilter(
                true,
                CatalogReducer.sizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax,
                CatalogReducer.filters,
                CatalogReducer.price,
                null,
                CatalogReducer.colors,
                CatalogReducer.select,
                clone
            )
        )
        setSortType(clone)
    }

    const sortHTML = (
        <ul style={{ marginTop: '-15px' }} className={styles.sortmodal__ul}>
            {sortType.map((s, index) => {
                let innerClassName = ''
                for (let i = 0; i < sortType.length; i++) {
                    if (
                        sortType[i].title === s.title &&
                        sortType[i].status === 'active'
                    ) {
                        innerClassName = styles.sortmodal__active
                    }
                }
                return (
                    <li
                        onClick={() => onSortClickHandler(s.title)}
                        key={index}
                        className={styles.sortmodal__li}
                    >
                        <span className={styles.sortmodal__firstspan}>
                            {s.title}
                        </span>
                        <span className={styles.sortmodal__secondspan}>
                            <span
                                className={
                                    styles.sortmodal__inner +
                                    ' ' +
                                    innerClassName
                                }
                            ></span>
                        </span>
                    </li>
                )
            })}
        </ul>
    )

    const [ModalIsClosed, SetModalIsClosed] = useState(true)
    return (
        <div className={styles.catalog_left_mobile}>
            {/* Modals */}
            <Modal
                title={'Сортировать по:'}
                closed={ModalIsClosed}
                onClose={() => SetModalIsClosed(true)}
                html={sortHTML}
            />
            <div className={styles.catalog_left_mobile__url}>
                <URL />
            </div>
            <div className={styles.catalog_left_mobile__title}>
                {headers.heading}
            </div>
            <div className={styles.catalog_left_mobile__filters}>
                <Swiper
                    className={styles.catalog_left_mobile__filters_list}
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    autoHeight={true}
                >
                    <SwiperSlide>
                        <div
                            onClick={onCompositionClick}
                            className={`${styles.catalog_left_mobile__filters_list_item} ${styles.catalog_left_mobile__filters_list_item__more}`}
                        >
                            <span></span>
                        </div>
                    </SwiperSlide>

                    {headers.categoriesMenu.map((cat, index) => {
                        const sub = cat.childes.concat()

                        return (
                            <SwiperSlide>
                                <div
                                    className={
                                        styles.catalog_left_mobile__filters_list_item
                                    }
                                    onClick={() => onClick(cat.title, sub)}
                                >
                                    {cat.title}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <Swiper
                    className={
                        styles.catalog_left_mobile__popular_filters_list +
                        ' ' +
                        'catalog_left_mobile__filters_list'
                    }
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    autoHeight={false}
                >
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item__first_child
                            }
                        >
                            Популярное:
                        </div>
                    </SwiperSlide>
                    {headers.popularLinks.length > 0 &&
                        headers.popularLinks.map((link, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href={link.link}>
                                        <a>
                                            <div
                                                className={
                                                    styles.catalog_left_mobile__popular_filters_list_item
                                                }
                                            >
                                                {link.title}
                                            </div>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    {headers.childes.length > 0 &&
                        headers.childes.map((link, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href={link.link}>
                                        <a>
                                            <div
                                                className={
                                                    styles.catalog_left_mobile__popular_filters_list_item
                                                }
                                            >
                                                {link.title}
                                            </div>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                </Swiper>

                <Swiper
                    className={styles.catalog_left_mobile__main_filters}
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    autoHeight={false}
                >
                    <SwiperSlide>
                        <div
                            onClick={onMainFilterClick}
                            className={styles.catalog_left_mobile__main_filter}
                        >
                            <div className={styles.filter_mobile_btn__icon}>
                                <span
                                    className={styles.filter_mobile_btn__icon_1}
                                ></span>
                                <span
                                    className={styles.filter_mobile_btn__icon_2}
                                ></span>
                                <span
                                    className={styles.filter_mobile_btn__icon_3}
                                ></span>
                            </div>
                            <div className={styles.filter_mobile_text}>
                                Фильтр
                            </div>
                            <div className={styles.filter_mobile_count}>
                                {countActiveFilter}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => SetModalIsClosed(false)}>
                        <div
                            className={styles.catalog_left_mobile__price_order}
                        >
                            {<span>{getMainActiveSortType()}</span>}{' '}
                            {getActiveSortTypeCount() !== 0 && (
                                <span className={styles.red_count}>
                                    {getActiveSortTypeCount()}
                                </span>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__view_type_block
                            }
                            onClick={() => {
                                if (viewType === 'single') {
                                    updateViewType('several')
                                }
                                if (viewType === 'several') {
                                    updateViewType('single')
                                }
                            }}
                        >
                            <div
                                className={
                                    styles.catalog_left_mobile__view_type_block__by_two_card
                                }
                            >
                                {viewType === 'several' && (
                                    <>
                                        <span
                                            className={styles.big_square}
                                        ></span>
                                        <span className={styles.line}></span>
                                    </>
                                )}
                                {viewType === 'single' && (
                                    <>
                                        <div className={styles.first_line}>
                                            <span
                                                className={styles.square}
                                            ></span>
                                            <span
                                                className={styles.square}
                                            ></span>
                                        </div>
                                        <div className={styles.second_line}>
                                            <span
                                                className={styles.square}
                                            ></span>
                                            <span
                                                className={styles.square}
                                            ></span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div
                                className={
                                    styles.catalog_left_mobile__view_type_block__by_one_card
                                }
                            ></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CatalogLeftMobile
