import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { Range, getTrackBackground } from 'react-range'
import findProducts from './../../../../actions/IndexPageMainFilter'
import LoadingSpinner from './../../../UI/LoadingSpinners/IndexPageFilterLoadingSpinner'
import { GenerateURLFromIndexPageFilter } from './../../../../utils/GenerateURLFromIndexPageFilter'

const MainFilter = ({ filterAPIData, filterProductsCount }) => {
    const options = filterAPIData.size
    const weightOptions = filterAPIData.properties[0].select
    const properties = filterAPIData.properties

    // Redux
    const dispatch = useDispatch()
    const reduxCount = useSelector((store) => store.IndexPageMainFilterReducer)

    let heightProperty
    let rigidityUpProperty
    let rigidityDownProperty
    let typeOfConstruction

    const onButtonClickHandler = () => {
        dispatch(
            findProducts(url, filterAPIData.price.min, filterAPIData.price.max)
        )
        console.log(
            'FinalURL',
            GenerateURLFromIndexPageFilter(
                url,
                filterAPIData.price.min,
                filterAPIData.price.max
            )
        )
        SetFinalUrl(
            GenerateURLFromIndexPageFilter(
                url,
                filterAPIData.price.min,
                filterAPIData.price.max
            )
        )
    }

    const onRigidityDownInputClickHandler = (value) => {
        const clone = { ...rigidityDownList }
        clone[value] = !clone[value]
        setRigidityDownList(clone)
    }

    const onRigidityUpInputClickHandler = (value) => {
        const clone = { ...rigidityUpList }
        clone[value] = !clone[value]
        setRigidityUpList(clone)
    }

    const onConstructionTypeClickHandler = (value) => {
        const clone = { ...contructionTypeList }
        clone[value] = !clone[value]
        setContructionTypeList(clone)
    }

    const onOptionTypeClickHandler = (value) => {
        const clone = { ...optionsList }
        clone[value] = !clone[value]
        setOptionsList(clone)
    }

    properties.map((property) => {
        if (property.id === 3) heightProperty = property
        if (property.id === 1) rigidityUpProperty = property
        if (property.id === 2) rigidityDownProperty = property
        if (property.id === 5) typeOfConstruction = property
    })

    // Rigidity Down Property
    const RDlist = {}
    // Rigidity Up Property
    const RUList = {}
    // Contruction Type Property
    const CTList = {}
    // Options List
    const OList = {
        newest: false,
        discount: false,
        gift: false,
        recommended: false,
        free_delivery: false,
    }

    rigidityDownProperty.checkboxes.map((rigidity) => {
        return (RDlist[rigidity.value] = false)
    })
    rigidityUpProperty.checkboxes.map((rigidity) => {
        return (RUList[rigidity.value] = false)
    })
    typeOfConstruction.checkboxes.map((type) => {
        return (CTList[type.value] = false)
    })

    const [values, setValues] = useState([
        filterAPIData.price.min,
        filterAPIData.price.max,
    ])
    const [values2, setValues2] = useState([
        heightProperty.range.min,
        heightProperty.range.max,
    ])
    const [priceAllow, setPriceAllow] = useState(0)
    const [heightAllow, setHeightAllow] = useState(0)
    const [selector, setSelector] = useState(null)
    const [weightSelector, setWeightSelector] = useState(null)
    const [rigidityDownList, setRigidityDownList] = useState({ ...RDlist })
    const [rigidityUpList, setRigidityUpList] = useState({ ...RUList })
    const [contructionTypeList, setContructionTypeList] = useState({
        ...CTList,
    })
    const [optionsList, setOptionsList] = useState({ ...OList })
    const [FinalUrl, SetFinalUrl] = useState(null)

    const [url, setUrl] = useState({
        selectedMin: filterAPIData.price.min,
        selectedMax: filterAPIData.price.max,
        size: null,
        weight: null,
        minHeight: heightProperty.range.min,
        maxHeight: heightProperty.range.max,
        rigidityDown: null,
        rigidityUp: null,
        constructionType: null,
        options: null,
    })
    const [count, setCount] = useState(0)

    useEffect(() => {
        setSelector(
            <Select
                className="main-filter__selector"
                classNamePrefix="main-filter__selector--inner"
                placeholder="Все"
                options={options}
                isSearchable={false}
                autoFocus={false}
                onChange={(data) => {
                    const clone = { ...url }
                    clone.size = data.value
                    setUrl(clone)
                }}
            ></Select>
        )

        setWeightSelector(
            <Select
                className="main-filter__selector"
                classNamePrefix="main-filter__selector--inner"
                placeholder="Все"
                options={weightOptions}
                isSearchable={false}
                autoFocus={false}
                onChange={(data) => {
                    const clone = { ...url }
                    clone.weight = data.value
                    setUrl(clone)
                }}
            ></Select>
        )

        setCount(filterProductsCount)

        return () => {
            setSelector(null)
        }
    }, [])

    useEffect(() => {
        if (priceAllow !== 0) {
            const clone = { ...url }
            clone.selectedMin = values[0]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            clone.selectedMax = values[1]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            setUrl(clone)
        }
    }, [priceAllow])

    useEffect(() => {
        if (heightAllow !== 0) {
            const clone = { ...url }
            clone.minHeight = values2[0]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            clone.maxHeight = values2[1]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            setUrl(clone)
        }
    }, [heightAllow])

    useEffect(() => {
        const clone = { ...url }
        clone.rigidityDown = rigidityDownList
        setUrl(clone)
    }, [rigidityDownList])

    useEffect(() => {
        const clone = { ...url }
        clone.rigidityUp = rigidityUpList

        setUrl(clone)
    }, [rigidityUpList])

    useEffect(() => {
        const clone = { ...url }
        clone.constructionType = contructionTypeList
        setUrl(clone)
    }, [contructionTypeList])

    useEffect(() => {
        const clone = { ...url }
        clone.optionsList = optionsList
        setUrl(clone)
    }, [optionsList])

    useEffect(() => {
        if (reduxCount.count) {
            setCount(reduxCount.count.length)
        }
    }, [reduxCount])

    useEffect(() => {
        onButtonClickHandler()
    }, [url])

    return (
        <div className="main-filter">
            <div className="main-filter__filtername">
                Подбор матраса по параметрам
            </div>

            <div className="main-filter__content">
                <div className="main-filter__leftside">
                    <div className="main-filter__filter">
                        <div className="main-filter__title">Цена (руб.)</div>
                        <div className="main-filter__filters">
                            <input
                                className="main-filter__input main-filter__first-input"
                                placeholder={values[0]
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            ></input>
                            <span> - </span>
                            <input
                                className="main-filter__input main-filter__second-input"
                                placeholder={values[1]
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            ></input>
                        </div>

                        <Range
                            draggableTrack
                            values={values}
                            step={500}
                            min={filterAPIData.price.min}
                            max={filterAPIData.price.max}
                            onChange={(v) => setValues(v)}
                            onFinalChange={(v) => {
                                setPriceAllow((p) => ++p)
                            }}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                        ...props.style,
                                        height: '36px',
                                        display: 'flex',
                                        width: '95%',
                                        margin: '0 auto',
                                        cursor: 'unset !important',
                                    }}
                                >
                                    <div
                                        ref={props.ref}
                                        style={{
                                            height: '5px',
                                            width: '100%',
                                            borderRadius: '4px',
                                            background: getTrackBackground({
                                                values: values,
                                                colors: [
                                                    '#ccc',
                                                    '#FFDB4D',
                                                    '#ccc',
                                                ],
                                                min: filterAPIData.price.min,
                                                max: filterAPIData.price.max,
                                            }),
                                            alignSelf: 'center',
                                        }}
                                    >
                                        {children}
                                    </div>
                                </div>
                            )}
                            renderThumb={({ props, isDragged }) => {
                                return (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            outline: 'none',
                                            cursor: 'pointer',
                                            height: '20px',
                                            width: '12px',
                                            border: '1px solid #e6e6e6',
                                            borderRadius: '30%',
                                            backgroundColor: '#999',
                                            backgroundImage:
                                                'linear-gradient(90deg,#fff,#d6d6d6)',
                                            backgroundColor: '#fff',
                                        }}
                                    ></div>
                                )
                            }}
                        />
                    </div>
                    <div className="main-filter__filter">
                        <div className="main-filter__title">Размер (см.)</div>
                        {/* <div className="main-filter__selector--inner__control--menu-is-open"></div> */}
                        {selector !== null && selector}
                    </div>
                    <div className="main-filter__filter">
                        <div className="main-filter__title">
                            Макс. вес одного спящего
                        </div>
                        {weightSelector !== null && weightSelector}
                    </div>
                    <div className="main-filter__filter">
                        <div className="main-filter__title">Высота, см.</div>
                        <div className="main-filter__filters">
                            <input
                                className="main-filter__input main-filter__first-input"
                                placeholder={values2[0]
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            ></input>
                            <span> - </span>
                            <input
                                className="main-filter__input main-filter__second-input"
                                placeholder={values2[1]
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            ></input>
                        </div>

                        <Range
                            draggableTrack
                            values={values2}
                            step={1}
                            min={5}
                            max={41}
                            onChange={(v) => setValues2(v)}
                            onFinalChange={() => {
                                setHeightAllow((p) => ++p)
                            }}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                        ...props.style,
                                        height: '36px',
                                        display: 'flex',
                                        width: '95%',
                                        margin: '0 auto',
                                        cursor: 'unset !important',
                                    }}
                                >
                                    <div
                                        ref={props.ref}
                                        style={{
                                            height: '5px',
                                            width: '100%',
                                            borderRadius: '4px',
                                            background: getTrackBackground({
                                                values: values2,
                                                colors: [
                                                    '#ccc',
                                                    '#FFDB4D',
                                                    '#ccc',
                                                ],
                                                min: 5,
                                                max: 41,
                                            }),
                                            alignSelf: 'center',
                                        }}
                                    >
                                        {children}
                                    </div>
                                </div>
                            )}
                            renderThumb={({ props }) => {
                                return (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            outline: 'none',
                                            cursor: 'pointer',
                                            height: '20px',
                                            width: '12px',
                                            border: '1px solid #e6e6e6',
                                            borderRadius: '30%',
                                            backgroundColor: '#999',
                                            backgroundImage:
                                                'linear-gradient(90deg,#fff,#d6d6d6)',
                                            backgroundColor: '#fff',
                                        }}
                                    ></div>
                                )
                            }}
                        />
                    </div>
                </div>
                <div className="main-filter__centerside">
                    <div className="main-filter__filter">
                        <div className="main-filter__title">
                            <span>Жесткость верх</span>
                            <div className="main-filter__title-popup">
                                <svg className="main-filter__title-popup-svg">
                                    <path d="M11 7v3c3 0 5-1 5 1s-3 4-3 6v2c6 0 2-1 5-4 1-1 2-3 2-5s-1-3-3-4c-3 0-4 1-6 1zM12 22c0 1 1 3 3 3 1 0 2-1 2-3 0-3-5-3-5 0z"></path>
                                </svg>
                                <div className="main-filter__title-popup-text">
                                    Жесткость верхней стороны определяется
                                    составом матраса. Разная жесткость сторон
                                    подходит для тех, кто не определился с
                                    выбором жесткости. Стороны можно менять в
                                    зависимости от времени года. Зимой для
                                    сохранения тепла используется более мягкая
                                    сторона матраса. Летом для свободной
                                    циркуляции воздуха используется более
                                    жесткая сторона. Мягкая Умеренно-мягкая
                                    Средняя Умеренно-жесткая Жесткая
                                </div>
                            </div>
                        </div>
                        <div className="main-filter__wrapper">
                            {rigidityUpProperty.checkboxes.map(
                                (checkbox, id) => {
                                    return (
                                        <label
                                            key={id}
                                            className="main-filter__checkbox-container"
                                        >
                                            <input
                                                onChange={() => {
                                                    onRigidityUpInputClickHandler(
                                                        checkbox.value
                                                    )
                                                }}
                                                type="checkbox"
                                            />
                                            <span className="main-filter__checkmark"></span>
                                            <h6>{checkbox.label}</h6>
                                        </label>
                                    )
                                }
                            )}
                        </div>
                    </div>
                    <div className="main-filter__filter">
                        <div className="main-filter__title">
                            <span>Жесткость низ</span>
                            <div className="main-filter__title-popup">
                                <svg className="main-filter__title-popup-svg">
                                    <path d="M11 7v3c3 0 5-1 5 1s-3 4-3 6v2c6 0 2-1 5-4 1-1 2-3 2-5s-1-3-3-4c-3 0-4 1-6 1zM12 22c0 1 1 3 3 3 1 0 2-1 2-3 0-3-5-3-5 0z"></path>
                                </svg>
                                <div className="main-filter__title-popup-text">
                                    Жесткость нижней стороны определяется
                                    составом матраса. От жесткости нижней
                                    стороны зависит качество и комфорт Вашего
                                    сна. Мягкая Умеренно-мягкая Средняя
                                    Умеренно-жесткая Жесткая
                                </div>
                            </div>
                        </div>
                        <div className="main-filter__wrapper">
                            {rigidityDownProperty.checkboxes.map(
                                (checkbox, id) => {
                                    return (
                                        <label
                                            key={id}
                                            className="main-filter__checkbox-container"
                                        >
                                            <input
                                                onChange={() => {
                                                    onRigidityDownInputClickHandler(
                                                        checkbox.value
                                                    )
                                                }}
                                                value={checkbox.value}
                                                type="checkbox"
                                            />
                                            <span className="main-filter__checkmark"></span>
                                            <h6>{checkbox.label}</h6>
                                        </label>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
                <div className="main-filter__rightside">
                    <div className="main-filter__filter">
                        <div className="main-filter__title">
                            <span>Тип конструкции</span>
                            <div className="main-filter__title-popup">
                                <svg className="main-filter__title-popup-svg">
                                    <path d="M11 7v3c3 0 5-1 5 1s-3 4-3 6v2c6 0 2-1 5-4 1-1 2-3 2-5s-1-3-3-4c-3 0-4 1-6 1zM12 22c0 1 1 3 3 3 1 0 2-1 2-3 0-3-5-3-5 0z"></path>
                                </svg>
                                <div className="main-filter__title-popup-text">
                                    Конструкция матраса определяет степень
                                    поддержки тела во время сна, а также его
                                    ортопедические и анатомические свойства. От
                                    выбора типа конструкции матраса зависит его
                                    функциональное назначение.
                                </div>
                            </div>
                        </div>
                        <div className="main-filter__wrapper">
                            {typeOfConstruction.checkboxes.map(
                                (checkbox, id) => {
                                    return (
                                        <label
                                            key={id}
                                            className="main-filter__checkbox-container"
                                        >
                                            <input
                                                onChange={() => {
                                                    onConstructionTypeClickHandler(
                                                        checkbox.value
                                                    )
                                                }}
                                                type="checkbox"
                                            />
                                            <span className="main-filter__checkmark"></span>
                                            <h6>{checkbox.label}</h6>
                                        </label>
                                    )
                                }
                            )}
                        </div>
                    </div>

                    <div className="main-filter__filter wrong-filter">
                        <div className="main-filter__title">Опции</div>
                        <div className="main-filter__wrapper">
                            <label className="main-filter__checkbox-container">
                                <input
                                    onChange={() => {
                                        onOptionTypeClickHandler('discount')
                                    }}
                                    type="checkbox"
                                />
                                <span className="main-filter__checkmark"></span>
                                <h6>Скидка</h6>
                            </label>
                            <label className="main-filter__checkbox-container">
                                <input
                                    onChange={() => {
                                        onOptionTypeClickHandler('newest')
                                    }}
                                    type="checkbox"
                                />
                                <span className="main-filter__checkmark"></span>
                                <h6>Новинка</h6>
                            </label>
                            <label className="main-filter__checkbox-container">
                                <input
                                    onChange={() => {
                                        onOptionTypeClickHandler('gift')
                                    }}
                                    type="checkbox"
                                />
                                <span className="main-filter__checkmark"></span>
                                <h6>Подарок</h6>
                            </label>
                            <label className="main-filter__checkbox-container">
                                <input
                                    onChange={() => {
                                        onOptionTypeClickHandler('recommended')
                                    }}
                                    type="checkbox"
                                />
                                <span className="main-filter__checkmark"></span>
                                <h6>Выбор покупателей</h6>
                            </label>
                            <label className="main-filter__checkbox-container">
                                <input
                                    onChange={() => {
                                        onOptionTypeClickHandler(
                                            'free_delivery'
                                        )
                                    }}
                                    type="checkbox"
                                />
                                <span className="main-filter__checkmark"></span>
                                <h6>Бесплатная доставка</h6>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-filter__result">
                <div className="main-filter__result-count">
                    {reduxCount.loading && (
                        <LoadingSpinner
                            width={'20px'}
                            height={'20px'}
                            scale={0.4}
                            left={'-20px'}
                            marginTop={'-30px'}
                            className="loader-style-inner1"
                        />
                    )}
                    {!reduxCount.loading && (
                        <span>
                            Найдено{' '}
                            {count &&
                                count
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                            товара
                        </span>
                    )}
                </div>
                <div
                    onClick={onButtonClickHandler}
                    className="btn yellow-btn main-filter__button"
                >
                    {/* {reduxCount.loading ? (
                        <LoadingSpinner
                            scale={0.2}
                            width={'20px'}
                            height={'38px'}
                            left={'40%'}
                            marginTop={'-20px'}
                        />
                    ) : (
                        'Подобрать'
                    )} */}
                    Подобрать
                </div>
            </div>
        </div>
    )
}

export default MainFilter
