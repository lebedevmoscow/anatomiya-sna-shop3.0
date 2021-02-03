import common_styles from './../../styles/common.module.sass'
import ProductListForDesktop from './../Products/IndexPageProductCard'
import CatalogList from './../Catalog/CatalogList'
import ArticleListDesktop from './../Article/ArticleListDesktop'
import ReviewList from './../Reviews/ReviewList'
import SalesList from './../Sales/SalesList'
import AboutMattrasses from './../AboutMattrasses'
import Assuracnes from './../Assurances'
import Subscribe from './../Subscribe'
import MobileFooter from './../Mobile/MobieFooter'
import Footer from './../Footer/FooterDesktop'

const IndexLazyLoad = ({
    products,
    mobileCatalogs,
    articles,
    reviews,
    sales,
}) => {
    return (
        <>
            {/* <div
                className={`${common_styles.container} ${common_styles.products_check}`}
            >
                <div className={common_styles.index_page_products}>
                    <div className={common_styles.index_page_products__title}>
                        <ProductListForDesktop products={products} />
                    </div>
                </div>
            </div> */}
            <CatalogList mobileCatalogs={mobileCatalogs} />
            <ArticleListDesktop articles={articles} />
            <ReviewList reviews={reviews} />
            <SalesList sales={sales} />
            <AboutMattrasses />
            <Assuracnes />
            <Subscribe />
            <MobileFooter />
            <Footer />
        </>
    )
}

export default IndexLazyLoad
