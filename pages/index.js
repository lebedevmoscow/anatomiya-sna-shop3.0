import useMedia from './../hooks/useMedia'

// React components
import Header from './../components/Header'
import MainNavigation from './../components/Nav/MainNavigation'
import ArticleListDesktop from './../components/Article/ArticleListDesktop'
import Footer from './../components/Footer/FooterDesktop'

const App = ({
    articles,
    banner,
    worktimeHead,
    phoneCommon,
    IsMobile,
    headerCatalog,
}) => {
    // Breakpoints
    const breakpoint1023 = useMedia(1023)

    return (
        <div className="app">
            {!breakpoint1023 && (
                <Header
                    worktimeHead={worktimeHead}
                    banner={banner}
                    phoneCommon={phoneCommon}
                />
            )}
            {!breakpoint1023 && (
                <MainNavigation headerCatalog={headerCatalog} />
            )}
            <ArticleListDesktop articles={articles} />
            <Footer />
        </div>
    )
}

export default App

export const getServerSideProps = async (ctx) => {
    const UserAgent = ctx.req.headers['user-agent']
    const UserAgent_MobileRegularExpression = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i

    const IsMobile = UserAgent.match(UserAgent_MobileRegularExpression)
        ? true
        : false

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

    const phoneCommon = '8 (495) 287-87-95'
    return {
        props: {
            IsMobile,
            articles,
            banner,
            worktimeHead,
            phoneCommon,
            headerCatalog,
        },
    }
}
