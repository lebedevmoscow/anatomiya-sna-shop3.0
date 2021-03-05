import dynamic from 'next/dynamic'
import { useState, useRef, useEffect } from 'react'
import useMedia from './../../hooks/useMedia'
import Link from 'next/link'

// React components
import Header from './../../components/Header'
import MainNavigation from './../../components/Nav/MainNavigation'
import MobileBurgerMenu from './../../components/Mobile/MobileBurgerMenu'
import Subscribe from './../../components/Subscribe'
import Footer from './../../components/Footer/FooterDesktop'
import URLComponent from './../../components/URLComponent'
import MobileModalForm from './../../components/MobileModalForm'

import styles from './../../styles/pages/kontakty.module.sass'

// Images
import PhoneImage from './../../assets/svg/phone.svg'
import MessageImage from './../../assets/svg/message.svg'
import MapmarkImage from './../../assets/svg/mapmark.svg'
import ClocksImage from './../../assets/svg/clocks.svg'
import MailImage from './../../assets/svg/mail.svg'
import DocumentImage from './../../assets/svg/document.svg'

const MobileFooter = dynamic(
    () => import('../../components/Mobile/MobieFooter'),
    { ssr: true }
)

const KontaktyPage = ({
    phoneCommon,
    worktimeHead,
    headerCatalog,
    IsMobile,
    mobilemenuCatalogs,
    mobileMenu,
    regions,
    banner = null,
}) => {
    const mapRef = useRef(null)

    const breakpoint769 = useMedia(769)
    const breakpoint1024 = useMedia(1024)

    const [modalIsClosed, setModalIsClosed] = useState(true)

    const modalContent = (
        <div className={styles.modal_content}>
            <div className={styles.modal_content__mini_text}>
                Мы свяжемся с вами в ближайшее время.
            </div>
            <div className={styles.modal_content__form__wrapper}>
                <div className={styles.modal_content__form}>
                    <input type="text" placeholder="Ваше имя *" />
                    <input type="text" placeholder="Ваш email *" />
                    <input type="text" placeholder="Телефон *" />
                    <textarea placeholder="Ваш вопрос *" />
                </div>
            </div>
            <div className={styles.modal_content__important_fileds}>
                <span className={styles.blue}>* </span> Обязательные поля
            </div>
            <button className={styles.modal_content__send_req}>
                Отправить заявку
            </button>
            <div className={styles.modal_content__copy}>
                Нажимая на кнопку, я даю согласие на{' '}
                <Link href="/">
                    <a> обработку персональных данных</a>
                </Link>
            </div>
        </div>
    )

    return (
        <div className={styles.kontakty_page}>
            {/* Modals */}
            <MobileModalForm
                title="Оставьте заявку"
                closed={modalIsClosed}
                content={modalContent}
                onClose={() => setModalIsClosed(true)}
            />

            {breakpoint1024 && (
                <MobileBurgerMenu
                    mobilemenuCatalogs={mobilemenuCatalogs}
                    mobileMenu={mobileMenu}
                    regions={regions}
                />
            )}

            {!breakpoint769 && (
                <Header
                    phoneCommon={phoneCommon}
                    worktimeHead={worktimeHead}
                    banner={banner}
                />
            )}
            {!breakpoint769 && <MainNavigation headerCatalog={headerCatalog} />}
            <div className={styles.container}>
                <div className={styles.url_wrapper}>
                    <URLComponent
                        breadcrumbs={[
                            { url: '/', title: 'Главная' },
                            { url: '/', title: 'Акции' },
                        ]}
                    />
                </div>
                <div className={styles.title}>Контакты</div>
                <div className={styles.subtitle}>Интернет магазин:</div>
                <div className={styles.list__wrapper}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <img src={PhoneImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>
                                    Телефон:
                                </div>
                                <div className={styles.text__phone}>
                                    +7 (495) 287-87-95
                                </div>
                                <div className={styles.text__phone}>
                                    +7 (800) 777-54-17
                                </div>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <img src={MessageImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>
                                    Мессенжеры:
                                </div>
                                <div className={styles.text__phone}>
                                    +7 (920) 922-33-44
                                </div>
                                <div className={styles.text__messangers}>
                                    WhatsApp, Viber, Telegram
                                </div>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <img src={MapmarkImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>Адрес:</div>
                                <div className={styles.text__default}>
                                    г. Москва, Рублевское шоссе, дом 48/1
                                    (самовывоза и выставочного зала по данному
                                    адресу нет).
                                </div>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <img src={ClocksImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>
                                    Часы работы:
                                </div>
                                <div className={styles.text__default}>
                                    Прием и обработка заказов по телефону
                                    осуществляется{' '}
                                    <strong>с 9:00 до 22:00 ч.</strong>,
                                    ежедневно.
                                </div>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <img src={MailImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>
                                    Прием заказов:
                                </div>
                                <div className={styles.text__default}>
                                    Прием заказов через корзину сайта
                                    осуществляется{' '}
                                    <strong>круглосуточно</strong>
                                </div>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <img src={DocumentImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>
                                    Реквизиты:
                                </div>
                                <div className={styles.text__default}>
                                    ООО "АНАТОМИЯ СНА"
                                    <br />
                                    ИНН 3315012492
                                    <br />
                                    ОГРН 1163328051787
                                    <br />
                                    Юридический адрес: 600911 Владимирская
                                    область, г. Ковров, улица Грибоедова, дом
                                    7/1, кв. 129
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.subtitle} ${styles.second_list}`}>
                    Фирменный салон:
                </div>
                <div className={styles.list__wrapper}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <img src={PhoneImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>
                                    Телефон:
                                </div>
                                <div className={styles.text__phone}>
                                    +7 (495) 180-47-84
                                </div>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <img src={MapmarkImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>Адрес:</div>
                                <div className={styles.text__default}>
                                    г. Москва, Профсоюзная улица, 118 (ТЦ
                                    "Тропа"){' '}
                                    <Link href="/">
                                        <a>Модели представленные в салоне</a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <img src={MapmarkImage}></img>
                            <div className={styles.text}>
                                <div className={styles.text__title}>
                                    Часы работы:
                                </div>
                                <div className={styles.text__default}>
                                    <strong>C 11:00 до 21:00 ч.</strong>,
                                    ежедневно
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.how_to_come__wrapper}>
                    <div className={styles.how_to_come}>
                        <div className={styles.how_to_come__text}>
                            <strong>Как пройти:</strong> Метро Коньково,
                            последний вагон из центра. После турникетов
                            поверните налево, следуйте указателям: выход номер
                            8. Выходим из перехода налево и идём вдоль
                            Профсоюзной улицы против движения транспорта к
                            магазину автозапчасти «Русь», проходим мимо магазина
                            и сразу за ним Торговый центр "Тропа". Необходимо
                            пройти в центральный вход и Вы на месте. Первый
                            этаж, справа от аптеки.
                        </div>
                        <div className={styles.how_to_come__text}>
                            <strong>Как проехать: </strong>
                            от МКАД в сторону центра по Профсоюзной улице.
                            Проезжаем перекресток с улицей Островитянова прямо.
                            На следующем перекрестке у метро Беляево
                            разворачиваемся и движемся в обратную сторону. ТЦ
                            "ТРОПА" будет по правую руку через 700 метров. В
                            сторону МКАД из центра движемся по Профсоюзной
                            улице. Проезжаем перекресток с улицей Миклухо-Маклая
                            прямо. ТЦ "Тропа будет по правую руку через 700
                            метров. В ТЦ "Тропа" имеется бесплатная подземная
                            парковка.
                        </div>
                    </div>
                </div>
                <div className={styles.map__wrapper}></div>
                {!breakpoint769 && (
                    <div className={styles.we_will_contact}>
                        Мы свяжемся с вами в ближайшее время.
                    </div>
                )}
                {!breakpoint769 && (
                    <div className={styles.form__wrapper}>
                        <div className={styles.form}>
                            <div className={styles.form__line__three}>
                                <input type="text" placeholder="Ваше имя *" />
                                <input type="text" placeholder="Ваш email *" />
                                <input type="text" placeholder="Телефон *" />
                            </div>
                            <textarea placeholder="Ваш вопрос *" />
                        </div>
                    </div>
                )}
                {!breakpoint769 && (
                    <div className={styles.important_fields}>
                        <span className={styles.blue}>*</span> Обязательные поля
                    </div>
                )}
                <div
                    onClick={() => setModalIsClosed(false)}
                    className={styles.send_req_button__wrapper}
                >
                    <button className={styles.send_req_button}>
                        Отправить заявку
                    </button>
                </div>
                {!breakpoint769 && (
                    <div className={styles.copy}>
                        Нажимая на кнопку, я даю согласие на{' '}
                        <Link href="/">
                            <a>обработку персональных данных</a>
                        </Link>
                    </div>
                )}
            </div>
            {(!IsMobile || !breakpoint1024) && <Subscribe />}
            {(IsMobile || breakpoint1024) && <MobileFooter />}
            {(!IsMobile || !breakpoint1024) && <Footer />}
        </div>
    )
}

export default KontaktyPage

export const getServerSideProps = async (ctx) => {
    const userAgent = ctx.req.headers['user-agent']

    const regex = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/

    let IsMobile = null

    if (userAgent.match(regex)) {
        IsMobile = true
    } else {
        IsMobile = false
    }

    const phoneCommon = '8 (495) 287-87-95'

    let Response = {}
    const URLS = [
        'https://www.anatomiyasna.ru/api/parameters/all/',
        'https://www.anatomiyasna.ru/api/menu/headerCatalog/',
        'https://www.anatomiyasna.ru/api/menu/mobileCatalogMenu/',
        'https://anatomiyasna.ru/api/menu/mobileMenu/',
        'https://anatomiyasna.ru/api/region/getRegions/',
    ]
    await Promise.all(
        URLS.map(async (url) => {
            return fetch(url).then((resp) => {
                if (resp && resp.status !== 404) {
                    return resp.json()
                } else return null
            })
        })
    ).then((res) => {
        Response = res
    })

    const worktimeHead = Response[0].worktime_head
    const headerCatalog = Response[1]
    const mobilemenuCatalogs = Response[2]
    const mobileMenu = Response[3]
    const regions = Response[4]

    return {
        props: {
            phoneCommon,
            worktimeHead,
            headerCatalog,
            IsMobile,
            mobilemenuCatalogs,
            mobileMenu,
            regions,
        },
    }
}
