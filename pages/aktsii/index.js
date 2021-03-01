import { useState } from 'react'

// React components
import Header from './../../components/Header'
import MainNavigation from './../../components/Nav/MainNavigation'
import URLComponent from './../../components/URLComponent'
import BigSaleCard from './../../components/Sales/BigSaleCard'
import SaleCard from './../../components/Sales/SaleCard'
import Pagination from './../../components/Pagination/CatalogPagination'
import ShowMoreButton from './../../components/Button/LoadMoreButton'

// Styles
import styles from './../../styles/pages/aktsii.module.sass'
import LoadMoreButton from './../../components/Button/LoadMoreButton'

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
    const [additionalList, setAdditionalList] = useState([])

    const reqNewArticles = async (url) => {
        const req = await fetch(url)
        const res = await req.json()
        return res
    }

    const onPageClickHandler = async (p) => {
        setAdditionalList([])
        const newList = await reqNewArticles(
            `https://www.anatomiyasna.ru/api/sale/sale-list/?page=${p}&limit=14`
        )
        setList(
            newList.map((sale, index) => {
                if (index === 0) return <BigSaleCard sale={sale} />
                else return <SaleCard sale={sale} />
            })
        )
        setPage(p)
    }

    const onShowMoreButtonClickHandler = async () => {
        const clone = additionalList.concat()
        const newList = await reqNewArticles(
            `https://www.anatomiyasna.ru/api/sale/sale-list/?page=${
                page + 1
            }&limit=14`
        )

        for (let i = 0; i < newList.length; i++) {
            if (i === 0) {
                clone.push(<BigSaleCard sale={newList[i]} />)
            } else {
                clone.push(<SaleCard sale={newList[i]} />)
            }
        }
        setAdditionalList(clone)
        setPage((p) => ++p)
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
                            { url: '/', title: 'Главная' },
                            { url: '/', title: 'Акции' },
                        ]}
                    />
                </div>
                <div className={styles.title}>АКЦИИ АНАТОМИИ СНА</div>
                <div className={styles.themes}>
                    <div className={styles.themes__title}>Темы</div>
                    <div className={styles.themes__list}>
                        <div className={styles.themes__item}>Матрасы</div>
                        <div className={styles.themes__item}>Кровати</div>
                        <div className={styles.themes__item}>Основания</div>
                        <div className={styles.themes__item}>Чехлы</div>
                        <div className={styles.themes__item}>Подушки</div>
                        <div className={styles.themes__item}>Одеяла</div>
                        <div className={styles.themes__item}>Скидки</div>
                        <div className={styles.themes__item}>Кэшбэки</div>
                        <div className={styles.themes__item}>Подарки</div>
                    </div>
                </div>
                <div className={styles.saleslist}>
                    {
                        <>
                            {list}
                            {additionalList}
                        </>
                    }
                </div>
                <div
                    onClick={() => onShowMoreButtonClickHandler()}
                    className={styles.button_wrapper}
                >
                    <LoadMoreButton firstText={'Показать еще +14'} />
                </div>
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
