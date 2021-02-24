import styles from './../../styles/components/Tabs/ProductPageTextTabContentMobile.module.sass'

const ProductPageTextTabContentMobile = ({ content }) => {
    return (
        <div className={styles.product_page_text_tab_content_mobile}>
            <div
                className={styles.product_page_text_tab_cotent_mobile__content}
            >
                {content}
            </div>
        </div>
    )
}

export default ProductPageTextTabContentMobile
