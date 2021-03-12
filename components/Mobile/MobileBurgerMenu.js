import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import menu_styles from './../../styles/components/Mobile/MobileBurgerMenu.module.sass'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { init as favoriteInit } from './../../actions/FavoritesProductsList'
import { init as compareInit } from './../../actions/CompareProductsList'

// Icons
import SearchIcon from './../../assets/svg/white-search.svg'
import PhoneIcon from './../../assets/svg/white-phone.svg'
import CartIcon from './../../assets/svg/white-cart.svg'

import VK from './../../assets/vk.png'
import FB from './../../assets/fb.png'

import MobileBurgerMenuChoiseCity from './../Mobile/MobileBurgerMenuChoiseCity'
// import SearchBar from './../UI/Searchbar'

let lastScrollNavigateArrow = 0

const MobileBurgerMenu = ({ mobileMenu, mobilemenuCatalogs, regions }) => {
    const dispatch = useDispatch()
    const burgerRef = useRef(null)
    const catalogRef = useRef(null)
    const cartIconRef = useRef(null)
    const burgerLabelsRef = useRef(null)

    const [openChoiseCity, setOpenChoiseCity] = useState(false)
    const [openSearchBar, setOpenSearchbar] = useState(false)
    const [catalogOpen, setCatalogOpen] = useState(false)
    const [openedMenu, setOpenedMenu] = useState('')

    const onBurgerMenuClickHandler = () => {
        if (openedMenu === '') setOpenedMenu(`${menu_styles.opened}`)
        else setOpenedMenu('')

        burgerRef.current.classList.toggle(`${menu_styles.burger_opened}`)
    }

    const hasWindow = typeof window !== 'undefined'

    useEffect(() => {
        if (hasWindow) {
            // Init function to grab all procuts from favorite list
            dispatch(favoriteInit())
            dispatch(compareInit())
        }
    }, [hasWindow])

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const st = window.pageYOffset

            if (burgerLabelsRef.current) {
                if (st > lastScrollNavigateArrow) {
                    // даунскролл
                    burgerLabelsRef.current.style.top = '-150px'
                }

                if (lastScrollNavigateArrow > st) {
                    // апскролл
                    burgerLabelsRef.current.style.top = '0'
                }

                // Если мы достаточно близко к шапке сайта
                if (st < 80) {
                    burgerLabelsRef.current.style.top = '0'
                }

                // Swap
                lastScrollNavigateArrow = st
            }
        })
    }, [])

    const onChoiseCityClickHandler = () => {
        if (burgerLabelsRef.current) {
            burgerLabelsRef.current.style.zIndex = '-1'
            setOpenChoiseCity(true)
        }
    }

    const onCloseCityList = () => {
        if (burgerLabelsRef.current) {
            burgerLabelsRef.current.style.zIndex = '10'
            setOpenChoiseCity(false)
        }
    }

    const onSearchBarClickHandler = () => {
        setOpenSearchbar(true)

        if (
            burgerLabelsRef.current &&
            burgerRef.current &&
            cartIconRef.current
        ) {
            burgerLabelsRef.current.style.backgroundColor = '#b5e5f1'
            burgerRef.current.style.display = 'none'
            cartIconRef.current.style.display = 'none'
        }
    }

    const onOpenCatalogClickHandler = () => {
        setCatalogOpen(true)
    }

    const onCloseCatalogClickHandler = () => {
        setCatalogOpen(false)
    }

    return (
        <div className={menu_styles.mobile_nav_menu__wrapper}>
            <MobileBurgerMenuChoiseCity
                regions={regions}
                onCloseCityList={onCloseCityList}
                className={openChoiseCity ? '' : 'closed'}
            />
            <div
                style={
                    !catalogOpen ? { display: 'none' } : { display: 'block' }
                }
                ref={catalogRef}
                className={menu_styles.mobile_nav_menu__catalog}
            >
                <div className={menu_styles.mobile_burger_menu_catalog__labels}>
                    <i
                        onClick={onCloseCatalogClickHandler}
                        className={menu_styles.arrow_left}
                    ></i>
                    <span>Каталог</span>
                </div>
                <div
                    className={`${menu_styles.container} ${menu_styles.mobile_menu_сontainer}`}
                >
                    <div className={menu_styles.mobile_menu}>
                        <ul className={menu_styles.mobile_menu__list}>
                            {mobilemenuCatalogs.map((catalog, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            menu_styles.mobile_menu__item
                                        }
                                    >
                                        <Image
                                            src={
                                                'https://anatomiyasna.ru' +
                                                catalog.image
                                            }
                                            width={46}
                                            height={46}
                                        />

                                        <Link href={'/' + catalog.url}>
                                            <a>
                                                <span>{catalog.title}</span>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={menu_styles.mobile_nav_menu}>
                <div
                    className={`${menu_styles.container} ${menu_styles.mobile_menu_container}`}
                >
                    <div
                        ref={burgerLabelsRef}
                        className={menu_styles.mobile_nav_menu__labels}
                    >
                        {/* <SearchBar open={openSearchBar} /> */}
                        <div
                            className={menu_styles.mobile_nav_menu__labels_left}
                        >
                            <div
                                className={
                                    menu_styles.mobile_nav_menu__labels_left_burger
                                }
                                onClick={onBurgerMenuClickHandler}
                                ref={burgerRef}
                            >
                                <span></span>
                            </div>
                            <div
                                className={
                                    menu_styles.mobile_nav_menu__labels_left_title
                                }
                            >
                                Анатомия сна
                            </div>
                        </div>
                        <div
                            className={
                                menu_styles.mobile_nav_menu__labels_right
                            }
                        >
                            <ul
                                className={
                                    menu_styles.mobile_nav_menu__labels_right_list
                                }
                            >
                                <li onClick={onSearchBarClickHandler}>
                                    <Image
                                        src={SearchIcon}
                                        width={25.5}
                                        height={25.5}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={PhoneIcon}
                                        width={25.5}
                                        height={25.5}
                                    />
                                </li>
                                <li
                                    style={{ marginRight: 0 }}
                                    ref={cartIconRef}
                                >
                                    <img src={CartIcon}></img>
                                    {/* <Image
                                        src={CartIcon}
                                        width={40.5}
                                        height={25.5}
                                    /> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`${menu_styles.mobile_nav_menu__fixed} ${openedMenu}`}
                    >
                        <ul className={`${menu_styles.mobile_nav_menu__list}`}>
                            {mobileMenu.map((item, index) => {
                                if (item.title === 'Каталог') {
                                    return (
                                        <li
                                            key={index}
                                            onClick={onOpenCatalogClickHandler}
                                            className={
                                                menu_styles.mobile_nav_menu__list_item
                                            }
                                        >
                                            <Image
                                                src={
                                                    'https://anatomiyasna.ru' +
                                                    item.image
                                                }
                                                width={46}
                                                height={46}
                                            />
                                            <span>{item.title}</span>
                                            <i
                                                className={
                                                    menu_styles.arrow_right
                                                }
                                            ></i>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                menu_styles.mobile_nav_menu__list_item
                                            }
                                        >
                                            <Image
                                                src={
                                                    'https://anatomiyasna.ru' +
                                                    item.image
                                                }
                                                width={46}
                                                height={46}
                                            />
                                            <span>{item.title}</span>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <button className={menu_styles.mobile_nav_menu__btn}>
                            Перезвоните мне
                        </button>
                        <div className={menu_styles.mobile_nav_menu__hint}>
                            Время работы: Пн.-Вс. с 9:00 до 22:00 (Мск)
                        </div>
                        <div className={menu_styles.mobile_nav_menu__hint}>
                            Выберите ваш город
                        </div>
                        <div
                            className={menu_styles.mobile_nav_menu__choise}
                            onClick={onChoiseCityClickHandler}
                        >
                            <div className={menu_styles.mobile_nav_menu__loc}>
                                <svg>
                                    <path d="M74.95 489c6.3 0 12.4-1.5 18.3-4.3l151.3-74.2 151.4 74.3c5.8 2.9 12 4.3 18.3 4.3 13.7 0 26.6-7 34.3-18.6 7.7-11.5 9-25.6 3.6-38.6L282.55 25.3c-6.5-15.6-21.1-25.3-38-25.3s-31.5 9.7-38 25.3L36.95 431.9c-5.4 13-4.1 27 3.6 38.6 7.8 11.6 20.6 18.6 34.4 18.5zm-15.4-47.7l169.6-406.6c4-9.5 12.8-10.3 15.4-10.3 2.6 0 11.4.7 15.4 10.3l169.6 406.6c3 7.2.4 12.8-1.4 15.5-4.6 7-13.7 9.7-21.4 5.9l-156.8-76.9c-1.7-.8-3.5-1.3-5.4-1.3s-3.7.4-5.4 1.3l-156.8 76.9c-7.8 3.8-16.8 1.1-21.4-5.9-1.8-2.7-4.4-8.3-1.4-15.5z"></path>
                                </svg>
                            </div>

                            <span className={menu_styles.town}>Москва</span>
                            <span className={menu_styles.arrow_down}></span>
                        </div>
                        <div className={menu_styles.mobile_nav_menu__phone}>
                            <img src={PhoneIcon}></img>
                            <span>8 (495) 287-87-95</span>
                        </div>
                        <div className={menu_styles.mobile_nav_menu__hint}>
                            Горячая линия
                        </div>
                        <div className={menu_styles.mobile_nav_menu__phone}>
                            <img src={PhoneIcon}></img>
                            <span>8 (800) 777-54-17</span>
                        </div>
                        <div className={menu_styles.mobile_nav_menu__hint}>
                            Мы в соц сетях:
                        </div>
                        <ul className={menu_styles.mobile_nav_menu__socials}>
                            <li>
                                <img src={VK}></img>
                            </li>
                            <li>
                                <img src={FB}></img>
                            </li>
                        </ul>
                        <div className={menu_styles.mobile_nav_menu__copy}>
                            <span>
                                2020 ©{' '}
                                <Link href="/">
                                    <a>Анатомия сна.</a>
                                </Link>
                            </span>
                            <span>Все права защищены.</span>
                        </div>
                        {/* <div className="mobile_nav_menu__full">
                            Полная версия сайта
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileBurgerMenu
