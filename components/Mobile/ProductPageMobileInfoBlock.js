import { useEffect, useState } from 'react'
import styles from './../../styles/components/Mobile/ProductPageMobileInfoBlock.module.sass'
import Select from 'react-select'
import ProductPageMobileOption from './ProductPageMobileOption'

import MaterialImage1 from './../../assets/materials/material1.jpg'
import MaterialImage2 from './../../assets/materials/material2.jpg'
import MaterialImage3 from './../../assets/materials/material3.jpg'
import FoundamentImage1 from './../../TEMP/foundament/1.jpg'
import FoundamentImage2 from './../../TEMP/foundament/2.jpg'
import FoundamentImage3 from './../../TEMP/foundament/3.jpg'

const ProductPageMobileInfoBlock = () => {
    const price = 5368

    const [mainSelector, setMainSelector] = useState(null)

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'white',
            height: '40px',
            borderRadius: '5px',
            border: '1px solid #0ca5d3',
            font: '20px Lato,sans-serif',
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

    return (
        <div className={styles.mobile_info_block}>
            <div className={styles.mobile_info_block__price}>
                <span className={styles.price_itself}>
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </span>
                <span className={styles.price_text}> Руб.</span>
            </div>
            <span className={styles.line}></span>
            <span className={styles.hint}>
                Выберите размер (Ширина*Длина) см.
            </span>
            <div className={styles.selector_wrap}>{mainSelector}</div>
            <div className={styles.option_list_wrapper}>
                <div className={styles.option_list_title}>Материал каркаса</div>
                <div className={styles.options_list}>
                    <ProductPageMobileOption
                        text={'ЛДСП, цвет молочный дуб'}
                        img={MaterialImage1}
                    />
                    <ProductPageMobileOption
                        text={'ЛДСП, цвет молочный дуб'}
                        img={MaterialImage2}
                    />
                    <ProductPageMobileOption
                        text={'ЛДСП, цвет молочный дуб'}
                        img={MaterialImage3}
                    />
                </div>
            </div>
            <div className={styles.option_list_wrapper}>
                <div className={styles.option_list_title}>Основание</div>
                <div className={styles.options_list}>
                    <ProductPageMobileOption
                        text={'ЛДСП, цвет молочный дуб'}
                        img={FoundamentImage1}
                    />
                    <ProductPageMobileOption
                        text={'ЛДСП, цвет молочный дуб'}
                        img={FoundamentImage2}
                    />
                    <ProductPageMobileOption
                        text={'ЛДСП, цвет молочный дуб'}
                        img={FoundamentImage3}
                    />
                </div>
            </div>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <div className={styles.info}>
                <div className={styles.info__left}>ID 719833</div>
                <div className={styles.info__right}>
                    <span className={styles.text}>
                        Продано <span className={styles.blue}>12</span> штук
                    </span>
                </div>
            </div>
            <div className={styles.buttons_list}>
                <div className={styles.buttons_list_item}>
                    <button
                        className={`${styles.button} ${styles.button_cart}`}
                    >
                        Добавить в корзину
                    </button>
                </div>
                <div className={styles.buttons_list_item}>
                    <button className={`${styles.button} ${styles.button_buy}`}>
                        Купить в 1 клик
                    </button>
                </div>
                <div className={styles.buttons_list_item}>
                    <button
                        className={`${styles.button} ${styles.button_call}`}
                    >
                        Позвонить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPageMobileInfoBlock
