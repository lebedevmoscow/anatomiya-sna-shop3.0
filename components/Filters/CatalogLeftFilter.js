import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'

import { useSelector, useDispatch } from 'react-redux'
import {
    CATALOG_SET_FILTERS,
    catalogSetPage,
    catalogSetFilters,
} from './../../actions/CatalogCommon.js'
import { LoadByFilters } from './../../actions/NewCatalogProductList'

import styles from './../../styles/components/Filters/CatalogLeftFilter.module.sass'

const CatalogLeftFilter = ({
    filterAPIData,
    oldMin,
    oldMax,
    filterProductsIds,
    catalogSlug,
    subCatalogSlug,
    setLastClick,
}) => {
    console.log('filterAPIData', filterAPIData)

    const dispatch = useDispatch()

    const SelectedSizeReducer = useSelector(
        (store) => store.SelectedSizeReducer
    )
    const CatalogCommonReducer = useSelector(
        (store) => store.CatalogCommonReducer
    )

    const [click, setClick] = useState(0)
    const options = filterAPIData.size
    const properties = filterAPIData.properties.concat()
    const colors = filterAPIData.colors
    const [filterStatus, setFilterStatus] = useState([])

    const [prices, setPrices] = useState([
        filterAPIData.price.min,
        filterAPIData.price.max,
    ])
    const [sizeSelector, setSizeSelector] = useState(null)
    const [closeStatus, setCloseStatus] = useState([])
    const [selectedSize, setSelectedSize] = useState(null)
    const [activeColors, setActiveColors] = useState([])
    const [selectedActive, setSelectedActive] = useState([])

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

    const onColorClick = (title) => {
        const clone = activeColors.concat()
        for (let i = 0; i < colors.length; i++) {
            if (colors[i].label === title) {
                let flag = false
                for (let j = 0; j < clone.length; j++) {
                    if (colors[i].value === clone[j]) {
                        flag = true
                    }
                }
                if (!flag) {
                    console.log('push')
                    clone.push(colors[i].value)
                } else if (flag) {
                    console.log('rm')
                    clone.splice(i, 1)
                }
            }
        }
        setActiveColors(clone)
        console.log('clone', clone)
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

    const onFilterClickHandler = (mainIndex, title) => {
        const clone = filterStatus.concat()
        dispatch(catalogSetPage(1))

        setLastClick('filter')

        const n = []
        for (let i = 0; i < clone.length; i++) {
            for (let j = 0; j < clone[i].inner.length; j++) {
                if (clone[i].inner[j].property.label === title) {
                    if (clone[i].inner[j].status === 'closed') {
                        const clone2 = clone[i].inner.concat()
                        clone2[j].status = 'opened'

                        const finalClone = {
                            filter: clone[i].filter,
                            inner: clone2,
                        }

                        n.push(finalClone)
                    } else {
                        const clone2 = clone[i].inner.concat()
                        clone2[j].status = 'closed'

                        const finalClone = {
                            filter: clone[i].filter,
                            inner: clone2,
                        }

                        n.push(finalClone)
                    }
                }
            }
        }

        let againClone = []
        for (let i = 0; i < clone.length; i++) {
            if (i === mainIndex) {
                againClone.push(...n)
            } else {
                againClone.push(clone[i])
            }
        }
        // console.log('clone', clone)
        // dispatch({ type: CATALOG_SET_FILTERS, payload: againClone })

        dispatch(catalogSetFilters(againClone))
        setFilterStatus(againClone)
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
                onChange={(data) => {
                    setSelectedSize({ label: data.label, value: data.value })
                }}
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

        const a = []
        for (let i = 0; i < filterAPIData.properties.length; i++) {
            if (
                filterAPIData.properties[i].select &&
                filterAPIData.properties[i].select.length > 0
            ) {
                const selectedData = []

                for (
                    let j = 0;
                    j < filterAPIData.properties[i].select.length;
                    j++
                ) {
                    if (
                        filterAPIData.properties[i].select[j].productCount > 0
                    ) {
                        selectedData.push(filterAPIData.properties[i].select[j])
                    }
                }

                const obj = {
                    id: filterAPIData.properties[i].id,
                    label: filterAPIData.properties[i].title,
                    initial: filterAPIData.properties[i].select[0],
                    update: 0,
                    data: selectedData,
                }

                a.push(obj)
            }
        }
        if (a.length > 0) {
            setSelectedActive(a)
        }

        console.log('a', a)

        return () => setSizeSelector(null)
    }, [])

    useEffect(() => {
        if (selectedSize) {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    CatalogCommonReducer.page,
                    SelectedSizeReducer.sizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    filterStatus,
                    prices,
                    selectedSize,
                    null,
                    false,
                    activeColors
                )
            )
        }
    }, [selectedSize])

    useEffect(() => {
        if (activeColors.length > 0) {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    CatalogCommonReducer.page,
                    SelectedSizeReducer.sizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    filterStatus,
                    prices,
                    selectedSize,
                    null,
                    false,
                    activeColors
                )
            )
        }
    }, [activeColors])

    useEffect(() => {
        if (click > 0) {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    CatalogCommonReducer.page,
                    SelectedSizeReducer.sizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    filterStatus,
                    prices,
                    selectedSize,
                    null,
                    false,
                    activeColors
                )
            )
        }
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
                        onFinalChange={() => {
                            dispatch(
                                LoadByFilters(
                                    filterProductsIds,
                                    CatalogCommonReducer.page,
                                    SelectedSizeReducer.sizeId,
                                    catalogSlug,
                                    subCatalogSlug,
                                    oldMin,
                                    oldMax,
                                    filterStatus,
                                    prices
                                )
                            )
                        }}
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

            {selectedActive &&
                selectedActive.length > 0 &&
                selectedActive.map((select, index) => {
                    console.log('select', select)
                    return (
                        <div
                            key={index}
                            className={`${styles.catalog_left_filter__tab_wrapper} ${styles.opened}`}
                        >
                            <div
                                className={
                                    styles.catalog_left_filter__tab_wrapper_title
                                }
                            >
                                <span className={styles.arrow}></span>
                                <span className={styles.text}>
                                    {select.label}
                                </span>
                            </div>
                            <div
                                className={`${styles.catalog_left_filter__tab_wrapper_inner} ${styles.catalog_left_filter__tab_wrapper_inner__size}`}
                            >
                                <Select
                                    className="main_filter__selector"
                                    classNamePrefix="main_filter__selector--inner"
                                    placeholder="Все"
                                    onChange={(data) => {
                                        const obj = {
                                            origin: selectedActive,
                                            data,
                                            id: select.id,
                                        }
                                        dispatch(
                                            LoadByFilters(
                                                filterProductsIds,
                                                CatalogCommonReducer.page,
                                                SelectedSizeReducer.sizeId,
                                                catalogSlug,
                                                subCatalogSlug,
                                                oldMin,
                                                oldMax,
                                                filterStatus,
                                                prices,
                                                selectedSize,
                                                null,
                                                false,
                                                activeColors,
                                                obj
                                            )
                                        )
                                    }}
                                    styles={colourStyles}
                                    options={select.data}
                                    isSearchable={false}
                                    autoFocus={false}
                                />
                            </div>
                        </div>
                    )
                })}

            {filterStatus.length > 0 &&
                properties.map((property, index) => {
                    if (property.select) return
                    return (
                        <div
                            key={index}
                            className={`${styles.catalog_left_filter__tab_wrapper} ${styles.catalog_left_filter__tab_wrapper__checkboxs} ${styles.opened}`}
                        >
                            <div
                                className={
                                    styles.catalog_left_filter__tab_wrapper_title
                                }
                            >
                                <span className={styles.arrow}></span>
                                <span
                                    onClick={() =>
                                        OnCloseFilterClickHandler(
                                            property.title
                                        )
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
                                {/* {property.select && (
                                    <Select
                                        className="main_filter__selector"
                                        classNamePrefix="main_filter__selector--inner"
                                        placeholder="Все"
                                        styles={colourStyles}
                                        options={property.select}
                                        isSearchable={false}
                                        autoFocus={false}
                                    />
                                )} */}
                                {property.checkboxes &&
                                    property.checkboxes.length !== 0 && (
                                        <ul
                                            className={
                                                styles.catalog_left_filter__tab_options
                                            }
                                        >
                                            {/* {property.checkboxes &&
                                                renderCheckbox(
                                                    index,
                                                    property.checkboxes
                                                )} */}

                                            {property.checkboxes.map(
                                                (checkbox, index2) => {
                                                    if (
                                                        checkbox.productCount !==
                                                        0
                                                    ) {
                                                        return (
                                                            <li
                                                                onClick={() => {
                                                                    if (
                                                                        click %
                                                                            2 ==
                                                                        0
                                                                    ) {
                                                                        onFilterClickHandler(
                                                                            index,
                                                                            checkbox.label
                                                                        )
                                                                    }
                                                                    setClick(
                                                                        (p) =>
                                                                            ++p
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
                                        onClick={() => {
                                            if (click % 2 === 0) {
                                                onColorClick(color.label)
                                            }
                                            setClick((p) => ++p)
                                        }}
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
