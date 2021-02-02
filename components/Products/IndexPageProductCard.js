import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SlideDown } from 'react-slidedown'
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
    AddProductToFavoriteList,
    RemoveProductFromFavoriteList,
} from './../../../actions/FavoritesProductsList'

import {
    AddProductToCompareList,
    RemoveProductFromCompareList,
} from './../../../actions/CompareProductsList'

// Experemental
import useMediaQuery from './../hooks/../../../hooks/useMedia'

// Images
import StatsImage from './../../../assets/svg/stats.svg'
import HeartImage from './../../../assets/svg/heart.svg'
import WhiteHeartImage from './../../../assets/svg/white-heart.svg'
import WhiteStats from './../../../assets/svg/white-stats.svg'

// React Components
import SaleOnProductCard from './../SaleOnProductCard'

const EqualHeightElement = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeightElement),
    { ssr: false }
)

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
    listSales,
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

    useEffect(() => {
        if (hasWindow) {
            if (PriceDiff !== 0) {
                const percent =
                    100 - Math.round((PriceDiscount * 100) / PriceBasic)
                setFirstPopup(
                    <div style={{ marginRight: '5px' }}>
                        <SaleOnProductCard
                            first={true}
                            key={0}
                            Title={`-${percent}%`}
                            Slug={null}
                            Text={null}
                            dontShow={true}
                            BorderColor={'#E71616'}
                            BackgroundColor={'#E71616'}
                            TextColor={'#fff'}
                            index={0}
                        />
                    </div>
                )
            }

            if (PriceDiff === 0) {
                setFirstPopup(
                    <div style={{ marginRight: '5px' }}>
                        <SaleOnProductCard
                            first={true}
                            dontShow={!listSales[0].Text ? true : false}
                            onClickHandler={() => {
                                setShowLoadMore((p) => !p)
                            }}
                            key={0}
                            Title={listSales[0].Title}
                            Slug={listSales[0].Slug}
                            Text={listSales[0].Text}
                            BorderColor={listSales[0].BorderColor}
                            BackgroundColor={listSales[0].BackgroundColor}
                            TextColor={listSales[0].TextColor}
                            index={0}
                        />
                    </div>
                )
            }
        }
    }, [hasWindow, closed])

    // Объект window
    const hasWindow = typeof window !== 'undefined'

    // Ширина экрана
    const width = hasWindow ? window.innerWidth : null

    const [showLoadMore, setShowLoadMore] = useState(true)

    return (
        <div key={key} className="product-card">
            <div className="product-card__popups">
                {firstPopup}
                {showLoadMore &&
                    ((PriceDiff !== 0 &&
                        firstPopup !== null &&
                        listSales.length >= 1) ||
                        (PriceDiff === 0 &&
                            firstPopup !== null &&
                            listSales.length >= 2)) && (
                        <div className="product-card__load-more-wrapper">
                            <div
                                ref={loadMoreRef}
                                onClick={onLoadMoreClickHandler}
                                className="product-card__popup product-card__popup-load-more"
                            >
                                <span>
                                    <svg className="arrow">
                                        <path d="M19 9.14q0 .179-.14.316l-6.538 6.407Q12.182 16 12 16t-.322-.137L5.14 9.456Q5 9.32 5 9.14q0-.178.14-.316l.701-.687Q5.981 8 6.164 8q.182 0 .322.137L12 13.541l5.514-5.404q.14-.137.322-.137.183 0 .323.137l.7.687q.141.138.141.316z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    )}

                <SlideDown
                    className="product-card__fulllpopuplist"
                    closed={closed}
                >
                    <ul>
                        {listSales.map((sale, index) => {
                            if (index === 0 && PriceDiff === 0) return
                            return (
                                <SaleOnProductCard
                                    dontShow={!listSales[0].Text ? true : false}
                                    key={uuidv4()}
                                    mobile={mobile}
                                    Title={sale.Title}
                                    Slug={sale.Slug}
                                    Text={sale.Text}
                                    BorderColor={sale.BorderColor}
                                    BackgroundColor={sale.BackgroundColor}
                                    TextColor={sale.TextColor}
                                    index={index}
                                />
                            )
                        })}
                    </ul>
                    <div
                        onClick={() => {
                            setClosed((p) => !p)
                            loadMoreRef.current.classList.toggle(
                                'load-more-hidden'
                            )
                        }}
                        className="product-card__popup product-card__popup-last-child product-card__fulllpopuplist-inner-card"
                    >
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"></path>
                            </svg>
                        </span>
                    </div>
                </SlideDown>
            </div>
            <div className="product-card__wrap-1">
                <a target="_blank" rel="noreferrer">
                    <img className="product-card__image" src={MainImage} />
                </a>
                <a target="_blank" rel="noreferrer">
                    <h6 className="product-card__smalltext">{CatalogType}</h6>
                </a>
                <EqualHeightElement name="Title">
                    <a target="_blank" rel="noreferrer">
                        <h4 className="product-card__productname">
                            {(BrandTitle || '') +
                                ' ' +
                                (SeriesTitle || '') +
                                ' ' +
                                (Title || '')}
                        </h4>
                    </a>
                </EqualHeightElement>
            </div>
            <div className="product-card__wrap-2">
                <a>
                    <div className="product-card__price-section">
                        <div className="product-card__price">
                            {PriceDiff !== 0 && (
                                <div className="product-card__price-discount">
                                    <div className="product-card__price-prev">
                                        <span>
                                            {PriceBasic}
                                            <div className="product-card__price-diff">
                                                -{PriceDiff}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div className="product-card__price-current">
                                {PriceDiscount} Руб.
                                {/* 222 Руб. */}
                            </div>
                        </div>
                        <div className="product-card__stats-buttons-section">
                            <div
                                className="product-card__stats-button"
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
                                    className="product-card__button__popup product-card__stats-button__popup"
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
                                className="product-card__stats-button"
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
                                    className="product-card__button__popup product-card__stats-button__popup"
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
                    <button className="product-card__button">Подробнее</button>
                </a>
            </div>
        </div>
    )
}

export default ProductCard
