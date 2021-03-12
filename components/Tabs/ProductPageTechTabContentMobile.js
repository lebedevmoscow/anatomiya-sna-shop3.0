import styles from './../../styles/components/Tabs/ProductPageTechTabContentMobile.module.sass'

const ProductPageTechTabContentMobile = ({ properties }) => {
    return (
        <div className={styles.product_page_tech_tab_content_mobile}>
            {properties && properties.length > 0 && (
                <ul
                    className={
                        styles.product_page_tech_tab_content_mobile__list
                    }
                >
                    {properties.map((prop, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    styles.product_page_tech_tab_content_mobile__list_item
                                }
                            >
                                <div
                                    className={
                                        styles.product_page_tech_tab_content_mobile__list_item_left
                                    }
                                >
                                    {prop.PropertyTitle}:
                                </div>
                                <div
                                    className={
                                        styles.product_page_tech_tab_content_mobile__list_item_right
                                    }
                                >
                                    {prop.Value}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default ProductPageTechTabContentMobile
