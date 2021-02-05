import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { SlideDown } from 'react-slidedown'
import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'
import Skeleton from '@material-ui/lab/Skeleton'

import PopupsOnProductCard from './../Popups/PopupsOnProductCard'

import styles from './../../styles/components/Products/CatalogProductCard.module.sass'

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
import { LoadProductsBySize } from './../../actions/CatalogProductList'
import { SelectSize } from './../../actions/SelectedSize'

import CarImage from './../../assets/svg/car.svg'

import StatsImage from './../../assets/svg/stats.svg'
import HeartImage from './../../assets/svg/heart.svg'
import WhiteHeartImage from './../../assets/svg/white-heart.svg'
import WhiteStats from './../../assets/svg/white-stats.svg'

import Material1 from './../../assets/materials/material1.jpg'
import Material2 from './../../assets/materials/material2.jpg'
import Material3 from './../../assets/materials/material3.jpg'

// import findProducts from '../../../actions/IndexPageMainFilter'

const EqualHeightElement = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeightElement),
    { ssr: false }
)

const EqualHeightConsumer = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeightConsumer),
    { ssr: false }
)

const CatalogProductCard = ({
    BrandTitle,
    SeriesTitle,
    Title,
    MainImage,
    CatalogType,
    Id,
    Properties,
    Prices,
    Slug,
    ListSalesList,
    InitialSize = [],
    oldMin,
    oldMax,
    catalogSlug,
    subCatalogSlug,
}) => {
    // Redux
    const dispatch = useDispatch()
    const FavoriteListRedux = useSelector(
        (store) => store.FavoritesProductsListReducer
    )
    const CompareListRedux = useSelector(
        (store) => store.CompareProductsListReducer
    )
    // const SelectedSizeRedux = useSelector((store) => store.SelectedSizeReducer)

    // Refs
    const FavoriteRef = useRef(null)
    const CompareRef = useRef(null)
    const [SizeSelector, SetSizeSelector] = useState(null)
    const [InitialSelectedSize, SetInitialSelectedSize] = useState({
        value: '',
        labal: '',
    })

    // Handler
    const onAddToFavoriteClickHandler = () => {
        if (!isFavorite) {
            setIsFavorite(true)
            FavoriteRef.current.style.display = 'block'

            const Price =
                InitialSize[0].length !== 0
                    ? InitialSize[0].PriceDiscount
                    : Prices[0].PriceDiscount
            const PriceId =
                InitialSize[0].length !== 0 ? InitialSize[0].Id : Prices[0].Id
            const SizeSlug =
                InitialSize[0].length !== 0
                    ? InitialSize[0].SizeSlug
                    : CurrentSize.value
            const SizeLabel =
                InitialSize[0].length !== 0
                    ? InitialSize[0].SizeTitle
                    : CurrentSize.label

            dispatch(
                AddProductToFavoriteList(
                    Id,
                    'https://anatomiyasna.ru' + MainImage.FilePath,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    SizeSlug,
                    SizeLabel,
                    Price,
                    PriceId
                )
            )
            setTimeout(() => {
                FavoriteRef.current.style.display = 'none'
            }, 1500)
        } else {
            setIsFavorite(false)
            dispatch(
                RemoveProductFromFavoriteList(
                    Id,
                    'https://anatomiyasna.ru' + MainImage.FilePath,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    SizeSlug,
                    SizeLabel,
                    Price,
                    PriceId
                )
            )
        }
    }

    const onAddToCompareClickHandler = () => {
        if (!isCompared) {
            setIsCompared(true)
            CompareRef.current.style.display = 'block'
            const Price =
                InitialSize[0].length !== 0
                    ? InitialSize[0].PriceDiscount
                    : Prices[0].PriceDiscount
            const PriceId =
                InitialSize[0].length !== 0 ? InitialSize[0].Id : Prices[0].Id
            const SizeSlug =
                InitialSize[0].length !== 0
                    ? InitialSize[0].SizeSlug
                    : CurrentSize.value
            const SizeLabel =
                InitialSize[0].length !== 0
                    ? InitialSize[0].SizeTitle
                    : CurrentSize.label

            dispatch(
                AddProductToCompareList(
                    Id,
                    'https://anatomiyasna.ru' + MainImage.FilePath,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    SizeSlug,
                    SizeLabel,
                    Price,
                    PriceId
                )
            )
            setTimeout(() => {
                CompareRef.current.style.display = 'none'
            }, 1500)
        } else {
            setIsCompared(false)
            dispatch(
                RemoveProductFromCompareList(
                    Id,
                    'https://anatomiyasna.ru' + MainImage.FilePath,
                    CatalogType,
                    BrandTitle,
                    SeriesTitle,
                    Title,
                    SizeSlug,
                    SizeLabel,
                    Price,
                    PriceId
                )
            )
        }
    }

    const OnSelectSize = (data) => {
        // Getting size ID
        let SizeID = null
        for (let i = 0; i < Prices.length; i++) {
            if (Prices[i].SizeSlug === data.value) {
                SizeID = Prices[i].SizeId
            }
        }

        SetLastSelector(
            <Select
                onChange={(data) => {
                    SetCurrentSize(data)
                    OnSelectSize(data)
                    const Size = {}
                    Size.value = data.value
                    Size.label = data.label
                    SetInitialSelectedSize(Size)
                }}
                className={styles.catalog_product_card__selector}
                classNamePrefix={styles.catalog_product_card__selector__inner}
                placeholder={InitialSelectedSize.label}
                styles={colourStyles}
                options={OptionsForSelect}
                isSearchable={false}
                autoFocus={false}
            />
        )

        dispatch(SelectSize(data.value, data.label))
        dispatch(
            LoadProductsBySize(
                SizeID,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax
            )
        )
    }

    // Style for react-select
    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { isFocused }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#0CA5D3' : '',
                color: isFocused ? 'white' : '',
            }
        },
        menuList: (styles) => {
            return {
                ...styles,
                border: '1px solid #0CA5D3',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
            }
        },
    }

    // List of sizes
    const [OptionsForSelect, SetOptionsForSelect] = useState([
        { value: '', label: '' },
    ])

    // Selected Size
    const [CurrentSize, SetCurrentSize] = useState({
        value: Prices[0].SizeSlug,
        label: Prices[0].SizeTitle,
    })

    // Use Effects

    // Init Data for react-select
    useEffect(() => {
        const clone = []
        if (InitialSize.length !== 0) {
            SetInitialSelectedSize({
                value: InitialSize[0].SizeSlug,
                label: InitialSize[0].SizeTitle,
            })
        } else {
            SetInitialSelectedSize({
                value: Prices[0].SizeSlug,
                label: Prices[0].SizeTitle,
            })
        }

        Prices.map((price) => {
            clone.push({ value: price.SizeSlug, label: price.SizeTitle })
        })
        SetOptionsForSelect(clone)
    }, [InitialSize.length])

    useEffect(() => {
        if (InitialSize.length !== 0) {
            SetInitialSelectedSize({
                value: InitialSize[0].SizeSlug,
                label: InitialSize[0].SizeTitle,
            })
        }
    }, [InitialSize])

    // Load blue background for button if products is favorited
    useEffect(() => {
        if (FavoriteListRedux.total && FavoriteListRedux.total.length !== 0) {
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

    // Load blue background for button if products is compared
    useEffect(() => {
        if (CompareListRedux.total && CompareListRedux.total.length !== 0) {
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

    // If we inited data for react-select, we initialize the react-select itself
    useEffect(() => {
        SetSizeSelector(
            <Select
                onChange={(data) => {
                    SetCurrentSize(data)
                    OnSelectSize(data)
                    const Size = {}
                    Size.value = data.value
                    Size.label = data.label
                    SetInitialSelectedSize(Size)
                }}
                className={styles.catalog_product_card__selector}
                classNamePrefix={styles.catalog_product_card__selector__inner}
                placeholder={InitialSelectedSize.label}
                styles={colourStyles}
                options={OptionsForSelect}
                isSearchable={false}
                autoFocus={false}
            />
        )
    }, [OptionsForSelect, InitialSelectedSize])

    const [LastSelector, SetLastSelector] = useState(null)
    const [isFavorite, setIsFavorite] = useState(false)
    const [isCompared, setIsCompared] = useState(false)

    // Variables for render
    const Price =
        InitialSize.length !== 0
            ? InitialSize[0].PriceDiscount.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ' '
              )
            : Prices[0].PriceDiscount.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ' '
              )

    return (
        <div className={styles.catalog_product_card}>
            {/* <PopupsOnProductCard key={uuidv4()} ListSalesList={ListSalesList} /> */}
            <div
                className={`${styles.catalog_product_card__desktop_view_type__single} ${styles.catalog_product_card__desktop_view_type__single__first}`}
            >
                <img
                    className={styles.catalog_product_card__image}
                    src={MainImage.FilePath}
                ></img>
                <div className={styles.catalog_product_card__smalltext}>
                    Купить {CatalogType}
                </div>

                <EqualHeightElement name="CatalogProductCard">
                    <div className={styles.catalog_product_card__title}>
                        <EqualHeightConsumer>
                            {(context) => {
                                {
                                    BrandTitle +
                                        ' ' +
                                        (SeriesTitle || '') +
                                        ' ' +
                                        Title
                                }
                            }}
                        </EqualHeightConsumer>
                    </div>
                </EqualHeightElement>
            </div>
            <div
                className={`${styles.catalog_product_card__desktop_view_type__single} ${styles.catalog_product_card__desktop_view_type__single__third}`}
            >
                <div className={styles.catalog_product_card__price_block}>
                    <div
                        className={
                            styles.catalog_product_card__price_block_left
                        }
                    >
                        <div className={styles.catalog_product_card__price}>
                            {Price} Руб.
                        </div>
                        <div
                            className={
                                styles.catalog_product_card__price_credit
                            }
                        >
                            В рассрочку от 862 руб/мес
                        </div>
                    </div>
                    <div
                        className={
                            styles.catalog_product_card__price_block_right
                        }
                    >
                        <div
                            className={styles.catalog_product_card__stat_block}
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
                                className={`${styles.product_card__button__popup} ${styles.product_card__stats_button__popup}`}
                                ref={CompareRef}
                            >
                                Товар добавлен в{' '}
                                <Link href="/">Сравнение!</Link>
                            </div>
                            {isCompared && (
                                <img
                                    src={WhiteStats}
                                    alt="statimage"
                                    className={
                                        styles.catalog_product_card__stat_block_image
                                    }
                                ></img>
                            )}
                            {!isCompared && (
                                <img
                                    src={StatsImage}
                                    alt="stat-image"
                                    className={
                                        styles.catalog_product_card__stat_block_image
                                    }
                                ></img>
                            )}
                        </div>
                        <div
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
                            className={styles.catalog_product_card__stat_block}
                        >
                            <div
                                ref={FavoriteRef}
                                className={`${styles.product_card__button__popup} ${styles.product_card__stats_button__popup}`}
                            >
                                Товар добавлен в{' '}
                                <Link href="/">Избранное!</Link>
                            </div>
                            {isFavorite && (
                                <img
                                    src={WhiteHeartImage}
                                    className={
                                        styles.catalog_product_card__stat_block_image
                                    }
                                    alt="stat-image"
                                ></img>
                            )}
                            {!isFavorite && (
                                <img
                                    src={HeartImage}
                                    alt="stat-image"
                                    className={
                                        styles.catalog_product_card__stat_block_image
                                    }
                                ></img>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.catalog_product_card__selector_block}>
                    <div
                        className={styles.catalog_product_card__selector_title}
                    >
                        Выберите размер (Ширина*Длина) см.
                    </div>
                    <div className={styles.catalog_product_card__selector}>
                        {!SizeSelector && (
                            <Skeleton
                                variant="rect"
                                width={275.72}
                                height={48}
                            />
                        )}
                        {SizeSelector}
                    </div>
                </div>
                <div className={styles.catalog_product_card__materials}>
                    <ul className={styles.catalog_product_card__materials_list}>
                        <li
                            className={
                                styles.catalog_product_card__materials_list_item
                            }
                        >
                            <img src={Material1}></img>
                        </li>
                        <li
                            className={
                                styles.catalog_product_card__materials_list_item
                            }
                        >
                            <img src={Material2}></img>
                        </li>
                        <li
                            className={
                                styles.catalog_product_card__materials_list_item
                            }
                        >
                            <img src={Material3}></img>
                        </li>
                    </ul>
                </div>
                <div className={styles.catalog_product_card__info_block}>
                    <ul className={styles.catalog_product_card__info_list}>
                        {Properties.map((property, id) => {
                            return (
                                <li
                                    key={id}
                                    className={
                                        styles.catalog_product_card__info_list_item
                                    }
                                >
                                    <div
                                        className={
                                            styles.catalog_product_card__info_list_item_title
                                        }
                                    >
                                        {property.PropertyTitle}
                                    </div>
                                    <span
                                        className={
                                            styles.catalog_product_card__info_list_item_delimiter
                                        }
                                    ></span>
                                    <div
                                        className={
                                            styles.catalog_product_card__info_list_item_material
                                        }
                                    >
                                        {property.Value}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.catalog_product_card__info_wrap}>
                    <button
                        className={styles.catalog_product_card__info_button}
                    >
                        Подробнее
                    </button>
                    <div
                        className={styles.catalog_product_card__stats_buttons}
                    ></div>
                </div>

                <div className={styles.catalog_product_card__delivery_block}>
                    <img
                        src={CarImage}
                        className={styles.catalog_product_card__delivery_image}
                    ></img>

                    <div className={styles.catalog_product_card__delivery_info}>
                        <span className={styles.when}>
                            доставим
                            <span className={styles.blue}> 25.01.2021</span>
                        </span>
                        <span className={styles.price}>
                            доставка{' '}
                            <span className={styles.blue}>1500 руб.</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogProductCard
