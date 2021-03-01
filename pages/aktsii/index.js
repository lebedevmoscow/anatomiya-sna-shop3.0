import { useState } from 'react'

// React components
import Header from './../../components/Header'
import MainNavigation from './../../components/Nav/MainNavigation'
import URLComponent from './../../components/URLComponent'
import BigSaleCard from './../../components/Sales/BigSaleCard'
import SaleCard from './../../components/Sales/SaleCard'
import Pagination from './../../components/Pagination/CatalogPagination'

// Styles
import styles from './../../styles/pages/aktsii.module.sass'

const SalePage = ({
    banner = null,
    worktimeHead,
    phoneCommon,
    headerCatalog,
    salesFirst,
}) => {
    const [page, setPage] = useState(1)
    const [list, setList] = useState(
        salesFirst.map((sale, index) => {
            if (index === 0) return <BigSaleCard key={index} sale={sale} />
            else return <SaleCard key={index} sale={sale} />
        })
    )

    const reqNewArticles = async (url) => {
        const req = await fetch(url)
        const res = await req.json()
        return res
    }

    const onPageClickHandler = async (p) => {
        const newList = await reqNewArticles(
            `https://www.anatomiyasna.ru/api/sale/sale-list/?page=${p}&limit=14`
        )
        console.log('newList', newList)
        setList(
            newList.map((sale, index) => {
                if (index === 0) return <BigSaleCard sale={sale} />
                else return <SaleCard sale={sale} />
            })
        )
        setPage(p)
    }

    return (
        <div className={styles.sale_page}>
            <Header
                phoneCommon={phoneCommon}
                worktimeHead={worktimeHead}
                banner={banner}
            />
            <MainNavigation headerCatalog={headerCatalog} />
            <div className={styles.container}>
                <div className={styles.url_wrapper}>
                    <URLComponent
                        breadcrumbs={[
                            { url: '/', title: 'крошка1' },
                            { url: '/', title: 'крошка2' },
                            { url: '/', title: 'крошка3' },
                        ]}
                    />
                </div>
                <div className={styles.saleslist}>{list}</div>
                <Pagination
                    onGoForwardButtonClickHandler={() => {}}
                    onGoBackdButtonClickHandler={() => {}}
                    onPageClickHandler={onPageClickHandler}
                    amount={30}
                    current={page}
                />
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const phoneCommon = '8 (495) 287-87-95'

    let Response = {}
    const URLS = [
        'https://www.anatomiyasna.ru/api/parameters/all/',
        'https://www.anatomiyasna.ru/api/menu/headerCatalog/',
        'https://www.anatomiyasna.ru/api/sale/sale-list/?page=1&limit=14',
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

    console.log('salesFirst', salesFirst)

    return {
        props: {
            phoneCommon,
            worktimeHead,
            headerCatalog,
            salesFirst,
        },
    }
}

export default SalePage
