import React from 'react'

import CatalogTopFilter from './../Filters/CatalogTopFilter'
import CatalogProductListForDesktop from './../Products/CatalogProductList'
// import LoadMoreButton from './../Buttons/LoadMoreButton'
// import CatalogPagination from './../CatalogPagination'
// import CatalogHelpPickUp from './../CatalogHelpPickUp'
// import CatalogReviewList from './../CatalogReviewList'
// import IndexPageAssurances from './../../../components/IndexPageAssurances'

import styles from './../../styles/components/Catalog/CatalogRight.module.sass'

const CatalogRight = ({
    updateViewType,
    stylesForDesktopViewType,
    desktopViewType,
    firstLoadProducts,
    catalogSlug,
    oldMin,
    oldMax,
}) => {
    return (
        <div className={styles.catalog_right}>
            <CatalogTopFilter
                updateViewType={updateViewType}
                desktopViewType={desktopViewType}
            />
            <CatalogProductListForDesktop
                catalogSlug={catalogSlug}
                desktopViewType={desktopViewType}
                stylesForDesktopViewType={stylesForDesktopViewType}
                firstLoadProducts={firstLoadProducts}
                oldMin={oldMin}
                oldMax={oldMax}
            />
            {/* <div className="catalog-right__load-more-button">
                <LoadMoreButton />
            </div>
            <CatalogPagination />
            <CatalogHelpPickUp />
            <CatalogReviewList />
            <IndexPageAssurances catalog={true} container={false} /> */}
        </div>
    )
}

export default CatalogRight
