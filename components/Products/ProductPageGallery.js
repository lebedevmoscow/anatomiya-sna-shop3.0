import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation as SwiperNavigationCore, Thumbs } from 'swiper'
import styles from './../../styles/components/Products/ProductPageGallery.module.sass'

SwiperCore.use([SwiperNavigationCore, Thumbs])

const ProductPageGallery = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <>
            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                draggable={false}
                simulateTouch={false}
                className={styles.product_page__swiper_main_carousel}
                navigation={{
                    nextEl: '#productpage__productgallery_maingallery__next',
                    prevEl: '#productpage__productgallery_maingallery__prev',
                }}
            >
                <div
                    id="productpage__productgallery_maingallery__prev"
                    className={styles.product_page__swiper_main_carousel__prev}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </div>
                <div
                    id="productpage__productgallery_maingallery__next"
                    className={styles.product_page__swiper_main_carousel__next}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </div>
                {images.map((image, id) => {
                    return (
                        <SwiperSlide key={id}>
                            <img src={image} alt="image"></img>
                            {/* <Image
                                src={image}
                                alt="Image"
                                width={743}
                                height={464}
                            /> */}
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
                slidesPerView={'auto'}
                spaceBetween={5}
                className={styles.product_page__swiper_submain_carousel}
                navigation={{
                    nextEl: '#productpage__productgallery_submaingallery__next',
                    prevEl: '#productpage__productgallery_submaingallery__prev',
                }}
            >
                <div
                    id="productpage__productgallery_submaingallery__next"
                    className={
                        styles.product_page__swiper_submain_carousel__next
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </div>
                <div
                    id="productpage__productgallery_submaingallery__prev"
                    className={
                        styles.product_page__swiper_submain_carousel__prev
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </div>
                {images.map((image, id) => {
                    return (
                        <SwiperSlide key={id}>
                            <img src={image} alt="image"></img>
                            {/* <Image
                                src={image}
                                alt={'Image'}
                                width={120.39}
                                height={76}
                            /> */}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default ProductPageGallery
