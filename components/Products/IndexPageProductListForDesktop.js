import React from 'react'
import { v4 as uuidv4 } from 'uuid'

// import ProductCard from './../ProductCard'
import dynamic from 'next/dynamic'

const EqualHeight = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeight),
    { ssr: false }
)

const ProductListForDesktop = ({ products }) => {
    const render = () => {
        let renderedList = []

        let tempArr = []
        let temp = 0

        products.ShortProductModels.map((product) => {
            temp++
            tempArr
                .push
                // <ProductCard
                //     cn={'product-list-desktop-item'}
                //     key={product.Id}
                //     Id={product.Id}
                //     Title={product.Title}
                //     Slug={product.Slug}
                //     CatalogType={product.CatalogType}
                //     MainImage={
                //         'https://www.anatomiyasna.ru' +
                //         product.MainImage.FilePath
                //     }
                //     BrandTitle={product.BrandTitle}
                //     SeriesTitle={product.SeriesTitle}
                //     Price={4600}
                //     Prices={product.Prices}
                //     DefaultSize={{
                //         SizeSlug: product.Prices[0].SizeSlug,
                //         SizeTitle: product.Prices[0].SizeTitle,
                //     }}
                //     listSales={product.ProductLabels}
                // />
                ()
            if (temp % 5 === 0) {
                renderedList.push(
                    <EqualHeight key={uuidv4()}>{tempArr}</EqualHeight>
                )
                tempArr = []
                temp = 0
            }
        })

        return renderedList
    }

    return (
        <div className="product-list-wrapper">
            <div className="product-list-desktop">{render()}</div>
        </div>
    )
}

export default ProductListForDesktop
