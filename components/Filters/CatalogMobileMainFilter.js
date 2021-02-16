import { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'
import Modal from './../Modal'
import { v4 as uuidv4 } from 'uuid'

import styles from './../../styles/components/Filters/CatalogMobileMobileFilter.module.sass'

import { useSelector, useDispatch } from 'react-redux'
import {
    CATALOG_SET_FILTERS,
    catalogSetFilters,
} from './../../actions/CatalogCommon.js'
import { LoadByFilters } from './../../actions/NewCatalogProductList'

const CatalogMainFilter = ({
    className,
    title,
    onClose,
    filterAPIData,
    lastClick,
    setLastClick,
    catalogSlug,
    subCatalogSlug,
    filterProductsIds,
    stylesForViewType,
    viewType,
}) => {
    console.log('filterAPIData', filterAPIData)
    const colors = filterAPIData.colors

    const oldMin = filterAPIData.price.min
    const oldMax = filterAPIData.price.max

    const dispatch = useDispatch()

    const CatalogCommonReducer = useSelector(
        (store) => store.CatalogCommonReducer
    )

    const CatalogProductListReducer = useSelector(
        (store) => store.CatalogProductListReducer
    )
    const NewCatalogProductListReducer = useSelector(
        (store) => store.NewCatalogProductListReducer
    )
    const SelectedSizeReducer = useSelector(
        (store) => store.SelectedSizeReducer
    )

    const properties = filterAPIData.properties.concat()

    // Refs
    const priceRef = useRef(null)
    const sizeRef = useRef(null)
    const gabaritWidthRef = useRef(null)
    const gabaritLengthRef = useRef(null)
    const materialRef = useRef(null)

    const [prices, setPrices] = useState([
        filterAPIData.price.min,
        filterAPIData.price.max,
    ])
    const [widths, setWidths] = useState([90, 215])
    const [lengths, setLengths] = useState([200, 248])
    const [sizeSelector, setSizeSelector] = useState(null)
    const [titleOfAdditionalMenu, setTitleOfAdditionMenu] = useState(null)
    const [closeStatus, setCloseStatus] = useState([])
    const [filterStatus, setFilterStatus] = useState([])
    const [click, setClick] = useState(0)
    const [selectedActive, setSelectedActive] = useState([])

    const [selectedSize, setSelectedSize] = useState(null)

    const onFilterClickHandler = (mainIndex, title) => {
        const clone = filterStatus.concat()

        setLastClick('filter')

        const n = []
        for (let i = 0; i < clone.length; i++) {
            for (let j = 0; j < clone[i].inner.length; j++) {
                if (
                    clone[i].inner[j].property.label === title &&
                    i === mainIndex
                ) {
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

        dispatch(catalogSetFilters(againClone))
        setFilterStatus(againClone)
    }

    const [activeColors, setActiveColors] = useState([])

    const onColorClick = (title) => {
        if (!activeColors) return
        const clone = activeColors.concat()

        for (let i = 0; i < colors.length; i++) {
            if (colors[i].label === title) {
                let flag = false

                let t = null
                for (let j = 0; j < clone.length; j++) {
                    if (clone[j] === colors[i].value) {
                        flag = true
                        t = j
                    }
                }
                if (!flag) {
                    clone.push(colors[i].value)
                } else if (flag) {
                    clone.splice(t, 1)
                }
            }
        }
        setActiveColors(clone)
    }

    const getYellowTextForColor = () => {
        const clone = activeColors.concat()

        const d = []
        for (let i = 0; i < colors.length; i++) {
            for (let j = 0; j < clone.length; j++) {
                if (colors[i].value === clone[i]) {
                    d.push(`${colors[i].label}, `)
                }
            }
        }
        return d
    }

    useEffect(() => {
        setSizeSelector(
            <Select
                className="main_filter__selector"
                classNamePrefix="main_filter__selector--inner"
                placeholder="Все"
                onChange={(data) => {
                    setSelectedSize({ label: data.label, value: data.value })
                }}
                options={options}
                isSearchable={false}
                autoFocus={false}
            />
        )

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

        setFilterStatus(filter_status)
    }, [])

    useEffect(() => {
        console.log('filterStatus', filterStatus)

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
                null,
                true,
                selectedActive,
                CatalogCommonReducer.topfilter
            )
        )
    }, [filterStatus])

    useEffect(() => {
        if (CatalogCommonReducer.topfilter.length > 0) {
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
                    null,
                    true,
                    selectedActive,
                    CatalogCommonReducer.topfilter
                )
            )
        }
    }, [CatalogCommonReducer.topfilter])

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
                    activeColors,
                    selectedActive,
                    CatalogCommonReducer.topfilter
                )
            )
        }
    }, [selectedSize])

    useEffect(() => {
        if (activeColors) {
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
                    selectedActive,
                    CatalogCommonReducer.topfilter
                )
            )
        }
    }, [activeColors])

    const options = filterAPIData.size

    const onListItemClickHandler = (title, e) => {
        if (title === titleOfAdditionalMenu) {
            if (
                e.target.classList.contains(styles.plus) ||
                e.target.classList.contains(styles.text) ||
                e.target.classList.contains(styles.wrapper) ||
                e.target.classList.contains(styles.wrapper__colored) ||
                e.target.classList.contains(styles.li)
            ) {
                return setTitleOfAdditionMenu(null)
            }
        }

        setTitleOfAdditionMenu(title)
    }

    const getActiveFilters = (index) => {
        if (filterStatus.length > 0) {
            const data = []

            const obj = filterStatus[index]
            for (let i = 0; i < obj.inner.length; i++) {
                if (obj.inner[i].status === 'opened') {
                    data.push(
                        <p key={uuidv4()}>{obj.inner[i].property.label} ,</p>
                    )
                }
            }
            return data
        }
    }

    const getCheckedStyle = (index, title) => {
        const clone = filterStatus.concat()
        const obj = clone[index].inner

        for (let i = 0; i < obj.length; i++) {
            const prop = obj[i].property
            if (prop.label === title) {
                if (obj[i].status === 'closed') {
                    return false
                } else {
                    console.log('TRUEEEE')
                    return true
                }
            }
        }
        return false
    }

    const getCheckedStyleForColor = (val) => {
        for (let i = 0; i < activeColors.length; i++) {
            if (activeColors[i] === val) {
                return true
            }
        }
        return false
    }

    return (
        <div className={styles.catalog_main_mobile_filter}>
            <div
                className={`${styles.mobile_burger_menu_city_choise}  mobile-main-filter__${className}`}
            >
                <div className={styles.container}>
                    <div
                        className={
                            styles.mobile_burger_menu_city_choise__labels
                        }
                    >
                        <i
                            onClick={() => {
                                onClose()
                            }}
                            className={styles.arrow_left}
                        ></i>
                        <span>{title}</span>
                    </div>
                    <ul
                        className={
                            styles.mobile_burger_menu_city_choise__moscow_list
                        }
                    >
                        <li
                            className={`${styles.price_additional} ${styles.li}`}
                            onClick={(e) =>
                                onListItemClickHandler('Цена (руб.)', e)
                            }
                        >
                            <div ref={priceRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Цена (руб.)
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.yellow}>
                                        от {filterAPIData.price.min} до{' '}
                                        {filterAPIData.price.max}
                                    </span>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Цена (руб.)' && (
                                <div className={styles.range_block}>
                                    <div
                                        className={
                                            styles.catalog_left_filter__input_wrapper
                                        }
                                    >
                                        <input
                                            className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input__first}`}
                                            placeholder={prices[0]
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ' '
                                                )}
                                        ></input>
                                        <input
                                            className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input__first}`}
                                            placeholder={prices[1]
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ' '
                                                )}
                                        ></input>
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
                                                    prices,
                                                    selectedSize,
                                                    null,
                                                    false,
                                                    activeColors,
                                                    selectedActive,
                                                    CatalogCommonReducer.topfilter
                                                )
                                            )
                                        }}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                onMouseDown={props.onMouseDown}
                                                onTouchStart={
                                                    props.onTouchStart
                                                }
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
                                                        background: getTrackBackground(
                                                            {
                                                                values: prices,
                                                                colors: [
                                                                    '#ccc',
                                                                    '#30ACD7',
                                                                    '#ccc',
                                                                ],
                                                                min:
                                                                    filterAPIData
                                                                        .price
                                                                        .min,
                                                                max:
                                                                    filterAPIData
                                                                        .price
                                                                        .max,
                                                            }
                                                        ),
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
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Размер (см.)', e)
                            }
                        >
                            <div ref={sizeRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Размер (см.)
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.yellow}>
                                        {(selectedSize && selectedSize.label) ||
                                            ''}
                                    </span>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Размер (см.)' && (
                                <div className={styles.selector_block}>
                                    {sizeSelector}
                                </div>
                            )}
                        </li>
                        {selectedActive &&
                            selectedActive.length > 0 &&
                            selectedActive.map((select, index) => {
                                return (
                                    <li
                                        onClick={(e) =>
                                            onListItemClickHandler(
                                                select.label,
                                                e
                                            )
                                        }
                                        key={index}
                                        className={styles.li}
                                    >
                                        <div className={styles.wrapper}>
                                            <div className={styles.wrap1}>
                                                <span className={styles.text}>
                                                    {select.label}
                                                </span>
                                            </div>
                                            <div className={styles.wrap2}>
                                                <span className={styles.yellow}>
                                                    {/* {(selectedSize &&
                                                        selectedSize.label) ||
                                                        ''} */}
                                                </span>
                                                <span className={styles.plus}>
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                        {titleOfAdditionalMenu ===
                                            select.label && (
                                            <div
                                                className={
                                                    styles.selector_block
                                                }
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
                                                        console.log(
                                                            'CatalogCommonReducer.topFilter',
                                                            CatalogCommonReducer.topfilter
                                                        )
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
                                                                true,
                                                                activeColors,
                                                                obj,
                                                                CatalogCommonReducer.topfilter
                                                            )
                                                        )
                                                    }}
                                                    options={select.data}
                                                    isSearchable={false}
                                                    autoFocus={false}
                                                />
                                            </div>
                                        )}
                                    </li>
                                )
                            })}
                        {properties.map((prop, index) => {
                            if (prop.select && prop.select.length > 0) return
                            if (prop.range) return

                            return (
                                <li
                                    key={uuidv4()}
                                    className={styles.li}
                                    onClick={(e) => {
                                        onListItemClickHandler(prop.title, e)
                                    }}
                                >
                                    <div
                                        ref={materialRef}
                                        className={styles.wrapper}
                                    >
                                        <div className={styles.wrap1}>
                                            <span className={styles.text}>
                                                {prop.title}
                                            </span>
                                        </div>
                                        <div className={styles.wrap2}>
                                            <span className={styles.yellow}>
                                                {getActiveFilters(index)}
                                            </span>
                                            <span className={styles.plus}>
                                                +
                                            </span>
                                        </div>
                                    </div>
                                    {titleOfAdditionalMenu === prop.title && (
                                        <div className={styles.checkbox_block}>
                                            <ul
                                                className={
                                                    styles.catalog_left_filter__tab_options
                                                }
                                            >
                                                {prop &&
                                                    prop.checkboxes.map(
                                                        (prop2, index2) => {
                                                            if (
                                                                prop2.productCount !==
                                                                0
                                                            ) {
                                                                return (
                                                                    <li
                                                                        key={uuidv4()}
                                                                        className={
                                                                            styles.catalog_left_filter__tab_options_item
                                                                        }
                                                                        onClick={() => {
                                                                            onFilterClickHandler(
                                                                                index,
                                                                                prop2.label
                                                                            )
                                                                        }}
                                                                    >
                                                                        <label
                                                                            className={
                                                                                styles.catalog_left_filter__checkbox_container
                                                                            }
                                                                        >
                                                                            <input
                                                                                defaultChecked={getCheckedStyle(
                                                                                    index,
                                                                                    prop2.label
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
                                                                                    prop2.label
                                                                                }
                                                                            </h6>
                                                                            <span
                                                                                className={
                                                                                    styles.amount
                                                                                }
                                                                            >
                                                                                (
                                                                                {
                                                                                    prop2.productCount
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
                                        </div>
                                    )}
                                </li>
                            )
                        })}
                        {colors && (
                            <li
                                className={styles.li}
                                onClick={(e) =>
                                    onListItemClickHandler('Цвет', e)
                                }
                            >
                                <div
                                    ref={materialRef}
                                    className={styles.wrapper}
                                >
                                    <div className={styles.wrap1}>
                                        <span className={styles.text}>
                                            {'Цвет'}
                                        </span>
                                    </div>
                                    <div className={styles.wrap2}>
                                        <span className={styles.yellow}>
                                            {getYellowTextForColor()}
                                        </span>
                                        <span className={styles.plus}>+</span>
                                    </div>
                                </div>
                                {titleOfAdditionalMenu === 'Цвет' && (
                                    <div className={styles.checkbox_block}>
                                        <ul
                                            className={
                                                styles.catalog_left_filter__tab_options
                                            }
                                        >
                                            {colors.map((prop2, index2) => {
                                                if (prop2.productCount !== 0) {
                                                    return (
                                                        <li
                                                            key={index2}
                                                            className={
                                                                styles.catalog_left_filter__tab_options_item
                                                            }
                                                            onClick={() => {
                                                                if (
                                                                    click % 2 ==
                                                                    0
                                                                ) {
                                                                    onColorClick(
                                                                        prop2.label
                                                                    )
                                                                }
                                                                setClick(
                                                                    (p) => ++p
                                                                )
                                                            }}
                                                        >
                                                            <label
                                                                className={
                                                                    styles.catalog_left_filter__checkbox_container
                                                                }
                                                            >
                                                                <input
                                                                    checked={getCheckedStyleForColor(
                                                                        prop2.value
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
                                                                        prop2.label
                                                                    }
                                                                </h6>
                                                                <span
                                                                    className={
                                                                        styles.amount
                                                                    }
                                                                >
                                                                    (
                                                                    {
                                                                        prop2.productCount
                                                                    }
                                                                    )
                                                                </span>
                                                            </label>
                                                        </li>
                                                    )
                                                }
                                            })}{' '}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        )}
                    </ul>
                    <div className={styles.catalog_modal_buttons}>
                        <button
                            onClick={() => {
                                window.scroll({ top: 0 })
                            }}
                            className={styles.catalog_modal_buttons__see_all}
                        >
                            Посмотреть 613 предложений
                        </button>
                        <button className={styles.catalog_modal_buttons__reset}>
                            Сбросить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogMainFilter
