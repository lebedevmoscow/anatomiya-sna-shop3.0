import { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'
import Modal from './../Modal'

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

        dispatch(catalogSetFilters(againClone))
        setFilterStatus(againClone)
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

        console.log('a', a)

        setFilterStatus(filter_status)
    }, [])

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
                    null,
                    true
                )
            )
        }
    }, [filterStatus])

    useEffect(() => {
        if (selectedSize) {
            console.log('dis')
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
                    null
                )
            )
        }
    }, [selectedSize])

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

    const getActiveFilters = (filterTitle) => {
        const data = []
        for (let i = 0; i < filterStatus.length; i++) {
            if (filterStatus[i].filter.title === filterTitle) {
                for (let j = 0; j < filterStatus[i].inner.length; j++) {
                    if (filterStatus[i].inner[j].status === 'opened') {
                        console.log('opened')
                        data.push(
                            <p>{filterStatus[i].inner[j].property.label} ,</p>
                        )
                    }
                }
            }
        }
        return data
    }

    const getCheckedStyle = (index, title) => {
        if (click % 2 === 0) {
            const clone = filterStatus.concat()
            const obj = clone[index].inner

            for (let i = 0; i < obj.length; i++) {
                const prop = obj[i].property
                if (prop.label === title) {
                    if (obj[i].status === 'closed') {
                        return false
                    } else {
                        return true
                    }
                }
            }
            return false
        }
    }

    const [sortType, setSortType] = useState([
        { title: 'По популярности', status: 'disabled' },
        { title: 'По убыванию цены', status: 'disabled' },
        { title: 'По возрастанию цены', status: 'disabled' },
        { title: 'Со скидкой', status: 'disabled' },
        { title: 'Новинка', status: 'disabled' },
        { title: 'С подарком', status: 'disabled' },
        { title: 'Выбор покупателей', status: 'disabled' },
        { title: 'Бесплатная доставка', status: 'disabled' },
    ])

    const onSortClickHandler = (title) => {
        console.log('title', title)

        const clone = sortType.concat()

        if (title === 'По популярности') {
            clone[0].status = 'active'
            clone[1].status = 'disabled'
            clone[2].status = 'disabled'
        }
        if (title === 'По убыванию цены') {
            clone[0].status = 'disabled'
            clone[1].status = 'active'
            clone[2].status = 'disabled'
        }
        if (title === 'По возрастанию цены') {
            clone[0].status = 'disabled'
            clone[1].status = 'disabled'
            clone[2].status = 'active'
        }
        if (title === 'Со скидкой') {
            if (clone[3].status === 'disabled') {
                clone[3].status = 'active'
            } else {
                clone[3].status = 'disabled'
            }
        }
        if (title === 'Новинка') {
            if (clone[4].status === 'disabled') {
                clone[4].status = 'active'
            } else {
                clone[4].status = 'disabled'
            }
        }
        if (title === 'С подарком') {
            if (clone[5].status === 'disabled') {
                clone[5].status = 'active'
            } else {
                clone[5].status = 'disabled'
            }
        }
        if (title === 'Выбор покупателей') {
            if (clone[6].status === 'disabled') {
                clone[6].status = 'active'
            } else {
                clone[6].status = 'disabled'
            }
        }
        if (title === 'Бесплатная доставка') {
            if (clone[7].status === 'disabled') {
                clone[7].status = 'active'
            } else {
                clone[7].status = 'disabled'
            }
        }
        setSortType(clone)
    }

    const sortHTML = (
        <ul style={{ marginTop: '-15px' }} className={styles.sortmodal__ul}>
            {sortType.map((s, index) => {
                let innerClassName = ''
                for (let i = 0; i < sortType.length; i++) {
                    if (
                        sortType[i].title === s.title &&
                        sortType[i].status === 'active'
                    ) {
                        innerClassName = styles.sortmodal__active
                    }
                }
                return (
                    <li
                        onClick={() => onSortClickHandler(s.title)}
                        key={index}
                        className={styles.sortmodal__li}
                    >
                        <span className={styles.sortmodal__firstspan}>
                            {s.title}
                        </span>
                        <span className={styles.sortmodal__secondspan}>
                            <span
                                className={
                                    styles.sortmodal__inner +
                                    ' ' +
                                    innerClassName
                                }
                            ></span>
                        </span>
                    </li>
                )
            })}
        </ul>
    )

    return (
        <div className={styles.catalog_main_mobile_filter}>
            {/* Modals */}
            {/* <Modal
                title={'Сортировать по:'}
                closed={false}
                onClose={() => {}}
                html={sortHTML}
            /> */}

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
                                                    selectedSize
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

                        {console.log('selectedActive', selectedActive)}
                        {selectedActive &&
                            selectedActive.length > 0 &&
                            selectedActive.map((select, index) => {
                                return (
                                    <li key={index} className={styles.li}>
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
                                        <div className={styles.selector_block}>
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
                                                            null,
                                                            obj
                                                        )
                                                    )
                                                }}
                                                options={select.data}
                                                isSearchable={false}
                                                autoFocus={false}
                                            />
                                        </div>
                                    </li>
                                )
                            })}

                        {properties.map((prop, index) => {
                            if (prop.select && prop.select.length > 0) return
                            return (
                                <li
                                    key={index}
                                    className={styles.li}
                                    onClick={(e) =>
                                        onListItemClickHandler(prop.title, e)
                                    }
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
                                                {getActiveFilters(prop.title)}
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
                                                                        key={
                                                                            index2
                                                                        }
                                                                        className={
                                                                            styles.catalog_left_filter__tab_options_item
                                                                        }
                                                                        onClick={() => {
                                                                            if (
                                                                                click %
                                                                                    2 ==
                                                                                0
                                                                            ) {
                                                                                onFilterClickHandler(
                                                                                    index,
                                                                                    prop2.label
                                                                                )
                                                                            }
                                                                            setClick(
                                                                                (
                                                                                    p
                                                                                ) =>
                                                                                    ++p
                                                                            )
                                                                        }}
                                                                    >
                                                                        <label
                                                                            className={
                                                                                styles.catalog_left_filter__checkbox_container
                                                                            }
                                                                        >
                                                                            <input
                                                                                checked={getCheckedStyle(
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
