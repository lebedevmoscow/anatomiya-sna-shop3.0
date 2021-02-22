import { useEffect, useState, useRef } from 'react'
import styles from './../../styles/components/ViewType/MobileSingle.module.sass'
// import PopupsOnProductCard from './../Popups/PopupsOnProductCard'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Select from 'react-select'
import StatsImage from './../../assets/svg/stats.svg'
import WhiteStatsImage from './../../assets/svg/white-stats.svg'
import HeartImage from './../../assets/svg/heart.svg'
import WhiteHeartImage from './../../assets/svg/white-heart.svg'
import CarImage from './../../assets/svg/car.svg'
import { CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY } from './../../actions/NewCatalogProductList'
import { SelectSize } from './../../actions/SelectedSize'
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

const EqualHeightElement = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeightElement),
    { ssr: false }
)

const PopupsOnProductCard = dynamic(
    () => import('./../Popups/PopupsOnProductCard'),
    { ssr: false }
)

const MobileSingle = ({
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
    const [SizeSelector, SetSizeSelector] = useState(null)
    const [InitialSelectedSize, SetInitialSelectedSize] = useState({
        value: '',
        labal: '',
    })
    const [OptionsForSelect, SetOptionsForSelect] = useState([
        { value: '', label: '' },
    ])

    const dispatch = useDispatch()
    const FavoriteListRedux = useSelector(
        (store) => store.FavoritesProductsListReducer
    )
    const CompareListRedux = useSelector(
        (store) => store.CompareProductsListReducer
    )
    const SelectedSizeRedux = useSelector((store) => store.SelectedSizeReducer)

    // Selected Size
    const [CurrentSize, SetCurrentSize] = useState({
        value: Prices[0].SizeSlug,
        label: Prices[0].SizeTitle,
    })

    const [isFavorite, setIsFavorite] = useState(false)
    const [isCompared, setIsCompared] = useState(false)

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
                zIndex: 0,
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
                    color: '#4d4d4d',
                    transform: 'scale(0.9)',
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
        menu: (styles) => {
            return {
                ...styles,
                zIndex: 100,
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

    const onAddToFavoriteClickHandler = () => {
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

        if (!isFavorite) {
            setIsFavorite(true)

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

        if (!isCompared) {
            setIsCompared(true)

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

    const SalePercent =
        PriceDiff !== 0 ? Math.floor(100 - (PriceRaw * 100) / PriceOld) : null

    const InStock =
        InitialSize.length !== 0
            ? InitialSize[0].Delivery.InStock
            : Prices[0].Delivery.InStock

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

    return (
        <div className={styles.catalog_product_card}>
            <PopupsOnProductCard
                Labels={Labels}
                SalePercent={SalePercent}
                key={uuidv4()}
                ListSalesList={ListSalesList}
                IsMobile={IsMobile}
                desktopViewType={desktopViewType}
                Gifts={Gifts}
            />
            <div className={styles.catalog_product_card__column}>
                <div
                    className={
                        styles.catalog_product_card__image_wraper_several
                    }
                >
                    <img
                        style={{
                            width: '95%',
                            display: 'block',
                            margin: '0 auto',
                        }}
                        src={MainImage.FilePath}
                    ></img>
                    {/* <Image layout="fill" src={MainImage.FilePath} /> */}
                </div>
                <div className={styles.catalog_product_card__smalltext}>
                    Купить {CatalogType}
                </div>
                {/* <EqualHeightElement name="CatalogProductCard"> */}
                <div
                    style={PriceDiff !== 0 ? { marginBottom: '10px' } : {}}
                    className={styles.catalog_product_card__title}
                >
                    {BrandTitle + ' ' + (SeriesTitle || '') + ' ' + Title}
                </div>
                {/* </EqualHeightElement> */}
            </div>
            {/* <EqualHeightElement name="CatalogProductCard__Price"> */}
            <div className={`${styles.after_title}`}>
                <div className={styles.catalog_product_card__price_block}>
                    <div
                        className={
                            styles.catalog_product_card__price_block_left
                        }
                    >
                        {PriceDiff !== 0 && (
                            <div
                                className={styles.product_card__price_discount}
                            >
                                <div
                                    className={styles.product_card__price_prev}
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
                </div>
            </div>
            {/* </EqualHeightElement> */}

            <span
                style={desktopViewType === 'single' ? { display: 'none' } : {}}
                className={styles.line}
            ></span>
            <div className={styles.catalog_product_card__selector_block}>
                <div className={styles.catalog_product_card__selector_title}>
                    Выберите размер (Ширина*Длина) см.
                </div>
                <div className={styles.catalog_product_card__selector}>
                    {SizeSelector}
                </div>
            </div>
            <span className={styles.line}></span>
            <div className={styles.equalhight__wrapper}>
                <div className={styles.catalog_product_card__materials}>
                    <ul className={styles.catalog_product_card__materials_list}>
                        {OptionsList &&
                            OptionsList.map((opt, index) => {
                                if (
                                    index > 4 &&
                                    index != OptionsList.length - 2
                                ) {
                                    return
                                } else if (
                                    index > 4 &&
                                    index === OptionsList.length - 2
                                ) {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                styles.catalog_product_card__materials_list_item
                                            }
                                        >
                                            <span>
                                                + {OptionsList.length - 4} цвета
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
                                            layout={'fill'}
                                            // width={30.5}
                                            // height={30.5}
                                        />
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                {OptionsList && OptionsList.length > 0 && (
                    <span className={styles.line}></span>
                )}

                <div>
                    {/* <EqualHeightElement name="Propertyes_height"> */}
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
                    {/* </EqualHeightElement> */}
                </div>

                {InStock && (
                    <div className={styles.catalog_product_card__instockblock}>
                        <span
                            className={
                                styles.catalog_product_card__instockblock__icon
                            }
                        ></span>{' '}
                        <span
                            style={{ marginLeft: '5px' }}
                            className={
                                styles.catalog_product_card__instockblock__text
                            }
                        >
                            {' '}
                            Есть в наличии
                        </span>
                    </div>
                )}

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <div className={styles.wrap_single}>
                        <div className={styles.catalogproductcard__stock}>
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
                        </div>
                    </div>

                    <div className={styles.mobile__btns}>
                        <div
                            onClick={() => onAddToCompareClickHandler()}
                            style={
                                !isCompared
                                    ? {
                                          background: '#fff',
                                      }
                                    : { background: '#0CA5D3' }
                            }
                            className={styles.mobile__btns__item}
                        >
                            <div className={styles.mobile__btns__image_wrapper}>
                                {isCompared && (
                                    <Image
                                        src={WhiteStatsImage}
                                        width={25}
                                        height={25}
                                        className={styles.mobile__btns__image}
                                    />
                                )}
                                {!isCompared && (
                                    <Image
                                        src={StatsImage}
                                        width={25}
                                        height={25}
                                        className={styles.mobile__btns__image}
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            onClick={() => onAddToFavoriteClickHandler()}
                            style={
                                !isFavorite
                                    ? {
                                          background: '#fff',
                                      }
                                    : { background: '#0CA5D3' }
                            }
                            className={styles.mobile__btns__item}
                        >
                            <div className={styles.mobile__btns__image_wrapper}>
                                {isFavorite && (
                                    <Image
                                        src={WhiteHeartImage}
                                        width={25}
                                        height={25}
                                        className={styles.mobile__btns__image}
                                    />
                                )}
                                {!isFavorite && (
                                    <Image
                                        src={HeartImage}
                                        width={25}
                                        height={25}
                                        className={styles.mobile__btns__image}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.catalog_product_card__delivery_block}>
                    <Image src={CarImage} width={50} height={50} />
                    {/* <img
                        src={CarImage}
                        className={styles.catalog_product_card__delivery_image}
                    ></img> */}
                    <div className={styles.catalog_product_card__delivery_info}>
                        <span className={styles.when}>
                            доставим
                            <span className={styles.blue}> {DeliveryDate}</span>
                        </span>
                        <span className={styles.price}>
                            доставка{' '}
                            <span className={styles.blue}>{DeliveryPrice}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSingle
