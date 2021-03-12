import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Select from 'react-select'
import Skeleton from '@material-ui/lab/Skeleton'
import { SlideDown } from 'react-slidedown'
import OutsideClickHandler from 'react-outside-click-handler'
import InputMask from 'react-input-mask'
import Link from 'next/link'

// Images
import StatsImage from './../../assets/svg/stats.svg'
import WhiteStatsImage from './../../assets/svg/white-stats.svg'
import HeartImage from './../../assets/svg/heart.svg'
import WhiteHeartImage from './../../assets/svg/white-heart.svg'
import MaterialImage1 from './../../assets/materials/material1.jpg'
import MaterialImage2 from './../../assets/materials/material2.jpg'
import MaterialImage3 from './../../assets/materials/material3.jpg'
import FoundamentImage1 from './../../TEMP/foundament/1.jpg'
import FoundamentImage2 from './../../TEMP/foundament/2.jpg'
import FoundamentImage3 from './../../TEMP/foundament/3.jpg'

// Utils
import { getDataBySizeId } from './../../utils/getProductSizes'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
    PRODUCT_PAGE_SIZE_CHANGED,
    PRODUCT_PAGE_SET_DATA,
} from './../../actions/ProductPage'

import {
    AddProductToFavoriteList,
    RemoveProductFromFavoriteList,
} from './../../actions/FavoritesProductsList'
import {
    AddProductToCompareList,
    RemoveProductFromCompareList,
} from './../../actions/CompareProductsList'

// Styles
import styles from './../../styles/components/Products/ProductPageInfoBlock.module.sass'

const ProductPageInfoBlock = ({ sizes, prices }) => {
    const dispatch = useDispatch()
    const ProductPageReducer = useSelector((store) => store.ProductPageReducer)

    // Refs
    const FavoriteRef = useRef(null)
    const CompareRef = useRef(null)

    const FavoriteListRedux = useSelector(
        (store) => store.FavoritesProductsListReducer
    )
    const CompareListRedux = useSelector(
        (store) => store.CompareProductsListReducer
    )

    const [isFavorite, setIsFavorite] = useState(false)
    const [isCompared, setIsCompared] = useState(false)

    // Load blue background for button if products is favorited
    useEffect(() => {
        if (FavoriteListRedux.total && FavoriteListRedux.total.length !== 0) {
            let flag = false
            FavoriteListRedux.total.map((item) => {
                if (item.ProductId === ProductPageReducer.info.id) {
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
                if (item.ProductId === ProductPageReducer.info.id) {
                    flag = true
                    setIsCompared(true)
                }
            })
            if (!flag) {
                setIsCompared(false)
            }
        }
    }, [CompareListRedux])

    const onAddToFavoriteClickHandler = () => {
        const Price = ProductPageReducer.data.PriceDiscount
        const PriceId = ProductPageReducer.data.Id
        const SizeSlug = ProductPageReducer.data.SizeSlug
        const SizeLabel = ProductPageReducer.data.SizeTitle

        if (!isFavorite) {
            setIsFavorite(true)
            FavoriteRef.current.style.display = 'block'

            dispatch(
                AddProductToFavoriteList(
                    ProductPageReducer.info.id,
                    ProductPageReducer.info.image,
                    ProductPageReducer.info.catalogType,
                    ProductPageReducer.info.brandTitle,
                    ProductPageReducer.info.seriesTitle,
                    ProductPageReducer.info.title,
                    ProductPageReducer.selectedValue,
                    ProductPageReducer.selectedTitle,
                    ProductPageReducer.data.PriceDiscount,
                    ProductPageReducer.data.Id
                )
            )
            setTimeout(() => {
                FavoriteRef.current.style.display = 'none'
            }, 1500)
        } else {
            setIsFavorite(false)
            dispatch(
                RemoveProductFromFavoriteList(
                    ProductPageReducer.info.id,
                    ProductPageReducer.info.image,
                    ProductPageReducer.info.catalogType,
                    ProductPageReducer.info.brandTitle,
                    ProductPageReducer.info.seriesTitle,
                    ProductPageReducer.info.title,
                    ProductPageReducer.selectedValue,
                    ProductPageReducer.selectedTitle,
                    ProductPageReducer.data.PriceDiscount,
                    ProductPageReducer.data.Id
                )
            )
        }
    }

    const onAddToCompareClickHandler = () => {
        const Price = ProductPageReducer.data.PriceDiscount
        const PriceId = ProductPageReducer.data.Id
        const SizeSlug = ProductPageReducer.data.SizeSlug
        const SizeLabel = ProductPageReducer.data.SizeTitle

        if (!isCompared) {
            setIsCompared(true)
            CompareRef.current.style.display = 'block'

            dispatch(
                AddProductToCompareList(
                    ProductPageReducer.info.id,
                    ProductPageReducer.info.image,
                    ProductPageReducer.info.catalogType,
                    ProductPageReducer.info.brandTitle,
                    ProductPageReducer.info.seriesTitle,
                    ProductPageReducer.info.title,
                    ProductPageReducer.selectedValue,
                    ProductPageReducer.selectedTitle,
                    ProductPageReducer.data.PriceDiscount,
                    ProductPageReducer.data.Id
                )
            )
            setTimeout(() => {
                CompareRef.current.style.display = 'none'
            }, 1500)
        } else {
            setIsCompared(false)
            dispatch(
                RemoveProductFromCompareList(
                    ProductPageReducer.info.id,
                    ProductPageReducer.info.image,
                    ProductPageReducer.info.catalogType,
                    ProductPageReducer.info.brandTitle,
                    ProductPageReducer.info.seriesTitle,
                    ProductPageReducer.info.title,
                    ProductPageReducer.selectedValue,
                    ProductPageReducer.selectedTitle,
                    ProductPageReducer.data.PriceDiscount,
                    ProductPageReducer.data.Id
                )
            )
        }
    }

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'white',
            height: '60px',
            borderRadius: '5px',
            border: '1px solid #0ca5d3',
            font: '24px/60px Lato,sans-serif',
        }),
        option: (styles, { data, isFocused }) => {
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
                color: '#444',
            }
        },

        menuList: (styles, { data }) => {
            return {
                ...styles,
                border: '1px solid #0CA5D3',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
            }
        },
    }

    const options = sizes.map((size) => {
        return {
            label: size.title,
            value: size.slug,
            id: size.id,
            sizeId: size.sizeId,
        }
    })

    const [cartPopupClosed, setCartPopupClosed] = useState(true)
    const [buyOneClickPopupClosed, setBuyOneClickPopupClosed] = useState(true)
    const [giftPopupIsClosed, setGiftPopupIsClosed] = useState(true)
    const [savePricePopupIsClosed, setSavePricePopupIsClosed] = useState(true)

    let prevPrice
    let discountPrice
    let differencePrice

    if (
        ProductPageReducer.data.PriceBasic ===
        ProductPageReducer.data.PriceDiscount
    ) {
        prevPrice = null
        discountPrice = ProductPageReducer.data.PriceDiscount.toString().replace(
            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
            '$1 '
        )
        differencePrice = 0
    } else if (
        ProductPageReducer.data.PriceBasic !==
        ProductPageReducer.data.PriceDiscount
    ) {
        differencePrice = (
            ProductPageReducer.data.PriceBasic -
            ProductPageReducer.data.PriceDiscount
        )
            .toString()
            .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        prevPrice = ProductPageReducer.data.PriceBasic.toString().replace(
            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
            '$1 '
        )
        discountPrice = ProductPageReducer.data.PriceDiscount.toString().replace(
            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
            '$1 '
        )
    }

    return (
        <div className={styles.product_page__info}>
            <div className={styles.product_page__line_with_buttons}>
                <div className={styles.big_button}>
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setGiftPopupIsClosed(true)
                        }}
                    >
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                            onClick={() => setGiftPopupIsClosed((p) => !p)}
                        >
                            <span>+101 </span>
                            cнов в подарок!
                        </p>

                        <SlideDown
                            className={styles.product_page_gift_popup}
                            closed={giftPopupIsClosed}
                        >
                            <div
                                style={{
                                    padding: '30px 20px 1px',
                                    paddingBottom: '30px',
                                }}
                            >
                                <div className={styles.title}>
                                    Бонусная программа Анатомии Сна
                                </div>
                                <div className={styles.text}>
                                    Оформите заказ через корзину и получите
                                    бонусные сны в подарок! Скидка действует на
                                    весь заказ при условии онлайн-оплаты.
                                    Подробную информацию уточняйте у
                                    продавцов-консультантов!
                                </div>
                            </div>
                        </SlideDown>
                    </OutsideClickHandler>
                </div>

                <div
                    onClick={() => onAddToCompareClickHandler()}
                    className={styles.button}
                    style={
                        isCompared
                            ? { background: '#0EA8D5' }
                            : { background: '#fff' }
                    }
                >
                    <Image
                        src={isCompared ? WhiteStatsImage : StatsImage}
                        width={30}
                        height={30}
                    />
                    <div
                        ref={CompareRef}
                        className={`${styles.product_card__button__popup} ${styles.product_card__stats_button__popup}`}
                    >
                        {/* Товар добавлен в <Link href="/">Сравнение!</Link> */}
                    </div>
                </div>
                <div
                    onClick={() => onAddToFavoriteClickHandler()}
                    className={styles.button}
                    style={
                        isFavorite
                            ? { background: '#0EA8D5' }
                            : { background: '#fff' }
                    }
                >
                    <Image
                        src={isFavorite ? WhiteHeartImage : HeartImage}
                        width={30}
                        height={30}
                    />
                    <div
                        ref={FavoriteRef}
                        className={`${styles.product_card__button__popup} ${styles.product_card__stats_button__popup}`}
                    >
                        {/* Товар добавлен в <Link href="/">Избранное!</Link> */}
                    </div>
                </div>
            </div>
            <div className={styles.product_page__line_with_buttons}>
                <div className={styles.big_button}>
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setSavePricePopupIsClosed(true)
                        }}
                    >
                        <p
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                            onClick={() => setSavePricePopupIsClosed((p) => !p)}
                        >
                            Хотите <span>сохранить цену?</span>
                        </p>

                        <SlideDown
                            className={styles.savepricepopup}
                            closed={savePricePopupIsClosed}
                        >
                            <div
                                style={{
                                    padding: '30px 20px 1px',
                                    paddingBottom: '30px',
                                }}
                            >
                                <div className={styles.title}>
                                    Хотите сохранить цену?
                                </div>
                                <div className={styles.text}>
                                    Нет возможности купить сейчас? Не упустите
                                    выгодную цену! <br />
                                    Оформите заказ с текущей скидкой <br />и
                                    оплатите его в течение 30 дней
                                </div>
                                <div className={styles.form_wrapper}>
                                    <div className={styles.subform_wrapper}>
                                        <div className={styles.form_title}>
                                            Ваше имя
                                        </div>
                                        <div className={styles.input_wrapper}>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className={styles.subform_wrapper}>
                                        <div className={styles.form_title}>
                                            Телефон
                                        </div>
                                        <div className={styles.input_wrapper}>
                                            <InputMask
                                                placeholder={
                                                    '+7 (___) ___  __ __'
                                                }
                                                mask="+7 (999) 99 99"
                                                maskChar="_"
                                            />
                                        </div>
                                    </div>
                                    <button className={styles.button}>
                                        Заказать
                                    </button>
                                    <div className={styles.copy}>
                                        Нажимая на кнопку, я даю согласие на{' '}
                                        <Link href="/">
                                            <a>
                                                обработку персональных данных{' '}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideDown>
                    </OutsideClickHandler>
                </div>
                <div className={styles.button}>
                    <svg
                        viewBox="0 0 24 24"
                        id="share"
                        xmlns="https://www.w3.org/2000/svg"
                    >
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                    </svg>
                </div>
                <div className={styles.button}>
                    <svg
                        viewBox="0 0 24 24"
                        id="print"
                        xmlns="https://www.w3.org/2000/svg"
                    >
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                    </svg>
                </div>
            </div>

            {console.log('differencePrice', differencePrice)}
            <div className={styles.product_page__info_block}>
                <div className={styles.product_page__price}>
                    {differencePrice !== 0 && (
                        <div
                            className={
                                styles.product_page__price_discount_block
                            }
                        >
                            <div
                                className={
                                    styles.product_page__price_discount_block__prev
                                }
                            >
                                {prevPrice}
                            </div>
                            <div
                                className={
                                    styles.product_page__price_discount_block__discount
                                }
                            >
                                Экономия{' '}
                                <span
                                    className={
                                        styles.product_page__price_discount_block__discount__span
                                    }
                                >
                                    {differencePrice}
                                </span>
                            </div>
                        </div>
                    )}
                    <span>{discountPrice}</span> Руб.
                </div>
                <span className={styles.line}></span>
                <div className={styles.selector_wrapper}>
                    <div
                        style={{ marginBottom: '10px' }}
                        className={styles.hint}
                    >
                        Выберите размер (Ширина*Длина) см.
                    </div>
                    <Select
                        onChange={(data) => {
                            dispatch({
                                type: PRODUCT_PAGE_SIZE_CHANGED,
                                payload: {
                                    selectedSizeId: data.sizeId,
                                    selectedId: data.id,
                                    selectedValue: data.value,
                                    selectedTitle: data.title,
                                },
                            })
                            const d = getDataBySizeId(prices, data.sizeId)
                            dispatch({
                                type: PRODUCT_PAGE_SET_DATA,
                                payload: d,
                            })
                        }}
                        className="product-card__selector"
                        classNamePrefix="product-card__selector--inner"
                        placeholder={options[0].label}
                        styles={colourStyles}
                        options={options}
                        isSearchable={false}
                        autoFocus={false}
                    />
                </div>
                <div>
                    <div className={styles.hint}>Материал каркаса</div>
                    <ul className={styles.suboption_list}>
                        <li
                            className={
                                styles.product_page__suboptions_row_list_item
                            }
                        >
                            <div className={styles.hover_element}>
                                <div className={styles.hover_element__title}>
                                    ЛДСП, цвет дуб молочный
                                </div>
                                <div className={styles.hover_element__image}>
                                    <img
                                        style={{
                                            display: 'block',
                                            height: '130px',
                                            width: '130px',
                                        }}
                                        src={MaterialImage1}
                                    ></img>
                                    {/* <Image
                                        src={MaterialImage1}
                                        height={130}
                                        width={130}
                                    /> */}
                                </div>
                            </div>
                            <div>
                                <img
                                    style={{
                                        display: 'block',
                                        height: '46px',
                                        width: '46px',
                                    }}
                                    src={MaterialImage1}
                                ></img>
                            </div>
                        </li>
                        <li
                            className={
                                styles.product_page__suboptions_row_list_item
                            }
                        >
                            <div className={styles.hover_element}>
                                <div className={styles.hover_element__title}>
                                    ЛДСП, цвет дуб молочный
                                </div>
                                <div className={styles.hover_element__image}>
                                    <Image
                                        src={MaterialImage2}
                                        height={130}
                                        width={130}
                                    />
                                </div>
                            </div>
                            <div>
                                <img
                                    style={{
                                        display: 'block',
                                        height: '46px',
                                        width: '46px',
                                    }}
                                    src={MaterialImage2}
                                ></img>
                            </div>
                        </li>
                        <li
                            className={
                                styles.product_page__suboptions_row_list_item
                            }
                        >
                            <div className={styles.hover_element}>
                                <div className={styles.hover_element__title}>
                                    ЛДСП, цвет дуб молочный
                                </div>
                                <div className={styles.hover_element__image}>
                                    <Image
                                        src={MaterialImage3}
                                        height={130}
                                        width={130}
                                    />
                                </div>
                            </div>
                            <div>
                                <img
                                    style={{
                                        display: 'block',
                                        height: '46px',
                                        width: '46px',
                                    }}
                                    src={MaterialImage3}
                                ></img>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className={styles.hint}>Основание</div>
                    <ul className={styles.suboption_list}>
                        <li
                            className={
                                styles.product_page__suboptions_row_list_item
                            }
                        >
                            <div className={styles.hover_element}>
                                <div className={styles.hover_element__title}>
                                    ЛДСП, цвет дуб молочный
                                </div>
                                <div className={styles.hover_element__image}>
                                    <Image
                                        src={FoundamentImage1}
                                        height={130}
                                        width={130}
                                    />
                                </div>
                            </div>
                            <div>
                                <img
                                    style={{
                                        display: 'block',
                                        height: '46px',
                                        width: '46px',
                                    }}
                                    src={FoundamentImage1}
                                ></img>
                            </div>
                        </li>
                        <li
                            className={
                                styles.product_page__suboptions_row_list_item
                            }
                        >
                            <div className={styles.hover_element}>
                                <div className={styles.hover_element__title}>
                                    ЛДСП, цвет дуб молочный
                                </div>
                                <div className={styles.hover_element__image}>
                                    <Image
                                        src={FoundamentImage2}
                                        height={130}
                                        width={130}
                                    />
                                </div>
                            </div>
                            <div>
                                <img
                                    style={{
                                        display: 'block',
                                        height: '46px',
                                        width: '46px',
                                    }}
                                    src={FoundamentImage2}
                                ></img>
                            </div>
                        </li>
                        <li
                            className={
                                styles.product_page__suboptions_row_list_item
                            }
                        >
                            <div className={styles.hover_element}>
                                <div className={styles.hover_element__title}>
                                    ЛДСП, цвет дуб молочный
                                </div>
                                <div className={styles.hover_element__image}>
                                    <Image
                                        src={FoundamentImage3}
                                        height={130}
                                        width={130}
                                    />
                                </div>
                            </div>
                            <div>
                                <img
                                    style={{
                                        display: 'block',
                                        height: '46px',
                                        width: '46px',
                                    }}
                                    src={FoundamentImage3}
                                ></img>
                            </div>
                        </li>
                    </ul>
                </div>
                <span className={styles.line2}></span>
                <div className={styles.product_page__meta_info}>
                    <div>ID 382206</div>
                    <div>
                        Продано
                        <span className={styles.blue}> 22</span> шт.
                    </div>
                </div>
                <div className={styles.product_page__main_buttons}>
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setCartPopupClosed(true)
                        }}
                    >
                        <button
                            className={`${styles.product_page__main_button} ${styles.product_page__add_to_cart_button}`}
                        >
                            <div
                                style={{
                                    padding: '18px 20px',
                                }}
                                onClick={() => setCartPopupClosed((p) => !p)}
                            >
                                Добавить в корзину
                            </div>
                            <SlideDown
                                className={
                                    styles.product_page__add_to_cart_button__popup
                                }
                                closed={cartPopupClosed}
                            >
                                <div
                                    style={{
                                        padding: '30px 20px 1px',
                                        paddingBottom: '30px',
                                    }}
                                >
                                    <div className={styles.title}>
                                        Матрас Аскона Balance Smart
                                    </div>
                                    <div className={styles.hint}>
                                        Добавлен в корзину!
                                    </div>
                                    <div className={styles.popup_button}>
                                        Перейти в корзину
                                    </div>
                                </div>
                            </SlideDown>
                        </button>
                    </OutsideClickHandler>

                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setBuyOneClickPopupClosed(true)
                        }}
                    >
                        <button
                            className={`${styles.product_page__main_button} ${styles.product_page__buy_one_click}`}
                        >
                            <div
                                style={{
                                    padding: '18px 20px',
                                }}
                                onClick={() =>
                                    setBuyOneClickPopupClosed((p) => !p)
                                }
                            >
                                Купить в 1 клик
                            </div>
                            <SlideDown
                                className={
                                    styles.product_page__buy_one_click_popup
                                }
                                closed={buyOneClickPopupClosed}
                            >
                                <div
                                    style={{
                                        padding: '30px 20px 1px',
                                        paddingBottom: '30px',
                                    }}
                                >
                                    <div className={styles.title}>
                                        Матрас Аскона Balance Smart в 1 клик!
                                    </div>
                                    <div className={styles.text}>
                                        Заполните форму быстрого заказа, и наши
                                        менеджеры свяжутся с вами.
                                    </div>
                                    <div className={styles.hint}>
                                        Ваш телефон*
                                    </div>
                                    <div className={styles.input_wrapper}>
                                        <InputMask
                                            placeholder={'+7 (___) ___  __ __'}
                                            mask="+7 (999) 99 99"
                                            maskChar="_"
                                        />
                                    </div>
                                    <div className={styles.popup_button}>
                                        Отправить заказ
                                    </div>
                                    <div className={styles.copy}>
                                        Нажимая на кнопку, я даю согласие на{' '}
                                        <Link href="/">
                                            <a>обработку персональных данных</a>
                                        </Link>
                                    </div>
                                </div>
                            </SlideDown>
                        </button>
                    </OutsideClickHandler>
                </div>
            </div>
        </div>
    )
}

export default ProductPageInfoBlock
