import dynamic from 'next/dynamic'
import useMedia from './../../hooks/useMedia'
import Link from 'next/link'

// React components
import Header from './../../components/Header'
import MainNavigation from './../../components/Nav/MainNavigation'
import MobileBurgerMenu from './../../components/Mobile/MobileBurgerMenu'
import Subscribe from './../../components/Subscribe'
import Footer from './../../components/Footer/FooterDesktop'
import URLComponent from './../../components/URLComponent'

// Images
import CounterImage from './../../assets/counter.png'
import CareerImage from './../../assets/career.png'
import PresentationImage from './../../assets/presentation.png'
import HandsImage from './../../assets/hands.png'
import CartShieldImage from './../../assets/cart-shield.png'
import FolderImage from './../../assets/folder.png'
import OfficialImage from './../../assets/official.png'
import MedalImage from './../../assets/medal.png'
import MailImage from './../../assets/mail.png'
import StarPocket from './../../assets/star-pocket.png'

// Styles
import styles from './../../styles/pages/partneram.module.sass'

const MobileFooter = dynamic(
    () => import('../../components/Mobile/MobieFooter'),
    { ssr: true }
)

const PartneramPage = ({
    phoneCommon,
    worktimeHead,
    headerCatalog,
    IsMobile,
    mobilemenuCatalogs,
    mobileMenu,
    regions,
    banner = null,
}) => {
    const breakpoint1024 = useMedia(1024)
    const breakpoint769 = useMedia(769)
    const breakpoint721 = useMedia(721)

    return (
        <div className={styles.partneram_page}>
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
            </div>
            <div className={styles.container}>
                <div className={styles.title}>ПАРТНЕРАМ</div>
                <div className={styles.desc}>
                    <p>
                        «Анатомия Сна» – интернет-магазин, где представлена
                        качественная современная мебель, матрасы, постельное
                        белье, аксессуары для дома.
                    </p>
                    <p>
                        Рады предложить выгодные условия покупки розничным
                        покупателям, сотрудничество – поставщикам,
                        производителям, мебельным бутикам, которые стремятся
                        предоставить своим клиентам качественный сервис.
                    </p>
                    <p>
                        Специалисты компании шагают в ногу со временем, а потому
                        уделяют особое внимание ассортименту, качеству
                        реализуемой продукции.
                    </p>
                </div>
                <div className={styles.we_offer}>
                    <div className={`${styles.hint} ${styles.we_offer__title}`}>
                        Мы предлагаем:
                    </div>
                    <ul className={styles.we_offer__list}>
                        <li className={styles.we_offer__list__item}>
                            <img src={CounterImage}></img>
                            <div className={styles.we_offer__list__item__text}>
                                Размещение Ваших товаров в каталоге
                                интернет-магазина «Анатомия Сна».
                            </div>
                        </li>
                        <li className={styles.we_offer__list__item}>
                            <img src={CareerImage}></img>
                            <div className={styles.we_offer__list__item__text}>
                                Высокая посещаемость сайта, гарантирующая
                                хороший оборот продаж.
                            </div>
                        </li>
                        <li className={styles.we_offer__list__item}>
                            <img src={PresentationImage}></img>
                            <div className={styles.we_offer__list__item__text}>
                                Доступность отслеживания продаж товаров,
                                реализуемых через интернет-магазин.
                            </div>
                        </li>
                        <li className={styles.we_offer__list__item}>
                            <img src={HandsImage}></img>
                            <div className={styles.we_offer__list__item__text}>
                                Все заботы, включая платную рекламу,
                                направленные на продвижение продукции в
                                интернете, берем на себя!
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.join_us}>
                    <div className={`${styles.hint} ${styles.join_us__title}`}>
                        Чтобы присоединиться к нам:
                    </div>
                    <div className={styles.desc}>
                        <p>
                            Пришлите электронное письмо на почтовый ящик{' '}
                            <Link href="/">
                                <a>sales@anatomiyasna.ru</a>
                            </Link>
                            , указав информацию о Вашем предприятии и товарах. В
                            теме письма укажите «Сотрудничество + название
                            компании». Уже вскоре мы пришлем ответ на Ваше
                            предложение.
                        </p>
                    </div>
                </div>
                <div className={styles.params}>
                    <div className={styles.params__title}>
                        В письме желательно указать следующие параметры:
                    </div>
                    <ul className={styles.params__list}>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                1
                            </span>
                            <span className={styles.params__list__item__text}>
                                Ценовая политика компании.
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                2
                            </span>
                            <span className={styles.params__list__item__text}>
                                Как отслеживаются цены на рынке.
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                3
                            </span>
                            <span className={styles.params__list__item__text}>
                                В какие регионы доставляется товар <br />
                                собственной службой.
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                4
                            </span>
                            <span className={styles.params__list__item__text}>
                                Возможно ли использование Ваших
                                <br />
                                логистических механизмов
                                <br />
                                при доставке Вашего товара
                                <br />
                                розничному потребителю.
                                <br />
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                5
                            </span>
                            <span className={styles.params__list__item__text}>
                                Может ли покупатель <br /> вернуть товар.
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                6
                            </span>
                            <span className={styles.params__list__item__text}>
                                В какой период рассматриваются
                                <br />
                                претензии покупателей.
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                7
                            </span>
                            <span className={styles.params__list__item__text}>
                                Необходима ли предоплата <br /> за товар.
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                8
                            </span>
                            <span className={styles.params__list__item__text}>
                                Как быстро изготавливаются <br />
                                индивидуальные заказы.
                            </span>
                        </li>
                        <li className={styles.params__list__item}>
                            <span className={styles.params__list__item__digit}>
                                9
                            </span>
                            <span className={styles.params__list__item__text}>
                                Какие сроки изготовления
                                <br />
                                стандартных заказов?
                            </span>
                        </li>
                    </ul>
                </div>
                {!breakpoint721 && (
                    <div className={styles.conditions}>
                        <ul className={styles.conditions__list}>
                            <li className={styles.conditions__list__item}>
                                <img src={CartShieldImage}></img>
                                <div
                                    className={
                                        styles.conditions__list__item__text
                                    }
                                >
                                    Ведем честное сотрудничество, основанное на
                                    заключении договора
                                </div>
                            </li>
                            <li className={styles.conditions__list__item}>
                                <img src={FolderImage}></img>
                                <div
                                    className={
                                        styles.conditions__list__item__text
                                    }
                                >
                                    Расскажите о компании и товарах кратко и
                                    емко – объемные презентации не являются
                                    гарантией заключения договора.
                                </div>
                            </li>
                            <li className={styles.conditions__list__item}>
                                <img src={OfficialImage}></img>
                                <div
                                    className={
                                        styles.conditions__list__item__text
                                    }
                                >
                                    Работаем "в белую", выплаты наличными
                                    средствами или переводом на банковскую карту
                                    не интересуют.
                                </div>
                            </li>
                            <li className={styles.conditions__list__item}>
                                <img src={MedalImage}></img>
                                <div
                                    className={
                                        styles.conditions__list__item__text
                                    }
                                >
                                    Уверены, качество Вашей продукции находится
                                    на высоком уровне. Чтобы заявка на
                                    сотрудничество принесла положительный
                                    результат, попробуйте рассказать о других
                                    преимуществах Вашей компании.
                                </div>
                            </li>
                            <li className={styles.conditions__list__item}>
                                <img src={MailImage}></img>
                                <div
                                    className={
                                        styles.conditions__list__item__text
                                    }
                                >
                                    Чтобы рассмотреть Ваше предложение, нам
                                    потребуется некоторое время. Пожалуйста,
                                    заявку отсылайте на указанный e-mail – мы
                                    обязательно ответим Вам!
                                </div>
                            </li>

                            <li className={styles.conditions__list__item}>
                                <img src={StarPocket}></img>
                                <div
                                    className={
                                        styles.conditions__list__item__text
                                    }
                                >
                                    Предлагаем взаимовыгодное сотрудничество
                                    молодым и опытным компаниям, которые хотят
                                    развивать бизнес и выйти на высокий доход.
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {breakpoint721 && (
                <div className={styles.conditions}>
                    <ul className={styles.conditions__list}>
                        <li className={styles.conditions__list__item}>
                            <img src={CartShieldImage}></img>
                            <div
                                className={styles.conditions__list__item__text}
                            >
                                Ведем честное сотрудничество, основанное на
                                заключении договора
                            </div>
                        </li>
                        <li className={styles.conditions__list__item}>
                            <img src={FolderImage}></img>
                            <div
                                className={styles.conditions__list__item__text}
                            >
                                Расскажите о компании и товарах кратко и емко –
                                объемные презентации не являются гарантией
                                заключения договора.
                            </div>
                        </li>
                        <li className={styles.conditions__list__item}>
                            <img src={OfficialImage}></img>
                            <div
                                className={styles.conditions__list__item__text}
                            >
                                Работаем "в белую", выплаты наличными средствами
                                или переводом на банковскую карту не интересуют.
                            </div>
                        </li>
                        <li className={styles.conditions__list__item}>
                            <img src={MedalImage}></img>
                            <div
                                className={styles.conditions__list__item__text}
                            >
                                Уверены, качество Вашей продукции находится на
                                высоком уровне. Чтобы заявка на сотрудничество
                                принесла положительный результат, попробуйте
                                рассказать о других преимуществах Вашей
                                компании.
                            </div>
                        </li>
                        <li className={styles.conditions__list__item}>
                            <img src={MailImage}></img>
                            <div
                                className={styles.conditions__list__item__text}
                            >
                                Чтобы рассмотреть Ваше предложение, нам
                                потребуется некоторое время. Пожалуйста, заявку
                                отсылайте на указанный e-mail – мы обязательно
                                ответим Вам!
                            </div>
                        </li>

                        <li className={styles.conditions__list__item}>
                            <img src={StarPocket}></img>
                            <div
                                className={styles.conditions__list__item__text}
                            >
                                Предлагаем взаимовыгодное сотрудничество молодым
                                и опытным компаниям, которые хотят развивать
                                бизнес и выйти на высокий доход.
                            </div>
                        </li>
                    </ul>
                </div>
            )}
            {(!IsMobile || !breakpoint1024) && <Subscribe />}
            {(IsMobile || breakpoint1024) && <MobileFooter />}
            {(!IsMobile || !breakpoint1024) && <Footer />}
        </div>
    )
}

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

export default PartneramPage
