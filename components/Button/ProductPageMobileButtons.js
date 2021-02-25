import styles from './../../styles/components/Button/ProductPageMobileButtons.module.sass'

// Images
import StatsImage from './../../assets/svg/stats.svg'
import HeartImage from './../../assets/svg/heart.svg'

const ProductPageMobileButtons = () => {
    return (
        <div className={styles.product_page_mobile_btns}>
            <div className={styles.product_page__mobile_btns__row}>
                <div className={styles.product_page__mobile_btns__item}>
                    <img
                        src={StatsImage}
                        className={styles.product_page__mobile_btns__image}
                    ></img>
                </div>
                <div className={styles.product_page__mobile_btns__item}>
                    <img
                        src={HeartImage}
                        className={styles.product_page__mobile_btns__image}
                    ></img>
                </div>
                <div className={styles.product_page__mobile_btns__item}>
                    <svg
                        viewBox="0 0 24 24"
                        id="share"
                        xmlns="https://www.w3.org/2000/svg"
                    >
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                    </svg>
                </div>
                <div className={styles.product_page__mobile_btns__item}>
                    <svg
                        viewBox="0 0 24 24"
                        id="print"
                        xmlns="https://www.w3.org/2000/svg"
                    >
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                    </svg>
                </div>
            </div>
            <div className={styles.product_page__mobile_btns__row}>
                <div
                    className={styles.product_page__mobile_btns__row__big_item}
                >
                    <span className={styles.text}>
                        <span className={styles.blue}>+ 113 </span>
                        снов в подарок!
                    </span>
                </div>
                <div
                    className={styles.product_page__mobile_btns__row__big_item}
                >
                    <span className={styles.text}>
                        <span className={styles.blue}>Сохранить цену?</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductPageMobileButtons