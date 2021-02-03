import { useState, useEffect } from 'react'
import useMedia from './../hooks/useMedia'
import LazyLoad from 'react-lazyload'
// Experemental
import dynamic from 'next/dynamic'

// Styles
import common_styles from './../styles/common.module.sass'

// React components
import Header from './../components/Header'
import MainNavigation from './../components/Nav/MainNavigation'
import ArticleListDesktop from './../components/Article/ArticleListDesktop'
import Footer from './../components/Footer/FooterDesktop'
import MobileBurgerMenu from './../components/Mobile/MobileBurgerMenu'
import MobileMenuCatalog from './../components/Mobile/MobileMenuCatalog'
import MattrassFilter from './../components/Filters/MattrassFilter'
import HelpPickUp from './../components/Banners/HelpPickUp'
// import ProductListForDesktop from './../components/Products/IndexPageProductListForDesktop'
import CatalogList from './../components/Catalog/CatalogList'
import ReviewList from './../components/Reviews/ReviewList'
import SalesList from './../components/Sales/SalesList'
import AboutMattrasses from './../components/AboutMattrasses'
import Assuracnes from './../components/Assurances'
import Subscribe from './../components/Subscribe'
import MobileFooter from './../components/Mobile/MobieFooter'

// Experemental
// const MobileMenuCatalogNoSSR = dynamic(
//     () => import('./../components/Mobile/MobileMenuCatalog'),
//     { ssr: false }
// )
// const MattrassFilterNoSSR = dynamic(
//     () => import('./../components/NOSSR/MattrassFilter'),
//     { ssr: false }
// )

// const SalesList = dynamic(() => import('./../components/Sales/SalesList'), {
//     ssr: true,
// })

// const ArticleListDesktop = dynamic(
//     () => import('./../components/Article/ArticleListDesktop'),
//     {
//         loading: () => <></>,
//     }
// )

// const ReviewList = dynamic(() => import('./../components/Reviews/ReviewList'), {
//     loading: () => <></>,
// })

// const HelpPickUp = dynamic(() => import('./../components/Banners/HelpPickUp'), {
//     loading: () => <></>,
//     ssr: false,
// })

// const MattrassFilter = dynamic(
//     () => import('./../components/Filters/MattrassFilter'),
//     {
//         loading: () => <></>,
//         ssr: false,
//     }
// )

const App = ({
    articles,
    banner,
    worktimeHead,
    phoneCommon,
    headerCatalog,
    mobilemenuCatalogs,
    mobileMenu,
    regions,
    filterAPIData,
    filterProductsCount,
    products,
    mobileCatalogs,
    reviews,
    sales,
    mattrassesText,
    assurances,
}) => {
    // Breakpoints
    const breakpoint1023 = useMedia(1023)
    const breakpoint600 = useMedia(600)

    return (
        <div className="app">
            <MobileBurgerMenu
                mobilemenuCatalogs={mobilemenuCatalogs}
                mobileMenu={mobileMenu}
                regions={regions}
            />
            <Header
                worktimeHead={worktimeHead}
                banner={null}
                phoneCommon={phoneCommon}
            />
            {!breakpoint1023 && (
                <MainNavigation headerCatalog={headerCatalog} />
            )}
            {/* <MobileMenuCatalogNoSSR
                banner={null}
                mobilemenuCatalogs={mobilemenuCatalogs}
            /> */}
            <MobileMenuCatalog
                banner={null}
                mobilemenuCatalogs={mobilemenuCatalogs}
            />

            {!breakpoint600 && (
                <div className={common_styles.container}>
                    <div className={common_styles.index_page_filters}>
                        <HelpPickUp />
                        {!breakpoint1023 && (
                            <MattrassFilter
                                filterAPIData={filterAPIData}
                                filterProductsCount={filterProductsCount}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* <div className={common_styles.container}>
                <div className="index_page_products">
                    <div className="index_page_products__title">
                        <ProductListForDesktop products={products} />
                    </div>
                </div>
            </div> */}
            <CatalogList mobileCatalogs={mobileCatalogs} />
            <ArticleListDesktop articles={articles} />
            <ReviewList reviews={reviews} />
            <SalesList sales={sales} />
            <AboutMattrasses mattrassesText={mattrassesText} />
            <Assuracnes assurances={assurances} />
            <Subscribe />
            <MobileFooter />
            {!breakpoint1023 && <Footer />}
        </div>
    )
}

export default App

export const getStaticProps = async (ctx) => {
    // Fetching Data
    const URLS = [
        'https://www.anatomiyasna.ru/api/journal/article-list?mode=new&page=1&limit=6',
        'https://www.anatomiyasna.ru/api/mainPage/sales/',
        'https://www.anatomiyasna.ru/api/menu/headerCatalog/',
        'https://anatomiyasna.ru/api/parameters/saleBanner/',
        'https://www.anatomiyasna.ru/api/parameters/all/',
        'https://www.anatomiyasna.ru/api/menu/mobileCatalogMenu/',
        'https://anatomiyasna.ru/api/menu/mobileMenu/',
        'https://anatomiyasna.ru/api/region/getRegions/',
        'https://www.anatomiyasna.ru/api/filter/filterModel/?slug=matrasy',
        'https://anatomiyasna.ru/api/filter/filtredProducts/?slug=matrasy',
        'https://anatomiyasna.ru/api/productService/getPopularProductModels/?firstPrice=true',
        'https://www.anatomiyasna.ru/api/mainPage/catalogs/',
        'https://www.anatomiyasna.ru/api/mainPage/shopResponses/',
        'https://www.anatomiyasna.ru/api/sale/sale-list/',
        'https://anatomiyasna.ru/api/mainPage/text/',
    ]

    // Parallel requests
    let Response = {}
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

    // Assignment of values
    const articles = Response[0]
    const headerCatalog = Response[2]
    const banner = Response[3]
    const worktimeHead = Response[4].worktime_head
    const mobilemenuCatalogs = Response[5]
    const mobileMenu = Response[6]
    const regions = Response[7]
    const filterAPIData = Response[8]
    const filterProductsIds = Response[9]
    const products = Response[10]
    const mobileCatalogs = Response[11]
    const reviews = Response[12]
    const sales = Response[13]
    const mattrassesText = Response[14]
    const assurances = Response[4].main_page_warranty_text

    const phoneCommon = '8 (495) 287-87-95'
    const filterProductsCount = filterProductsIds.length
    return {
        props: {
            articles,
            banner,
            worktimeHead,
            phoneCommon,
            headerCatalog,
            mobilemenuCatalogs,
            mobileMenu,
            regions,
            filterAPIData,
            filterProductsCount,
            products,
            mobileCatalogs,
            reviews,
            sales,
            mattrassesText,
            assurances,
        },
    }
}
