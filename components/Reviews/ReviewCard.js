import React from 'react'
import dynamic from 'next/dynamic'

import StarImage from './../../assets/star.png'
import DateImage from './../../assets/date.png'

import review_styles from './../../styles/components/Reviews/ReviewCard.module.sass'

const EqualHeightElement = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeightElement),
    { ssr: false }
)

const Review = ({ review }) => {
    let starList = []
    for (let i = 0; i < review.ratio; i++) {
        starList.push(<img key={i} src={StarImage}></img>)
    }

    return (
        <div className={review_styles.review}>
            <div className={review_styles.review__inframe}>
                <div className={review_styles.review__stars}>{starList}</div>
                <EqualHeightElement name="Review">
                    <div className={review_styles.review__text}>
                        {review.text}
                    </div>
                </EqualHeightElement>
            </div>
            <div className={review_styles.review__author}>
                <div className={review_styles.review__author_name}>
                    {review.author}
                </div>
                <div className={review_styles.review__author_date}>
                    <img
                        className={review_styles.review__calendar_image}
                        src={DateImage}
                    ></img>
                    <span>{review.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Review
