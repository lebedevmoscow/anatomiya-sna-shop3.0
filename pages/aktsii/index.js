import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Swiper, SwiperSlide } from 'swiper/react'
import useMedia from './../../hooks/useMedia'

// React components
import Header from './../../components/Header'
import MainNavigation from './../../components/Nav/MainNavigation'
import URLComponent from './../../components/URLComponent'
import BigSaleCard from './../../components/Sales/BigSaleCard'
import SaleCard from './../../components/Sales/SaleCard'
import Pagination from './../../components/Pagination/CatalogPagination'
import LoadMoreButton from './../../components/Button/LoadMoreButton'
// import HelpPickUp from './../../components/Catalog/CatalogHelpPickUp'
import Assurances from './../../components/Assurances'
import Subscribe from './../../components/Subscribe'
// import Footer from './../../components/Footer/FooterDesktop'
// import MobileFooter from './../../components/Mobile/MobieFooter'
// import SwiperAssurenaces from './../../components/Mobile/MobileAssurances'
import MobileBurgerMenu from './../../components/Mobile/MobileBurgerMenu'

// Styles
import styles from './../../styles/pages/aktsii.module.sass'

const SwiperAssurenaces = dynamic(
    () => import('./../../components/Mobile/MobileAssurances'),
    { ssr: true }
)

const MobileFooter = dynamic(
    () => import('../../components/Mobile/MobieFooter'),
    { ssr: true }
)

const HelpPickUp = dynamic(
    () => import('../../components/Catalog/CatalogHelpPickUp'),
    { ssr: true }
)

const SalePage = ({
    banner = null,
    worktimeHead,
    phoneCommon,
    headerCatalog,
    salesFirst,
    mobilemenuCatalogs,
    mobileMenu,
    regions,
    IsMobile,
}) => {
    const breakpoint1024 = useMedia(1024)

    const breakpoint769 = useMedia(769)

    const [page, setPage] = useState(1)
    const [list, setList] = useState(
        salesFirst.map((sale, index) => {
            if (index === 0) return <BigSaleCard key={index} sale={sale} />
            else return <SaleCard key={index} sale={sale} />
        })
    )

    const [mobileList, setMobileList] = useState(
        salesFirst.map((sale, index) => {
            return <SaleCard key={index} sale={sale} />
        })
    )

    const [additionalList, setAdditionalList] = useState([])
    const [mobileAdditionalList, setMobileAdditionalList] = useState([])

    const reqNewArticles = async (url) => {
        const req = await fetch(url)
        const res = await req.json()
        return res
    }

    const onPageClickHandler = async (p) => {
        setAdditionalList([])
        setMobileAdditionalList([])
        const newList = await reqNewArticles(
            `https://www.anatomiyasna.ru/api/sale/sale-list/?page=${p}&limit=14`
        )
        if (!breakpoint1024) {
            setList(
                newList.map((sale, index) => {
                    if (index === 0) return <BigSaleCard sale={sale} />
                    else return <SaleCard sale={sale} />
                })
            )

            setPage(p)
        } else if (breakpoint1024) {
            setMobileList(
                newList.map((sale, index) => {
                    return <SaleCard sale={sale} />
                })
            )

            setPage(p)
        }
    }
    const onGoForwardButtonClickHandler = async () => {
        setAdditionalList([])
        setMobileAdditionalList([])

        const newList = await reqNewArticles(
            `https://www.anatomiyasna.ru/api/sale/sale-list/?page=${
                page + 1
            }&limit=14`
        )
        if (!breakpoint1024) {
            setList(
                newList.map((sale, index) => {
                    if (index === 0) return <BigSaleCard sale={sale} />
                    else return <SaleCard sale={sale} />
                })
            )
        } else if (breakpoint1024) {
            setMobileList(
                newList.map((sale, index) => {
                    return <SaleCard sale={sale} />
                })
            )
        }
        setPage(page + 1)
    }

    const onGoBackButtonClickHandler = async () => {
        setAdditionalList([])
        setMobileAdditionalList([])

        const newList = await reqNewArticles(
            `https://www.anatomiyasna.ru/api/sale/sale-list/?page=${
                page - 1
            }&limit=14`
        )
        if (!breakpoint1024) {
            setList(
                newList.map((sale, index) => {
                    if (index === 0) return <BigSaleCard sale={sale} />
                    else return <SaleCard sale={sale} />
                })
            )
        } else if (breakpoint1024) {
            setMobileList(
                newList.map((sale, index) => {
                    return <SaleCard sale={sale} />
                })
            )
        }
        setPage(page - 1)
    }

    const onShowMoreButtonClickHandler = async () => {
        const clone = additionalList.concat()
        const mobileClone = mobileAdditionalList.concat()
        const newList = await reqNewArticles(
            `https://www.anatomiyasna.ru/api/sale/sale-list/?page=${
                page + 1
            }&limit=14`
        )

        if (!breakpoint1024) {
            for (let i = 0; i < newList.length; i++) {
                if (i === 0) {
                    clone.push(<BigSaleCard sale={newList[i]} />)
                } else {
                    clone.push(<SaleCard sale={newList[i]} />)
                }
            }
            setAdditionalList(clone)
        } else if (breakpoint1024) {
            for (let i = 0; i < newList.length; i++) {
                mobileClone.push(<SaleCard sale={newList[i]} />)
            }
            setMobileAdditionalList(mobileClone)
        }

        setPage((p) => ++p)
    }

    return (
        <div className={styles.sale_page}>
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

                <div className={styles.title}>АКЦИИ АНАТОМИИ СНА</div>
                <div className={styles.themes}>
                    <div className={styles.themes__title}>Темы</div>
                    <Swiper
                        className={styles.themes__list}
                        freeMode={true}
                        freeModeMomentum={true}
                        resistance={true}
                        resistanceRatio={0}
                        slidesPerView={'auto'}
                        autoHeight={true}
                    >
                        <SwiperSlide className={styles.themes__item}>
                            Матрасы
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Кровати
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Основания
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Чехлы
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Подушки
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Одеяла
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Скидки
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Кэшбэки
                        </SwiperSlide>
                        <SwiperSlide className={styles.themes__item}>
                            Подарки
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className={styles.themes__list}>
                        <div className={styles.themes__item}>Матрасы</div>
                        <div className={styles.themes__item}>Кровати</div>
                        <div className={styles.themes__item}>Основания</div>
                        <div className={styles.themes__item}>Чехлы</div>
                        <div className={styles.themes__item}>Подушки</div>
                        <div className={styles.themes__item}>Одеяла</div>
                        <div className={styles.themes__item}>Скидки</div>
                        <div className={styles.themes__item}>Кэшбэки</div>
                        <div className={styles.themes__item}>Подарки</div>
                    </div> */}
                </div>
                <div className={styles.saleslist}>
                    {
                        <>
                            {!IsMobile && list}
                            {!IsMobile && additionalList}
                            {IsMobile && mobileList}
                            {IsMobile && mobileAdditionalList}
                        </>
                    }
                </div>
                <div
                    onClick={() => onShowMoreButtonClickHandler()}
                    className={styles.button_wrapper}
                >
                    <LoadMoreButton firstText={'Показать еще +14'} />
                </div>
                {(IsMobile || breakpoint1024) && (
                    <Pagination
                        IsMobile={true}
                        onGoForwardButtonClickHandler={
                            onGoForwardButtonClickHandler
                        }
                        onGoBackdButtonClickHandler={onGoBackButtonClickHandler}
                        onPageClickHandler={onPageClickHandler}
                        amount={30}
                        current={page}
                    />
                )}
                {(!IsMobile || !breakpoint1024) && (
                    <Pagination
                        onGoForwardButtonClickHandler={
                            onGoForwardButtonClickHandler
                        }
                        onGoBackdButtonClickHandler={onGoBackButtonClickHandler}
                        onPageClickHandler={onPageClickHandler}
                        amount={30}
                        current={page}
                    />
                )}
                <HelpPickUp />
                {!IsMobile && !breakpoint1024 && (
                    <Assurances dontShowBanner={true} />
                )}
                {(IsMobile || breakpoint1024) && (
                    <div style={{ marginTop: '25px' }}>
                        <SwiperAssurenaces />
                    </div>
                )}
            </div>
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
        'https://www.anatomiyasna.ru/api/sale/sale-list/?page=1&limit=14',
        'https://www.anatomiyasna.ru/api/menu/mobileCatalogMenu/',
        'https://anatomiyasna.ru/api/menu/mobileMenu/',
        'https://anatomiyasna.ru/api/region/getRegions/',
    ]
    await Promise.all(
        URLS.map(async (url, index) => {
            return fetch(url).then((resp) => {
                if (resp && resp.status !== 404) {
                    if (index === 14) {
                        return resp.text()
                    } else {
                        return resp.json()
                    }
                } else return null
            })
        })
    ).then((res) => {
        Response = res
    })

    const worktimeHead = Response[0].worktime_head
    const headerCatalog = Response[1]
    const salesFirst = Response[2]
    const mobilemenuCatalogs = Response[3]
    const mobileMenu = Response[4]
    const regions = Response[5]

    return {
        props: {
            phoneCommon,
            worktimeHead,
            headerCatalog,
            salesFirst,
            IsMobile,
            mobilemenuCatalogs,
            mobileMenu,
            regions,
        },
    }
}

export default SalePage
