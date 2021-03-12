import React, { useState } from 'react'
import dynamic from 'next/dynamic'

// Styles
import styles from './../../styles/pages/tovar.module.sass'

// Images
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
import DeliveryTab from './../../components/Tabs/DeliveryTab'
import MobileBurgerMenu from './../../components/Mobile/MobileBurgerMenu'
import ProductPageMobileTabs from './../../components/Tabs/ProductPageMobileTabs'
import ProductPageMobileProductGallery from './../../components/Products/ProductPageMobileProductGallery'
import ProductPageMobileButtons from './../../components/Button/ProductPageMobileButtons'
import ProductPageMobileInfoBlock from './../../components/Mobile/ProductPageMobileInfoBlock'
import ProductPageMobileAssurances from './../../components/Mobile/ProductPageMobileAssurances'
import ProductPageDesktopPopup from './../../components/Popups/ProductPageDesktopPopup'
import InputMask from 'react-input-mask'
import Link from 'next/link'
import Modal from './../../components/Modal'

// Utils
import { getAllProductSizes } from './../../utils/getProductSizes'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
    PRODUCT_PAGE_SET_DATA,
    PRODUCT_PAGE_SIZE_CHANGED,
} from './../../actions/ProductPage'

// import HelpPickUp from './../../components/Mobile/'

// const Header = dynamic(() => import('./../../components/Header'), { ssr: true })

const CatalogHelpPickUp = dynamic(
    () => import('../../components/Catalog/CatalogHelpPickUp'),
    { ssr: true }
)

const SwiperAssurenaces = dynamic(
    () => import('./../../components/Mobile/MobileAssurances'),
    { ssr: true }
)

const ProductPage = ({
    headerCatalog,
    phoneCommon,
    worktimeHead,
    banner = null,
    IsMobile,
    articles,
    mobileMenu,
    mobilemenuCatalogs,
    regions,
    productInfo,
}) => {
    const dispatch = useDispatch()

    dispatch({
        type: PRODUCT_PAGE_SIZE_CHANGED,
        payload: {
            selectedSizeId: productInfo.ProductCard.Prices[0].SizeId,
            selectedId: productInfo.ProductCard.Prices[0].Id,
            selectedValue: productInfo.ProductCard.Prices[0].SizeSlug,
            selectedTitle: productInfo.ProductCard.Prices[0].SizeTitle,
        },
    })

    dispatch({
        type: PRODUCT_PAGE_SET_DATA,
        payload: productInfo.ProductCard.Prices[0],
    })

    const [activeTab, setActiveTab] = useState('description')

    const breakpoint1023 = useMedia(1023)
    const [sizes, setSizes] = useState(
        getAllProductSizes(productInfo.ProductCard.Prices)
    )

    const images = [productInfo.ProductCard.MainImage.FilePath]
    for (let i = 0; i < productInfo.ProductCard.Images.length; i++) {
        images.push(productInfo.ProductCard.Images[i].FilePath)
    }
    if (
        productInfo.ProductCard.BrandImages &&
        productInfo.ProductCard.BrandImages.length > 0
    ) {
        for (let i = 0; i < productInfo.ProductCard.BrandImages.length; i++) {
            images.push(productInfo.ProductCard.BrandImages[i].FilePath)
        }
    }

    const onActiveTabClickHandler = (title) => {
        setActiveTab(title)
    }

    const txt =
        'Оформите заказ на сумму от 500 до 10 000 руб без первоначального взноса и переплат,  не выходя из дома, сроком на 4 месяца.'

    const txt2 =
        'Оформите заказ через корзину и получите бонусные сны в подарок! Скидка действует на весь заказ при условии онлайн-оплаты. Подробную информацию уточняйте у продавцов-консультантов!'

    const saleContentModalMobile = (
        <>
            <button
                className={`${styles.modal_button_sale} ${styles.modal_button_sale__more}`}
            >
                Подробнее
            </button>
            <button
                onClick={() => setModalMobileClosed(true)}
                className={`${styles.modal_button_sale} ${styles.modal_button_sale__proceed}`}
            >
                Продолжить покупки
            </button>
        </>
    )

    const giftContentModalMobile = (
        <>
            <button
                onClick={() => setGiftModalMobileClosed(true)}
                className={`${styles.modal_button_sale} ${styles.modal_button_sale__proceed}`}
            >
                Продолжить покупки
            </button>
        </>
    )

    const SavePriceModalMobileContent = (
        <>
            <div className={styles.form_wrapper}>
                <div className={styles.subform_wrapper}>
                    <div className={styles.form_title}>Ваше имя</div>
                    <div className={styles.input_wrapper}>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.subform_wrapper}>
                    <div className={styles.form_title}>Телефон</div>
                    <div className={styles.input_wrapper}>
                        <InputMask
                            placeholder={'+7 (___) ___  __ __'}
                            mask="+7 (999) 99 99"
                            maskChar="_"
                        />
                    </div>
                </div>
                <button className={styles.button}>Заказать</button>
                <div className={styles.copy}>
                    Нажимая на кнопку, я даю согласие на{' '}
                    <Link href="/">
                        <a>обработку персональных данных </a>
                    </Link>
                </div>
            </div>
            <button
                onClick={() => setSavePriceModalMobileClosed(true)}
                style={{
                    marginTop: '20px',
                }}
                className={`${styles.modal_button_sale} ${styles.modal_button_sale__proceed}`}
            >
                Продолжить покупки
            </button>
        </>
    )

    const [saleModalMobileClosed, setModalMobileClosed] = useState(true)
    const [
        savePriceModalMobileClosed,
        setSavePriceModalMobileClosed,
    ] = useState(true)
    const [giftModalMobileClosed, setGiftModalMobileClosed] = useState(true)

    return (
        <>
            {/* Modals */}
            {IsMobile && (
                <MobileBurgerMenu
                    mobileMenu={mobileMenu}
                    mobilemenuCatalogs={mobilemenuCatalogs}
                    regions={regions}
                />
            )}

            {IsMobile && (
                <Modal
                    closed={saleModalMobileClosed}
                    onClose={() => setModalMobileClosed(true)}
                    title={'Акция'}
                    text={txt}
                    IsMore={false}
                    Popup={false}
                    BuyOneClick={false}
                    content={saleContentModalMobile}
                />
            )}

            {IsMobile && (
                <Modal
                    closed={giftModalMobileClosed}
                    onClose={() => setGiftModalMobileClosed(true)}
                    title={'Бонусная программа Анатомии Сна'}
                    text={txt2}
                    IsMore={false}
                    Popup={false}
                    BuyOneClick={false}
                    content={giftContentModalMobile}
                />
            )}

            {IsMobile && (
                <Modal
                    closed={savePriceModalMobileClosed}
                    onClose={() => setSavePriceModalMobileClosed(true)}
                    title={'Хотите сохранить цену?'}
                    text={
                        'Нет возможности купить сейчас? Не упустите выгодную цену! Оформите заказ с текущей скидкой и оплатите его в течение 30 дней'
                    }
                    IsMore={false}
                    Popup={false}
                    BuyOneClick={false}
                    content={SavePriceModalMobileContent}
                />
            )}

            {!IsMobile && (
                <Header
                    banner={banner}
                    phoneCommon={phoneCommon}
                    worktimeHead={worktimeHead}
                />
            )}
            {!IsMobile && <Navigation headerCatalog={headerCatalog} />}
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
                        {productInfo.ProductCard.BrandTitle +
                            ' ' +
                            (productInfo.ProductCard.SeriesTitle || '') +
                            ' ' +
                            productInfo.ProductCard.Title}
                    </div>
                    {IsMobile && (
                        <div className={styles.popups_wrapper}>
                            <div onClick={() => setModalMobileClosed(false)}>
                                <ProductPageDesktopPopup
                                    text={
                                        'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                    }
                                    title={'CashBack 1000 руб. за видеоотзыв!'}
                                    txtColor={'#fff'}
                                    bgc={'#000'}
                                    borderColor={'#000'}
                                    Mobile={true}
                                />
                            </div>

                            <div onClick={() => setModalMobileClosed(false)}>
                                <ProductPageDesktopPopup
                                    text={
                                        'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                    }
                                    title={'Подписка IVI в подарок!'}
                                    txtColor={'#fff'}
                                    bgc={'#F83A73'}
                                    borderColor={'#F83A73'}
                                    Mobile={true}
                                />
                            </div>

                            <div onClick={() => setModalMobileClosed(false)}>
                                <ProductPageDesktopPopup
                                    text={
                                        'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                    }
                                    title={'-5% на матрас'}
                                    txtColor={'#000'}
                                    bgc={'#fff'}
                                    borderColor={'#bd2cd2'}
                                    Mobile={true}
                                />
                            </div>

                            <div onClick={() => setModalMobileClosed(false)}>
                                <ProductPageDesktopPopup
                                    text={
                                        'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                    }
                                    title={'Рассрочка 0/0/4'}
                                    txtColor={'#fff'}
                                    bgc={'#F76249'}
                                    borderColor={'#F76249'}
                                    Mobile={true}
                                />
                            </div>

                            <div onClick={() => setModalMobileClosed(false)}>
                                <ProductPageDesktopPopup
                                    text={
                                        'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                    }
                                    title={'Новинка'}
                                    txtColor={'#000'}
                                    bgc={'#fff'}
                                    borderColor={'#bd2cd2'}
                                    dontShowPopup={true}
                                    Mobile={true}
                                />
                            </div>
                        </div>
                    )}
                    {!IsMobile && (
                        <div className={styles.product_page__content_wrap}>
                            <div className={styles.product_page__left}>
                                <div className={styles.popups_wrapper}>
                                    <ProductPageDesktopPopup
                                        text={
                                            'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                        }
                                        title={
                                            'CashBack 1000 руб. за видеоотзыв!'
                                        }
                                        txtColor={'#fff'}
                                        bgc={'#000'}
                                        borderColor={'#000'}
                                    />
                                    <ProductPageDesktopPopup
                                        text={
                                            'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                        }
                                        title={'Подписка IVI в подарок!'}
                                        txtColor={'#fff'}
                                        bgc={'#F83A73'}
                                        borderColor={'#F83A73'}
                                    />
                                    <ProductPageDesktopPopup
                                        text={
                                            'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                        }
                                        title={'-5% на матрас'}
                                        txtColor={'#000'}
                                        bgc={'#fff'}
                                        borderColor={'#bd2cd2'}
                                    />
                                    <ProductPageDesktopPopup
                                        text={
                                            'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                        }
                                        title={'Рассрочка 0/0/4'}
                                        txtColor={'#fff'}
                                        bgc={'#F76249'}
                                        borderColor={'#F76249'}
                                    />
                                    <ProductPageDesktopPopup
                                        text={
                                            'В подарок месяц подписки на онлайн-кинотеатр IVI при покупке данного товара. IVI - это онлайн-кинотеатр, крупнейший сервис легального видеоконтента в России.'
                                        }
                                        title={'Новинка'}
                                        txtColor={'#000'}
                                        bgc={'#fff'}
                                        borderColor={'#bd2cd2'}
                                        dontShowPopup={true}
                                    />
                                </div>
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
                                <ProductPageInfoBlock
                                    sizes={sizes}
                                    prices={productInfo.ProductCard.Prices}
                                />
                            </div>
                        </div>
                    )}
                    {!IsMobile && (
                        <>
                            <div className={styles.product_page__statements}>
                                <ul
                                    className={
                                        styles.product_page__statements_list
                                    }
                                >
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
                                            Оплата при получении наличными,
                                            банковской картой, электронным
                                            кошельком, оплата по счету.
                                            <br />
                                            <span className={styles.small_blue}>
                                                В кредит или рассрочку
                                            </span>{' '}
                                            от{' '}
                                            <span className={styles.red}>
                                                862 руб/меc.
                                            </span>
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
                                            производителя 2 года. Возврат и
                                            обмен товара в полном соответствии
                                            закона.
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
                                            Доставка{' '}
                                            <span className={styles.blue}>
                                                по Москве
                                            </span>
                                            <br />
                                            Ближайшая доставка:{' '}
                                            <span className={styles.blue}>
                                                03.02.2021
                                            </span>
                                            <br />
                                            Стоимость доставки:{' '}
                                            <span className={styles.blue}>
                                                1 500 руб.
                                            </span>
                                            <br />
                                            Подъем на груз. лифте:{' '}
                                            <span className={styles.blue}>
                                                400 Руб.
                                            </span>
                                            <br />
                                            <span className={styles.small_blue}>
                                                Условия доставки и оплаты.
                                                Подробнее
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.product_page__tabs}>
                                <div className={styles.product_page__tabs_list}>
                                    <div
                                        onClick={() =>
                                            onActiveTabClickHandler(
                                                'description'
                                            )
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
                                        properties={
                                            productInfo.ProductCard.Properties
                                        }
                                        Layers={productInfo.Layers}
                                        articles={articles}
                                        certificates={productInfo.Certificates}
                                    />
                                )}
                                {activeTab === 'options' && <PaletteTab />}
                                {activeTab === 'review' && <ReviewTab />}
                                {activeTab === 'delivery' && <DeliveryTab />}
                            </div>
                        </>
                    )}
                </div>
                {IsMobile && (
                    <ProductPageMobileProductGallery images={images} />
                )}
                {IsMobile && (
                    <div className={styles.container}>
                        <ProductPageMobileButtons
                            setSavePriceModalMobileClosed={
                                setSavePriceModalMobileClosed
                            }
                            setGiftModalMobileClosed={setGiftModalMobileClosed}
                        />
                    </div>
                )}
                {IsMobile && (
                    <div className={styles.mobile_info_block__wrapper}>
                        <div className={styles.container}>
                            <ProductPageMobileInfoBlock
                                prices={productInfo.ProductCard.Prices}
                                sizes={sizes}
                            />
                        </div>
                    </div>
                )}
                {IsMobile && (
                    <div className={styles.container}>
                        <ProductPageMobileAssurances />
                    </div>
                )}

                {IsMobile && (
                    <ProductPageMobileTabs
                        certificates={productInfo.Certificates}
                        properties={productInfo.ProductCard.Properties}
                    />
                )}
                {IsMobile && <CatalogHelpPickUp />}
                {IsMobile && <SwiperAssurenaces />}
                {IsMobile && (
                    <div className={styles.container}>
                        <div className={styles.bottom_text}>
                            В интернет магазине Анатомия сна вы найдете лучшие
                            цены на товары фабрики Уют Сервис. Мы являемся
                            официальным дилером производителя и гарантируем
                            низкие цены . Вы можете купить Кровать Уют Сервис
                            Гарун К08-К09-К12-К14-К16-К18 и оплатить удобным для
                            вас способом. Доставка в Москве в любое удобном для
                            вас время.
                        </div>
                    </div>
                )}

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
            {!IsMobile && <Footer />}
        </>
    )
}

export default ProductPage

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
        'https://www.anatomiyasna.ru/api/menu/mobileCatalogMenu/',
        'https://anatomiyasna.ru/api/menu/mobileMenu/',
        'https://anatomiyasna.ru/api/region/getRegions/',
        `https://anatomiyasna.ru/api/productService/getProductModel/?slug=${ctx.params.tovar}`,
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
    const mobilemenuCatalogs = response[3]
    const mobileMenu = response[4]
    const regions = response[5]
    const productInfo = response[6]

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
            mobileMenu,
            mobilemenuCatalogs,
            regions,
            IsMobile,
            productInfo,
        },
    }
}
