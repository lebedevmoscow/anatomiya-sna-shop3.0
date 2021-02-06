import React from 'react'
import InputMask from 'react-input-mask'

import Girl from './../../assets/catalog-help-pickup-mattress.png'

import styles from './../../styles/components/Catalog/CatalogHelpPickUp.module.sass'

String.prototype.replaceAt = function (index, replacement) {
    return (
        this.substr(0, index) +
        replacement +
        this.substr(index + replacement.length)
    )
}

const CatalogHelpPickUp = () => {
    return (
        <div className={styles.catalog_help_pickup}>
            <div className={styles.catalog_help_pickup__content}>
                <div className={styles.catalog_help_pickup__left}>
                    <div className={styles.catalog_help_pickup__left_subtitle}>
                        Сложно выбрать кровать?
                    </div>
                    <div className={styles.catalog_help_pickup__left_title}>
                        ЗВОНИТЕ ПРЯМО СЕЙЧАС!
                    </div>
                    <div className={styles.catalog_help_pickup__left_city}>
                        Москва и область
                    </div>
                    <div className={styles.catalog_help_pickup__left_phone}>
                        8 (495) 287-87-95
                    </div>
                    <div
                        className={styles.catalog_help_pickup__left_phone_hint}
                    >
                        Отправьте ваш номер телефона и мы поможем вам с выбором.
                    </div>
                    <div className={styles.catalog_help_pickup__left_form}>
                        <InputMask
                            placeholder={'+7 (___) ___  __ __'}
                            mask="+7 (999) 99 99"
                            maskChar="_"
                        />
                        <button>Отправить</button>
                    </div>
                    <div className={styles.catalog_help_pickup__left_copy}>
                        <span>*</span> Нажимая на кнопку, я даю согласие на{' '}
                        <a href="#">обработку персональных данных</a>
                    </div>
                    <div
                        className={styles.catalog_help_pickup__left_dont_worry}
                    >
                        Консультация не обязывает вас к покупке кровати
                    </div>
                </div>
                <div className={styles.catalog_help_pickup__right}>
                    <img src={Girl}></img>
                </div>
            </div>
        </div>
    )
}

export default CatalogHelpPickUp
