import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { SlideDown } from 'react-slidedown'
import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'
import Skeleton from '@material-ui/lab/Skeleton'
import useMedia from './../../hooks/useMedia'

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
import {
    LoadProductsBySize,
    LoadProductsByButtonClick,
    CATALOG_PRODUCT_LIST_SET_EMPTY,
} from './../../actions/CatalogProductList'

import { CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY } from './../../actions/NewCatalogProductList'
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
    InitialSize = [],
    oldMin,
    oldMax,
    catalogSlug,
    subCatalogSlug = null,
    stylesForViewType,
    stylesForDesktopViewType,
    viewType,
    desktopViewType = 'several',
    ListSalesList,
    IsMobile,
    OptionsList,
    Labels,
    Gifts,
}) => {
    const breakpoint769 = useMedia(769)

    const [viewTypeStyles, setViewTypeStyles] = useState({
        catalog_product_card: {},
        catalog_product_card__image: {},
        catalog_product_card__info_button: {},
        catalog_product_card__info_wrap: {},
        catalog_product_card__materials_list_item_img: {},
        catalog_product_card__stat_block: {},
        catalog_product_card__stat_block_image: {},
        catalog_product_card__stats_buttons: {},
    })
    useEffect(() => {
        const viewTypeStylesClone = {
            catalog_product_card:
                (stylesForViewType && stylesForViewType.catalog_product_card) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.catalog_product_card),
            catalog_product_card__image:
                (stylesForViewType &&
                    stylesForViewType.catalog_product_card__image) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.catalog_product_card__image),
            catalog_product_card__info_button:
                (stylesForViewType &&
                    stylesForViewType.catalog_product_card__info_button) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.catalog_product_card__info_button),
            catalog_product_card__info_wrap:
                (stylesForViewType &&
                    stylesForViewType.catalog_product_card__info_wrap) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.catalog_product_card__info_wrap),
            catalog_product_card__materials_list_item_img:
                (stylesForViewType &&
                    stylesForViewType.catalog_product_card__materials_list_item_img) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.catalog_product_card__materials_list_item_img),
            catalog_product_card__stat_block:
                (stylesForViewType &&
                    stylesForViewType.catalog_product_card__stat_block) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.stylesForViewType),
            catalog_product_card__stat_block_image:
                (stylesForViewType &&
                    stylesForViewType.catalog_product_card__stat_block_image) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.catalog_product_card__stat_block_image),

            catalog_product_card__stats_buttons:
                (stylesForViewType &&
                    stylesForViewType.catalog_product_card__stats_buttons) ||
                (stylesForDesktopViewType &&
                    stylesForDesktopViewType.catalog_product_card__stats_buttons),
        }

        setViewTypeStyles(viewTypeStylesClone)
    }, [stylesForViewType, stylesForDesktopViewType, desktopViewType])

    // Redux
    const dispatch = useDispatch()
    const FavoriteListRedux = useSelector(
        (store) => store.FavoritesProductsListReducer
    )
    const CompareListRedux = useSelector(
        (store) => store.CompareProductsListReducer
    )
    const SelectedSizeRedux = useSelector((store) => store.SelectedSizeReducer)

    // Refs
    const FavoriteRef = useRef(null)
    const CompareRef = useRef(null)
    const [SizeSelector, SetSizeSelector] = useState(null)
    const [InitialSelectedSize, SetInitialSelectedSize] = useState({
        value: '',
        labal: '',
    })
    const [placeholderSize, setPlaceholderSize] = useState(
        InitialSelectedSize.label
    )

    const [title, setTitle] = useState(null)

    // Handler
    const onAddToFavoriteClickHandler = () => {
        if (!isFavorite) {
            setIsFavorite(true)
            FavoriteRef.current.style.display = 'block'

            const Price =
                InitialSize.length !== 0
                    ? InitialSize[0].PriceDiscount
                    : Prices[0].PriceDiscount
            const PriceId =
                InitialSize.length !== 0 ? InitialSize[0].Id : Prices[0].Id
            const SizeSlug =
                InitialSize.length !== 0
                    ? InitialSize[0].SizeSlug
                    : CurrentSize.value
            const SizeLabel =
                InitialSize.length !== 0
                    ? InitialSize[0].SizeTitle
                    : CurrentSize.label

            dispatch(
                AddProductToFavoriteList(
                    Id,
                    MainImage.FilePath,
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
                    MainImage.FilePath,
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
                InitialSize.length !== 0
                    ? InitialSize[0].PriceDiscount
                    : Prices[0].PriceDiscount
            const PriceId =
                InitialSize.length !== 0 ? InitialSize[0].Id : Prices[0].Id
            const SizeSlug =
                InitialSize.length !== 0
                    ? InitialSize[0].SizeSlug
                    : CurrentSize.value
            const SizeLabel =
                InitialSize.length !== 0
                    ? InitialSize[0].SizeTitle
                    : CurrentSize.label

            dispatch(
                AddProductToCompareList(
                    Id,
                    MainImage.FilePath,
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
                    MainImage.FilePath,
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
                isDisabled={OptionsForSelect.length === 1 ? true : false}
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
                placeholder={placeholderSize}
                styles={colourStyles}
                options={OptionsForSelect}
                isSearchable={false}
                autoFocus={false}
            />
        )

        dispatch({ type: CATALOG_PRODUCT_LIST_SET_EMPTY })
        dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY })
        dispatch(SelectSize(data.value, data.label, SizeID))
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
        control: (styles) => {
            if (OptionsForSelect.length > 1) {
                return {
                    ...styles,
                    backgroundColor: 'white',
                    padding: !IsMobile ? '7px 0px 7px 7px' : '1px 0',
                    fontSize: IsMobile ? '12px' : '',
                    textAlign: 'center',
                    height: !IsMobile ? '50px' : '40px',
                }
            } else {
                return {
                    ...styles,
                    backgroundColor: '#F5F5F5',
                    color: '#888',
                    border: '1px solid #ccc !important',
                    fontSize: IsMobile ? '12px' : '',
                    padding: !IsMobile ? '7px 0px 7px 7px' : '1px 0',
                    textAlign: 'center',
                    height: !IsMobile ? '50px' : '40px',
                }
            }
        },
        container: (styles) => {
            return {
                ...styles,
            }
        },
        option: (styles, { isFocused }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#0CA5D3' : '',
                color: isFocused ? 'white' : '',
            }
        },
        placeholder: (styles) => {
            return {
                ...styles,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
            }
        },
        dropdownIndicator: (styles) => {
            if (OptionsForSelect.length === 1) {
                return {
                    ...styles,
                    position: 'absolute',
                    visibility: 'hidden',
                }
            } else {
                return {
                    ...styles,
                    visibility: 'visible',
                    position: 'absolute',
                    right: '0px',
                }
            }
        },
        indicatorSeparator: (styles) => {
            return {
                ...styles,
                display: 'none',
            }
        },
        menuList: (styles) => {
            return {
                ...styles,
                position: 'relative',
                border: '1px solid #0CA5D3',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                zIndex: 100,
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

    useEffect(() => {
        setTitle(
            <EqualHeightElement name="CatalogProductCard">
                <div
                    style={PriceDiff !== 0 ? { marginBottom: '10px' } : {}}
                    className={styles.catalog_product_card__title}
                >
                    {BrandTitle + ' ' + (SeriesTitle || '') + ' ' + Title}
                    {/* Id: {Id} */}
                </div>
            </EqualHeightElement>
        )
    }, [])

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
            const additonal =
                price.OverallWidth && price.OverallLength
                    ? ` (габ. ${price.OverallWidth}*${price.OverallLength})`
                    : ''

            clone.push({
                value: price.SizeSlug,
                label: price.SizeTitle + additonal,
            })
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
                isDisabled={OptionsForSelect.length === 1 ? true : false}
                onChange={(data) => {
                    SetCurrentSize(data)
                    OnSelectSize(data)
                    const Size = {}
                    Size.value = data.value
                    Size.label = data.label
                    SetInitialSelectedSize(Size)
                }}
                className="main_filter__selector"
                classNamePrefix="main_filter__selector--inner"
                placeholder={
                    SelectedSizeRedux.selectedSizeTitle ||
                    OptionsForSelect[0].label
                }
                styles={colourStyles}
                options={OptionsForSelect}
                isSearchable={false}
                autoFocus={false}
            />
        )
    }, [OptionsForSelect, InitialSelectedSize, SelectedSizeRedux])

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

    const PriceRaw =
        InitialSize.length !== 0
            ? InitialSize[0].PriceDiscount
            : Prices[0].PriceDiscount

    const PriceOld =
        InitialSize.length !== 0
            ? InitialSize[0].PriceBasic
            : Prices[0].PriceBasic

    const PriceDiff = PriceOld - PriceRaw

    const DeliveryObject =
        InitialSize.length !== 0 ? InitialSize[0].Delivery : Prices[0].Delivery

    const DeliveryPrice =
        DeliveryObject && DeliveryObject.Price
            ? parseInt(DeliveryObject.Price, 10) + ' руб.'
            : 'бесплатно'

    let DeliveryDate
    if (DeliveryObject.Days === 0) {
        DeliveryDate = 'сегодня'
    } else if (DeliveryObject.Days === 1) {
        DeliveryDate = 'завтра'
    } else if (DeliveryObject.Days > 1 && DeliveryObject.Days < 62) {
        DeliveryDate = DeliveryObject.Date
    } else {
        DeliveryDate = 'на заказ'
    }

    const SalePercent =
        PriceDiff !== 0 ? Math.floor(100 - (PriceRaw * 100) / PriceOld) : null

    const InStock =
        InitialSize.length !== 0
            ? InitialSize[0].Delivery.InStock
            : Prices[0].Delivery.InStock

    return (
        <div
            style={viewTypeStyles.catalog_product_card}
            className={styles.catalog_product_card}
        >
            <PopupsOnProductCard
                Labels={Labels}
                SalePercent={SalePercent}
                key={uuidv4()}
                ListSalesList={ListSalesList}
                IsMobile={IsMobile}
                desktopViewType={desktopViewType}
                Gifts={Gifts}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {breakpoint769 && (
                    <div
                        style={{
                            height: viewType === 'single' ? '208px' : '113px',
                            width: '100%',
                            position: 'relative',
                        }}
                        className="image-wrapper"
                    >
                        <Image layout="fill" src={MainImage.FilePath} />
                    </div>
                )}
                {!breakpoint769 && !IsMobile && (
                    <div
                        style={{
                            height:
                                desktopViewType === 'several'
                                    ? '172px'
                                    : '172px',
                            width:
                                desktopViewType === 'several'
                                    ? '272px'
                                    : '272px',
                            position: 'relative',
                            marginBottom: '32px',
                        }}
                        className="image-wrapper"
                    >
                        <Image layout="fill" src={MainImage.FilePath} />
                    </div>
                )}

                {!breakpoint769 && IsMobile && (
                    <Image layout="fill" src={MainImage.FilePath} />
                )}

                <div className={styles.catalog_product_card__smalltext}>
                    Купить {CatalogType}
                </div>

                {title}
            </div>
            <div
                style={
                    !breakpoint769 && desktopViewType === 'single'
                        ? { order: 3, width: '276px' }
                        : {}
                }
                className={`${styles.catalog_product_card__desktop_view_type__single} ${styles.catalog_product_card__desktop_view_type__single__third}`}
            >
                <EqualHeightElement name="CatalogProductCard__Price">
                    <div className={styles.catalog_product_card__price_block}>
                        <div
                            className={
                                styles.catalog_product_card__price_block_left
                            }
                        >
                            {PriceDiff !== 0 && (
                                <div
                                    style={
                                        !IsMobile
                                            ? {
                                                  position: 'absolute',
                                              }
                                            : {
                                                  position: 'absolute',
                                                  left: '50%',
                                                  transform:
                                                      'translateX(-100%)',
                                              }
                                    }
                                    className={
                                        styles.product_card__price_discount
                                    }
                                >
                                    <div
                                        className={
                                            styles.product_card__price_prev
                                        }
                                    >
                                        <span>
                                            {PriceOld.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ' '
                                            )}
                                            <div
                                                className={
                                                    styles.product_card__price_diff
                                                }
                                            >
                                                -
                                                {PriceDiff.toString().replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ' '
                                                )}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div className={styles.catalog_product_card__price}>
                                {Price} Руб.
                            </div>
                            <div
                                className={
                                    styles.catalog_product_card__price_credit
                                }
                            >
                                В рассрочку от {Math.ceil(PriceRaw / 6)} руб/мес
                            </div>
                        </div>

                        <div
                            className={
                                styles.catalog_product_card__price_block_right
                            }
                        >
                            <div
                                className={
                                    styles.catalog_product_card__stat_block
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
                                className={
                                    styles.catalog_product_card__stat_block
                                }
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
                </EqualHeightElement>
                <span className={styles.line}></span>
                <div className={styles.catalog_product_card__selector_block}>
                    <div
                        className={styles.catalog_product_card__selector_title}
                    >
                        Выберите размер (Ширина*Длина) см.
                    </div>
                    <div className={styles.catalog_product_card__selector}>
                        {/* {!SizeSelector && (
                            <Skeleton
                                variant="rect"
                                width={275.72}
                                height={48}
                            />
                        )} */}
                        {SizeSelector}
                    </div>
                </div>
                <span className={styles.line}></span>

                <div
                    style={
                        !breakpoint769 && desktopViewType === 'single'
                            ? { display: 'block' }
                            : { display: 'none' }
                    }
                >
                    <div className={styles.catalog_product_card__info_wrap}>
                        <button
                            className={styles.catalog_product_card__info_button}
                        >
                            Подробнее
                        </button>
                        <div
                            className={
                                styles.catalog_product_card__stats_buttons
                            }
                        ></div>
                    </div>

                    <div
                        className={styles.catalog_product_card__delivery_block}
                    >
                        <img
                            src={CarImage}
                            className={
                                styles.catalog_product_card__delivery_image
                            }
                        ></img>

                        <div
                            className={
                                styles.catalog_product_card__delivery_info
                            }
                        >
                            <span className={styles.when}>
                                доставим
                                <span className={styles.blue}> </span>
                            </span>
                            <span className={styles.price}>
                                доставка{' '}
                                <span className={styles.blue}>
                                    {DeliveryPrice} руб.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={styles.equalhight__wrapper}
                style={
                    !breakpoint769 && desktopViewType === 'single'
                        ? { order: 2, width: '280px' }
                        : {}
                }
            >
                <div className={styles.catalog_product_card__materials}>
                    <ul className={styles.catalog_product_card__materials_list}>
                        {OptionsList &&
                            OptionsList.map((opt, index) => {
                                if (
                                    index > 5 &&
                                    index != OptionsList.length - 1
                                ) {
                                    return
                                } else if (
                                    index > 5 &&
                                    index === OptionsList.length - 1
                                ) {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                styles.catalog_product_card__materials_list_item
                                            }
                                        >
                                            <span>
                                                + {OptionsList.length - 5} цвета
                                            </span>
                                        </li>
                                    )
                                }
                                return (
                                    <li
                                        key={index}
                                        className={
                                            styles.catalog_product_card__materials_list_item
                                        }
                                    >
                                        <Image
                                            src={
                                                'https://www.anatomiyasna.ru' +
                                                opt.data.Image.FilePath
                                            }
                                            height={IsMobile ? 12.5 : 25}
                                            width={IsMobile ? 12.5 : 25}
                                        />
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                {OptionsList && OptionsList.length > 0 && (
                    <span className={styles.line}></span>
                )}

                <EqualHeightElement name="CatalogProductCard__options">
                    <div className={styles.catalog_product_card__info_block}>
                        <ul className={styles.catalog_product_card__info_list}>
                            {Properties.map((property, id) => {
                                const floored = parseInt(property.Value, 10)
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
                                            {isNaN(floored)
                                                ? property.Value
                                                : floored}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </EqualHeightElement>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: ' column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div className={styles.catalogproductcard__stock}>
                        <EqualHeightElement name="CatalogProductCard__stock">
                            {InStock && (
                                <div
                                    className={
                                        styles.catalog_product_card__instockblock
                                    }
                                >
                                    {InStock && (
                                        <span
                                            style={
                                                !InStock ? { opacity: 0 } : {}
                                            }
                                            className={
                                                styles.catalog_product_card__instockblock__icon
                                            }
                                        ></span>
                                    )}{' '}
                                    <span
                                        style={!InStock ? { opacity: 0 } : {}}
                                        className={
                                            styles.catalog_product_card__instockblock__text
                                        }
                                    >
                                        {InStock ? 'Есть в наличии' : ''}
                                    </span>
                                </div>
                            )}

                            {desktopViewType === 'several' && (
                                <div
                                    className={
                                        styles.catalog_product_card__info_wrap
                                    }
                                >
                                    <button
                                        className={
                                            styles.catalog_product_card__info_button
                                        }
                                    >
                                        Подробнее
                                    </button>
                                    <div
                                        className={
                                            styles.catalog_product_card__stats_buttons
                                        }
                                    ></div>
                                </div>
                            )}
                        </EqualHeightElement>
                    </div>

                    {breakpoint769 && (
                        <div className={styles.mobile__btns}>
                            <div
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
                                className={styles.mobile__btns__item}
                            >
                                <div
                                    className={
                                        styles.mobile__btns__image_wrapper
                                    }
                                >
                                    {isCompared && (
                                        <Image
                                            src={WhiteStats}
                                            width={25}
                                            height={25}
                                            className={
                                                styles.mobile__btns__image
                                            }
                                        />
                                    )}
                                    {!isCompared && (
                                        <Image
                                            src={StatsImage}
                                            width={25}
                                            height={25}
                                            className={
                                                styles.mobile__btns__image
                                            }
                                        />
                                    )}
                                </div>
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
                                onClick={() => onAddToFavoriteClickHandler()}
                                className={styles.mobile__btns__item}
                            >
                                <div
                                    className={
                                        styles.mobile__btns__image_wrapper
                                    }
                                >
                                    {isFavorite && (
                                        <Image
                                            src={WhiteHeartImage}
                                            width={25}
                                            height={25}
                                            className={
                                                styles.mobile__btns__image
                                            }
                                        />
                                    )}
                                    {!isFavorite && (
                                        <Image
                                            src={HeartImage}
                                            width={25}
                                            height={25}
                                            className={
                                                styles.mobile__btns__image
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {desktopViewType === 'several' && (
                        <div
                            className={
                                styles.catalog_product_card__delivery_block
                            }
                        >
                            <img
                                src={CarImage}
                                className={
                                    styles.catalog_product_card__delivery_image
                                }
                            ></img>

                            <div
                                className={
                                    styles.catalog_product_card__delivery_info
                                }
                            >
                                <span className={styles.when}>
                                    доставим
                                    <span className={styles.blue}>
                                        {' '}
                                        {DeliveryDate}
                                    </span>
                                </span>
                                <span className={styles.price}>
                                    доставка{' '}
                                    <span className={styles.blue}>
                                        {DeliveryPrice}
                                    </span>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CatalogProductCard
