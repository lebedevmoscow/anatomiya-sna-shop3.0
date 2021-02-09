import { useState, useEffect } from 'react'

import styles from './../../styles/components/Pagination/CatalogPagination.module.sass'

const CatalogPagination = ({
    onGoForwardButtonClickHandler,
    onGoBackdButtonClickHandler,
    amount,
    current,
    onPageClickHandler,
}) => {
    const [pagList, setPagList] = useState([])

    const renderPaginationSystem = () => {
        if (current < 4) {
            const clone = []

            if (amount < 6) {
                for (let i = 1; i < amount + 1; i++) {
                    clone.push(i)
                }
            } else {
                for (let i = 1; i < 6; i++) {
                    clone.push(i)
                }
                clone.push('...')
                clone.push(amount)
            }

            setPagList(clone)
        } else if (current >= 4 && current <= amount && current <= amount - 2) {
            console.log('else if')
            const clone = []
            clone.push(1)
            clone.push('...')
            clone.push(current - 1)
            clone.push(current)
            if (current + 1 !== amount) {
                clone.push(current + 1)
                clone.push('...')
            }

            clone.push(amount)
            setPagList(clone)
        } else if (current >= amount - 2) {
            console.log('current >= amount - 3')
            const clone = []
            clone.push(1)
            clone.push('...')
            clone.push(amount - 2)
            clone.push(amount - 1)
            clone.push(amount)
            setPagList(clone)
        }
    }

    useEffect(() => {
        renderPaginationSystem()
    }, [current, amount])

    return (
        <div className={styles.catalog_pagination}>
            {current !== 1 && (
                <button
                    onClick={onGoBackdButtonClickHandler}
                    className={styles.catalog_pagination__next_button}
                >
                    Назад
                </button>
            )}
            <ul className={styles.catalog_pagination__pages_list}>
                {pagList.map((pag, index) => {
                    return (
                        <li
                            onClick={() => onPageClickHandler(pag)}
                            key={index}
                            className={`${
                                styles.catalog_pagination__pages_list_item
                            } ${pag === current ? styles.active : ''}`}
                        >
                            {pag}
                        </li>
                    )
                })}
                {/* <li
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
                </li> */}
            </ul>
            {current !== amount && (
                <button
                    onClick={onGoForwardButtonClickHandler}
                    className={styles.catalog_pagination__next_button}
                >
                    Вперед
                </button>
            )}
        </div>
    )
}

export default CatalogPagination
