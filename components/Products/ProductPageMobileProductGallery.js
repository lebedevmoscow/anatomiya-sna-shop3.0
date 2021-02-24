import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    Navigation as SwiperNavigationCore,
    Scrollbar,
} from 'swiper'

import styles from './../../styles/components/Products/ProductPageMobileProductGallery.module.sass'

SwiperCore.use([SwiperNavigationCore, Scrollbar])

const ProductPageMobileProductGallery = ({ images }) => {
    return (
        <div className={styles.swiper_wrapper}>
            <Swiper
                draggable={true}
                className={styles.swiper_mobile_gallery}
                navigation={{
                    nextEl: '#swiper_mobile_productpage__next',
                    prevEl: '#swiper_mobile_productpage__prev',
                }}
                scrollbar={{
                    el: '#product_page_mobile_gallery_swiper_scrollbar_element',
                    hide: false,
                }}
            >
                <div
                    id="swiper_mobile_productpage__prev"
                    className={styles.product_page_mobile_gallery_prev}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </div>
                <div
                    id="swiper_mobile_productpage__next"
                    className={styles.product_page_mobile_gallery_next}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </div>
                {images.map((image, id) => {
                    return (
                        <SwiperSlide className={styles.swiper_slide} key={id}>
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
            <div
                className={
                    styles.product_page_mobile_gallery_swiper_scrollbar_element
                }
                id="product_page_mobile_gallery_swiper_scrollbar_element"
            ></div>
        </div>
    )
}

export default ProductPageMobileProductGallery
