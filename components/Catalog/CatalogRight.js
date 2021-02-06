import React from 'react'

import CatalogTopFilter from './../Filters/CatalogTopFilter'
import CatalogProductListForDesktop from './../Products/CatalogProductList'
import LoadMoreButton from './../Button/LoadMoreButton'
import CatalogPagination from './../Pagination/CatalogPagination'
import CatalogHelpPickUp from './../Catalog/CatalogHelpPickUp'
import CatalogReviewList from './../Reviews/CatalogDesktopReviewList'
import IndexPageAssurances from './../Assurances'

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
            <div className={styles.catalog_right__load_more_button}>
                <LoadMoreButton firstText={'Показать еще +21'} />
            </div>
            <CatalogPagination />
            <CatalogHelpPickUp />
            <CatalogReviewList />
            <IndexPageAssurances catalog={true} container={false} />
        </div>
    )
}

export default CatalogRight
