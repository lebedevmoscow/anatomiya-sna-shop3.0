import { useState, useEffect } from 'react'
import { SlideDown } from 'react-slidedown'
import useMediaQuery from './../../hooks/useMedia'
import Sale from './SaleCard'
import LoadMoreButton from './../Button/LoadMoreButton'

import list_styles from './../../styles/components/Sales/SalesList.module.sass'

const IndexPageSales = ({ sales }) => {
    const breakpoint450 = useMediaQuery(450)

    const [loadedMore, setLoadedMore] = useState(false)
    const [list, setList] = useState([])

    const onLoadMoreClickHandler = () => {
        setLoadedMore((p) => !p)
    }

    useEffect(() => {
        if (loadedMore) {
            if (!breakpoint450) {
                const list = []
                sales.map((sale, index) => {
                    if (index < 3) return
                    else {
                        list.push(<Sale sale={sale} key={index} />)
                        return null
                    }
                })
                setList(list)
            } else if (breakpoint450) {
                const list = []
                sales.map((sale, index) => {
                    if (index === 0) return
                    else {
                        list.push(<Sale sale={sale} key={index} />)
                        return null
                    }
                })
                setList(list)
            }
        }
    }, [loadedMore])

    return (
        <div className={list_styles.container}>
            <div className={list_styles.sales}>
                <div className={list_styles.sales__section_name}>Акции</div>
                <div className={list_styles.sales__list}>
                    {breakpoint450 &&
                        sales.map((sale, index) => {
                            if (index > 0) return
                            return <Sale sale={sale} key={index} />
                        })}
                    {!breakpoint450 &&
                        sales.map((sale, index) => {
                            if (index > 2) return
                            return <Sale sale={sale} key={index} />
                        })}
                    <SlideDown
                        className={list_styles.sales__slidedown}
                        closed={!loadedMore}
                    >
                        {list}
                    </SlideDown>
                </div>
                <div
                    className={list_styles.sales__btn}
                    onClick={onLoadMoreClickHandler}
                >
                    <LoadMoreButton
                        ready={loadedMore}
                        firstText={'Показать еще +'}
                        secondText={'Перейти в раздел'}
                        href={!loadedMore ? null : '/sales'}
                    />
                </div>
            </div>
        </div>
    )
    return null
}

export default IndexPageSales
