import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// EXPEREMENTAL
import useMediaQuery from './../../hooks/useMedia'

import LocationImage from './../../assets/mapnav.png'
import PhoneImage from './../../assets/svg/phone.svg'
import VKImage from './../../assets/vk.png'
import FBImage from './../../assets/fb.png'
import MasterCardImage from './../../assets/mastercard.png'
import VisaImage from './../../assets/visa.png'
import YandexMoneyImage from './../../assets/yandex-money.png'
import WebmoneyImage from './../../assets/webmoney.png'
import QiwiImage from './../../assets/qiwi.png'
import MirImage from './../../assets/mir.png'
import PayKeeperImage from './../../assets/paykeeper.png'

// import MobileBurgerMenuChoiseCity from './../MobileBurgerMenuChoiseCity'

import footer_styles from './../../styles/components/Mobile/MobileFooter.module.sass'
import common_styles from './../../styles/common.module.sass'

const MobileFooter = () => {
    // Breakpoints
    const breakpoint1023 = useMediaQuery(1023)

    const [openCityChoise, setOpenCityChoise] = useState(false)
    const display = breakpoint1023 ? 'block' : 'none'

    return (
        <>
            {/* <MobileBurgerMenuChoiseCity
                onCloseCityList={() => setOpenCityChoise(false)}
                className={openCityChoise ? '' : 'closed'}
            /> */}
            <div
                style={{ display }}
                className={footer_styles.mobile_footer__wrapper}
            >
                <div
                    className={`${common_styles.container} ${footer_styles.first_container}`}
                >
                    <div className={footer_styles.mobile_footer}>
                        <div className={footer_styles.mobile_footer__hint}>
                            Выберите ваш город
                        </div>
                        <div
                            className={footer_styles.mobile_footer__main_item}
                            onClick={() => setOpenCityChoise(true)}
                        >
                            <img src={LocationImage}></img>
                            <span>Москва</span>
                            <i className={footer_styles.arrow_down}></i>
                        </div>
                        <div className={footer_styles.mobile_footer__hint}>
                            Регионы РФ
                        </div>
                        <div className={footer_styles.mobile_footer__main_item}>
                            <img
                                src={PhoneImage}
                                className={
                                    footer_styles.mobile_footer__main_item_phone_image
                                }
                            ></img>
                            <span>8 (800) 777-54-17</span>
                        </div>
                        <div className={footer_styles.mobile_footer__hint}>
                            Москва и область
                        </div>
                        <div className={footer_styles.mobile_footer__main_item}>
                            <img
                                src={PhoneImage}
                                className={
                                    footer_styles.mobile_footer__main_item_phone_image
                                }
                            ></img>
                            <span>8 (495) 287-87-95</span>
                        </div>
                        <div className={footer_styles.mobile_footer__hint}>
                            Адресс
                        </div>
                        <div
                            className={`${footer_styles.mobile_footer__main_item} ${footer_styles.mobile_footer__city}`}
                        >
                            <span>г. Москва, Рублевское шоссе, дом 48/1</span>
                        </div>
                        <div className={footer_styles.mobile_footer__hint}>
                            Мы в соц.сетях:
                        </div>
                        <div className={footer_styles.mobile_footer__main_item}>
                            <img
                                className={
                                    footer_styles.mobile_footer__main_item_social_item
                                }
                                src={VKImage}
                            ></img>
                            <img
                                className={
                                    footer_styles.mobile_footer__main_item_social_item
                                }
                                src={FBImage}
                            ></img>
                        </div>
                        <div className={footer_styles.mobile_footer__hint}>
                            Мы принимаем к оплате:
                        </div>
                        <ul
                            className={
                                footer_styles.mobile_footer__payments_methods_list
                            }
                        >
                            <li>
                                <img src={MasterCardImage}></img>
                            </li>
                            <li>
                                <img src={VisaImage}></img>
                            </li>
                            <li>
                                <img src={YandexMoneyImage}></img>
                            </li>
                            <li>
                                <img src={WebmoneyImage}></img>
                            </li>
                            <li>
                                <img src={QiwiImage}></img>
                            </li>
                            <li>
                                <img src={MirImage}></img>
                            </li>
                            <li>
                                <img src={PayKeeperImage}></img>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${common_styles.container} ${footer_styles.second_container}`}
                >
                    <div className={footer_styles.copyrigh_mobile}>
                        <div className={footer_styles.copyright_mobile__title}>
                            2020 ©{' '}
                            <Link href="/">
                                <a>Анатомия сна.</a>
                            </Link>{' '}
                            Все права защищены.
                        </div>
                        <div
                            className={
                                footer_styles.copyright_mobile__go_to_full
                            }
                        >
                            <button
                                className={footer_styles.copyright_mobile__btn}
                            >
                                Полная версия сайта
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileFooter
