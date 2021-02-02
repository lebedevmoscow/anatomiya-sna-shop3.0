import { useState, useEffect } from 'react'

// EXPEREMENTAL
import useMediaQuery from './../../hooks/useMedia'

import CatalogCard from './CatalogCard'
import LoadMoreButton from './../Button/LoadMoreButton'
import SlideDown from 'react-slidedown'

import common_styles from './../../styles/common.module.sass'
import catalog_styles from './../../styles/components/Catalog/CatalogList.module.sass'

const CatalogList = ({ mobileCatalogs }) => {
    const breakpoint1023 = useMediaQuery(1023)
    const display = !breakpoint1023 ? 'block' : 'none'

    const [isEnd, setIsEnd] = useState(false)
    const [index, setIndex] = useState(12)
    const [to, setTo] = useState(2)
    const [loadMore, setLoadMore] = useState(0)

    const [tmp, setTmp] = useState(0)
    const [list, setList] = useState([])
    const [animatedList, setAnimatedList] = useState([])
    const [closedList, setClosedList] = useState([
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
    ])

    useEffect(() => {
        if (loadMore !== 0) {
            const lst = []

            for (let i = index; i < 12 * to; i++) {
                if (!mobileCatalogs[i]) {
                    lst.push(null)
                    setIsEnd(true)
                } else lst.push(mobileCatalogs[i])
            }

            const clone = list.concat()
            clone.push({ id: to, data: lst, isClosed: true })

            setIndex((prev) => {
                return prev + 12
            })
            setTo((prev) => ++prev)
            setList(clone)

            const global = animatedList.concat()
            let lst1 = []

            let temp = 0
            for (let i = 0; i < clone.length; i++) {
                for (let j = 0; j < clone[i].data.length; j++) {
                    if (!clone[i].data[j]) lst1.push(null)
                    else
                        lst1.push(
                            <CatalogCard
                                title={clone[i].data[j].catalogTitle}
                                slug={clone[i].data[j].catalogSlug}
                                img={clone[i].data[j].catalogImage}
                                count={clone[i].data[j].productCount}
                            />
                        )
                }
                global[temp] = (
                    <SlideDown
                        className={catalog_styles.goods_catalog__slidedown}
                        closed={closedList[temp]}
                    >
                        {lst1}
                    </SlideDown>
                )
                // global[temp] = lst1
                temp++
                lst1 = []
            }
            setAnimatedList(global)
        }
    }, [loadMore])

    const renderList = () => {
        const lst = []
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].data.length; j++) {
                if (!list[i].data[j]) lst.push(null)
                else
                    lst.push(
                        <CatalogCard
                            title={list[i].data[j].catalogTitle}
                            slug={list[i].data[j].catalogSlug}
                            img={list[i].data[j].catalogImage}
                            count={list[i].data[j].productCount}
                        />
                    )
            }
        }
        // return lst
        setAnimatedList(lst)
    }

    return (
        <div style={{ display }} className={common_styles.container}>
            <div className={catalog_styles.goods_catalog}>
                <div className={catalog_styles.goods_catalog__section_name}>
                    Каталог товаров
                </div>
                <div className={catalog_styles.goods_catalog__list}>
                    {mobileCatalogs.map((good, index) => {
                        if (index > 11) return
                        return (
                            <CatalogCard
                                key={index}
                                title={good.catalogTitle}
                                slug={good.catalogSlug}
                                img={good.catalogImage}
                                count={good.productCount}
                            />
                        )
                    })}
                    {/* {renderList()} */}

                    {animatedList &&
                        animatedList.map((item, id) => {
                            return item
                        })}
                </div>
                {!isEnd && (
                    <div
                        onClick={() => {
                            setLoadMore((p) => ++p)
                            closedList[tmp] = false
                            setTmp((p) => ++p)
                        }}
                        className={catalog_styles.goods_catalog__btn}
                    >
                        <LoadMoreButton firstText={'Показать еще +'} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CatalogList
