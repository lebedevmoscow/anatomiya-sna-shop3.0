import { Swiper, SwiperSlide } from 'swiper/react'
import URL from './../../components/URLComponent'
import Link from 'next/link'

import styles from './../../styles/components/Mobile/CatalogLeftMobile.module.sass'

const CatalogLeftMobile = ({
    onClick,
    onCompositionClick,
    onMainFilterClick,
    updateViewType,
    viewType,
    headers,
}) => {
    return (
        <div className={styles.catalog_left_mobile}>
            <div className={styles.catalog_left_mobile__url}>
                <URL />
            </div>
            <div className={styles.catalog_left_mobile__title}>
                {headers.heading}
            </div>
            <div className={styles.catalog_left_mobile__filters}>
                <Swiper
                    className={
                        styles.catalog_left_mobile__filters_list +
                        ' ' +
                        'catalog_left_mobile__filters_list'
                    }
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    autoHeight={true}
                >
                    <SwiperSlide>
                        <div
                            onClick={onCompositionClick}
                            className={`${styles.catalog_left_mobile__filters_list_item} ${styles.catalog_left_mobile__filters_list_item__more}`}
                        >
                            <span></span>
                        </div>
                    </SwiperSlide>

                    {headers.categoriesMenu.map((cat, index) => {
                        const sub = cat.childes.concat()

                        return (
                            <SwiperSlide>
                                <div
                                    className={
                                        styles.catalog_left_mobile__filters_list_item
                                    }
                                    onClick={() => onClick(cat.title, sub)}
                                >
                                    {cat.title}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <Swiper
                    className={
                        styles.catalog_left_mobile__popular_filters_list +
                        ' ' +
                        'catalog_left_mobile__filters_list'
                    }
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    spaceBetween={5}
                    autoHeight={false}
                >
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item__first_child
                            }
                        >
                            Популярное:
                        </div>
                    </SwiperSlide>
                    {headers.popularLinks.length > 0 &&
                        headers.popularLinks.map((link, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href={link.link}>
                                        <a>
                                            <div
                                                className={
                                                    styles.catalog_left_mobile__popular_filters_list_item
                                                }
                                            >
                                                {link.title}
                                            </div>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    {headers.childes.length > 0 &&
                        headers.childes.map((link, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href={link.link}>
                                        <a>
                                            <div
                                                className={
                                                    styles.catalog_left_mobile__popular_filters_list_item
                                                }
                                            >
                                                {link.title}
                                            </div>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                </Swiper>

                <Swiper
                    className={
                        styles.catalog_left_mobile__main_filters +
                        ' ' +
                        'catalog_left_mobile__filters_list'
                    }
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    autoHeight={false}
                >
                    <SwiperSlide>
                        <div
                            onClick={onMainFilterClick}
                            className={styles.catalog_left_mobile__main_filter}
                        >
                            <div className={styles.filter_mobile_btn__icon}>
                                <span
                                    className={styles.filter_mobile_btn__icon_1}
                                ></span>
                                <span
                                    className={styles.filter_mobile_btn__icon_2}
                                ></span>
                                <span
                                    className={styles.filter_mobile_btn__icon_3}
                                ></span>
                            </div>
                            <div className={styles.filter_mobile_text}>
                                Фильтр
                            </div>
                            <div className={styles.filter_mobile_count}>1</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={styles.catalog_left_mobile__price_order}
                        >
                            По возрастанию цены
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__view_type_block
                            }
                            onClick={() => {
                                if (viewType === 'single') {
                                    updateViewType('several')
                                }
                                if (viewType === 'several') {
                                    updateViewType('single')
                                }
                            }}
                        >
                            <div
                                className={
                                    styles.catalog_left_mobile__view_type_block__by_two_card
                                }
                            >
                                {viewType === 'several' && (
                                    <>
                                        <span
                                            className={styles.big_square}
                                        ></span>
                                        <span className={styles.line}></span>
                                    </>
                                )}
                                {viewType === 'single' && (
                                    <>
                                        <div className={styles.first_line}>
                                            <span
                                                className={styles.square}
                                            ></span>
                                            <span
                                                className={styles.square}
                                            ></span>
                                        </div>
                                        <div className={styles.second_line}>
                                            <span
                                                className={styles.square}
                                            ></span>
                                            <span
                                                className={styles.square}
                                            ></span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div
                                className={
                                    styles.catalog_left_mobile__view_type_block__by_one_card
                                }
                            ></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CatalogLeftMobile
