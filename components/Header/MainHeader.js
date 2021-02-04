import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import { SlideDown } from 'react-slidedown'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { init as favoriteInit } from './../../actions/FavoritesProductsList'
import { init as compareInit } from './../../actions/CompareProductsList'

import mainheader_styles from './../../styles/components/Header/MainHeader.module.sass'

// Assets
import LogotypeImage from './../../assets/webp/logo.webp'
import PhoneSVG from './../../assets/svg/phone.svg'
import SearchSVG from './../../assets/svg/searchicon.svg'
import TimeSVG from './../../assets/svg/time.svg'
import StatsSVG from './../../assets/svg/stats.svg'
import HeartSVG from './../../assets/svg/heart.svg'
import CartSVG from './../../assets/svg/cart.svg'

// React components
import Searchbar from './../Search/Search'

const MainHeader = ({ phoneCommon }) => {
    const hasWindow = typeof window !== 'undefined'
    const dispatch = useDispatch()

    const CompareListRedux = useSelector(
        (store) => store.CompareProductsListReducer
    )
    const FavoriteListRedux = useSelector(
        (store) => store.FavoritesProductsListReducer
    )
    const [callMePopupIsClosed, setCallMePopupIsClosed] = useState(true)
    const [favoriteListPopupIsClosed, setFavoriteListPopupIsClosed] = useState(
        true
    )
    const [compareListPopupIsClosed, setComparelistPopupIsClosed] = useState(
        true
    )

    useEffect(() => {
        if (hasWindow) {
            // Init function to grab all procuts from favorite list
            dispatch(favoriteInit())
            dispatch(compareInit())
        }
    }, [hasWindow])

    return (
        <div className={mainheader_styles.main_header}>
            <Link href="/">
                <a>
                    <img
                        src={LogotypeImage}
                        className={mainheader_styles.main_header__img}
                    ></img>
                </a>
            </Link>
            <div className={mainheader_styles.main_header__phone}>
                <Image
                    src={PhoneSVG}
                    height={33.21}
                    width={33.21}
                    className={mainheader_styles.main_header__phone__image}
                />
                <h6>{phoneCommon}</h6>
            </div>
            <div className={mainheader_styles.main_header__phone}>
                <Image
                    src={PhoneSVG}
                    height={33.21}
                    width={33.21}
                    className={mainheader_styles.main_header__phone__image}
                />
                <h6>{phoneCommon}</h6>
            </div>
            <div className={mainheader_styles.main_header__callme}>
                <span>Перезвоните мне</span>
            </div>
            <div
                className={mainheader_styles.main_header__search}
                onClick={() => {
                    onSearchBarClickHandler
                }}
            >
                <Image src={SearchSVG} height={30} width={30} />
                <span>Поиск</span>
            </div>
            {/* <Searchbar blur={() => {}} open={() => {}} /> */}
            <div className={mainheader_styles.main_header__icons_wrapper}>
                <div className={mainheader_styles.main_header__option_icon}>
                    <Image src={TimeSVG} height={35} width={35} />
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    {CompareListRedux.total &&
                        CompareListRedux.total.length !== 0 && (
                            <div
                                className={
                                    mainheader_styles.main_header__option_popup__empty_block
                                }
                            >
                                {CompareListRedux.total.length}
                            </div>
                        )}
                    <Popup
                        trigger={<img src={StatsSVG} />}
                        onOpen={() => setComparelistPopupIsClosed(false)}
                        position="top left"
                        closeOnDocumentClick={true}
                    >
                        <SlideDown
                            className={
                                mainheader_styles.main_header__option_popup
                            }
                            closed={compareListPopupIsClosed}
                        >
                            <div
                                className={
                                    mainheader_styles.main_header__option_popup__inner
                                }
                            >
                                {CompareListRedux.total &&
                                    CompareListRedux.total.length === 0 && (
                                        <div
                                            className={
                                                mainheader_styles.main_header__option_popup__empty_blocks
                                            }
                                        >
                                            Вы еще не добавили товары в
                                            сравнение
                                        </div>
                                    )}
                                {CompareListRedux.total.length !== 0 &&
                                    CompareListRedux.total.map((item, id) => {
                                        return (
                                            <div
                                                key={id}
                                                className={
                                                    mainheader_styles.main_header__option_popup__product_block
                                                }
                                            >
                                                <div
                                                    className={
                                                        mainheader_styles.main_header__compare_popup__product_block__left
                                                    }
                                                >
                                                    <img
                                                        style={{
                                                            width: '56px',
                                                            height: '36px',
                                                        }}
                                                        src={item.ProductImage}
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__image
                                                        }
                                                    ></img>
                                                </div>
                                                <div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__smalltext
                                                        }
                                                    >
                                                        {
                                                            item.ProductCatalogType
                                                        }
                                                    </div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__title
                                                        }
                                                    >
                                                        {item.ProductBrandTitle +
                                                            ' ' +
                                                            item.ProductSeriesTitle +
                                                            ' ' +
                                                            item.ProductTitle}
                                                    </div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__size
                                                        }
                                                    >
                                                        {item.ProductSizeTitle}
                                                    </div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__price
                                                        }
                                                    >
                                                        <strong>
                                                            {item.ProductPrice}
                                                        </strong>
                                                        <span> Руб.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                {CompareListRedux.total.length !== 0 && (
                                    <button
                                        className={
                                            mainheader_styles.main_header__popup_button
                                        }
                                    >
                                        Перейти
                                    </button>
                                )}
                                <div
                                    onClick={() => {
                                        setComparelistPopupIsClosed(true)
                                    }}
                                    className={
                                        mainheader_styles.main_header__popup_cross
                                    }
                                >
                                    X
                                </div>
                            </div>
                        </SlideDown>
                    </Popup>
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    {FavoriteListRedux.total &&
                        FavoriteListRedux.total.length !== 0 && (
                            <div
                                className={
                                    mainheader_styles.main_header__option_icon__count
                                }
                            >
                                {FavoriteListRedux.total.length}
                            </div>
                        )}
                    <Popup
                        trigger={<img src={HeartSVG} />}
                        onOpen={() => setFavoriteListPopupIsClosed(false)}
                        position="top left"
                        closeOnDocumentClick={true}
                    >
                        <SlideDown
                            className={
                                mainheader_styles.main_header__option_popup
                            }
                            closed={favoriteListPopupIsClosed}
                        >
                            <div
                                className={
                                    mainheader_styles.main_header__option_popup__inner
                                }
                            >
                                {FavoriteListRedux.total &&
                                    FavoriteListRedux.total.length === 0 && (
                                        <div
                                            className={
                                                mainheader_styles.main_header__option_popup__empty_block
                                            }
                                        >
                                            Вы еще не добавили товары в
                                            сравнение
                                        </div>
                                    )}
                                {FavoriteListRedux.total.length !== 0 &&
                                    FavoriteListRedux.total.map((item, id) => {
                                        return (
                                            <div
                                                key={id}
                                                className={
                                                    mainheader_styles.main_header__option_popup__product_block
                                                }
                                            >
                                                <div
                                                    className={
                                                        mainheader_styles.main_header__favorite_popup__product_block__left
                                                    }
                                                >
                                                    <img
                                                        style={{
                                                            width: '56px',
                                                            height: '36px',
                                                        }}
                                                        src={item.ProductImage}
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__image
                                                        }
                                                    ></img>
                                                </div>
                                                <div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__smalltext
                                                        }
                                                    >
                                                        {
                                                            item.ProductCatalogType
                                                        }
                                                    </div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__title
                                                        }
                                                    >
                                                        {item.ProductBrandTitle +
                                                            ' ' +
                                                            item.ProductSeriesTitle +
                                                            ' ' +
                                                            item.ProductTitle}
                                                    </div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__size
                                                        }
                                                    >
                                                        {item.ProductSizeTitle}
                                                    </div>
                                                    <div
                                                        className={
                                                            mainheader_styles.main_header__option_popup__product_block__price
                                                        }
                                                    >
                                                        <strong>
                                                            {item.ProductPrice}
                                                        </strong>
                                                        <span> Руб.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                {FavoriteListRedux.total.length !== 0 && (
                                    <button
                                        className={
                                            mainheader_styles.main_header__popup_button
                                        }
                                    >
                                        Перейти
                                    </button>
                                )}
                                <div
                                    onClick={() => {
                                        setFavoriteListPopupIsClosed(true)
                                    }}
                                    className={
                                        mainheader_styles.main_header__popup_cross
                                    }
                                >
                                    X
                                </div>
                            </div>
                        </SlideDown>
                    </Popup>
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    <Image src={CartSVG} height={35} width={42} />
                </div>
            </div>
        </div>
    )
}

export default MainHeader
