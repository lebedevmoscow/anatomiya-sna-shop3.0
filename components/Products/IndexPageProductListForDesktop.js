// React Components
import ProductCard from './IndexPageProductCard'

// import dynamic from 'next/dynamic'
// import { v4 as uuidv4 } from 'uuid'
// import Popups from './../Popups/PopupsOnProductCard'
import { GetPopupsList } from './../../utils/GetPopupsList'

import list_styles from './../../styles/components/Products/IndexPageProductListForDesktop.module.sass'

// const EqualHeight = dynamic(
//     () => import('react-equal-height').then((mod) => mod.EqualHeight),
//     { ssr: false }
// )

const ProductListForDesktop = ({ products }) => {
    const render = () => {
        let renderedList = []

        let tempArr = []
        let temp = 0

        products.ShortProductModels.map((product) => {
            const ListSalesList = GetPopupsList(
                products.SaleLabels,
                product.Prices[0].SaleIds
            )

            temp++
            tempArr.push(
                <ProductCard
                    key={product.Id}
                    Id={product.Id}
                    Title={product.Title}
                    Slug={product.Slug}
                    CatalogType={product.CatalogType}
                    MainImage={product.MainImage.FilePath}
                    BrandTitle={product.BrandTitle}
                    SeriesTitle={product.SeriesTitle}
                    Price={4600}
                    Prices={product.Prices}
                    DefaultSize={{
                        SizeSlug: product.Prices[0].SizeSlug,
                        SizeTitle: product.Prices[0].SizeTitle,
                    }}
                    ListSalesList={ListSalesList}
                />
            )
            // if (temp % 5 === 0) {
            //     renderedList.push(
            //         <EqualHeight key={uuidv4()}>{tempArr}</EqualHeight>
            //     )
            //     tempArr = []
            //     temp = 0
            // }
        })

        // return renderedList
        return tempArr
    }

    return (
        <div className={list_styles.product_list_wrapper}>
            <div className={list_styles.product_list_section_name}>
                ИНТЕРНЕТ-МАГАЗИН МАТРАСОВ АНАТОМИЯ СНА
            </div>
            <div className={list_styles.product_list_desktop}>{render()}</div>
        </div>
    )
}

export default ProductListForDesktop
