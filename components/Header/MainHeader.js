import Link from 'next/link'
import Image from 'next/image'

import mainheader_styles from './../../styles/components/Header/MainHeader.module.sass'

// Assets
import LogotypeImage from './../../assets/logo.png'
import PhoneSVG from './../../assets/svg/phone.svg'
import SearchSVG from './../../assets/svg/searchicon.svg'
import TimeSVG from './../../assets/svg/time.svg'
import CartSVG from './../../assets/svg/cart.svg'

// React components
import Searchbar from './../Search/Search'

const MainHeader = ({ phoneCommon }) => {
    const hasWindow = typeof window !== 'undefined'

    return (
        <div className={mainheader_styles.main_header}>
            {/* <img
                src={LogotypeImage}
                className={mainheader_styles.main_header__img}
            ></img> */}
            <div className={mainheader_styles.main_header__phone}>
                <Image src={PhoneSVG} height={33.21} width={33.21} />
                <h6>{phoneCommon}</h6>
            </div>
            <div className={mainheader_styles.main_header__phone}>
                <Image src={PhoneSVG} height={33.21} width={33.21} />
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
            <Searchbar blur={() => {}} open={() => {}} />
            <div className={mainheader_styles.main_header__icons_wrapper}>
                <div className={mainheader_styles.main_header__option_icon}>
                    <Image src={TimeSVG} height={35} width={35} />
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    Сравнение
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    Избранное
                </div>
                <div className={mainheader_styles.main_header__option_icon}>
                    <Image src={CartSVG} height={35} width={42} />
                </div>
            </div>
        </div>
    )
}

export default MainHeader
