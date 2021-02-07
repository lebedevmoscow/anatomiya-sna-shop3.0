import { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'

import styles from './../../styles/components/Filters/CatalogMobileMobileFilter.module.sass'

const CatalogMainFilter = ({ className, title, onClose }) => {
    // Refs
    const priceRef = useRef(null)
    const sizeRef = useRef(null)
    const gabaritWidthRef = useRef(null)
    const gabaritLengthRef = useRef(null)
    const materialRef = useRef(null)
    const complectationRef = useRef(null)
    const decorRef = useRef(null)
    const styleRef = useRef(null)
    const colorRef = useRef(null)
    const typeRef = useRef(null)
    const headboardRef = useRef(null)
    const footboardRef = useRef(null)
    const manufacturerRef = useRef(null)
    const countryBrand = useRef(null)
    const additionalOptionsRef = useRef(null)

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
        switch (title) {
            case 'Цена (руб.)':
                setTimeout(() => {
                    priceRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Размер (см.)':
                setTimeout(() => {
                    sizeRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Габарит кровати ширина (см.)':
                setTimeout(() => {
                    gabaritWidthRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Габарит кровати длина (см.)':
                setTimeout(() => {
                    gabaritLengthRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Материал отделки':
                setTimeout(() => {
                    materialRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Комплектация':
                setTimeout(() => {
                    complectationRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    })
                }, 0)
                break

            case 'Декор':
                setTimeout(() => {
                    decorRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Стиль':
                setTimeout(() => {
                    styleRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Цвет':
                setTimeout(() => {
                    colorRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Тип':
                setTimeout(() => {
                    typeRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Изголовье':
                setTimeout(() => {
                    headboardRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Изножье':
                setTimeout(() => {
                    footboardRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Производитель':
                setTimeout(() => {
                    manufacturerRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)

            case 'Страна бренд':
                setTimeout(() => {
                    countryBrand.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break

            case 'Возможные опции':
                setTimeout(() => {
                    additionalOptionsRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 0)
                break
            default:
                break
        }

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
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Материал отделки', e)
                            }
                        >
                            <div ref={materialRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Материал отделки
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Материал отделки' && (
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
                                                <h6>ЛДСП/экокожа</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>ЛДСП/ткань</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Металл</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Экокожа</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Ткань</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Сосна</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Сосна/Ткань</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Металл/Гевея</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Берёза</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Бук</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Бук/Экокожа</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Дуб</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Дуб/Экокожа</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>МЛПД</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Ясень</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Комплектация', e)
                            }
                        >
                            <div
                                ref={complectationRef}
                                className={styles.wrapper}
                            >
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Комплектация
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Комплектация' && (
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
                                                <h6>С основанием</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>На высоких ножках</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>На низких ножках</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) => onListItemClickHandler('Декор', e)}
                        >
                            <div ref={decorRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>Декор</span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Декор' && (
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
                                                <h6>Без декора</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>С элементами ковки</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>С резными элементами</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>С кристаллами</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>С узорами</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) => onListItemClickHandler('Стиль', e)}
                        >
                            <div ref={styleRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>Стиль</span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Стиль' && (
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
                                                <h6>Прованс</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Современный</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Классический</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Дизайнерский</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Восточный</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) => onListItemClickHandler('Цвет', e)}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: '15px',
                                }}
                                ref={colorRef}
                                className={styles.wrapper__colored}
                            >
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>Цвет</span>
                                </div>
                                <div className={styles.wrap2}>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.white}`}
                                                ></span>
                                                <h6>Белый</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.biege}`}
                                                ></span>
                                                <h6>Бежевый</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.yellow}`}
                                                >
                                                    Желтый
                                                </span>
                                                <h6>Желтый</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <span></span>
                                                <h6>Золото</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.brown}`}
                                                ></span>
                                                <h6>Коричневый</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.grey}`}
                                                ></span>
                                                <h6>Серый</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.black}`}
                                                ></span>
                                                <h6>Черный</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.burgundy}`}
                                                ></span>
                                                <h6>Бордовый</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    className={`${catalog_left_filter__checkmark} ${styles.silver}`}
                                                ></span>
                                                <h6>Серебро</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) => onListItemClickHandler('Тип', e)}
                        >
                            <div ref={typeRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>Тип</span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Тип' && (
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
                                                <h6>Металлические</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Кованые</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Железные</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Софа</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Тахты</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Кушетки</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Изголовье', e)
                            }
                        >
                            <div ref={headboardRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Изголовье
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Изголовье' && (
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
                                                <h6>Твердое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Кованное</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Металлическое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Изогнутое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Прямое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Низкое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>С элементами ковки</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>С кристаллами</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Изножье', e)
                            }
                        >
                            <div ref={footboardRef} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>Изножье</span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Изножье' && (
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
                                                <h6>Низкое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Без изножья</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Высокое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Твердое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Кованое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Металлическое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Изогнутое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Прямое</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>С элементами ковки</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>По запросу</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Производитель', e)
                            }
                        >
                            <div
                                ref={manufacturerRef}
                                className={styles.wrapper}
                            >
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Производитель
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Производитель' && (
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
                                                <h6>Орматек</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Райтон</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>DreamLine</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Стиллмет</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Woodville</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Alitte</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Страна бренд', e)
                            }
                        >
                            <div ref={countryBrand} className={styles.wrapper}>
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Страна бренд
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Страна бренд' && (
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
                                                <h6>Российские</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Малайзия</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>На низких ножках</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={styles.li}
                            onClick={(e) =>
                                onListItemClickHandler('Возможные опции', e)
                            }
                        >
                            <div
                                ref={additionalOptionsRef}
                                className={styles.wrapper}
                            >
                                <div className={styles.wrap1}>
                                    <span className={styles.text}>
                                        Возможные опции
                                    </span>
                                </div>
                                <div className={styles.wrap2}>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            {titleOfAdditionalMenu === 'Возможные опции' && (
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
                                                <h6>Выдвижные ящики</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    Ортопедическое основание
                                                </h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>1 или 2 спинки на выбор</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                <h6>Высокое изножье</h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
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
                                                    Изготовление без изголовья
                                                </h6>
                                                <span className={styles.amount}>
                                                    (48)
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
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
