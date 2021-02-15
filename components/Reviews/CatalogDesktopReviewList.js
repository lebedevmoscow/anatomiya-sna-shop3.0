import { useEffect, useState } from 'react'

import CatalogReviewCard from './CatalogDesktopReviewCard'

import styles from './../../styles/components/Reviews/CatalogDesktopReviewList.module.sass'

const CatalogReviewList = ({ headers }) => {
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const d = []
            headers.productResponses.map((review, index) => {
                d.push(<CatalogReviewCard review={review} key={index} />)
            })
            setReviewList(d)
        }, 0)
    }, [])

    return (
        <>
            <div className={styles.catalog_review_title}>Отзывы на кровати</div>
            <div className={styles.catalog_review_list}>{reviewList}</div>
        </>
    )
}

export default CatalogReviewList
