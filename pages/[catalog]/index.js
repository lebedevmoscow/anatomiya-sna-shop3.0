import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
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
// import CatalogHelpPickUp from '../../components/Catalog/CatalogHelpPickUp'
// import CatalogMobileReview from './../../components/Reviews/CatalogMobileReviews'
import CatalogLeftFilter from '../../components/Filters/CatalogLeftFilter'
import CatalogRight from '../../components/Catalog/CatalogRight'
import CatalogMainFilter from './../../components/Filters/CatalogMobileMainFilter'
import CatalogMobileProductList from './../../components/Mobile/CatalogMobileProductList'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
    CATALOG_SET_PRELOAD_GET_PARAMS,
    CATALOG_SET_FILTERS,
    CATALOG_SET_COLORS,
} from './../../catalog_actions_rebuild/catalog'

// Utils
import { unparseGetParamsToFilter } from './../../utils/unparseGetParamsToFilter'

import common_styles from './../../styles/pages/catalog.module.sass'
// import MobileFooter from '../../components/Mobile/MobieFooter'
// import SwiperAssurenaces from './../../components/Mobile/MobileAssurances'
// Experemental
// const CatalogProductList = dynamic(
//     () => import('./../../components/Products/CatalogProductList'),
//     { ssr: false }
// )

// const CatalogMobileProductList = dynamic(
//     () => import('./../../components/Mobile/CatalogMobileProductList'),
//     { ssr: true }
// )

// const CatalogMobileProductList = dynamic(
//     () => import('./../../components/Mobile/CatalogMobileProductList'),
//     { ssr: true }
// )

const CatalogMobileReview = dynamic(
    () => import('./../../components/Reviews/CatalogMobileReviews'),
    { ssr: false }
)

const SwiperAssurenaces = dynamic(
    () => import('./../../components/Mobile/MobileAssurances'),
    { ssr: true }
)

const MobileFooter = dynamic(
    () => import('../../components/Mobile/MobieFooter'),
    { ssr: true }
)

const CatalogHelpPickUp = dynamic(
    () => import('../../components/Catalog/CatalogHelpPickUp'),
    { ssr: true }
)

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
    IsMobile,
    filterProductsIds,
    headers,
    articles,
    params,
    filterObject,
}) => {
    const dispatch = useDispatch()
    const renderHistory = () => {
        let h = ''
        for (let i = 0; i < filterObject.properties.length; i++) {
            h =
                h +
                filterObject.properties[i].property +
                `=` +
                filterObject.properties[i].value +
                '&'
        }
        for (let i = 0; i < filterObject.colors.length; i++) {
            h = h + 'filter[colors][]=' + filterObject.colors[i] + '&'
        }
        return h
    }
    const h = encodeURI(renderHistory())
    console.log('h', h)

    console.log('filterObject', filterObject)

    dispatch({
        type: CATALOG_SET_FILTERS,
        payload: unparseGetParamsToFilter(filterAPIData, filterObject).filters,
    })

    dispatch({ type: CATALOG_SET_COLORS, payload: filterObject.colors })

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

    dispatch({ type: CATALOG_SET_PRELOAD_GET_PARAMS, payload: filterObject })

    // State
    const [stylesForViewType, setStylesForViewType] = useState({})
    const [stylesForDesktopViewType, setStylesForDesktopViewType] = useState({})
    const [desktopViewType, setDesktopViewType] = useState('several')
    const [viewType, setViewType] = useState('single')
    const [mainMobileFilterIsOpen, setMainMobileFilterIsOpen] = useState(false)
    const [presetFilterIsOpen, setPresetFilterIsOpen] = useState(false)
    const [presetFilterData, setPresetFilterData] = useState([])
    const [presetFilterTitle, setPresetFilterTitle] = useState('')
    const [
        compositionPresetFilterIsOpen,
        setCompositionPresetFilterIsOpen,
    ] = useState(false)

    const [lastClick, setLastClick] = useState(null)

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

    return (
        <div className="app">
            {IsMobile && (
                <MobileBurgerMenu
                    mobilemenuCatalogs={mobilemenuCatalogs}
                    mobileMenu={mobileMenu}
                    regions={regions}
                />
            )}
            {!IsMobile && (
                <Header
                    banner={null}
                    phoneCommon={phoneCommon}
                    worktimeHead={worktimeHead}
                />
            )}
            {!IsMobile && <MainNavigation headerCatalog={headerCatalog} />}
            {IsMobile && breakpoint768 && (
                <CatalogPresetFilter
                    onClose={() => setPresetFilterIsOpen(false)}
                    className={presetFilterIsOpen ? '' : 'closed'}
                    dataList={presetFilterData}
                    title={presetFilterTitle}
                />
            )}
            {IsMobile && breakpoint768 && (
                <CatalogCompositionFilter
                    headers={headers}
                    filterAPIData={filterAPIData}
                    title={'Каталог'}
                    className={compositionPresetFilterIsOpen ? '' : 'closed'}
                    onClose={() => setCompositionPresetFilterIsOpen(false)}
                    dataList={initialCompositionFilterData}
                />
            )}
            {IsMobile && (
                <CatalogMainFilter
                    className={mainMobileFilterIsOpen ? '' : 'closed'}
                    filterAPIData={filterAPIData}
                    onClose={() => {
                        setMainMobileFilterIsOpen(false)
                    }}
                    viewType={viewType}
                    setLastClick={setLastClick}
                    title={'Подбор по параметрам'}
                    filterProductsIds={filterProductsIds}
                    catalogSlug={catalogSlug}
                    subCatalogSlug={subCatalogSlug}
                />
            )}
            {/* {breakpoint720 && (
                <img className="mobile-menu__mini-banner" src={banner}></img>
            )} */}
            {IsMobile && (
                <div className={common_styles.container}>
                    <CatalogLeftMobile
                        headers={headers}
                        onCompositionClick={
                            onCloseCompositionFilterClickHandler
                        }
                        onMainFilterClick={onMainMobileFilterClickHandler}
                        onClick={onPresetFilterClickHandler}
                        updateViewType={setViewType}
                        viewType={viewType}
                        catalogSlug={catalogSlug}
                        subCatalogSlug={subCatalogSlug}
                        oldMin={filterAPIData.price.min}
                        oldMax={filterAPIData.price.max}
                    />
                </div>
            )}
            {IsMobile && products && (
                <div className={common_styles.container}>
                    <CatalogMobileProductList
                        catalogSlug={catalogSlug}
                        subCatalogSlug={subCatalogSlug}
                        firstLoadProducts={products}
                        stylesForViewType={stylesForViewType}
                        viewType={viewType}
                        filterAPIData={filterAPIData}
                        filterProductsIds={filterProductsIds}
                        newProducts={true}
                        lastClick={lastClick}
                        setLastClick={setLastClick}
                        IsMobile={IsMobile}
                        articles={articles}
                        headers={headers}
                    />
                </div>
            )}

            {IsMobile && breakpoint1023 && (
                <div className={common_styles.mobile_help_pickup}>
                    <CatalogHelpPickUp />
                </div>
            )}
            {IsMobile && (
                <div className={common_styles.container}>
                    <div className={common_styles.catalog_mobile_reviews_title}>
                        Отзывы на кровати
                    </div>

                    <div className={common_styles.catalog_mobile_reviews}>
                        {headers.productResponses.map((rev, index) => {
                            return <CatalogMobileReview rev={rev} key={index} />
                        })}
                    </div>
                </div>
            )}
            {!IsMobile && !breakpoint1023 && (
                <div className={common_styles.container}>
                    <div className={common_styles.catalog}>
                        <CatalogLeftFilter
                            filterAPIData={filterAPIData}
                            oldMin={filterAPIData.price.min}
                            oldMax={filterAPIData.price.max}
                            filterProductsIds={filterProductsIds}
                            catalogSlug={catalogSlug}
                            subCatalogSlug={subCatalogSlug}
                            history={h}
                        />
                        <CatalogRight
                            headers={headers}
                            oldMin={filterAPIData.price.min}
                            oldMax={filterAPIData.price.max}
                            firstLoadProducts={products}
                            updateViewType={setDesktopViewType}
                            desktopViewType={desktopViewType}
                            stylesForDesktopViewType={stylesForDesktopViewType}
                            catalogSlug={catalogSlug}
                            subCatalogSlug={subCatalogSlug}
                            filterProductsIds={filterProductsIds}
                        />
                    </div>
                </div>
            )}
            {IsMobile && (
                <div style={{ marginTop: '25px' }}>
                    <SwiperAssurenaces />
                </div>
            )}
            {!IsMobile && <Subscribe />}
            {IsMobile && <MobileFooter />}
            {!IsMobile && <Footer />}
        </div>
    )
}

export default CatalogPage

export const getServerSideProps = async (ctx) => {
    const userAgent = ctx.req.headers['user-agent']

    if (ctx.params.catalog === 'asset-manifest.json') {
        return {
            notFound: true,
        }
    }

    // Unparse get params
    let params = ''
    let count = 0
    let length = Object.keys(ctx.params).length

    let priceMin = null
    let priceMax = null
    let oldMin = null
    let oldMax = null

    const propregex = /filter\[properties\]\[\d{1,10}\]\[\]/g
    const properties = []
    const colors = []

    for (let key in ctx.query) {
        console.log('key', key)
        if (count === 0) {
            params = params + `${key}=${ctx.query[key]}`
        } else {
            params = params + `&${key}=${ctx.query[key]}`
        }

        if (key === 'filter[price][selectedMin]') {
            priceMin = ctx.query[key]
        }

        if (key === 'filter[price][selectedMax]') {
            priceMax = ctx.query[key]
        }

        if (key === 'filter[price][oldMin]') {
            oldMin = ctx.query[key]
        }

        if (key === 'filter[price][oldMax]') {
            oldMax = ctx.query[key]
        }

        if (key.match(propregex)) {
            properties.push({
                property: key,
                value: ctx.query[key],
            })
        }

        if (key === 'filter[colors][]') {
            colors.push(ctx.query[key])
        }

        count++
    }
    params = encodeURI(params.replace(' ', ''))

    const filterObject = {
        price: {
            min: priceMin,
            max: priceMax,
            oldMin,
            oldMax,
        },
        properties,
        colors,
    }

    const URLS = [
        'https://www.anatomiyasna.ru/api/menu/mobileCatalogMenu/',
        'https://anatomiyasna.ru/api/menu/mobileMenu/',
        'https://anatomiyasna.ru/api/region/getRegions/',
        'https://anatomiyasna.ru/api/parameters/saleBanner/',
        'https://www.anatomiyasna.ru/api/menu/headerCatalog/',
        'https://www.anatomiyasna.ru/api/parameters/all/',
        `https://www.anatomiyasna.ru/api/filter/filterModel/?slug=${ctx.params.catalog}`,
        `https://anatomiyasna.ru/api/filter/filtredProducts/?slug=${ctx.params.catalog}&${params}`,
        `https://anatomiyasna.ru/api/pageData/getPageData/?slug=${ctx.params.catalog}`,
    ]

    const regex = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/

    let IsMobile = null

    if (userAgent.match(regex)) {
        IsMobile = true
    } else {
        IsMobile = false
    }

    let response = {}
    // let products = {}

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
    const headers = response[8]

    // const filterAPIData = null
    // const filterProductsIds = [21]

    let ids = []

    const index = IsMobile ? 20 : 21

    for (let i = 0; i < index; i++) {
        if (i !== filterProductsIds.length - 1) {
            ids.push(`products[]=${filterProductsIds[i]}&`)
        } else {
            break
        }
    }
    const productSubUrl = ids.join('')

    const productsURLReq = await fetch(
        `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
    )

    // const articlesUrl = encodeURI(
    //     `https://www.anatomiyasna.ru/api/journal/article-list?group=${headers.catalogTitle}&limit=3&page=1`
    // )
    // const articlesReq = await fetch(articlesUrl)
    // const articles = await articlesReq.json()

    const articles = []

    const products = await productsURLReq.json()

    return {
        props: {
            headers,
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
            IsMobile,
            filterProductsIds,
            articles,
            params,
            filterObject,
        },
    }
}
