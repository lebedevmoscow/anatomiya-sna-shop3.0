import React from 'react'

import CarSVG from './../../assets/delivery-tab/1.svg'
import GlobeSVG from './../../assets/delivery-tab/2.svg'
import CalendarSVG from './../../assets/delivery-tab/3.svg'
import TimeSVG from './../../assets/delivery-tab/4.svg'
import HandSVG from './../../assets/delivery-tab/5.svg'
import LiftSVG from './../../assets/delivery-tab/6.svg'
import WeightLiftSVG from './../../assets/delivery-tab/7.svg'
import LightWeightCarSVG from './../../assets/delivery-tab/8.svg'
import CreditCardSVG from './../../assets/delivery-tab/9.svg'
import ToolSVG from './../../assets/delivery-tab/10.svg'
import GlobeToolSVG from './../../assets/delivery-tab/11.svg'
import GlobePointSVG from './../../assets/delivery-tab/12.svg'
import SimpleTimePointSVG from './../../assets/delivery-tab/13.svg'

import styles from './../../styles/components/Tabs/DeliveryTab.module.sass'

const DeliveryTab = () => {
    return (
        <div className={styles.delivery_tab}>
            <ul className={styles.delivery_tab__tabs_list}>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={CarSVG}
                        /> */}
                        <img
                            src={CarSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Стоимость доставки
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            1 500 руб.
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={GlobeSVG}
                        /> */}
                        <img
                            src={GlobeSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Стоимость доставки за пределы МКАД:
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            40 руб./км (к базовой стоимости доставки)
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={CalendarSVG}
                        /> */}
                        <img
                            src={CalendarSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Срок доставки в календарных днях
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            20
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={TimeSVG}
                        /> */}
                        <img
                            src={TimeSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Время заказа, до наступления которого действуют
                            указанные сроки доставки
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            14:00
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={HandSVG}
                        /> */}
                        <img
                            src={HandSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Предоплата
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            Нет
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={LiftSVG}
                        /> */}
                        <img
                            src={LiftSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Подъем на грузовом лифте
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            1% от стоимости мебели, на пассажирском 1,1% от
                            стоимости мебели, но не менее 100 руб.
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={WeightLiftSVG}
                        /> */}
                        <img
                            src={WeightLiftSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Подъем вручную
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            1,3% от стоимости мебели/эт., в том числе занос в
                            частный дом, но не менее 100 руб. Пронос мебели до
                            10 м - бесплатно, более 10 м - 500 рублей.
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={LightWeightCarSVG}
                        /> */}
                        <img
                            src={LightWeightCarSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Самовывоз
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            Московская область, Зеленоград, 687-й проезд, д. 15,
                            стр. 1 с понедельника по пятницу с 9:00 до 16:30 при
                            условии предварительного заказа. Перед самовывозом
                            необходимо оформить документы в офисе и произвести
                            оплату. Далее на складе с документами получить груз.
                            При самовывозе необходимо иметь при себе паспорт или
                            оригинал доверенности.
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={CreditCardSVG}
                        /> */}
                        <img
                            src={CreditCardSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Оплата
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            Наличными при получении, безналичная по счету,
                            электронным кошельком
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={ToolSVG}
                        /> */}
                        <img
                            src={ToolSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Сборка
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            При заказе до 20 000 рублей - 7% от стоимости мебели
                            + плата за доп. работы, но не менее 700 руб., от 20
                            000 рублей - 5% от стоимости мебели + доп. работы,
                            но не менее 700 руб., или 10% от стоимости мебели
                            при любой сумме заказа со всеми видами доп. работ,
                            но не менее 700 рублей. Сборка производится на
                            следующий рабочий день, после осуществления
                            доставки.
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={GlobeToolSVG}
                        /> */}
                        <img
                            src={GlobeToolSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Сборка за пределы МКАД
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            При заказе до 20 000 рублей - 7% от стоимости мебели
                            + плата за доп. работы, но не менее 1000 рублей + 40
                            руб./км, от 20 000 рублей - 5% от стоимости мебели +
                            доп. работы, или 10% от стоимости мебели при любой
                            сумме заказа со всеми видами доп. работ, но не менее
                            1000 рублей + 40 руб./км. Сборка производится на
                            следующий рабочий день, после осуществления
                            доставки.
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={GlobePointSVG}
                        /> */}
                        <img
                            src={GlobePointSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        >
                            Стоимость доставки за пределы города
                        </div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            свыше 60 км от МКАД доставка осуществляется при
                            сумме заказа не менее 30 000 рублей
                        </div>
                    </div>
                </li>
                <li className={styles.delivery_tab__tabs_list_item}>
                    <div className={styles.delivery_tab__tabs_list_item_left}>
                        {/* <Image
                            className={styles.delivery_tab__tabs_list_item_svg}
                            width={35}
                            height={35}
                            src={SimpleTimePointSVG}
                        /> */}
                        <img
                            src={SimpleTimePointSVG}
                            className={styles.delivery_tab__tabs_list_item_svg}
                        ></img>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_title
                            }
                        ></div>
                    </div>
                    <div className={styles.delivery_tab__tabs_list_item_right}>
                        <div
                            className={
                                styles.delivery_tab__tabs_list_item_right_text
                            }
                        >
                            Возможные дни доставки: с понедельника по пятницу.
                            Доставка в субботу осуществляется по предварительной
                            договоренности. <br />
                            При заказе, превышающем 1400 кг по массе и 9 м3 по
                            объему, доставка осуществляется либо несколькими
                            отдельными доставками по стандартным тарифам за
                            каждую доставку, либо при помощи сторонних
                            транспортных компаний (ТК).
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DeliveryTab
