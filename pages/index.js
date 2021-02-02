import { useState, useEffect } from 'react'
import useMedia from './../hooks/useMedia'
import LazyLoad from 'react-lazyload'
// Experemental
// import dynamic from 'next/dynamic'

// Styles
import common_styles from './../styles/common.module.sass'

// React components
import Header from './../components/Header'
import MainNavigation from './../components/Nav/MainNavigation'
import ArticleListDesktop from './../components/Article/ArticleListDesktop'
import Footer from './../components/Footer/FooterDesktop'
import MobileBurgerMenu from './../components/Mobile/MobileBurgerMenu'
import MobileMenuCatalog from './../components/Mobile/MobileMenuCatalog'
import HelpPickUp from './../components/Banners/HelpPickUp'

// Experemental
// const MobileMenuCatalogNoSSR = dynamic(
//     () => import('./../components/Mobile/MobileMenuCatalog'),
//     { ssr: false }
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
}) => {
    // Breakpoints
    const breakpoint1023 = useMedia(1023)
    const breakpoint768 = useMedia(768)
    return (
        <div className="app">
            {breakpoint768 && (
                <MobileBurgerMenu
                    mobilemenuCatalogs={mobilemenuCatalogs}
                    mobileMenu={mobileMenu}
                    regions={regions}
                />
            )}
            {!breakpoint1023 && (
                <Header
                    worktimeHead={worktimeHead}
                    banner={null}
                    phoneCommon={phoneCommon}
                />
            )}
            {!breakpoint1023 && (
                <MainNavigation headerCatalog={headerCatalog} />
            )}

            {/* <MobileMenuCatalogNoSSR
                banner={null}
                mobilemenuCatalogs={mobilemenuCatalogs}
            /> */}
            {breakpoint1023 && (
                <MobileMenuCatalog
                    banner={null}
                    mobilemenuCatalogs={mobilemenuCatalogs}
                />
            )}
            <div className={common_styles.container}>
                <div className={common_styles.index_page_filters}>
                    <HelpPickUp />
                </div>
            </div>
            <ArticleListDesktop articles={articles} />
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
    ]

    // Parallel requests
    let Response = {}
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

    // Assignment of values
    const articles = Response[0]
    const headerCatalog = Response[2]
    const banner = Response[3]
    const worktimeHead = Response[4].worktime_head
    const mobilemenuCatalogs = Response[5]
    const mobileMenu = Response[6]
    const regions = Response[7]
    const filterAPIData = Response[8]

    const phoneCommon = '8 (495) 287-87-95'
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
        },
    }
}
