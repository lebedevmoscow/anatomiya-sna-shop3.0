import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
                    <Image src={StatsSVG} height={35} width={35} />
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    <Image src={HeartSVG} height={35} width={35} />
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    <Image src={CartSVG} height={35} width={42} />
                </div>
            </div>
        </div>
    )
}

export default MainHeader
