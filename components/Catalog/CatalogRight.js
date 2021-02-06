import React from 'react'

import CatalogTopFilter from './../Filters/CatalogTopFilter'
// import CatalogProductListForDesktop from './../CatalogProductListForDesktop'
// import LoadMoreButton from './../Buttons/LoadMoreButton'
// import CatalogPagination from './../CatalogPagination'
// import CatalogHelpPickUp from './../CatalogHelpPickUp'
// import CatalogReviewList from './../CatalogReviewList'
// import IndexPageAssurances from './../../../components/IndexPageAssurances'

const CatalogRight = ({
    updateViewType,
    stylesForDesktopViewType,
    desktopViewType,
    firstLoadProducts,
}) => {
    return (
        <div className="catalog-right">
            <CatalogTopFilter
                updateViewType={updateViewType}
                desktopViewType={desktopViewType}
            />
            {/* <CatalogProductListForDesktop
                desktopViewType={desktopViewType}
                stylesForDesktopViewType={stylesForDesktopViewType}
                firstLoadProducts={firstLoadProducts}
            />
            <div className="catalog-right__load-more-button">
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