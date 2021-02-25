import styles from './../../styles/components/Mobile/ProductPageMobileAssurances.module.sass'

// Images
import CarImage from './../../assets/svg/car.svg'
import CreditCardImage from './../../assets/svg/credit-card.svg'
import Certificate from './../../assets/svg/certificate.svg'

const ProductPageMobileAssurances = () => {
    return (
        <div className={styles.product_page__mobile_assurances}>
            <div className={styles.product_page_mobile__assurances__list}>
                <div
                    className={
                        styles.product_page_mobile__assurances__list__item
                    }
                >
                    <div
                        className={
                            styles.product_page_mobile__assurances__list__item__left
                        }
                    >
                        <img src={CarImage}></img>
                    </div>
                    <div
                        className={
                            styles.product_page_mobile__assurances__list__item__right
                        }
                    >
                        <span className={styles.text}>
                            Доставка{' '}
                            <span className={styles.blue}>по Москве</span>
                        </span>
                        <br />
                        <span className={styles.text}>
                            Ближайшая доставка:{' '}
                            <span className={styles.blue}>18.03.2021</span>
                        </span>
                        <br />
                        <span className={styles.text}>
                            Стоимость доставки:{' '}
                            <span className={styles.blue}>695 руб.</span>
                        </span>
                        <br />
                        <span className={styles.text}>
                            Подъем на груз. лифте:{' '}
                            <span className={styles.blue}>
                                2% от стоимости изделий
                            </span>
                        </span>
                        <br />
                        <span className={styles.text}>
                            <span className={styles.decoration}>
                                <span className={styles.blue}>
                                    Условия доставки и оплаты. Подробнее
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <span className={styles.line}></span>
                <div
                    className={
                        styles.product_page_mobile__assurances__list__item
                    }
                >
                    <div
                        className={
                            styles.product_page_mobile__assurances__list__item__left
                        }
                    >
                        <img src={CreditCardImage}></img>
                    </div>
                    <div
                        className={
                            styles.product_page_mobile__assurances__list__item__right
                        }
                    >
                        <span className={styles.text}>
                            Оплата при получении наличными, банковской картой,
                            электронным кошельком, оплата по счету.
                        </span>
                        <br />
                        <span className={styles.text}>
                            <span className={styles.blue}>
                                <span className={styles.decoration}>
                                    В кредит или рассрочку
                                </span>
                            </span>{' '}
                            от <span className={styles.red}>940 руб/мес</span>
                        </span>
                    </div>
                </div>
                <span className={styles.line}></span>

                <div
                    className={
                        styles.product_page_mobile__assurances__list__item
                    }
                >
                    <div
                        className={
                            styles.product_page_mobile__assurances__list__item__left
                        }
                    >
                        <img src={Certificate}></img>
                    </div>
                    <div
                        className={
                            styles.product_page_mobile__assurances__list__item__right
                        }
                    >
                        <span className={styles.text}>
                            Официальный дилер фабрики. Гарантия производителя 2
                            года. Возврат и обмен товара в полном соответствии
                            закона.
                        </span>
                    </div>
                </div>
                <span className={styles.line}></span>
            </div>
        </div>
    )
}

export default ProductPageMobileAssurances
