import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { LightgalleryProvider } from 'react-lightgallery'
import { LightgalleryItem } from 'react-lightgallery'

import moment from 'moment'

import StarImage from './../../assets/star.png'
import CalendarImage from './../../assets/date.png'

import styles from './../../styles/components/Reviews/CatalogDesktopReviewCard.module.sass'

const CatalogReviewCard = ({ review }) => {
    const renderStars = () => {
        const stars = []
        for (let i = 0; i < review.response.ratio; i++) {
            stars.push(<Image src={StarImage} width={18} height={16} />)
        }
        return stars
    }

    const videoRef = useRef(null)
    const imagesRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.innerHTML = review.response.videoCode
        }
    }, [videoRef.current])

    const PriceDiff = Math.floor(
        parseInt(review.priceBasic, 10) - parseInt(review.priceDiscount, 10)
    )

    return (
        <div className={styles.catalog_review_card}>
            <div className={styles.catalog_review_card__left}>
                <div className={styles.catalog_review_card__product_smalltext}>
                    Отзыв на {review.catalogTitle}
                </div>
                <div className={styles.catalog_review_card__product_title}>
                    {review.productTitle}
                </div>
                <div
                    style={PriceDiff !== 0 ? { marginBottom: '30px' } : {}}
                    className={styles.catalog_review_card__image}
                >
                    <img
                        src={'https://anatomiyasna.ru' + review.productImage}
                    ></img>
                </div>
                <div className={styles.catalog_review_card__price}>
                    {PriceDiff !== 0 && (
                        <div
                            style={{ position: 'absolute', top: '-10px' }}
                            className={styles.product_card__price_discount}
                        >
                            <div className={styles.product_card__price_prev}>
                                <span>
                                    {Math.floor(review.priceBasic)
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                                    <div
                                        className={
                                            styles.product_card__price_diff
                                        }
                                    >
                                        -
                                        {PriceDiff.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ' '
                                        )}
                                    </div>
                                </span>
                            </div>
                        </div>
                    )}
                    {parseInt(review.priceDiscount, 10)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                    Руб.
                </div>
                <div className={styles.catalog_review_card__credit}>
                    В рассрочку от{' '}
                    {Math.ceil(parseInt(review.priceDiscount, 10) / 6)} руб/мес
                </div>
            </div>
            <div className={styles.catalog_review_card__right}>
                <div className={styles.catalog_review_card__author_block}>
                    <div
                        className={
                            styles.catalog_review_card__author_block_left
                        }
                    >
                        <div
                            className={styles.catalog_review_card__author_name}
                        >
                            {review.response.author}
                        </div>
                        <div
                            className={styles.catalog_review_card__author_stars}
                        >
                            {renderStars()}
                        </div>
                        <div
                            className={
                                styles.catalog_review_card__author_home_town
                            }
                        >
                            {review.response.city}
                        </div>
                    </div>
                    <div
                        className={
                            styles.catalog_review_card__author_block_right
                        }
                    >
                        <img src={CalendarImage}></img>
                        <span>
                            {moment(review.response.createdAt.date).format(
                                'DD/MM/YYYY'
                            )}
                        </span>
                    </div>
                </div>
                <div className={styles.catalog_review_card__text}>
                    {review.response.text}
                </div>
                {review.response.videoCode && (
                    <div
                        ref={videoRef}
                        className={styles.catalog_review_card__video}
                    ></div>
                )}
                {review.response.productResponseImages.length > 0 && (
                    <div
                        ref={imagesRef}
                        className={styles.catalog_review_card__gallery}
                    >
                        <LightgalleryProvider galleryClassName="review__gallery">
                            {review.response.productResponseImages.map(
                                (el, index) => {
                                    return (
                                        <LightgalleryItem
                                            group="review"
                                            src={
                                                'https://anatomiyasna.ru' +
                                                el.image
                                            }
                                            key={index}
                                        >
                                            <Image
                                                src={
                                                    'https://anatomiyasna.ru' +
                                                    el.image
                                                }
                                                width={40}
                                                height={40}
                                            />
                                        </LightgalleryItem>
                                    )
                                }
                            )}
                        </LightgalleryProvider>
                    </div>
                )}
                <div className={styles.catalog_reivew_card__period_of_use}>
                    Период использования: <span>{review.response.useTime}</span>
                </div>
            </div>
        </div>
    )
}

export default CatalogReviewCard
