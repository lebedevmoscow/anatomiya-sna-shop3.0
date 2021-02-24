import React, { useEffect, useState } from 'react'
import SwiperCore, { Navigation as SwiperNavigationCore, Thumbs } from 'swiper'

// Styles
import styles from './../../styles/pages/tovar.module.sass'

// Images
import ImageForSlider1 from './../../TEMP/productpagegallery/1.jpg'
import ImageForSlider2 from './../../TEMP/productpagegallery/2.jpg'
import ImageForSlider3 from './../../TEMP/productpagegallery/3.jpg'
import ImageForSlider4 from './../../TEMP/productpagegallery/4.jpg'
import ImageForSlider5 from './../../TEMP/productpagegallery/5.jpg'
import ImageForSlider6 from './../../TEMP/productpagegallery/6.jpg'
import ImageForSlider7 from './../../TEMP/productpagegallery/7.jpg'
import ImageForSlider8 from './../../TEMP/productpagegallery/8.jpg'
import ImageForSlider9 from './../../TEMP/productpagegallery/9.jpg'
import ImageForSlider10 from './../..//TEMP/productpagegallery/10.jpg'
import CreditCardImage from './../..//assets/svg/credit-card.svg'
import CertificateImage from './../../assets/svg/certificate.svg'
import CarImage from './../../assets/svg/car.svg'

// Hooks
import useMedia from './../../hooks/useMedia'

// React components
import Header from './../../components/Header'
import Navigation from './../../components/Nav/MainNavigation'
import URLComponent from './../../components/URLComponent'
import Footer from './../../components/Footer/FooterDesktop'
import ProductPageGallery from './../../components/Products/ProductPageGallery'
import ProductPageInfoBlock from './../../components/Products/ProductPageInfoBlock'
import ProductPageDescriptionTab from './../../components/Tabs/ProductPageDescriptionTab'
import PaletteTab from './../../components/Tabs/PaletteTab'
import ReviewTab from './../../components/Tabs/ReviewTab'

SwiperCore.use([SwiperNavigationCore, Thumbs])

const ProductPage = ({
    headerCatalog,
    phoneCommon,
    worktimeHead,
    banner = null,
    IsMobile,
    articles,
}) => {
    const [width, setWidth] = useState(null)
    const [activeTab, setActiveTab] = useState('description')
    const hasWindow = typeof window !== 'undefined'

    // Experemental
    const breakpoint1023 = useMedia(1023)

    useEffect(() => {
        if (hasWindow) {
            setWidth(window.innerWidth)
        }
    }, [hasWindow])

    const images = [
        ImageForSlider1,
        ImageForSlider2,
        ImageForSlider3,
        ImageForSlider4,
        ImageForSlider5,
        ImageForSlider6,
        ImageForSlider7,
        ImageForSlider8,
        ImageForSlider9,
        ImageForSlider10,
    ]

    const onActiveTabClickHandler = (title) => {
        setActiveTab(title)
    }

    return (
        <>
            {/* Modals */}
            {width && width <= 1023 && <MobileBurgerMenu />}

            <Header
                banner={banner}
                phoneCommon={phoneCommon}
                worktimeHead={worktimeHead}
            />
            <Navigation headerCatalog={headerCatalog} />
            <div className={`${styles.container} ${styles.url_component}`}>
                <URLComponent
                    breadcrumbs={[
                        { url: '/', title: 'крошка1' },
                        { url: '/', title: 'крошка2' },
                        { url: '/', title: 'крошка3' },
                    ]}
                />
            </div>
            <div className={styles.product_page}>
                <div className={styles.container}>
                    <div className={styles.product_page__title}>
                        КРОВАТЬ ВОЛХОВА С-436 М/С-436 М1/С-437 М/С-437 М1/С-438
                        М/С-438 М1
                    </div>
                    <div className={styles.product_page__content_wrap}>
                        <div className={styles.product_page__left}>
                            {/* <ul className="product-page__thumbs-list">
                                <li>
                                    <ProductPageSaleThumb
                                        text={
                                            'CashBack 1000 руб. за видеоотзыв!'
                                        }
                                        textColor={'#fff'}
                                        background={'#000'}
                                    />
                                </li>
                                <li>
                                    <ProductPageSaleThumb
                                        text={'Подписка IVI в подарок!'}
                                        textColor={'#fff'}
                                        background={'#f83a73'}
                                    />
                                </li>
                                <li>
                                    <ProductPageSaleThumb
                                        text={'-5% на матрас'}
                                        textColor={'#000'}
                                        background={'#fff'}
                                    />
                                </li>
                            </ul> */}
                            <ProductPageGallery images={images} />
                        </div>
                        <div className={styles.product_page__right}>
                            <ProductPageInfoBlock />
                        </div>
                    </div>
                    <div className={styles.product_page__statements}>
                        <ul className={styles.product_page__statements_list}>
                            <li
                                className={
                                    styles.product_page__statements_list_item
                                }
                            >
                                {/* <Image
                                    className="product-page__statements-list-item-image"
                                    src={CreditCardImage}
                                    height={51}
                                    width={51}
                                /> */}
                                <img src={CreditCardImage}></img>
                                <div className={styles.text}>
                                    Оплата при получении наличными, банковской
                                    картой, электронным кошельком, оплата по
                                    счету.
                                    <br />
                                    <span>В кредит или рассрочку</span> от{' '}
                                    <span>862 руб/меc.</span>
                                </div>
                            </li>
                            <li
                                className={
                                    styles.product_page__statements_list_item
                                }
                            >
                                <img src={CertificateImage} />
                                {/* <Image
                                    className="product-page__statements-list-item-image"
                                    src={CertificateImage}
                                    height={51}
                                    width={51}
                                /> */}
                                <div className={styles.text}>
                                    Официальный дилер фабрики. Гарантия
                                    производителя 2 года. Возврат и обмен товара
                                    в полном соответствии закона.
                                </div>
                            </li>
                            <li
                                className={
                                    styles.product_page__statements_list_item
                                }
                            >
                                {/* <Image
                                    className="product-page__statements-list-item-image"
                                    src={CarImage}
                                    height={51}
                                    width={51}
                                /> */}
                                <img src={CarImage}></img>
                                <div className={styles.text}>
                                    Доставка <span>по Москве</span>
                                    <br />
                                    Ближайшая доставка: <span>03.02.2021</span>
                                    <br />
                                    Стоимость доставки: <span>1 500 руб.</span>
                                    <br />
                                    Подъем на груз. лифте:{' '}
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* {width && width >= 1024 && ( */}
                    <>
                        <div className={styles.product_page__tabs}>
                            <div className={styles.product_page__tabs_list}>
                                <div
                                    onClick={() =>
                                        onActiveTabClickHandler('description')
                                    }
                                    className={`${
                                        styles.product_page_tabs_list_item
                                    } ${
                                        activeTab === 'description'
                                            ? `${styles.product_page_tabs_list_item__active}`
                                            : ''
                                    }`}
                                >
                                    Описание <br /> и характеристики
                                </div>
                                <div
                                    onClick={() =>
                                        onActiveTabClickHandler('options')
                                    }
                                    className={`${
                                        styles.product_page_tabs_list_item
                                    } ${
                                        activeTab === 'options'
                                            ? `${styles.product_page_tabs_list_item__active}`
                                            : ''
                                    }`}
                                >
                                    Палитра и доп. опции
                                </div>
                                <div
                                    onClick={() =>
                                        onActiveTabClickHandler('review')
                                    }
                                    className={`${
                                        styles.product_page_tabs_list_item
                                    } ${
                                        activeTab === 'review'
                                            ? `${styles.product_page_tabs_list_item__active}`
                                            : ''
                                    }`}
                                >
                                    Оставьте отзыв
                                </div>
                                <div
                                    onClick={() =>
                                        onActiveTabClickHandler('delivery')
                                    }
                                    className={`${
                                        styles.product_page_tabs_list_item
                                    } ${
                                        activeTab === 'delivery'
                                            ? `${styles.product_page_tabs_list_item__active}`
                                            : ''
                                    }`}
                                >
                                    Доставка и оплата
                                </div>
                            </div>
                        </div>
                        <div className="product-page__current-tab">
                            {activeTab === 'description' && (
                                <ProductPageDescriptionTab
                                    articles={articles}
                                />
                            )}
                            {activeTab === 'options' && <PaletteTab />}
                            {activeTab === 'review' && <ReviewTab />}
                            {/* {activeTab === 'delivery' && <DeliveryTab />} */}
                        </div>
                    </>
                    {/* )} */}
                </div>
                {/* {width && width <= 1023 && <ProductPageMobileTabs />} */}
                {/* <div className="container">
                    <CatalogHelpPickUp />
                    {width && width <= 1024 && width > 768 && (
                        <UsefulArticles articles={articles} />
                    )}
                    {width && width <= 768 && (
                        <ArticleListWithSwiper articles={articles} />
                    )}
                    <IndexPageAssurances container={false} catalog={true} />
                    <div className="product-page__small-text">
                        В интернет магазине Анатомия сна вы найдете лучшие цены
                        на товары фабрики Волхова. Мы являемся официальным
                        дилером производителя и гарантируем низкие цены . Вы
                        можете купить Кровать Волхова С-436 М/С-436 М1/С-437
                        М/С-437 М1/С-438 М/С-438 М1 и оплатить удобным для вас
                        способом. Доставка в Москве в любое удобном для вас
                        время.
                    </div>
                </div> */}
            </div>
            {/* <IndexPageSubscribe /> */}
            <Footer />
        </>
    )
}

export default ProductPage

// export const getServerSideProps = async (ctx) => {
//     // Грузим статьи (8 штук)
//     const articlesReq = await fetch(
//         'https://www.anatomiyasna.ru/api/journal/article-list?mode=new&page=1&limit=8'
//     )
//     const articles = await articlesReq.json()

//     return {
//         props: {
//             articles,
//         },
//     }
// }

// export default ProductPage

export const getServerSideProps = async (ctx) => {
    const userAgent = ctx.req.headers['user-agent']

    // For Lighthouse
    if (ctx.params.catalog === 'asset-manifest.json') {
        return {
            notFound: true,
        }
    }

    const URLS = [
        'https://www.anatomiyasna.ru/api/menu/headerCatalog/',
        'https://www.anatomiyasna.ru/api/parameters/all/',
        'https://www.anatomiyasna.ru/api/journal/article-list?mode=new&page=1&limit=8',
    ]

    let response = {}
    // let products = {}

    await Promise.all(
        URLS.map((url) => fetch(url).then((resp) => resp.json()))
    ).then((res) => {
        response = res
    })

    const headerCatalog = response[0]
    const phoneCommon = response[1].phone_common
    const worktimeHead = response[1].worktime_head
    const assurances = response[1].main_page_warranty_text
    const articles = response[2]

    const regex = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
    let IsMobile = null

    if (userAgent.match(regex)) {
        IsMobile = true
    } else {
        IsMobile = false
    }

    return {
        props: {
            headerCatalog,
            phoneCommon,
            worktimeHead,
            assurances,
            articles,
            IsMobile,
        },
    }
}
