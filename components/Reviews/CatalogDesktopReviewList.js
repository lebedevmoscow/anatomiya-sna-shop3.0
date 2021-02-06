import { useEffect, useState } from 'react'

import CatalogReviewCard from './CatalogDesktopReviewCard'

import styles from './../../styles/components/Reviews/CatalogDesktopReviewList.module.sass'

const CatalogReviewList = () => {
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setReviewList([
                <CatalogReviewCard key={1} />,
                <CatalogReviewCard key={2} />,
                <CatalogReviewCard key={3} />,
            ])
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
