import { Swiper, SwiperSlide } from 'swiper/react'
import dynamic from 'next/dynamic'
import ArticleCardCatalog from './../Article/ArticleCardCatalog'
import styles from './../../styles/components/Article/ArticleCatalogSwiperList.module.sass'

const EqualHeight = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeight),
    { ssr: false }
)

const ArticleCatalogSwiperList = ({ list }) => {
    return (
        <EqualHeight>
            <Swiper
                className={styles.article_catalog_swiper}
                freeMode={true}
                freeModeMomentum={true}
                resistance={true}
                resistanceRatio={0}
                slidesPerView={'auto'}
                spaceBetween={10}
                autoHeight={false}
            >
                {list &&
                    list.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ArticleCardCatalog mobile={true} data={item} />
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
        </EqualHeight>

        // null
    )
}

export default ArticleCatalogSwiperList
