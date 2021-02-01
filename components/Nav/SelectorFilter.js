import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import selector_styles from './../../styles/components/Nav/SelectorFilter.module.sass'

const SelectorFilter = ({ categories, updateFilter }) => {
    const filterRef = useRef(null)
    const [categoryActive, setCategoryActive] = useState(null)
    const [avg, setAvg] = useState(null)

    const onCategoryHover = (category, mode = 'withSubTubs') => {
        if (mode === 'withSubTubs') {
            setCategoryActive(category)

            let temp = 0
            if (category.childes.size.childes.length !== 0) temp++
            if (category.childes.vendors.childes.length !== 0) temp++

            setAvg(
                Math.ceil(
                    (category.childes.categories.childes.length + temp) / 5
                )
            )
        }
        if (mode === 'withoutSubTubs') {
            const clone = { ...category }
            const array = {
                childes: clone,
            }
            setCategoryActive(array)

            let temp = 0
            if (category.size.childes.length !== 0) temp++
            if (category.vendors.childes.length !== 0) temp++

            setAvg(Math.ceil((category.categories.childes.length + temp) / 5))
        }
    }

    useEffect(() => {
        if (categories[0]) {
            onCategoryHover(categories[0])
        } else {
            onCategoryHover(categories, 'withoutSubTubs')
        }
    }, [])

    useEffect(() => {
        if (filterRef.current) {
            filterRef.current.style.display = 'flex'
        }
    }, [updateFilter])

    useEffect(() => {
        if (categories[0]) {
            onCategoryHover(categories[0])
        } else {
            onCategoryHover(categories, 'withoutSubTubs')
        }
    }, [categories])

    return (
        <div ref={filterRef} className={selector_styles.selector_filter}>
            <div
                style={
                    categories.map ? { display: 'block' } : { display: 'none' }
                }
                className={selector_styles.selector_filter__categories}
            >
                <ul
                    className={selector_styles.selector_filter__categories_list}
                >
                    {categories.map &&
                        categories.map((cats, index) => {
                            let className
                            if (categoryActive) {
                                className =
                                    categoryActive.title === cats.title
                                        ? selector_styles.active_category
                                        : ''
                            }
                            return (
                                <Link href={`http://localhost:3000${cats.url}`}>
                                    <a>
                                        <li
                                            onMouseOver={() => {
                                                onCategoryHover(cats)
                                            }}
                                            key={index}
                                            className={`${selector_styles.selector_filter__categories_item} ${className}`}
                                        >
                                            {cats.title}
                                        </li>
                                        <span></span>
                                    </a>
                                </Link>
                            )
                        })}
                </ul>
            </div>
            <div className={selector_styles.selector_filter__data}>
                {categoryActive &&
                    categoryActive.childes &&
                    categoryActive.childes.size.childes.length !== 0 && (
                        <div
                            className={
                                selector_styles.selector_filter__data_column
                            }
                        >
                            {categoryActive && categoryActive.childes && (
                                <div
                                    className={
                                        selector_styles.selector_filter__data_item
                                    }
                                >
                                    {categoryActive.childes.size.childes.map(
                                        (element, index) => {
                                            return (
                                                <div key={index}>
                                                    <span
                                                        className={
                                                            selector_styles.selector_filter__data_item_title
                                                        }
                                                    >
                                                        {element.title}
                                                    </span>
                                                    <ul
                                                        className={
                                                            selector_styles.selector_filter__data_item_content
                                                        }
                                                    >
                                                        {element.childes.map(
                                                            (
                                                                element,
                                                                index
                                                            ) => {
                                                                return (
                                                                    <Link
                                                                        href={`http://localhost:3000${element.url}`}
                                                                    >
                                                                        <a>
                                                                            <li
                                                                                key={
                                                                                    index
                                                                                }
                                                                            >
                                                                                {
                                                                                    element.title
                                                                                }
                                                                            </li>
                                                                        </a>
                                                                    </Link>
                                                                )
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                <div className={selector_styles.selector_filter__data_column}>
                    {categoryActive &&
                        categoryActive.childes &&
                        categoryActive.childes.categories.childes.map(
                            (element, index) => {
                                if (index < avg) {
                                    return (
                                        <div
                                            key={index}
                                            className={
                                                selector_styles.selector_filter__data_item
                                            }
                                        >
                                            <>
                                                <span
                                                    className={
                                                        selector_styles.selector_filter__data_item_title
                                                    }
                                                >
                                                    {element.title}
                                                </span>
                                                <ul
                                                    className={
                                                        selector_styles.selector_filter__data_item_content
                                                    }
                                                >
                                                    {element.childes.map(
                                                        (element, index) => {
                                                            return (
                                                                <Link
                                                                    href={`http://localhost:3000${element.url}`}
                                                                >
                                                                    <a>
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                element.title
                                                                            }
                                                                        </li>
                                                                    </a>
                                                                </Link>
                                                            )
                                                        }
                                                    )}
                                                </ul>
                                            </>
                                        </div>
                                    )
                                }
                            }
                        )}
                </div>
                <div className={selector_styles.selector_filter__data_column}>
                    {categoryActive &&
                        categoryActive.childes &&
                        categoryActive.childes.categories.childes.map(
                            (element, index) => {
                                if (index >= avg && index < avg * 2) {
                                    return (
                                        <div
                                            key={index}
                                            className={
                                                selector_styles.selector_filter__data_item
                                            }
                                        >
                                            <>
                                                <span
                                                    className={
                                                        selector_styles.selector_filter__data_item_title
                                                    }
                                                >
                                                    {element.title}
                                                </span>
                                                <ul
                                                    className={
                                                        selector_styles.selector_filter__data_item_content
                                                    }
                                                >
                                                    {element.childes.map(
                                                        (element, index) => {
                                                            return (
                                                                <Link
                                                                    href={`http://localhost:3000${element.url}`}
                                                                >
                                                                    <a>
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                element.title
                                                                            }
                                                                        </li>
                                                                    </a>
                                                                </Link>
                                                            )
                                                        }
                                                    )}
                                                </ul>
                                            </>
                                        </div>
                                    )
                                }
                            }
                        )}
                </div>

                <div className={selector_styles.selector_filter__data_column}>
                    {categoryActive &&
                        categoryActive.childes &&
                        categoryActive.childes.categories.childes.map(
                            (element, index) => {
                                if (index >= avg * 2) {
                                    return (
                                        <div
                                            key={index}
                                            className={
                                                selector_styles.selector_filter__data_item
                                            }
                                        >
                                            <>
                                                <span
                                                    className={
                                                        selector_styles.selector_filter__data_item_title
                                                    }
                                                >
                                                    {element.title}
                                                </span>
                                                <ul
                                                    className={
                                                        selector_styles.selector_filter__data_item_content
                                                    }
                                                >
                                                    {element.childes.map(
                                                        (element, index) => {
                                                            return (
                                                                <Link
                                                                    href={`http://localhost:3000${element.url}`}
                                                                >
                                                                    <a>
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                element.title
                                                                            }
                                                                        </li>
                                                                    </a>
                                                                </Link>
                                                            )
                                                        }
                                                    )}
                                                </ul>
                                            </>
                                        </div>
                                    )
                                }
                            }
                        )}
                </div>

                <div className={selector_styles.selector_filter__data_column}>
                    {categoryActive &&
                        categoryActive.childes.vendors.childes.map(
                            (manufacturer, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={
                                            selector_styles.selector_filter__data_item
                                        }
                                    >
                                        <span
                                            className={
                                                selector_styles.selector_filter__data_item_title
                                            }
                                        >
                                            {manufacturer.title}
                                        </span>
                                        <ul
                                            className={
                                                selector_styles.selector_filter__data_item_content
                                            }
                                        >
                                            {manufacturer.childes.map(
                                                (item, id) => {
                                                    return (
                                                        <Link
                                                            href={`http://localhost:3000${item.url}`}
                                                        >
                                                            <a>
                                                                <li key={index}>
                                                                    {item.title}
                                                                </li>
                                                            </a>
                                                        </Link>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </div>
                                )
                            }
                        )}
                </div>
                <div
                    onClick={() => {
                        filterRef.current.style.display = 'none'
                    }}
                    className={selector_styles.selector_filter__cross}
                >
                    X
                </div>
            </div>
        </div>
    )
}

export default SelectorFilter
