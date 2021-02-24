import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Select from 'react-select'

// Images
import StatsImage from './../../assets/svg/stats.svg'
import HeartImage from './../../assets/svg/heart.svg'
import MaterialImage1 from './../../assets/materials/material1.jpg'
import MaterialImage2 from './../../assets/materials/material2.jpg'
import MaterialImage3 from './../../assets/materials/material3.jpg'
import FoundamentImage1 from './../../TEMP/foundament/1.jpg'
import FoundamentImage2 from './../../TEMP/foundament/2.jpg'
import FoundamentImage3 from './../../TEMP/foundament/3.jpg'

// Styles
import styles from './../../styles/components/Products/ProductPageInfoBlock.module.sass'

const ProductPageInfoBlock = () => {
    const hasWindow = typeof window !== 'undefined'
    const [width, setWidth] = useState(null)
    const [mainSelector, setMainSelector] = useState(null)

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isFocused }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#0CA5D3' : '',
                color: isFocused ? 'white' : '',
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

    const options = [
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
    ]

    useEffect(() => {
        setMainSelector(
            <Select
                className="product-card__selector"
                classNamePrefix="product-card__selector--inner"
                placeholder={options[0].label}
                styles={colourStyles}
                options={options}
                isSearchable={false}
                autoFocus={false}
            />
        )
    }, [])

    useEffect(() => {
        if (hasWindow) {
            setWidth(window.innerWidth)
        }
    }, [hasWindow])

    return (
        <div className={styles.product_page__info}>
            {width && width >= 1024 && (
                <>
                    <div className={styles.product_page__line_with_buttons}>
                        <div className={styles.big_button}>
                            <span>+101 </span>cнов в подарок!
                        </div>
                        <div className={styles.button}>
                            <Image src={StatsImage} width={30} height={30} />
                        </div>
                        <div className={styles.button}>
                            <Image src={HeartImage} width={30} height={30} />
                        </div>
                    </div>
                    <div className={styles.product_page__line_with_buttons}>
                        <div className={styles.big_button}>
                            Хотите <span>сохранить цену?</span>
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
                </>
            )}
            {width && width <= 1023 && (
                <div className={styles.product_page__with_buttons_wrapper}>
                    <div className={styles.button}>
                        <Image src={StatsImage} width={30} height={30} />
                    </div>
                    <div className={styles.button}>
                        <Image src={HeartImage} width={30} height={30} />
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
                    <div className={styles.big_button}>
                        <span>+101 </span>cнов в подарок!
                    </div>
                    <div className={styles.big_button}>
                        Хотите <span>сохранить цену?</span>
                    </div>
                </div>
            )}
            <div className={styles.product_page__info_block}>
                <div className={styles.product_page__price}>
                    <span>5 170</span> Руб.
                </div>
                <span className={styles.line}></span>
                <div>
                    <div className={styles.hint}>
                        Выберите размер (Ширина*Длина) см.
                    </div>
                    {mainSelector}
                </div>
                <div>
                    <div className={styles.hint}>Материал каркаса</div>
                    <ul>
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
                                        src={MaterialImage1}
                                        height={130}
                                        width={130}
                                    />
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={MaterialImage1}
                                    height={46}
                                    width={46}
                                />
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
                                <Image
                                    src={MaterialImage2}
                                    height={46}
                                    width={46}
                                />
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
                                <Image
                                    src={MaterialImage3}
                                    height={46}
                                    width={46}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className={styles.hint}>Основание</div>
                    <ul>
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
                                <Image
                                    src={FoundamentImage1}
                                    height={46}
                                    width={46}
                                />
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
                                <Image
                                    src={FoundamentImage2}
                                    height={46}
                                    width={46}
                                />
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
                                <Image
                                    src={FoundamentImage3}
                                    height={46}
                                    width={46}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <span className={styles.line}></span>
                <div className={styles.product_page__meta_info}>
                    <div>ID 382206</div>
                    <div>
                        Продано
                        <span>22</span> шт.
                    </div>
                </div>
                <div className={styles.product_page__main_buttons}>
                    <button
                        className={`${styles.product_page__main_button} ${styles.product_page__add_to_cart_button}`}
                    >
                        Добавить в корзину
                    </button>
                    <button
                        className={`${styles.product_page__main_button} ${styles.product_page__buy_one_click}`}
                    >
                        Купить в 1 клик
                    </button>
                    {width && width <= 1024 && (
                        <button
                            className={`${styles.product_page__main_button} ${styles.product_page__call}`}
                        >
                            Позвонить
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductPageInfoBlock
