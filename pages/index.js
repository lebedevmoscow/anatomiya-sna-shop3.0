// React components
import ArticleListDesktop from './../components/Article/ArticleListDesktop'

const App = ({ articles }) => {
    return (
        <div className="app">
            <ArticleListDesktop articles={articles} />
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
            return fetch(url).then((resp) => resp.json())
        })
    ).then((res) => {
        Response = res
    })

    // Assignment of values
    const articles = Response[0]

    return {
        props: {
            articles,
        },
    }
}
