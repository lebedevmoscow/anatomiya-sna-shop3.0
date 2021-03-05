import dynamic from 'next/dynamic'
import { useState } from 'react'
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

// Images
import LaptopImage from './../../assets/laptop.png'
import PurpleCarImage from './../../assets/purple-car.png'
import YellowCarImage from './../../assets/car-with-clocks.png'
import ElectionsImage from './../../assets/elections.png'
import PhoneInfoImage from './../../assets/phone-info.png'
import PurpleBoxImage from './../../assets/purple-box.png'
import MattrassType1Image1 from './../../assets/mattrass_type1.jpg'
import MattrassType1Image2 from './../../assets/mattrass_type2.jpg'
import MattrassType1Image3 from './../../assets/mattrass_type3.jpg'
import MattrassType1Image4 from './../../assets/mattrass_type4.jpg'
import WarningImage from './../../assets/warning.png'

// Styles
import styles from './../../styles/pages/optovikam.module.sass'

const MobileFooter = dynamic(
    () => import('../../components/Mobile/MobieFooter'),
    { ssr: true }
)

const OptovikamPage = ({
    phoneCommon,
    worktimeHead,
    headerCatalog,
    IsMobile,
    mobilemenuCatalogs,
    mobileMenu,
    regions,
    banner = null,
}) => {
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
        <div className={styles.optovikam_page}>
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
                <div className={styles.title}>Оптовикам</div>
                <div className={styles.desc}>
                    <p>
                        Компания «Анатомия Сна» предлагает выгодные условия
                        сотрудничества оптовым покупателям. Широкий ассортимент
                        продукции дает возможность подобрать товары, которые
                        отвечают требованиям самых взыскательных клиентов.{' '}
                    </p>
                </div>
                <div className={styles.desc}>
                    <p>
                        Посетив каталог, Вы сможете подобрать оптимальную
                        продукцию по умеренным ценам. При необходимости наши
                        специалисты окажут профессиональную помощь в выборе
                        моделей, руководствуясь Вашими требованиям. Для этого
                        следует предоставить информацию о количестве позиций и
                        технические/эксплуатационные параметры, которым должен
                        соответствовать товар.
                    </p>
                </div>
                <div className={styles.advantages}>
                    <div className={styles.subtitle}>
                        Преимущества покупки у нас
                    </div>
                    <ul className={styles.advantages__list}>
                        <li className={styles.advantages__list__item}>
                            <div className={styles.advantages__list__item__top}>
                                <img src={LaptopImage}></img>
                                <div
                                    className={
                                        styles.advantages__list__item__top__title
                                    }
                                >
                                    Вам не нужно искать!
                                </div>
                            </div>
                            <div
                                className={styles.advantages__list__item__text}
                            >
                                Мы всегда рады взаимовыгодному сотрудничеству,
                                поэтому для постоянных клиентов у нас действуют
                                особые условия. Мы готовы предоставить
                                максимальную скидку для Вашего бюджетного
                                комфорта.
                            </div>
                        </li>
                        <li className={styles.advantages__list__item}>
                            <div className={styles.advantages__list__item__top}>
                                <img src={PurpleCarImage}></img>
                                <div
                                    className={
                                        styles.advantages__list__item__top__title
                                    }
                                >
                                    Вам не нужно доставлять!
                                </div>
                            </div>
                            <div
                                className={styles.advantages__list__item__text}
                            >
                                Мы работаем по расширенной системе доставок, а,
                                значит, мы не только предложим Вам оптимальную
                                сделку, но и доставим Ваш заказ в 500 различных
                                городов совершенно бесплатно! Доставка нужна в
                                самые отдаленные уголки России? Не проблема!
                                Доставим в остальные города посредством надежной
                                транспортной компании!
                            </div>
                        </li>
                        <li className={styles.advantages__list__item}>
                            <div className={styles.advantages__list__item__top}>
                                <img src={YellowCarImage}></img>
                                <div
                                    className={
                                        styles.advantages__list__item__top__title
                                    }
                                >
                                    Вам не нужно ждать!
                                </div>
                            </div>
                            <div
                                className={styles.advantages__list__item__text}
                            >
                                Все составляющие для изготовления продукции
                                всегда есть в наличии на складе, поэтому процесс
                                производства матрасов занимает минимальные сроки
                                - от 1 дня.
                            </div>
                        </li>
                        <li className={styles.advantages__list__item}>
                            <div className={styles.advantages__list__item__top}>
                                <img src={ElectionsImage}></img>
                                <div
                                    className={
                                        styles.advantages__list__item__top__title
                                    }
                                >
                                    Вам не нужно подбирать, рассчитывать и
                                    уточнять!
                                </div>
                            </div>
                            <div
                                className={styles.advantages__list__item__text}
                            >
                                Сообщите параметры матраса, и мы максимально
                                быстро подберем варианты, отвечающие всем Вашим
                                требованиям. Рассчитаем стоимость доставки,
                                сориентируем по срокам изготовления с учетом
                                необходимого количества продукции, и предложим
                                наиболее выгодную цену.
                            </div>
                        </li>
                        <li className={styles.advantages__list__item}>
                            <div className={styles.advantages__list__item__top}>
                                <img src={PhoneInfoImage}></img>
                                <div
                                    className={
                                        styles.advantages__list__item__top__title
                                    }
                                >
                                    Вам не нужно контролировать!
                                </div>
                            </div>
                            <div
                                className={styles.advantages__list__item__text}
                            >
                                Благодаря шестилетнему опыту работы в сфере
                                ортопедических товаров для сна, мы отобрали
                                лучших производителей матрасов и тщательно
                                контролируем качество продукции на всех этапах
                                производства и по окончанию доставки.
                            </div>
                        </li>
                        <li className={styles.advantages__list__item}>
                            <div className={styles.advantages__list__item__top}>
                                <img src={PurpleBoxImage}></img>
                                <div
                                    className={
                                        styles.advantages__list__item__top__title
                                    }
                                >
                                    Вам не нужно переживать!
                                </div>
                            </div>
                            <div
                                className={styles.advantages__list__item__text}
                            >
                                Качество изделия – главный критерий при выборе
                                товаров для сна. Вся продукция подтверждена
                                действующими сертификатами соответствия, что
                                гарантирует изготовление товаров на основе
                                безвредных материалов, а так же высокой
                                прочности и надежности во время всего срока
                                эксплуатации. Все товары имеют официальную
                                гарантию от производителя.
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.mini_info}>
                    Как видите, все, что от Вас требуется – это сообщить нам
                    параметры товаров, все остальное – наш сервис!
                </div>
                <div className={styles.mattrassess___wrapper}>
                    <ul className={styles.mattrassess__list}>
                        <li className={styles.mattrassess__list__item}>
                            <div
                                className={
                                    styles.mattrassess__list__item__title
                                }
                            >
                                взрослые матрасы
                            </div>
                            <img src={MattrassType1Image1}></img>
                            <div
                                className={
                                    styles.mattrassess__list__item__price
                                }
                            >
                                Цена{' '}
                                <span className={styles.blue}>
                                    {' '}
                                    от 1 655 Руб.
                                </span>
                            </div>
                            <button className={styles.button__more_info}>
                                Подробнее
                            </button>
                        </li>
                        <li className={styles.mattrassess__list__item}>
                            <div
                                className={
                                    styles.mattrassess__list__item__title
                                }
                            >
                                детские матрасы
                            </div>
                            <img src={MattrassType1Image2}></img>
                            <div
                                className={
                                    styles.mattrassess__list__item__price
                                }
                            >
                                Цена{' '}
                                <span className={styles.blue}>
                                    {' '}
                                    от 1 572 Руб.
                                </span>
                            </div>
                            <button className={styles.button__more_info}>
                                Подробнее
                            </button>
                        </li>
                        <li className={styles.mattrassess__list__item}>
                            <div
                                className={
                                    styles.mattrassess__list__item__title
                                }
                            >
                                чехлы
                            </div>
                            <img src={MattrassType1Image3}></img>
                            <div
                                className={
                                    styles.mattrassess__list__item__price
                                }
                            >
                                Цена{' '}
                                <span className={styles.blue}>
                                    {' '}
                                    от 556 Руб.
                                </span>
                            </div>
                            <button className={styles.button__more_info}>
                                Подробнее
                            </button>
                        </li>
                        <li className={styles.mattrassess__list__item}>
                            <div
                                className={
                                    styles.mattrassess__list__item__title
                                }
                            >
                                кровати
                            </div>
                            <img src={MattrassType1Image4}></img>
                            <div
                                className={
                                    styles.mattrassess__list__item__price
                                }
                            >
                                Цена{' '}
                                <span className={styles.blue}>
                                    {' '}
                                    от 5 638 Руб.
                                </span>
                            </div>
                            <button className={styles.button__more_info}>
                                Подробнее
                            </button>
                        </li>
                    </ul>
                </div>
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

export default OptovikamPage

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
