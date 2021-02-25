import styles from './../../styles/components/Mobile/ProductPageMobileOption.module.sass'

const ProductPageMobileOption = ({ img, text }) => {
    return (
        <div className={styles.mobile_option}>
            <div className={styles.hover_element}>
                <div className={styles.hover_element__title}>{text}</div>
                <div className={styles.hover_element__image}>
                    <img
                        style={{
                            display: 'block',
                            width: '130px',
                            height: '130px',
                        }}
                        src={img}
                    ></img>
                </div>
            </div>
            <div className={styles.mobile_option_sub_image}>
                <img src={img}></img>
            </div>
        </div>
    )
}

export default ProductPageMobileOption
