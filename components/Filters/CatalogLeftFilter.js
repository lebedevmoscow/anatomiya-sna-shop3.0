import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'

import styles from './../../styles/components/Filters/CatalogLeftFilter.module.sass'

const CatalogLeftFilter = ({ filterAPIData }) => {
    const options = filterAPIData.size
    const weightOptions = filterAPIData.properties[0].select
    const properties = filterAPIData.properties.concat()
    const colors = filterAPIData.colors
    const [filterStatus, setFilterStatus] = useState([])

    const [prices, setPrices] = useState([
        filterAPIData.price.min,
        filterAPIData.price.max,
    ])
    const [sizeSelector, setSizeSelector] = useState(null)
    const [closeStatus, setCloseStatus] = useState([])

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isFocused }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#0CA5D3' : '',
                color: isFocused ? 'white' : '',
            }
        },
        menuList: (styles, { data }) => {
            return {
                ...styles,
                border: '1px solid #0CA5D3',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
            }
        },
    }

    const OnCloseFilterClickHandler = (title) => {
        const clone = closeStatus.concat()
        clone.map((element) => {
            if (title === element.title) {
                element.closed = !element.closed
            }
        })
        setCloseStatus(clone)
    }

    const setClass = (title) => {
        for (let i = 0; i < closeStatus.length; i++) {
            if (closeStatus[i].title === title) {
                if (!closeStatus[i].closed) return styles.opened
                if (closeStatus[i].closed) return ''
            }
        }
        return ''
    }

    useEffect(() => {
        const clone = []
        properties.map((prop, index) => {
            clone.push({ title: prop.title, closed: prop.minimised })
        })

        if (filterAPIData.colors && filterAPIData.colors.length > 0) {
            clone.push({ title: 'Цвет', closed: false })
        }

        if (filterAPIData.size && filterAPIData.size.length > 0) {
            clone.push({ title: 'Размер (см.)', closed: false })
        }

        clone.push({ title: 'Цена (руб.)', closed: false })
        setCloseStatus(clone)

        setSizeSelector(
            <Select
                className="main_filter__selector"
                classNamePrefix="main_filter__selector--inner"
                placeholder="Все"
                styles={colourStyles}
                options={options}
                isSearchable={false}
                autoFocus={false}
            />
        )

        const filter_status = []
        for (let i = 0; i < properties.length; i++) {
            let clone = []
            if (
                properties[i].checkboxes &&
                properties[i].checkboxes.length !== 0
            ) {
                for (let j = 0; j < properties[i].checkboxes.length; j++) {
                    if (properties[i].checkboxes[j].productCount !== 0) {
                        clone.push({
                            property: properties[i].checkboxes[j],
                            status: 'closed',
                        })
                    }
                }
            }
            filter_status.push({ filter: properties[i], inner: clone })
            clone = []
        }
        setFilterStatus(filter_status)

        return () => setSizeSelector(null)
    }, [])

    useEffect(() => {
        console.log('filterStatus', filterStatus)
    }, [filterStatus])

    return (
        <div className={styles.catalog_left_filter}>
            <div className={styles.catalog_left_filter__title}>
                Подбор по параметрам
            </div>
            <div
                className={`${styles.catalog_left_filter__tab_wrapper} ${
                    styles.price_filter
                } ${setClass('Цена (руб.)')}`}
            >
                <div
                    onClick={() => OnCloseFilterClickHandler('Цена (руб.)')}
                    className={styles.catalog_left_filter__tab_wrapper_title}
                >
                    <span
                        onClick={() =>
                            OnCloseFilterClickHandler(property.title)
                        }
                        className={styles.arrow}
                    ></span>
                    <span className={styles.text}>Цена (руб.)</span>
                </div>
                <div className={styles.catalog_left_filter__tab_wrapper_inner}>
                    <div
                        className={
                            styles.catalog_left_filter__tab_wrapper_inner_status
                        }
                    >
                        <div
                            className={
                                styles.catalog_left_filter__input_wrapper
                            }
                        >
                            <input
                                className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input_first}`}
                                placeholder={prices[0]
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            ></input>
                            <input
                                className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input__first}`}
                                placeholder={prices[1]
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            ></input>
                        </div>
                    </div>

                    <Range
                        draggableTrack
                        values={prices}
                        step={500}
                        min={filterAPIData.price.min}
                        max={filterAPIData.price.max}
                        onChange={(v) => setPrices(v)}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: '36px',
                                    display: 'flex',
                                    width: '97%',
                                    height: '4px',
                                    margin: '24px auto 0 auto',
                                    paddingBottom: '6px',
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: '5px',
                                        width: '97%',
                                        borderRadius: '4px',
                                        height: '4px',
                                        background: getTrackBackground({
                                            values: prices,
                                            colors: ['#ccc', '#30ACD7', '#ccc'],
                                            min: filterAPIData.price.min,
                                            max: filterAPIData.price.max,
                                        }),
                                        margin: '0 auto',
                                        alignSelf: 'center',
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    outline: 'none',
                                    cursor: 'pointer',
                                    height: '20px',
                                    width: '12px',
                                    border: '1px solid #FFDB4D',
                                    borderRadius: '30%',
                                    backgroundColor: '#FFDB4D',
                                }}
                            ></div>
                        )}
                    />
                </div>
            </div>

            <div
                className={`${
                    styles.catalog_left_filter__tab_wrapper
                } ${setClass('Размер (см.)')}`}
            >
                <div className={styles.catalog_left_filter__tab_wrapper_title}>
                    <span className={styles.arrow}></span>
                    <span
                        onClick={() =>
                            OnCloseFilterClickHandler('Размер (см.)')
                        }
                        className={styles.text}
                    >
                        Размер (см.)
                    </span>
                </div>
                <div
                    className={`${styles.catalog_left_filter__tab_wrapper_inner} ${styles.catalog_left_filter__tab_wrapper_inner__size}`}
                >
                    {sizeSelector}
                </div>
            </div>

            {properties.map((property, index) => {
                return (
                    <div
                        key={index}
                        className={`${
                            styles.catalog_left_filter__tab_wrapper
                        } ${
                            styles.catalog_left_filter__tab_wrapper__checkboxs
                        } ${setClass(property.title)}`}
                    >
                        <div
                            className={
                                styles.catalog_left_filter__tab_wrapper_title
                            }
                        >
                            <span className={styles.arrow}></span>
                            <span
                                onClick={() =>
                                    OnCloseFilterClickHandler(property.title)
                                }
                                className={styles.text}
                            >
                                {property.title}
                            </span>
                        </div>
                        <div
                            className={
                                styles.catalog_left_filter__tab_wrapper_inner
                            }
                        >
                            {property.select && (
                                <Select
                                    className="main_filter__selector"
                                    classNamePrefix="main_filter__selector--inner"
                                    placeholder="Все"
                                    styles={colourStyles}
                                    options={property.select}
                                    isSearchable={false}
                                    autoFocus={false}
                                />
                            )}
                            {property.checkboxes &&
                                property.checkboxes.length !== 0 && (
                                    <ul
                                        className={
                                            styles.catalog_left_filter__tab_options
                                        }
                                    >
                                        {property.checkboxes.map(
                                            (checkbox, index2) => {
                                                if (
                                                    checkbox.productCount !== 0
                                                ) {
                                                    return (
                                                        <li
                                                            onClick={() => {
                                                                const clone = filterStatus.concat()
                                                                if (
                                                                    clone[index]
                                                                        .inner[
                                                                        index2
                                                                    ] ===
                                                                    'closed'
                                                                ) {
                                                                    clone[
                                                                        index
                                                                    ].inner[
                                                                        index2
                                                                    ] = {
                                                                        property:
                                                                            properties[
                                                                                i
                                                                            ]
                                                                                .checkboxes[
                                                                                j
                                                                            ],
                                                                        status:
                                                                            'opened',
                                                                    }
                                                                } else {
                                                                    clone[
                                                                        index
                                                                    ].inner[
                                                                        index2
                                                                    ] = {
                                                                        property:
                                                                            properties[
                                                                                index
                                                                            ]
                                                                                .checkboxes[
                                                                                index2
                                                                            ],
                                                                        status:
                                                                            'closed',
                                                                    }
                                                                }
                                                                setFilterStatus(
                                                                    clone
                                                                )
                                                            }}
                                                            key={index2}
                                                            className={
                                                                styles.catalog_left_filter__tab_options_item
                                                            }
                                                        >
                                                            <label
                                                                className={
                                                                    styles.catalog_left_filter__checkbox_container
                                                                }
                                                            >
                                                                <input type="checkbox" />
                                                                <span
                                                                    className={
                                                                        styles.catalog_left_filter__checkmark
                                                                    }
                                                                ></span>
                                                                <h6>
                                                                    {
                                                                        checkbox.label
                                                                    }
                                                                </h6>
                                                                <span
                                                                    className={
                                                                        styles.amount
                                                                    }
                                                                >
                                                                    (
                                                                    {
                                                                        checkbox.productCount
                                                                    }
                                                                    )
                                                                </span>
                                                            </label>
                                                        </li>
                                                    )
                                                }
                                            }
                                        )}
                                    </ul>
                                )}
                        </div>
                    </div>
                )
            })}

            {colors && colors.length !== 0 && (
                <div
                    className={`${styles.catalog_left_filter__tab_wrapper} ${
                        styles.catalog_left_filter__tab_wrapper__checkboxs
                    } ${setClass('Цвет')}`}
                >
                    <div
                        className={
                            styles.catalog_left_filter__tab_wrapper_title
                        }
                    >
                        <span className={styles.arrow}></span>
                        <span
                            onClick={() => OnCloseFilterClickHandler('Цвет')}
                            className={styles.text}
                        >
                            Цвет
                        </span>
                    </div>
                    <div
                        className={
                            styles.catalog_left_filter__tab_wrapper_inner
                        }
                    >
                        <ul
                            className={`${styles.catalog_left_filter__tab_options} ${styles.colored}`}
                        >
                            {colors.map((color, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            styles.catalog_left_filter__tab_options_item
                                        }
                                    >
                                        <label
                                            className={
                                                styles.catalog_left_filter__checkbox_container
                                            }
                                        >
                                            <input type="checkbox" />
                                            <span
                                                style={{
                                                    background: color.color,
                                                }}
                                                className={`${styles.catalog_left_filter__checkmark}`}
                                            ></span>
                                            <h6>{color.label}</h6>
                                            <span className={styles.amount}>
                                                ({color.productCount})
                                            </span>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}

            <button className={styles.catalog_left_filter__reset_btn}>
                <span>Сбросить</span>
                <svg
                    viewBox="0 0 24 24"
                    id="close"
                    xmlns="https://www.w3.org/2000/svg"
                >
                    <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"></path>
                </svg>
            </button>
        </div>
    )
}

export default CatalogLeftFilter
