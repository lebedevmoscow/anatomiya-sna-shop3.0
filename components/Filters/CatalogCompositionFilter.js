import { useState, useEffect } from 'react'
import Link from 'next/link'

import styles from './../../styles/components/Filters/CatalogCompositionFilter.module.sass'

const CatalogCompositionFilter = ({
    title,
    onClose,
    className,
    dataList = [],
    filterAPIData,
    headers,
}) => {
    const properties = filterAPIData.properties.concat()

    const [additionalData, setAdditionalData] = useState([])
    const [additionalModalTitle, setAdditionalModalTitle] = useState(null)

    const onAdditionalModalClickHandler = (element) => {
        if (element.childes && element.childes.length > 0) {
            setAdditionalData(element.childes)
        } else {
            setAdditionalData([])
        }
    }

    return (
        <div className={styles.catalog_composition_filter}>
            <div
                className={`${styles.mobile_burger_menu_city_choise} mobile_burger_menu_city_choise__${className}`}
            >
                <div className={styles.container}>
                    {additionalData.length === 0 && (
                        <div
                            className={
                                styles.mobile_burger_menu_city_choise__labels
                            }
                        >
                            <i
                                onClick={onClose}
                                className={styles.arrow_left}
                            ></i>
                            <span>{title}</span>
                        </div>
                    )}
                    {additionalData.length !== 0 && (
                        <div
                            className={
                                styles.mobile_burger_menu_city_choise__labels
                            }
                        >
                            <i
                                onClick={() => {
                                    setAdditionalData([])
                                }}
                                className={styles.arrow_left}
                            ></i>
                            <span>{additionalModalTitle}</span>
                        </div>
                    )}
                    <ul
                        className={
                            styles.mobile_burger_menu_city_choise__moscow_list
                        }
                    >
                        {/* {additionalData.length === 0 &&
                            properties.map((prop, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            onAdditionalModalClickHandler(
                                                prop.title
                                            )
                                        }}
                                    >
                                        <span>{prop.title}</span>
                                        <i className={styles.arrow_right}></i>
                                    </li>
                                )
                            })} */}
                        {additionalData.length === 0 &&
                            headers.categoriesMenu.map((cat, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            onAdditionalModalClickHandler(cat)
                                        }}
                                    >
                                        <span>{cat.title}</span>
                                        <i className={styles.arrow_right}></i>
                                    </li>
                                )
                            })}
                        {additionalData.length !== 0 &&
                            additionalData.map((element, index) => {
                                console.log('el', element)
                                return (
                                    <Link
                                        key={index}
                                        href={
                                            'http://localhost:3000' +
                                            element.url
                                        }
                                        as={
                                            'http://localhost:3000' +
                                            element.url
                                        }
                                    >
                                        <a>
                                            <li key={index}>{element.title}</li>
                                        </a>
                                    </Link>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CatalogCompositionFilter
