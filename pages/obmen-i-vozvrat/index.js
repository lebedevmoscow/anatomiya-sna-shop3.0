import dynamic from 'next/dynamic'
import useMedia from './../../hooks/useMedia'
import Link from 'next/link'
import Select from 'react-select'
import InputMask from 'react-input-mask'

// React components
import Header from './../../components/Header'
import MainNavigation from './../../components/Nav/MainNavigation'
import MobileBurgerMenu from './../../components/Mobile/MobileBurgerMenu'
import Subscribe from './../../components/Subscribe'
import Footer from './../../components/Footer/FooterDesktop'
import URLComponent from './../../components/URLComponent'

// Images
import MattrassImportantImage from './../../assets/mattrass-important.png'
import MattrassCheckmarkImage from './../../assets/mattrass-checkmarkpng.png'
import MattrassGearImage from './../../assets/mattrass-gearpng.png'
import MattrassPurseImage from './../../assets/mattrass-pursepng.png'

// Styles
import styles from './../../styles/pages/obmen-i-vozvrat.module.sass'

const MobileFooter = dynamic(
    () => import('../../components/Mobile/MobieFooter'),
    { ssr: true }
)

const ObmenIVozvratPage = ({
    phoneCommon,
    worktimeHead,
    headerCatalog,
    IsMobile,
    mobilemenuCatalogs,
    mobileMenu,
    regions,
    banner = null,
}) => {
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            padding: '0 20px',
            border: '1px solid #e6e6e6',
            background: '#f8f8f8',
            borderRadius: '5px',
            boxShadow: 'none',
            height: '58px',
            boxSizing: 'border-box',
            '&:hover': {
                border: '1px solid #e6e6e6 !important',
                outline: 'none !important',
            },
        }),
        option: (styles, { data, isFocused }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#0CA5D3' : '',
                color: isFocused ? 'white' : '',
            }
        },

        placeholder: (styles) => {
            return {
                ...styles,
                marginLeft: '-10px',
                color: 'grey',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1',
                letterSpacing: '.6px',
                outline: 'none',
            }
        },

        indicatorSeparator: (styles) => {
            return {
                ...styles,
                display: 'none',
            }
        },

        dropdownIndicator: (styles) => {
            return {
                ...styles,
                color: '#000',
                position: 'absolute',
                right: '6px',
                top: '11px',
                transform: 'scale(0.8)',
            }
        },

        menuList: (styles, { data }) => {
            return {
                ...styles,
                border: '1px solid #0CA5D3',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
            }
        },
    }

    const breakpoint1024 = useMedia(1024)
    const breakpoint769 = useMedia(769)
    const breakpoint721 = useMedia(721)

    return (
        <div className={styles.obmenivozvratpage}>
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
                <div className={styles.title}>Обмен и возврат</div>
                <div className={styles.desc}>
                    <p>
                        Покупатель может отказаться от получения заказа в любое
                        время до момента доставки. После покупки продукции – в
                        соответствии с Законом «О защите прав потребителей».
                    </p>
                </div>
                <div className={styles.hint}>
                    Возврат продукции с заводским дефектом
                </div>
                <div className={styles.desc}>
                    <p>
                        Если Вам доставили товар, имеющий недостатки, вернуть
                        или обменять его можно при сохранении: потребительских
                        качеств, заводской упаковки, чека и/или товарной
                        накладной.
                    </p>
                </div>
                <div className={styles.list__wrapper}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <div className={styles.list__item__top}>
                                <div className={styles.list__item__top__left}>
                                    <img src={MattrassImportantImage}></img>
                                </div>
                                <div className={styles.list__item__top__right}>
                                    Какой товар не подлежит возврату:
                                </div>
                            </div>
                            <div className={styles.text}>
                                <ul>
                                    <li>
                                        <span>
                                            товар, являющийся предметом личного
                                            использования (постельное белье,
                                            полотенца и т.д.);
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            товар, изготовленный по
                                            индивидуальному заказу, в т.ч.
                                            имеющий нестандартные размеры;
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            продукция, имеющая следы
                                            эксплуатации, поврежденную упаковку;
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            любой товар, на который покупатель
                                            не может предоставить документ,
                                            подтверждающий факт приобретения
                                            продукции в нашем интернет-магазине
                                            (чек, товарная накладная).
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <div className={styles.list__item__top}>
                                <div className={styles.list__item__top__left}>
                                    <img src={MattrassCheckmarkImage}></img>
                                </div>
                                <div className={styles.list__item__top__right}>
                                    Нюансы возврата/обмена
                                </div>
                            </div>
                            <div className={styles.text}>
                                <ul>
                                    <li>
                                        <span>
                                            покупатель обязан проверить качество
                                            товара и комплектацию в момент
                                            доставки;
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            при получении потребитель
                                            подписывает накладную. Подпись –
                                            факт, подтверждающий проверку вами
                                            товара: его целостность,
                                            комплектацию и качество в целом.
                                            После этого любые претензии,
                                            относящиеся к дефектам, комплектации
                                            и внешнему виду, не рассматриваются;
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            если Вы получили товар ненадлежащего
                                            качества, вы можете его обменять или
                                            вернуть.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.desc}>
                    <p>
                        Если необходим обмен товара, а аналогичная продукция
                        отсутствует на складе компании, мы вернем полную
                        стоимость товара. Ввиду особенностей онлайн-продажи,
                        замена продукции ненадлежащего качества проводится
                        посредством возврата товара и последующего оформления
                        заказа на аналогичный товар, или же другую продукцию.
                        Получить подробную информацию о процедуре обмена и
                        возврата Вы можете у менеджеров компании «Анатомия Сна».
                    </p>
                </div>
                <div className={styles.list__wrapper}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <div className={styles.list__item__top}>
                                <div className={styles.list__item__top__left}>
                                    <img src={MattrassPurseImage}></img>
                                </div>
                                <div className={styles.list__item__top__right}>
                                    Возврат денежных средств
                                </div>
                            </div>
                            <div className={styles.text2}>
                                <p>
                                    Возврат денежных средств покупателю
                                    осуществляется следующими способами:
                                </p>
                                <ol>
                                    <li>
                                        <span>
                                            перевод на расчетный счет по
                                            заявлению.
                                        </span>
                                    </li>
                                </ol>
                                <p>
                                    Вернуть или обменять продукцию нельзя, если:
                                </p>
                                <ol>
                                    <li>
                                        <span>
                                            Товар не подлежит возврату по
                                            санитарно-гигиеническим нормам (к
                                            примеру, постельное белье).
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Продукция изготавливалась по
                                            индивидуальным размерам, оснащена
                                            выбранным покупателем наполнителем,
                                            имеет необычную форму.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Товар изготовлен по вашему
                                            индивидуальному заказу, т.е. товар
                                            имеет нестандартные размеры, форму
                                            или наполнение.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li className={styles.list__item}>
                            <div className={styles.list__item__top}>
                                <div className={styles.list__item__top__left}>
                                    <img src={MattrassGearImage}></img>
                                </div>
                                <div className={styles.list__item__top__right}>
                                    Изменение товаров, изготовленных по
                                    индивидуальному заказу
                                </div>
                            </div>
                            <div className={styles.text2}>
                                <p>
                                    Согласно закону "О Защите прав потребителей"
                                    продукция, которая была изготовлена под
                                    заказ, имеет комплектацию, отличающуюся от
                                    заводской, не подлежит обмену и возврату.
                                    Однако, учитывая пожелания клиента и по
                                    согласованию с производителем, в отдельных
                                    случаях, возможно внести желаемые изменения
                                    в товар, изготовленный по индивидуальному
                                    заказу. Данная возможность согласовывается с
                                    покупателем индивидуально.
                                </p>
                                <div className={styles.whitespace}></div>
                                <p>
                                    Стандартными размерами кроватей, матрасов,
                                    наматрасников и чехлов являются:
                                </p>
                                <p>Ширина: 80,90,120,140,160,180,200.</p>
                                <p>Длина: 190, 200. </p>
                                <p>
                                    Остальные размеры являются нестандартными,
                                    надлежащего качества обмену и возврату не
                                    подлежат ({' '}
                                    <Link href="http://www.consultant.ru/document/cons_doc_LAW_305/1525b1a2f037db240c8e6a749619f86e53857f13/">
                                        <a>
                                            Закон РФ от 07.02.1992 N 2300-1
                                            (ред. от 08.12.2020) "О защите прав
                                            потребителей"
                                        </a>
                                    </Link>
                                    )
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.form}>
                    <div className={styles.form__title}>
                        Мы свяжемся с вами в ближайшее время.
                    </div>
                    <div className={styles.form__inner}>
                        <div className={styles.line__three}>
                            <input type="text" placeholder="Ваше имя *"></input>
                            <input
                                type="text"
                                placeholder="Ваше email *"
                            ></input>
                            <InputMask
                                placeholder={'Ваш телефон *'}
                                mask="+7 (999) 999 99 99"
                                maskChar="_"
                            />
                        </div>
                        <div className={styles.line__three}>
                            <input type="text" placeholder="Город"></input>
                            <input
                                type="text"
                                placeholder="Номер заказ"
                            ></input>
                            <input
                                type="text"
                                placeholder="Номер накладной"
                            ></input>
                        </div>
                        <div className={styles.line__two}>
                            <Select
                                className="product-card__selector"
                                classNamePrefix="product-card__selector--inner"
                                placeholder={'Замена продукции'}
                                styles={colourStyles}
                                isSearchable={false}
                                autoFocus={false}
                            />
                            <Select
                                className="product-card__selector"
                                classNamePrefix="product-card__selector--inner"
                                placeholder={'Аскона'}
                                styles={colourStyles}
                                isSearchable={false}
                                autoFocus={false}
                            />
                        </div>
                        <div className={styles.line__one}>
                            <input
                                type="text"
                                placeholder="Наименование продукции"
                            ></input>
                        </div>
                        <div className={styles.line__one}>
                            <textarea
                                type="text"
                                placeholder="Ваш вопрос *"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            {(!IsMobile || !breakpoint1024) && <Subscribe />}
            {(IsMobile || breakpoint1024) && <MobileFooter />}
            {(!IsMobile || !breakpoint1024) && <Footer />}
        </div>
    )
}

export default ObmenIVozvratPage

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
