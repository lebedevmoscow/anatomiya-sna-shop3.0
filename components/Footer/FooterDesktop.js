import Link from 'next/link'
import Image from 'next/image'

// Styles
import footer_styles from './../../styles/components/Footer/FooterDesktop.module.sass'
import common_styles from './../../styles/common.module.sass'

// Images
import VKImage from './../../assets/vk.png'
import FBImage from './../../assets/fb.png'
import MasterCardImage from './../../assets/mastercard.png'
import VisaImage from './../../assets/visa.png'
import YandexMoneyImage from './../../assets/yandex-money.png'
import WebMoneyImage from './../../assets/webmoney.png'
import QiwiImage from './../../assets/qiwi.png'
import MirImage from './../../assets/mir.png'
import PayKeeperImage from './../../assets/paykeeper.png'

const Footer = () => {
    return (
        <div className={footer_styles.footer__wrapper}>
            <div className={common_styles.container}>
                <div className={footer_styles.footer}>
                    <div className={footer_styles.footer__left}>
                        <div className={footer_styles.footer__info}>
                            <div className={footer_styles.footer__list_title}>
                                Информация
                            </div>
                            <ul className={footer_styles.footer__list}>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>О компании</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Отзывы</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Партнерам</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Контакты</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Политика конфиденциальности</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>
                                            Согласие на обработку персональных
                                            данных
                                        </a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Карта сайта</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={footer_styles.footer__for_customers}>
                            <div className={footer_styles.footer__list_title}>
                                Покупателям
                            </div>
                            <ul className={footer_styles.footer__list}>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Доставка и оплата</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Гарантия</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Обмен и возврат</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Акции</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Статьи</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Подарочные сертификаты</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Рассрочка и кредит</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Дизайнерам</a>
                                    </Link>
                                </li>
                                <li className={footer_styles.footer__list_item}>
                                    <Link href="/">
                                        <a>Оптовикам</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={footer_styles.footer__for_catalogs}>
                            <div className={footer_styles.footer__list_title}>
                                Покупателям
                            </div>
                            <div className={footer_styles.footer__lists}>
                                <ul className={footer_styles.footer__list}>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Матрасы</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Матрасы для диванов</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Наматрасники</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Подушки</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Постельное белье</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Детские кровати</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Беспружинные</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Пружинные</a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className={footer_styles.footer__list}>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Детские матрасы</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Основания</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Чехлы на матрасы</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Одеяла</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Кровати</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Жесткие матрасы</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            footer_styles.footer__list_item
                                        }
                                    >
                                        <Link href="/">
                                            <a>Двуспальные</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={footer_styles.footer__right}>
                        <div className={footer_styles.footer__right_item}>
                            <div
                                className={
                                    footer_styles.footer__right_item_title
                                }
                            >
                                Регионы РФ
                            </div>
                            <div
                                className={
                                    footer_styles.footer__right_item_text
                                }
                            >
                                8 (800) 777-54-17
                            </div>
                        </div>
                        <div className={footer_styles.footer__right_item}>
                            <div
                                className={
                                    footer_styles.footer__right_item_title
                                }
                            >
                                Москва и область
                            </div>
                            <div
                                className={
                                    footer_styles.footer__right_item_text
                                }
                            >
                                8 (495) 287-87-95
                            </div>
                        </div>
                        <div className={footer_styles.footer__right_item}>
                            <div
                                className={
                                    footer_styles.footer__right_item_title
                                }
                            >
                                Адресс
                            </div>
                            <div
                                className={
                                    footer_styles.footer__right_item_text
                                }
                            >
                                г. Москва, Рублевское шоссе, дом 48/1
                            </div>
                        </div>
                        <div className={footer_styles.footer__socials}>
                            <div
                                className={footer_styles.footer__socials_title}
                            >
                                Мы в соц.сетях:
                            </div>
                            <ul className={footer_styles.footer__socials_list}>
                                <li
                                    className={
                                        footer_styles.footer__socials_list_item
                                    }
                                >
                                    <Link href="/">
                                        <a>
                                            <Image
                                                src={VKImage}
                                                width={35}
                                                height={35}
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li className="footer__socials_list_item">
                                    <Link href="/">
                                        <a>
                                            <Image
                                                src={FBImage}
                                                width={35}
                                                height={35}
                                            />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={footer_styles.footer__payments_methods}>
                            <div
                                className={
                                    footer_styles.footer__payments_methods_title
                                }
                            >
                                Мы принимаем к оплате:
                            </div>
                            <ul
                                className={
                                    footer_styles.footer__payments_methods_list
                                }
                            >
                                <li
                                    className={
                                        footer_styles.footer__payments_methods_list_item
                                    }
                                >
                                    <Image
                                        src={MasterCardImage}
                                        width={23}
                                        height={18}
                                    />
                                </li>
                                <li
                                    className={
                                        footer_styles.footer__payments_methods_list_item
                                    }
                                >
                                    <Image
                                        src={VisaImage}
                                        width={23}
                                        height={18}
                                    />
                                </li>
                                <li
                                    className={
                                        footer_styles.footer__payments_methods_list_item
                                    }
                                >
                                    <Image
                                        src={YandexMoneyImage}
                                        width={23}
                                        height={18}
                                    />
                                </li>
                                <li
                                    className={
                                        footer_styles.footer__payments_methods_list_item
                                    }
                                >
                                    <Image
                                        src={WebMoneyImage}
                                        width={23}
                                        height={18}
                                    />
                                </li>
                                <li
                                    className={
                                        footer_styles.footer__payments_methods_list_item
                                    }
                                >
                                    <Image
                                        src={QiwiImage}
                                        width={23}
                                        height={18}
                                    />
                                </li>
                                <li
                                    className={
                                        footer_styles.footer__payments_methods_list_item
                                    }
                                >
                                    <Image
                                        src={MirImage}
                                        width={23}
                                        height={18}
                                    />
                                </li>
                                <li
                                    className={
                                        footer_styles.footer__payments_methods_list_item
                                    }
                                >
                                    <Image
                                        src={PayKeeperImage}
                                        width={23}
                                        height={18}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footer_styles.copyright}>
                <div className={common_styles.container}>
                    2020 ©{' '}
                    <Link href="/">
                        <a>Анатомия сна.</a>
                    </Link>{' '}
                    Все права защищены.
                </div>
            </div>
        </div>
    )
}
export default Footer
