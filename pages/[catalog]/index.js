import { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

import useMedia from './../../hooks/useMedia'

// React components
import Header from './../../components/Header'
import MainNavigation from './../../components/Nav/MainNavigation'
import Subscribe from './../../components/Subscribe'
import Footer from './../../components/Footer/FooterDesktop'
import MobileBurgerMenu from './../../components/Mobile/MobileBurgerMenu'
import CatalogPresetFilter from './../../components/Filters/CatalogPresentFilter'
import CatalogCompositionFilter from './../../components/Filters/CatalogCompositionFilter'
import CatalogLeftMobile from './../../components/Mobile/CatalogLeftMobile'
import CatalogProductList from './../../components/Products/CatalogProductList'
import LoadMoreButton from './../../components/Button/LoadMoreButton'
import CatalogPagination from '../../components/Pagination/CatalogPagination'
import CatalogHelpPickUp from '../../components/Catalog/CatalogHelpPickUp'
import CatalogMobileReview from './../../components/Reviews/CatalogMobileReviews'

import common_styles from './../../styles/pages/catalog.module.sass'

const CatalogPage = ({
    banner,
    phoneCommon,
    worktimeHead,
    headerCatalog,
    mobilemenuCatalogs,
    mobileMenu,
    regions,
    assurances,
    filterAPIData,
    catalogSlug,
    subCatalogSlug,
    products,
}) => {
    // Vars
    const initialCompositionFilterData = [
        'Размер',
        'Материал',
        'Тип',
        'Форма',
        'Комплектация',
        'Стоимость',
        'Назначение',
        'Страна',
        'Популярное',
        'Цвет',
        'Стиль',
        'Изголовье',
        'Декор',
        'Производители',
    ]

    // State
    const [stylesForViewType, setStylesForViewType] = useState({})
    const [stylesForDesktopViewType, setStylesForDesktopViewType] = useState({})
    const [desktopViewType, setDesktopViewType] = useState(null)
    const [viewType, setViewType] = useState(null)
    const [mainMobileFilterIsOpen, setMainMobileFilterIsOpen] = useState(false)
    const [presetFilterIsOpen, setPresetFilterIsOpen] = useState(false)
    const [presetFilterData, setPresetFilterData] = useState([])
    const [presetFilterTitle, setPresetFilterTitle] = useState('')
    const [
        compositionPresetFilterIsOpen,
        setCompositionPresetFilterIsOpen,
    ] = useState(false)

    // Click Handlers
    const onPresetFilterClickHandler = (title, data) => {
        setPresetFilterTitle(title)
        setPresetFilterData(data)
        setPresetFilterIsOpen((p) => !p)
    }

    const onCloseCompositionFilterClickHandler = () => {
        setCompositionPresetFilterIsOpen((p) => !p)
    }

    const onMainMobileFilterClickHandler = () => {
        setMainMobileFilterIsOpen((p) => !p)
    }

    const breakpoint1023 = useMedia(1023)
    const breakpoint768 = useMedia(768)
    const breakpoint720 = useMedia(720)

    // Use Effects
    useEffect(() => {
        if (breakpoint768) {
            setViewType('single')
        } else if (!breakpoint768) {
            setDesktopViewType('several')
        }
    }, [breakpoint768])

    useEffect(() => {
        if (viewType === 'single') {
            setStylesForViewType({
                catalog_product_card: {
                    width: '100%',
                },
                catalog_product_card__image: {
                    height: '208px',
                    width: '332.8px',
                },
                catalog_product_card__materials_list_item_img: {
                    height: '32.39px',
                    width: '32.39px',
                },
                catalog_product_card__info_wrap: {
                    display: 'flex',
                },
                catalog_product_card__info_button: {
                    width: '63%',
                },
                catalog_product_card__stats_buttons: {
                    top: '0',
                    width: '34%',
                },
                catalog_product_card__stat_block: {
                    width: '50px',
                    marginLeft: '10px',
                },
                catalog_product_card__stat_block_image: {
                    left: '1%',
                    top: '8%',
                    transform:
                        'scale(0.33) translateX(-42px) translateY(-71px)',
                },
            })
        }

        if (viewType === 'several') {
            setStylesForViewType({
                catalog_product_card: {
                    width: '43%',
                },
                catalog_product_card__image: {
                    height: '102.31px',
                    width: '163.72px',
                },
                catalog_product_card__materials_list_item_img: {
                    height: '10.25px',
                    width: '10.25px',
                },
                catalog_product_card__info_wrap: {
                    display: 'block',
                },
                catalog_product_card__info_button: {
                    width: '100%',
                    display: 'block',
                },
                catalog_product_card__stats_buttons: {
                    top: '0',
                    width: '34%',
                },
                catalog_product_card__stat_block: {
                    width: '50px',
                    marginLeft: '10px',
                },
                catalog_product_card__stat_block_image: {
                    left: '1%',
                    top: '8%',
                    transform:
                        'scale(0.33) translateX(-42px) translateY(-71px)',
                },
            })
        }
    }, [viewType])

    useEffect(() => {
        if (desktopViewType === 'single') {
            setStylesForDesktopViewType({
                catalog_product_card: {
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                },
                catalog_product_card__smalltext: {
                    width: '275.19px',
                },
                catalog_product_card__title: {
                    width: '275.19px',
                },
                catalog_product_card__desktop_view_type__single__second: {
                    width: '300px',
                },
                line: {
                    display: 'none',
                },
                catalog_product_card__desktop_view_type__single__third: {
                    width: '276px',
                },
                catalog_product_card__selector_block: {
                    marginTop: '36px',
                },
                popup_ul: {
                    flexDirection: 'column',
                },
            })
        }

        if (desktopViewType === 'several') {
            setStylesForDesktopViewType({
                catalog_product_card: {
                    width: '30.5%',
                },
                catalog_product_card__smalltext: {
                    width: 'auto',
                },
                catalog_product_card__title: {
                    width: 'auto',
                },
                catalog_product_card__desktop_view_type__single__second: {
                    width: 'auto',
                },
                line: {
                    display: 'block',
                },
                catalog_product_card__desktop_view_type__single__third: {
                    width: 'auto',
                },
                catalog_product_card__selector_block: {
                    marginTop: '10px',
                },
                popup_ul: {
                    flexDirection: 'row',
                },
            })
        }
    }, [desktopViewType])

    return (
        <div className="app">
            <MobileBurgerMenu
                mobilemenuCatalogs={mobilemenuCatalogs}
                mobileMenu={mobileMenu}
                regions={regions}
            />
            <Header
                banner={banner}
                phoneCommon={phoneCommon}
                worktimeHead={worktimeHead}
            />
            {!breakpoint1023 && (
                <MainNavigation headerCatalog={headerCatalog} />
            )}
            {breakpoint768 && (
                <CatalogPresetFilter
                    onClose={() => setPresetFilterIsOpen(false)}
                    className={presetFilterIsOpen ? '' : 'closed'}
                    dataList={presetFilterData}
                    title={presetFilterTitle}
                />
            )}
            {breakpoint768 && (
                <CatalogCompositionFilter
                    title={'Каталог'}
                    className={compositionPresetFilterIsOpen ? '' : 'closed'}
                    onClose={() => setCompositionPresetFilterIsOpen(false)}
                    dataList={initialCompositionFilterData}
                />
            )}
            {/* {breakpoint720 && (
                <img className="mobile-menu__mini-banner" src={banner}></img>
            )} */}
            {breakpoint1023 && (
                <div className={common_styles.container}>
                    <CatalogLeftMobile
                        onCompositionClick={
                            onCloseCompositionFilterClickHandler
                        }
                        onMainFilterClick={onMainMobileFilterClickHandler}
                        onClick={onPresetFilterClickHandler}
                        updateViewType={setViewType}
                        viewType={viewType}
                    />
                </div>
            )}
            {breakpoint1023 && (
                <div className={common_styles.container}>
                    <CatalogProductList
                        firstLoadProducts={products}
                        stylesForViewType={stylesForViewType}
                        viewType={viewType}
                    />
                </div>
            )}
            {breakpoint1023 && (
                <div style={{ marginTop: '5px' }}>
                    <LoadMoreButton firstText={'Показать еще +20'} />
                </div>
            )}
            {breakpoint1023 && (
                <div className={common_styles.mobile_catalog_pagination}>
                    <CatalogPagination />
                </div>
            )}
            {breakpoint1023 && (
                <div className={common_styles.mobile_help_pickup}>
                    <CatalogHelpPickUp />
                </div>
            )}
            {breakpoint1023 && (
                <>
                    <div className={common_styles.catalog_mobile_reviews_title}>
                        Отзывы на кровати
                    </div>
                    <div className={common_styles.catalog_mobile_reviews}>
                        <CatalogMobileReview />
                        <CatalogMobileReview />
                        <CatalogMobileReview />
                    </div>
                </>
            )}
            <Subscribe />
            <Footer />
        </div>
    )
}

export default CatalogPage

export const getServerSideProps = async (ctx) => {
    const URLS = [
        'https://www.anatomiyasna.ru/api/menu/mobileCatalogMenu/',
        'https://anatomiyasna.ru/api/menu/mobileMenu/',
        'https://anatomiyasna.ru/api/region/getRegions/',
        'https://anatomiyasna.ru/api/parameters/saleBanner/',
        'https://www.anatomiyasna.ru/api/menu/headerCatalog/',
        'https://www.anatomiyasna.ru/api/parameters/all/',
        `https://www.anatomiyasna.ru/api/filter/filterModel/?slug=${ctx.params.catalog}`,
        `https://anatomiyasna.ru/api/filter/filtredProducts/?slug=${ctx.params.catalog}`,
    ]

    let response = {}
    // let products = {}

    console.log('ctx.params.catalog', ctx.params.catalog)

    await Promise.all(
        URLS.map((url) => fetch(url).then((resp) => resp.json()))
    ).then((res) => {
        response = res
    })

    const mobilemenuCatalogs = response[0]
    const mobileMenu = response[1]
    const regions = response[2]
    const banner = response[3]

    const phoneCommon = response[5].phone_common
    const worktimeHead = response[5].worktime_head
    const assurances = response[5].main_page_warranty_text

    const headerCatalog = response[4]
    const filterAPIData = response[6]
    const filterProductsIds = response[7]

    // const filterAPIData = response[0]
    // const filterProductsIds = response[1]

    // console.log('filterProductsIds', filterProductsIds)

    let ids = []
    for (let i = 0; i < 21; i++) {
        if (i !== filterProductsIds.length - 1) {
            ids.push(`products[]=${filterProductsIds[i]}&`)
        } else {
            ids.push(`products[]=${filterProductsIds[i]}`)
        }
    }
    const productSubUrl = ids.join('')

    const productsURLReq = await fetch(
        `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
    )
    const products = await productsURLReq.json()

    return {
        props: {
            mobilemenuCatalogs,
            mobileMenu,
            regions,
            banner,
            phoneCommon,
            worktimeHead,
            headerCatalog,
            assurances,
            filterAPIData,
            catalogSlug: ctx.params.catalog,
            subCatalogSlug: null,
            products,
        },
    }
}
