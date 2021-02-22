import Image from 'next/image'
import { useEffect, useRef } from 'react'

import CalendarImage from './../../assets/date.png'
import StarImage from './../../assets/star.png'

import { LightgalleryProvider } from 'react-lightgallery'
import { LightgalleryItem } from 'react-lightgallery'

import moment from 'moment'

import styles from './../../styles/components/Reviews/CatalogMobileReviws.module.sass'

const CatalogMobileReviews = ({ rev }) => {
    const videoRef = useRef(null)
    const renderStars = () => {
        const d = []
        for (let i = 0; i < rev.response.ratio; i++) {
            d.push(<Image src={StarImage} width={16.83} height={16} />)
        }
        return d
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.innerHTML = rev.response.videoCode
        }
    }, [videoRef.current])

    const PriceDiff = Math.floor(
        parseInt(rev.priceBasic, 10) - parseInt(rev.priceDiscount, 10)
    )

    return (
        <div className={styles.catalog_mobile_review_section}>
            <div className={styles.catalog_mobile_review_section__smalltext}>
                Отзыв на {rev.catalogTitle}
            </div>
            <div className={styles.catalog_mobile_review_section__title}>
                {rev.productTitle}
            </div>
            <div className={styles.catalog_mobile_review_section__image}>
                {/* <Image
                    layout={'fill'}
                    src={'https://anatomiyasna.ru' + rev.productImage}
                /> */}
                {/* //{' '} */}
                <img
                    style={{ height: '100%', width: '100%' }}
                    src={'https://anatomiyasna.ru' + rev.productImage}
                ></img>
            </div>
            <div className={styles.catalog_mobile_review_section__price}>
                {PriceDiff !== 0 && (
                    <div
                        style={{ position: 'absolute', top: '-10px' }}
                        className={styles.product_card__price_discount}
                    >
                        <div className={styles.product_card__price_prev}>
                            <span>
                                {Math.floor(rev.priceBasic)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                                <div
                                    className={styles.product_card__price_diff}
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
                {parseInt(rev.priceDiscount, 10)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                Руб.
            </div>
            <div className={styles.catalog_mobile_review_section__price_credit}>
                В рассрочку от {Math.ceil(parseInt(rev.priceDiscount, 10) / 6)}{' '}
                руб/мес
            </div>
            <div className={styles.catalog_mobile_review_section__author}>
                <div
                    className={styles.catalog_mobile_review_section__authorname}
                >
                    {rev.response.author}
                </div>
                <div className={styles.catalog_mobile_review_section__date}>
                    <img className="image" src={CalendarImage}></img>
                    <span>
                        {moment(rev.response.createdAt.date).format(
                            'DD/MM/YYYY'
                        )}
                    </span>
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_from
                    }
                >
                    Отзыв предоставлен компанией {rev.response.responseSource}
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__rate}>
                <div className={styles.catalog_mobile_review_section__stars}>
                    {renderStars()}
                </div>
                <div className={styles.catalog_mobile_review_section__opinion}>
                    {rev.response.recommended ? (
                        <span
                            className={
                                styles.catalog_mobile_review__recommended
                            }
                        >
                            Рекомендую
                        </span>
                    ) : (
                        <span
                            className={
                                styles.catalog_mobile_review__not_recommended
                            }
                        >
                            Не рекомендую
                        </span>
                    )}
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__period_of_use
                    }
                >
                    Период использования: {rev.response.useTime}
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__pros}>
                <div className={styles.catalog_mobile_review_section__subtitle}>
                    Преимщуества:
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_text
                    }
                >
                    {rev.response.advantages}
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__cons}>
                <div className={styles.catalog_mobile_review_section__subtitle}>
                    Недостатки:
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_text
                    }
                >
                    {rev.response.disadvantages}
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__comment}>
                <div className={styles.catalog_mobile_review_section__subtitle}>
                    Комментарий:
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_text
                    }
                >
                    {rev.response.text}
                </div>
            </div>
            {rev.response.videoCode && (
                <div
                    ref={videoRef}
                    className={styles.catalog_review_card__video}
                ></div>
            )}
            {rev.response.productResponseImages.length > 0 && (
                <div className={styles.catalog_review_card__gallery}>
                    <LightgalleryProvider galleryClassName="review__gallery">
                        {rev.response.productResponseImages.map((el, index) => {
                            return (
                                <LightgalleryItem
                                    group="review"
                                    src={'https://anatomiyasna.ru' + el.image}
                                    key={index}
                                >
                                    <div
                                        className={
                                            styles.catalog_review_card__gallery__item
                                        }
                                    >
                                        <Image
                                            src={
                                                'https://anatomiyasna.ru' +
                                                el.image
                                            }
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </LightgalleryItem>
                            )
                        })}
                    </LightgalleryProvider>
                </div>
            )}
            <span className={styles.catalog_mobile_review_section__line}></span>
        </div>
    )
}

export default CatalogMobileReviews
