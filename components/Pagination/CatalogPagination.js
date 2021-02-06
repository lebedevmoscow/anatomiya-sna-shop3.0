import styles from './../../styles/components/Pagination/CatalogPagination.module.sass'

const CatalogPagination = () => {
    return (
        <div className={styles.catalog_pagination}>
            <ul className={styles.catalog_pagination__pages_list}>
                <li
                    className={`${styles.catalog_pagination__pages_list_item} ${styles.active}`}
                >
                    1
                </li>
                <li className={styles.catalog_pagination__pages_list_item}>
                    2
                </li>
                <li className={styles.catalog_pagination__pages_list_item}>
                    3
                </li>
                <li className={styles.catalog_pagination__pages_list_item}>
                    4
                </li>
                <li className={styles.catalog_pagination__pages_list_item}>
                    5
                </li>
            </ul>
            <div className={styles.catalog_pagination__pages_dots}>...</div>
            <div className={styles.catalog_pagination__last_page_number}>
                64
            </div>
            <button className={styles.catalog_pagination__next_button}>
                Вперед
            </button>
        </div>
    )
}

export default CatalogPagination
