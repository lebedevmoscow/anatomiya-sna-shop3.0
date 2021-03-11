import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'
import { useRouter } from 'next/router'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Constants
import {
    CATALOG_SET_PRICE,
    CATALOG_SET_PAGE,
    CATALOG_SET_FILTERS,
    CATALOG_SET_UPDATE_LIST,
    CATALOG_SET_COLORS,
} from './../../catalog_actions_rebuild/catalog'

// Actions
import { CatalogLoadByFilter } from './../../catalog_actions_rebuild/catalog'

// import {
//     CATALOG_SET_TOP_RESET,
//     catalogSetPage,
//     catalogSetFilters,
// } from './../../actions/CatalogCommon.js'
// import { LoadByFilters } from './../../actions/NewCatalogProductList'

import styles from './../../styles/components/Filters/CatalogLeftFilter.module.sass'
// import { LoadByFilters } from '../../actions/NewCatalogProductList'

const CatalogLeftFilter = ({
    filterAPIData,
    oldMin,
    oldMax,
    filterProductsIds,
    catalogSlug,
    subCatalogSlug,
    history,
}) => {
    const router = useRouter()
    const hasWindow = typeof window !== 'undefined'

    const dispatch = useDispatch()

    const CatalogReducer = useSelector((store) => store.CatalogReducer)

    const SelectedSizeReducer = useSelector(
        (store) => store.SelectedSizeReducer
    )
    const CatalogCommonReducer = useSelector(
        (store) => store.CatalogCommonReducer
    )

    const [click, setClick] = useState(0)
    const options = filterAPIData.size
    const [properties, setProperties] = useState(
        filterAPIData.properties.concat()
    )
    const colors = filterAPIData.colors
    const [filterStatus, setFilterStatus] = useState(CatalogReducer.filters)

    const priceMin =
        (CatalogReducer.getParams.price.min &&
            parseInt(CatalogReducer.getParams.price.min.replace(' ', ''))) ||
        filterAPIData.price.min

    const priceMax =
        (CatalogReducer.getParams.price.max &&
            parseInt(CatalogReducer.getParams.price.max.replace(' ', ''))) ||
        filterAPIData.price.max

    const [prices, setPrices] = useState([priceMin, priceMax])
    const [sizeSelector, setSizeSelector] = useState(null)
    const [closeStatus, setCloseStatus] = useState([])
    const [selectedSize, setSelectedSize] = useState(null)
    const [activeColors, setActiveColors] = useState([])
    const [colorsIds, setColorsIds] = useState(CatalogReducer.colors)
    const [urlrouterhistory, setUrlrouterhistory] = useState(
        subCatalogSlug
            ? `/${catalogSlug}/${subCatalogSlug}?${history}`
            : `/${catalogSlug}?${history}`
    )

    // useEffect(() => {
    //     router.push(encodeURI(urlrouterhistory))
    //     console.log('urlrouterhistory', urlrouterhistory)
    // }, [urlrouterhistory])

    const RetrunSelectedActiveInitial = () => {
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
        return a
    }

    const [selectedActive, setSelectedActive] = useState(
        RetrunSelectedActiveInitial()
    )

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

    const [SizeSelectorStyles, SetSizeSelectorStyles] = useState({
        control: (styles) => ({
            ...styles,
            backgroundColor: 'white',
            height: '50px',
        }),
        dropdownIndicator: (styles) => {
            return {
                ...styles,
                position: 'absolute',
                right: '0px',
            }
        },
        placeholder: () => {
            return {
                ...styles,
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 0%)',
            }
        },
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
    })

    const onColorClick = (title) => {
        const clone = activeColors.concat()
        let index = null
        for (let i = 0; i < colors.length; i++) {
            if (colors[i].label === title) {
                let flag = false
                let temp = null
                index = i
                for (let j = 0; j < clone.length; j++) {
                    if (colors[i].value === clone[j]) {
                        flag = true
                        temp = j
                    }
                }
                if (!flag) {
                    clone.push(colors[i].value)
                } else if (flag) {
                    clone.splice(temp, 1)
                }
            }
        }
        dispatch({ type: CATALOG_SET_COLORS, payload: clone })
        dispatch({ type: CATALOG_SET_UPDATE_LIST })
        dispatch(
            CatalogLoadByFilter(
                false,
                CatalogReducer.sizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax,
                filterStatus,
                CatalogReducer.price,
                CatalogReducer.sort,
                clone,
                CatalogReducer.select
            )
        )

        setActiveColors(clone)

        let historyClone = urlrouterhistory

        console.log('historyClone1', historyClone)
        historyClone =
            historyClone + `filter[colors][]=${clone[clone.length - 1]}` + '&'
        console.log('historyClone2', historyClone)
        setUrlrouterhistory(historyClone)
    }

    const onResetClickHandler = () => {
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

        dispatch({ type: CATALOG_SET_TOP_RESET })
        setFilterStatus(filter_status)

        const clone = filterAPIData.properties.concat()
        setProperties([])
        setTimeout(() => {
            setProperties(clone)
        }, 0)
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
        dispatch({ type: CATALOG_SET_PAGE, payload: 1 })

        const n = []
        for (let i = 0; i < clone.length; i++) {
            for (let j = 0; j < clone[i].inner.length; j++) {
                if (
                    clone[i].inner[j].property.label === title &&
                    i === mainIndex
                ) {
                    console.log(
                        'clone[i].inner[j].property',
                        clone[i].inner[j].property
                    )
                    const id = clone[i].filter.id
                    const value = clone[i].inner[j].property.value
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

        dispatch({ type: CATALOG_SET_FILTERS, payload: filterStatus })
        dispatch({ type: CATALOG_SET_UPDATE_LIST })
        dispatch(
            CatalogLoadByFilter(
                false,
                CatalogReducer.sizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax,
                filterStatus,
                CatalogReducer.price,
                CatalogReducer.sort,
                CatalogReducer.colors,
                CatalogReducer.select
            )
        )

        console.log('onFilterClickHandler')
        setFilterStatus(againClone)

        // Replace url

        for (let i = 0; i < againClone.length; i++) {
            for (let j = 0; j < againClone[i].inner.length; j++) {
                if (againClone[i].inner[j].status === 'opened') {
                    let c = urlrouterhistory
                    const id = againClone[i].filter.id
                    const value = againClone[i].inner[j].property.value
                    c = c + `filter[properties][${id}][]=${value}&`
                    setUrlrouterhistory(c)
                    console.log('c', c)
                }
            }
        }
    }

    const getCheckedStyle = (title, index, name) => {
        for (let i = 0; i < filterStatus.length; i++) {
            if (filterStatus[i].filter.title === name) {
                for (let j = 0; j < filterStatus[i].inner.length; j++) {
                    if (
                        filterStatus[i].inner[j].property.label === title &&
                        filterStatus[i].inner[j].status === 'opened'
                    ) {
                        console.log(
                            'label title',
                            filterStatus[i].inner[j].property.label,
                            title
                        )
                        return true
                    }
                }
            }
        }
        return false
    }

    const getColorCheckedStyle = (value) => {
        for (let i = 0; i < colorsIds.length; i++) {
            if (colorsIds[i] === value) {
                return true
            }
        }
        return false
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
                className={`main_filter__selector`}
                classNamePrefix="main_filter__selector--inner"
                placeholder="Все"
                onChange={(data) => {
                    SetSizeSelectorStyles({
                        control: (styles) => ({
                            ...styles,
                            backgroundColor: '#30ACD7',
                            height: '50px',
                        }),
                        dropdownIndicator: (styles) => {
                            return {
                                ...styles,
                                color: '#fff',
                                position: 'absolute',
                                right: '0px',
                            }
                        },
                        placeholder: () => {
                            return {
                                ...styles,
                                position: 'absolute',
                                left: '50%',
                                transform: 'translate(-50%, 0%)',
                            }
                        },
                        option: (styles, { data, isFocused }) => {
                            return {
                                ...styles,
                                backgroundColor: isFocused ? '#0CA5D3' : '',
                                color: isFocused ? 'white' : '',
                            }
                        },
                        singleValue: (styles) => {
                            return {
                                ...styles,
                                color: '#fff',
                                position: 'absolute',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
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
                    })
                    setSelectedSize({ label: data.label, value: data.value })
                }}
                styles={SizeSelectorStyles}
                options={options}
                isSearchable={false}
                autoFocus={false}
            />
        )

        // const filter_status = []

        // for (let i = 0; i < properties.length; i++) {
        //     let clone = []
        //     if (
        //         properties[i].checkboxes &&
        //         properties[i].checkboxes.length !== 0
        //     ) {
        //         for (let j = 0; j < properties[i].checkboxes.length; j++) {
        //             if (properties[i].checkboxes[j].productCount !== 0) {
        //                 clone.push({
        //                     property: properties[i].checkboxes[j],
        //                     status: 'closed',
        //                 })
        //             }
        //         }
        //     }
        //     filter_status.push({ filter: properties[i], inner: clone })
        //     clone = []
        // }
        // setFilterStatus(filter_status)

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

        return () => setSizeSelector(null)
    }, [SizeSelectorStyles])

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
                            dispatch({
                                type: CATALOG_SET_PRICE,
                                payload: prices,
                            })
                            dispatch({ type: CATALOG_SET_UPDATE_LIST })
                            dispatch(
                                CatalogLoadByFilter(
                                    false,
                                    CatalogReducer.sizeId,
                                    catalogSlug,
                                    subCatalogSlug,
                                    oldMin,
                                    oldMax,
                                    CatalogReducer.filters,
                                    prices,
                                    CatalogReducer.sort,
                                    CatalogReducer.colors,
                                    CatalogReducer.select
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
                    return (
                        <div
                            key={index}
                            className={`${
                                styles.catalog_left_filter__tab_wrapper
                            } ${setClass(select.label)}`}
                        >
                            <div
                                className={
                                    styles.catalog_left_filter__tab_wrapper_title
                                }
                            >
                                <span className={styles.arrow}></span>
                                <span
                                    onClick={() =>
                                        OnCloseFilterClickHandler(select.label)
                                    }
                                    className={styles.text}
                                >
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
                                                CatalogCommonReducer.desktopTopFilter,
                                                false,
                                                activeColors,
                                                obj
                                            )
                                        )
                                    }}
                                    styles={{
                                        control: (styles) => ({
                                            ...styles,
                                            backgroundColor: 'white',
                                            height: '50px',
                                        }),
                                        dropdownIndicator: (styles) => {
                                            return {
                                                ...styles,
                                                position: 'absolute',
                                                right: '0px',
                                            }
                                        },
                                        placeholder: () => {
                                            return {
                                                ...styles,
                                                position: 'absolute',
                                                left: '50%',
                                                transform:
                                                    'translate(-50%, 0%)',
                                            }
                                        },
                                        option: (
                                            styles,
                                            { data, isFocused }
                                        ) => {
                                            return {
                                                ...styles,
                                                backgroundColor: isFocused
                                                    ? '#0CA5D3'
                                                    : '',
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
                                    }}
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
                    if (property.range) return
                    if (index > 2) return
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
                                        OnCloseFilterClickHandler(
                                            property.title
                                        )
                                    }
                                    className={styles.text}
                                >
                                    {property.title}
                                </span>
                                {property.description && (
                                    <span className={styles.question}>
                                        <svg
                                            viewBox="0 0 30 30"
                                            xmlns="https://www.w3.org/2000/svg"
                                        >
                                            <path d="M11 7v3c3 0 5-1 5 1s-3 4-3 6v2c6 0 2-1 5-4 1-1 2-3 2-5s-1-3-3-4c-3 0-4 1-6 1zM12 22c0 1 1 3 3 3 1 0 2-1 2-3 0-3-5-3-5 0z"></path>
                                        </svg>
                                        <span className={styles.info_block}>
                                            {property.description}
                                        </span>
                                    </span>
                                )}
                                {property.description && (
                                    <div
                                        className={
                                            styles.catalog_left_filter__info
                                        }
                                    ></div>
                                )}
                            </div>
                            <div
                                className={
                                    styles.catalog_left_filter__tab_wrapper_inner
                                }
                            >
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
                                                                    <input
                                                                        onChange={() => {}}
                                                                        defaultChecked={getCheckedStyle(
                                                                            checkbox.label,
                                                                            index,
                                                                            property.title
                                                                        )}
                                                                        checked={getCheckedStyle(
                                                                            checkbox.label,
                                                                            index,
                                                                            property.title
                                                                        )}
                                                                        type="checkbox"
                                                                    />
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
                                            if (click > 0) {
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
                                            <input
                                                defaultChecked={getColorCheckedStyle(
                                                    color.value
                                                )}
                                                type="checkbox"
                                            />
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

            {properties.map((property, index) => {
                if (property.select) return
                if (property.range) return
                if (index < 3) return
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
                            {property.description && (
                                <span className={styles.question}>
                                    <svg
                                        viewBox="0 0 30 30"
                                        xmlns="https://www.w3.org/2000/svg"
                                    >
                                        <path d="M11 7v3c3 0 5-1 5 1s-3 4-3 6v2c6 0 2-1 5-4 1-1 2-3 2-5s-1-3-3-4c-3 0-4 1-6 1zM12 22c0 1 1 3 3 3 1 0 2-1 2-3 0-3-5-3-5 0z"></path>
                                    </svg>
                                    <span className={styles.info_block}>
                                        {property.description}
                                    </span>
                                </span>
                            )}
                            {property.description && (
                                <div
                                    className={styles.catalog_left_filter__info}
                                ></div>
                            )}
                        </div>
                        <div
                            className={
                                styles.catalog_left_filter__tab_wrapper_inner
                            }
                        >
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
                                                                if (
                                                                    click % 2 ==
                                                                    0
                                                                ) {
                                                                    onFilterClickHandler(
                                                                        index,
                                                                        checkbox.label
                                                                    )
                                                                }
                                                                setClick(
                                                                    (p) => ++p
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

            <button
                onClick={onResetClickHandler}
                className={styles.catalog_left_filter__reset_btn}
            >
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
