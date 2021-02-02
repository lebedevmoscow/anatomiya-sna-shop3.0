import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import common_styles from './../../styles/common.module.sass'
import catalog_styles from './../../styles/components/Catalog/CatalogList.module.sass'

// EXPEREMENTAL
import useMediaQuery from './../../hooks/useMedia'

import CatalogCard from './../Catalog/CatalogCard'

const MobileCatalogSwiper = ({ mobileCatalogs }) => {
    // Breakpoints
    const breakpoint1023 = useMediaQuery(1023)
    const breakpoint450 = useMediaQuery(450)

    const display = breakpoint1023 && !breakpoint450 ? 'block' : 'none'
    const [list, setList] = useState(null)

    useEffect(() => {
        setList(
            <Swiper
                className={`${catalog_styles.swiper} catalog-swiper`}
                freeMode={true}
                freeModeMomentum={true}
                resistance={true}
                resistanceRatio={0}
                slidesPerView={'auto'}
                spaceBetween={10}
                autoHeight={true}
            >
                {mobileCatalogs.map((catalog, id) => {
                    return (
                        <SwiperSlide key={id}>
                            <CatalogCard
                                title={catalog.catalogTitle}
                                img={
                                    'https://www.anatomiyasna.ru/uploads/images/catalog_images/krovatnye-boksy-anatomiya-sna.png'
                                }
                                slug={catalog.catalogSlug}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }, [])

    return (
        <div style={{ display }} className={common_styles.container}>
            <div className={catalog_styles.goods_catalog}>
                <div className={catalog_styles.goods_catalog__section_name}>
                    Каталог товаров
                </div>
                <div className={catalog_styles.goods_catalog__list}>{list}</div>
            </div>
        </div>
    )
}

export default MobileCatalogSwiper
