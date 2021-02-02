import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { SlideDown } from 'react-slidedown'
import useMediaQuery from './../../hooks/useMedia'
import Review from './ReviewCard'
import LoadMoreButton from './../Button/LoadMoreButton'

import common_styles from './../../styles/common.module.sass'
import list_styles from './../../styles/components/Reviews/ReviewList.module.sass'

const EqualHeight = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeight),
    { ssr: false }
)

const IndexPageReviews = ({ reviews }) => {
    // Breakpoints
    const breakpoint450 = useMediaQuery(450)
    const breakpoint300 = useMediaQuery(300)
    const breakpoint720 = useMediaQuery(720)
    const breakpoint1023 = useMediaQuery(1023)

    const [isLoaded, setIsLoaded] = useState(false)
    const [list, setList] = useState(null)

    useEffect(() => {
        if (!breakpoint300 && breakpoint450) {
            const review = reviews[0]
            setList(<Review review={review} />)
        }
        if (!breakpoint1023) {
            const reviewList = []
            for (let i = 0; i < 4; i++) {
                reviewList.push(<Review review={reviews[i]} />)
            }

            setList(<>{reviewList}</>)
        }
        if (breakpoint1023 && !breakpoint720) {
            const reviewList = []
            for (let i = 0; i < 3; i++) {
                reviewList.push(<Review review={reviews[i]} />)
            }
            setList(<>{reviewList}</>)
        }

        if (breakpoint720 && !breakpoint450) {
            const reviewList = []
            for (let i = 0; i < 2; i++) {
                reviewList.push(<Review review={reviews[i]} />)
            }
            setList(<>{reviewList}</>)
        }
    }, [breakpoint300, breakpoint450, breakpoint720, breakpoint1023])

    return (
        <div className={common_styles.container}>
            <div className={list_styles.reviews}>
                <div className={list_styles.review__section_name}>
                    Отзывы о Анатомии сна
                </div>
                <div className={list_styles.reviews__list}>
                    <EqualHeight>{list}</EqualHeight>
                    <SlideDown
                        className={list_styles.reviews__slidedown}
                        closed={!isLoaded}
                    ></SlideDown>
                </div>
                <div className={list_styles.reviews__btn}>
                    <LoadMoreButton firstText={'Перейти в раздел'} />
                </div>
            </div>
        </div>
    )
}

export default IndexPageReviews
