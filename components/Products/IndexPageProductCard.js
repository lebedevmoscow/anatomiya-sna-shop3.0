import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SlideDown } from 'react-slidedown'
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
    AddProductToFavoriteList,
    RemoveProductFromFavoriteList,
} from './../../actions/FavoritesProductsList'

import {
    AddProductToCompareList,
    RemoveProductFromCompareList,
} from './../../actions/CompareProductsList'

// Experemental
import useMediaQuery from './../../hooks/useMedia'

// Images
import StatsImage from './../../assets/svg/stats.svg'
import HeartImage from './../../assets/svg/heart.svg'
import WhiteHeartImage from './../../assets/svg/white-heart.svg'
import WhiteStats from './../../assets/svg/white-stats.svg'

// React Components
// import SaleOnProductCard from './../SaleOnProductCard'
// import Popups from './../Popups/PopupsOnProductCard'

import card_styles from './../../styles/components/Products/IndexPageProductCard.module.sass'

const Popups = dynamic(() => import('./../Popups/PopupsOnProductCard'), {
    ssr: false,
})

const ProductCard = ({
    cn,
    mobile = false,
    Title,
    Slug,
    CatalogType,
    BrandTitle,
    SeriesTitle,
    MainImage,
    Prices,
    ListSalesList,
    key,
    Id,
    DefaultSize,
}) => {
    // Redux
    const dispatch = useDispatch()
    const FavoriteListRedux = useSelector(
        (store) => store.FavoritesProductsListReducer
    )
    const CompareListRedux = useSelector(
        (store) => store.CompareProductsListReducer
    )

    // Click handlers
    const onAddToFavoriteClickHandler = () => {
        if (!isFavorite) {
            setIsFavorite(true)
            favoriteRef.current.style.display = 'block'
            dispatch(
                AddProductToFavoriteList(
                    Id,
                    MainImage,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    DefaultSize.SizeSlug,
                    DefaultSize.SizeTitle,
                    PriceDiscount,
                    Prices[0].Id
                )
            )
            setTimeout(() => {
                favoriteRef.current.style.display = 'none'
            }, 1500)
        } else {
            setIsFavorite(false)
            dispatch(
                RemoveProductFromFavoriteList(
                    Id,
                    MainImage,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    DefaultSize.SizeSlug,
                    DefaultSize.SizeTitle,
                    PriceDiscount,
                    Prices[0].Id
                )
            )
        }
    }

    const onAddToCompareClickHandler = () => {
        if (!isCompared) {
            setIsCompared(true)
            compareRef.current.style.display = 'block'
            dispatch(
                AddProductToCompareList(
                    Id,
                    MainImage,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    DefaultSize.SizeSlug,
                    DefaultSize.SizeTitle,
                    PriceDiscount,
                    Prices[0].Id
                )
            )
            setTimeout(() => {
                compareRef.current.style.display = 'none'
            }, 1500)
        } else {
            setIsCompared(false)
            dispatch(
                RemoveProductFromCompareList(
                    Id,
                    MainImage,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    DefaultSize.SizeSlug,
                    DefaultSize.SizeTitle,
                    PriceDiscount,
                    Prices[0].Id
                )
            )
        }
    }

    const breakpoint1025 = useMediaQuery(1025)

    const loadMoreRef = useRef(null)
    const favoriteRef = useRef(null)
    const compareRef = useRef(null)

    const [closed, setClosed] = useState(true)
    const [firstPopup, setFirstPopup] = useState(null)

    const [isFavorite, setIsFavorite] = useState(false)
    const [isCompared, setIsCompared] = useState(false)

    const onLoadMoreClickHandler = () => {
        loadMoreRef.current.classList.toggle('load-more-hidden')
        setClosed((p) => !p)
    }

    const PriceDiscount = Prices[0].PriceDiscount
    const PriceBasic = Prices[0].PriceBasic
    const PriceDiff = PriceBasic - PriceDiscount

    useEffect(() => {
        if (
            FavoriteListRedux &&
            FavoriteListRedux.total &&
            FavoriteListRedux.total.length !== 0
        ) {
            let flag = false
            FavoriteListRedux.total.map((item) => {
                if (item.ProductId === Id) {
                    flag = true
                    setIsFavorite(true)
                }
            })
            if (!flag) {
                setIsFavorite(false)
            }
        }
    }, [FavoriteListRedux])

    useEffect(() => {
        if (
            CompareListRedux &&
            CompareListRedux.total &&
            CompareListRedux.total.length !== 0
        ) {
            let flag = false
            CompareListRedux.total.map((item) => {
                if (item.ProductId === Id) {
                    flag = true
                    setIsCompared(true)
                }
            })
            if (!flag) {
                setIsCompared(false)
            }
        }
    }, [CompareListRedux])

    // Объект window
    const hasWindow = typeof window !== 'undefined'

    // Ширина экрана
    const width = hasWindow ? window.innerWidth : null

    const [showLoadMore, setShowLoadMore] = useState(true)

    return (
        <div key={key} className={card_styles.product_card}>
            <Popups ListSalesList={ListSalesList} />
            <div className={card_styles.product_card__wrap_1}>
                <a target="_blank" rel="noreferrer">
                    <Image src={MainImage} width={208} height={130} />
                    {/* <img
                        className={card_styles.product_card__image}
                        src={MainImage}
                    /> */}
                </a>
                <a target="_blank" rel="noreferrer">
                    <h6 className={card_styles.product_card__smalltext}>
                        {CatalogType}
                    </h6>
                </a>
                {/* <EqualHeightElement name="Title"> */}
                <a target="_blank" rel="noreferrer">
                    <h4 className={card_styles.product_card__productname}>
                        {(BrandTitle || '') +
                            ' ' +
                            (SeriesTitle || '') +
                            ' ' +
                            (Title || '')}
                    </h4>
                </a>
                {/* </EqualHeightElement> */}
            </div>
            <div className={card_styles.product_card__wrap_2}>
                <a>
                    <div className={card_styles.product_card__price_section}>
                        <div className={card_styles.product_card__price}>
                            {PriceDiff !== 0 && (
                                <div
                                    className={
                                        card_styles.product_card__price_discount
                                    }
                                >
                                    <div
                                        className={
                                            card_styles.product_card__price_prev
                                        }
                                    >
                                        <span>
                                            {PriceBasic}
                                            <div
                                                className={
                                                    card_styles.product_card__price_diff
                                                }
                                            >
                                                -{PriceDiff}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div
                                className={
                                    card_styles.product_card__price_current
                                }
                            >
                                {PriceDiscount} Руб.
                                {/* 222 Руб. */}
                            </div>
                        </div>
                        <div
                            className={
                                card_styles.product_card__stats_buttons_section
                            }
                        >
                            <div
                                className={
                                    card_styles.product_card__stats_button
                                }
                                style={
                                    isCompared
                                        ? {
                                              backgroundColor: '#0ca5d3',
                                              borderColor: '#0ca5d3',
                                          }
                                        : {}
                                }
                                onClick={() => {
                                    onAddToCompareClickHandler()
                                }}
                            >
                                <div
                                    ref={compareRef}
                                    className={`${card_styles.product_card__button__popup} ${card_styles.product_card__stats_button__popup}`}
                                >
                                    Товар добавлен в{' '}
                                    <Link href="/">Сравнение!</Link>
                                </div>
                                {isCompared && (
                                    <img
                                        src={WhiteStats}
                                        alt="stat-image"
                                    ></img>
                                )}
                                {!isCompared && (
                                    <img
                                        src={StatsImage}
                                        alt="stat-image"
                                    ></img>
                                )}
                            </div>
                            <div
                                className={
                                    card_styles.product_card__stats_button
                                }
                                style={
                                    isFavorite
                                        ? {
                                              backgroundColor: '#0ca5d3',
                                              borderColor: '#0ca5d3',
                                          }
                                        : {}
                                }
                                onClick={() => {
                                    onAddToFavoriteClickHandler()
                                }}
                            >
                                <div
                                    ref={favoriteRef}
                                    className={`${card_styles.product_card__button__popup} ${card_styles.product_card__stats_button__popup}`}
                                >
                                    Товар добавлен в{' '}
                                    <Link href="/">Избранное!</Link>
                                </div>
                                {isFavorite && (
                                    <img
                                        src={WhiteHeartImage}
                                        alt="stat-image"
                                    ></img>
                                )}
                                {!isFavorite && (
                                    <img
                                        src={HeartImage}
                                        alt="stat-image"
                                    ></img>
                                )}
                            </div>
                        </div>
                    </div>
                </a>
                <a>
                    <button className={card_styles.product_card__button}>
                        Подробнее
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ProductCard
