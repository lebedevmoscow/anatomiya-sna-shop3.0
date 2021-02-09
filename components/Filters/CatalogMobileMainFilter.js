import { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'

import styles from './../../styles/components/Filters/CatalogMobileMobileFilter.module.sass'

const CatalogMainFilter = ({ className, title, onClose, filterAPIData }) => {
    const properties = filterAPIData.properties.concat()

    // Refs
    const priceRef = useRef(null)
    const sizeRef = useRef(null)
    const gabaritWidthRef = useRef(null)
    const gabaritLengthRef = useRef(null)
    const materialRef = useRef(null)

    const [prices, setPrices] = useState([5170, 89590])
    const [widths, setWidths] = useState([90, 215])
    const [lengths, setLengths] = useState([200, 248])
    const [sizeSelector, setSizeSelector] = useState(null)
    const [titleOfAdditionalMenu, setTitleOfAdditionMenu] = useState(null)

    useEffect(() => {
        setSizeSelector(
            <Select
                className="main_filter__selector"
                classNamePrefix="main_filter__selector--inner"
                placeholder="Все"
                options={options}
                isSearchable={false}
                autoFocus={false}
            />
        )
    }, [])

    const options = [
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
        { value: '190*60', label: '190*60' },
    ]

    const onListItemClickHandler = (title, e) => {
        if (title === titleOfAdditionalMenu) {
            console.log('e.target', e.target)
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
                                        от 5170 до 89590
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
                                        step={1000}
                                        min={5170}
                                        max={89590}
                                        onChange={(v) => setPrices(v)}
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
                                                    width: '100%',
                                                }}
                                            >
                                                <div
                                                    ref={props.ref}
                                                    style={{
                                                        height: '5px',
                                                        width: '100%',
                                                        borderRadius: '4px',
                                                        background: getTrackBackground(
                                                            {
                                                                values: prices,
                                                                colors: [
                                                                    '#ccc',
                                                                    '#548BF4',
                                                                    '#ccc',
                                                                ],
                                                                min: 5170,
                                                                max: 89590,
                                                            }
                                                        ),
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
                                        90*200
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
                        <li
                            className={styles.selector_block}
                            onClick={(e) =>
                                onListItemClickHandler(
                                    'Габарит кровати ширина (см.)',
                                    e
                                )
                            }
                        >
                            <div
                                ref={gabaritWidthRef}
                                className={styles.wrapper}
                            >
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Габарит кровати ширина (см.)
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.yellow}>
                                        от 90 до 215
                                    </span>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu ===
                                'Габарит кровати ширина (см.)' && (
                                <div className={styles.range_block}>
                                    <div
                                        className={
                                            styles.catalog_left_filter__input_wrapper
                                        }
                                    >
                                        <input
                                            className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input__first}`}
                                            placeholder={widths[0]
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ' '
                                                )}
                                        ></input>
                                        <input
                                            className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input__first}`}
                                            placeholder={widths[1]
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ' '
                                                )}
                                        ></input>
                                    </div>

                                    <Range
                                        draggableTrack
                                        values={widths}
                                        step={1}
                                        min={90}
                                        max={215}
                                        onChange={(w) => setWidths(w)}
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
                                                    width: '100%',
                                                }}
                                            >
                                                <div
                                                    ref={props.ref}
                                                    style={{
                                                        height: '5px',
                                                        width: '100%',
                                                        borderRadius: '4px',
                                                        background: getTrackBackground(
                                                            {
                                                                values: widths,
                                                                colors: [
                                                                    '#ccc',
                                                                    '#548BF4',
                                                                    '#ccc',
                                                                ],
                                                                min: 90,
                                                                max: 215,
                                                            }
                                                        ),
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
                                onListItemClickHandler(
                                    'Габарит кровати длина (см.)',
                                    e
                                )
                            }
                        >
                            <div
                                ref={gabaritLengthRef}
                                className={styles.wrapper}
                            >
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Габарит кровати длина (см.)
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.yellow}>
                                        от 200 до 248
                                    </span>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu ===
                                'Габарит кровати длина (см.)' && (
                                <div className={styles.range_block}>
                                    <div
                                        className={
                                            styles.catalog_left_filter__input_wrapper
                                        }
                                    >
                                        <input
                                            className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input__first}`}
                                            placeholder={lengths[0]
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ' '
                                                )}
                                        ></input>
                                        <input
                                            className={`${styles.catalog_left_filter__input} ${styles.catalog_left_filter__input__first}`}
                                            placeholder={lengths[1]
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ' '
                                                )}
                                        ></input>
                                    </div>

                                    <Range
                                        draggableTrack
                                        values={lengths}
                                        step={1}
                                        min={200}
                                        max={248}
                                        onChange={(l) => setLengths(l)}
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
                                                    width: '100%',
                                                }}
                                            >
                                                <div
                                                    ref={props.ref}
                                                    style={{
                                                        height: '5px',
                                                        width: '100%',
                                                        borderRadius: '4px',
                                                        background: getTrackBackground(
                                                            {
                                                                values: lengths,
                                                                colors: [
                                                                    '#ccc',
                                                                    '#548BF4',
                                                                    '#ccc',
                                                                ],
                                                                min: 200,
                                                                max: 248,
                                                            }
                                                        ),
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

                        {properties.map((prop, index) => {
                            return (
                                <li
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
                                            <span className={styles.plus}>
                                                +
                                            </span>
                                        </div>
                                    </div>
                                    {/* {titleOfAdditionalMenu === 'Материал отделки' && (
                                <div className={styles.checkbox_block}>
                                    <ul
                                        className={
                                            styles.catalog_left_filter__tab_options
                                        }
                                    >
                                        <li
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
                                                <h6>ЛДСП</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )} */}
                                    {titleOfAdditionalMenu === prop.title && (
                                        <div className={styles.checkbox_block}>
                                            <ul
                                                className={
                                                    styles.catalog_left_filter__tab_options
                                                }
                                            >
                                                {/* <li
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
                                                        <h6>ЛДСП</h6>
                                                        <span
                                                            className={
                                                                styles.amount
                                                            }
                                                        >
                                                            (48)
                                                        </span>
                                                    </label>
                                                </li> */}

                                                {/* {prop.map((prop2, index2) => {
                                                    return (
                                                        <li
                                                            className={
                                                                styles.catalog_left_filter__tab_options_item
                                                            }
                                                        ></li>
                                                    )
                                                })} */}
                                                {prop.checkboxes.map(
                                                    (prop2, index2) => {
                                                        return (
                                                            <li
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
