import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'

import styles from './../../styles/components/Filters/CatalogLeftFilter.module.sass'

const CatalogLeftFilter = ({ filterAPIData }) => {
    const options = filterAPIData.size
    const weightOptions = filterAPIData.properties[0].select
    const properties = filterAPIData.properties

    const [prices, setPrices] = useState([
        filterAPIData.price.min,
        filterAPIData.price.max,
    ])
    const [sizeSelector, setSizeSelector] = useState(null)
    const [closeStatus, setCloseStatus] = useState([
        {
            title: 'Цена (руб.)',
            closed: false,
        },
        {
            title: 'Размер (см.)',
            closed: false,
        },
        {
            title: 'Материал отделки',
            closed: true,
        },
        {
            title: 'Комплектация',
            closed: false,
        },
        {
            title: 'Декор',
            closed: false,
        },
        {
            title: 'Цвет',
            closed: false,
        },
        {
            title: 'Стиль',
            closed: false,
        },
        {
            title: 'Тип',
            closed: true,
        },
        {
            title: 'Изголовье',
            closed: true,
        },
        {
            title: 'Матрас',
            closed: false,
        },
        {
            title: 'Изножье',
            closed: true,
        },
        {
            title: 'Производитель',
            closed: true,
        },
        {
            title: 'Страна бренда',
            closed: true,
        },
        {
            title: 'Возможные опции',
            closed: true,
        },
    ])

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
        setSizeSelector(
            <Select
                className={styles.catalog_left_filter__selector}
                classNamePrefix={styles.catalog_left_filter__selector_inner}
                placeholder="Все"
                styles={colourStyles}
                options={options}
                isSearchable={false}
                autoFocus={false}
            />
        )
        return () => setSizeSelector(null)
    }, [])

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
                    <span className={styles.arrow}></span>
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
                <div
                    onClick={() => OnCloseFilterClickHandler('Размер (см.)')}
                    className={styles.catalog_left_filter__tab_wrapper_title}
                >
                    <span className={styles.arrow}></span>
                    <span className={styles.text}>Размер (см.)</span>
                </div>
                <div
                    className={`${styles.catalog_left_filter__tab_wrapper_inner} ${styles.catalog_left_filter__tab_wrapper_inner__size}`}
                >
                    {sizeSelector}
                </div>
            </div>

            <div
                onClick={() => OnCloseFilterClickHandler('Материал отделки')}
                className={`${styles.catalog_left_filter__tab_wrapper} ${
                    styles.catalog_left_filter__tab_wrapper__checkboxs
                } ${setClass('Материал отделки')}`}
            >
                <div className={styles.catalog_left_filter__tab_wrapper_title}>
                    <span className={styles.arrow}></span>
                    <span className={styles.text}>Материал отделки</span>
                </div>
                <div className={styles.catalog_left_filter__tab_wrapper_inner}>
                    <ul className={styles.catalog_left_filter__tab_options}>
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
                                <span className={styles.amount}>(48)</span>
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
                                <span className={styles.amount}>(48)</span>
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
                                <span className={styles.amount}>(48)</span>
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
                                <span className={styles.amount}>(48)</span>
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
                                <span className={styles.amount}>(48)</span>
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
                                <h6>Кожа</h6>
                                <span className={styles.amount}>(48)</span>
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
                                <h6>Кожа</h6>
                                <span className={styles.amount}>(48)</span>
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
                                <h6>Кожа</h6>
                                <span className={styles.amount}>(48)</span>
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
                                <h6>Кожа</h6>
                                <span className={styles.amount}>(48)</span>
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
                                <h6>Кожа</h6>
                                <span className={styles.amount}>(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                onClick={() => OnCloseFilterClickHandler('Комплектация')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Комплектация'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Комплектация</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Без ножек</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>C основанием</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С ножками</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Без основания</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С подсветкой</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С ящиком для белья</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С матрасом</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С какой-то там еще хуйней</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                onClick={() => OnCloseFilterClickHandler('Декор')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Декор'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Декор</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Без декора</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>C элементами ковки</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С резными элементами</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С пуговицами</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Со стразами</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С гвоздиками</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>С кристаллами</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                onClick={() => OnCloseFilterClickHandler('Цвет')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Цвет'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Цвет</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options colored">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark white"></span>
                                <h6>Белый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark biege"></span>
                                <h6>Бежевый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark blue"></span>
                                <h6>Синий</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark yellow"></span>
                                <h6>Желтый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark green"></span>
                                <h6>Зеленый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark gold"></span>
                                <h6>Золото</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark brown"></span>
                                <h6>Коричневый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark red"></span>
                                <h6>Красный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark grey"></span>
                                <h6>Серый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark blue"></span>
                                <h6>Синий</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark purple"></span>
                                <h6>Фиолетовый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark black"></span>
                                <h6>Черный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark burgundy"></span>
                                <h6>Бордовый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark orange"></span>
                                <h6>Оранжевый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark pink"></span>
                                <h6>Розовый</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark mix"></span>
                                <h6>Разноцветный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark silver"></span>
                                <h6>Серебрянный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                onClick={() => OnCloseFilterClickHandler('Стиль')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Стиль'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Стиль</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Прованс</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Современный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Лофт</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Модерн</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Хайтек</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Классический</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Барокко</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кантри</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Дизайнерский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Скандинавский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Восточный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Минимализм</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Японский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                onClick={() => OnCloseFilterClickHandler('Тип')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Тип'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Тип</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Интерьерные</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кожаные</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Мягкие</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Деревянные</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Металлические</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кованые</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Железные</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Софа</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Тахы</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кушетки</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Двухярусная</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Трансформируемая</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Японский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                onClick={() => OnCloseFilterClickHandler('Изголовье')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Изголовье'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Изголовье</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Прованс</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Современный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Лофт</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Модерн</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Хайтек</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Классический</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Барокко</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кантри</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Дизайнерский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Скандинавский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Восточный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Минимализм</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Японский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                onClick={() => OnCloseFilterClickHandler('Матрас')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Матрас'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Матрас</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Приобретается отдельно</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Входит в комплект</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                onClick={() => OnCloseFilterClickHandler('Изножье')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Изножье'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Изножье</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Прованс</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Современный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Лофт</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Модерн</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Хайтек</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Классический</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Барокко</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кантри</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Дизайнерский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Скандинавский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Восточный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Минимализм</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Японский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                onClick={() => OnCloseFilterClickHandler('Производитель')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Производитель'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Производитель</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Прованс</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Современный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Лофт</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Модерн</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Хайтек</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Классический</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Барокко</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кантри</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Дизайнерский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Скандинавский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Восточный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Минимализм</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Японский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                onClick={() => OnCloseFilterClickHandler('Страна бренда')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Страна бренда'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Страна бренда</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Прованс</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Современный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Лофт</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Модерн</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Хайтек</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Классический</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Барокко</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кантри</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Дизайнерский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Скандинавский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Восточный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Минимализм</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Японский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                onClick={() => OnCloseFilterClickHandler('Возможные опции')}
                className={`catalog_left_filter__tab_wrapper catalog_left_filter__tab_wrapper__checkboxs ${setClass(
                    'Возможные опции'
                )}`}
            >
                <div className="catalog_left_filter__tab_wrapper_title">
                    <span className="arrow"></span>
                    <span className="text">Возможные опции</span>
                </div>
                <div className="catalog_left_filter__tab_wrapper_inner">
                    <ul className="catalog_left_filter__tab_options">
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Прованс</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Современный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Лофт</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Модерн</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Хайтек</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Классический</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Барокко</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Кантри</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Дизайнерский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Скандинавский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Восточный</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Минимализм</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                        <li className="catalog_left_filter__tab_options_item">
                            <label className="catalog_left_filter__checkbox_container">
                                <input type="checkbox" />
                                <span className="catalog_left_filter__checkmark"></span>
                                <h6>Японский</h6>
                                <span className="amount">(48)</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="catalog_left_filter__reset-btn">
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
