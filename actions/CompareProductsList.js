// Constants
export const COMPARE_PRODUCT_LIST_ADD_TO_LIST_LOADING =
    'COMPARE_PRODUCT_LIST_ADD_TO_LIST_LOADING'

export const COMPARE_PRODUCT_LIST_ADD_TO_LIST_SUCCESS =
    'COMPARE_PRODUCT_LIST_ADD_TO_LIST_SUCCESS'

export const COMPARE_PRODUCT_LIST_ADD_TO_LIST_ERROR =
    'COMPARE_PRODUCT_LIST_ADD_TO_LIST_ERROR'

export const COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_LOADING =
    'COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_LOADING'

export const COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS =
    'COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS'

export const COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_ERROR =
    'COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_ERROR'

export const COMPARE_PRODUCT_LIST_INIT = 'COMPARE_PRODUCT_LIST_INIT'

// Methods add current product to compare list
export const AddProductToCompareList = (
    ProductId,
    ProductImage,
    ProductCatalogType,
    ProductBrandTitle,
    ProductSeriesTitle,
    ProductTitle,
    ProductSizeSlug,
    ProductSizeTitle,
    ProductPrice,
    ProductPriceId
) => async (dispatch) => {
    dispatch({ type: COMPARE_PRODUCT_LIST_ADD_TO_LIST_LOADING })

    try {
        const req = await fetch(
            `https://www.anatomiyasna.ru/api/customer/addCompareProduct/?product=${ProductId}&productPrice=${ProductPriceId}`
        )

        if (req.status !== 500 && req.status !== 404) {
            const CompareProductsFromLocalStorage = localStorage.getItem(
                'CompareProducts'
            )

            if (!CompareProductsFromLocalStorage) {
                localStorage.setItem(
                    'CompareProducts',
                    JSON.stringify([
                        {
                            ProductId,
                            ProductImage,
                            ProductCatalogType,
                            ProductBrandTitle,
                            ProductSeriesTitle,
                            ProductTitle,
                            ProductSizeSlug,
                            ProductSizeTitle,
                            ProductPrice,
                            ProductPriceId,
                        },
                    ])
                )
            } else {
                const clone = JSON.parse(CompareProductsFromLocalStorage)
                clone.push({
                    ProductId,
                    ProductImage,
                    ProductCatalogType,
                    ProductBrandTitle,
                    ProductSeriesTitle,
                    ProductTitle,
                    ProductSizeSlug,
                    ProductSizeTitle,
                    ProductPrice,
                    ProductPriceId,
                })
                localStorage.setItem('CompareProducts', JSON.stringify(clone))
            }
            dispatch({
                type: COMPARE_PRODUCT_LIST_ADD_TO_LIST_SUCCESS,
                payload: {
                    ProductId,
                    ProductImage,
                    ProductCatalogType,
                    ProductBrandTitle,
                    ProductSeriesTitle,
                    ProductTitle,
                    ProductSizeSlug,
                    ProductSizeTitle,
                    ProductPrice,
                    ProductPriceId,
                },
            })
        }
    } catch (e) {
        console.log(
            `Cannot add product ${
                ProductBrandTitle + ProductSeriesTitle + ProductTitle
            } [ID: ${ProductId}] to Compare List. Error: `,
            e.message || e
        )
        dispatch({
            type: COMPARE_PRODUCT_LIST_ADD_TO_LIST_ERROR,
            payload: e.message || e,
        })
    }
}

// Methods removes current product from compare list
export const RemoveProductFromCompareList = (
    ProductId,
    ProductImage,
    ProductCatalogType,
    ProductBrandTitle,
    ProductSeriesTitle,
    ProductTitle,
    ProductSizeSlug,
    ProductSizeTitle,
    ProductPrice,
    ProductPriceId
) => async (dispatch) => {
    dispatch({ type: COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_LOADING })

    try {
        const req = await fetch(
            `https://www.anatomiyasna.ru/api/customer/removeFavouriteProduct/?product=${ProductId}&productPrice=${ProductPriceId}`
        )

        if (req.status !== 500 && req.status !== 404) {
            const CompareProductsFromLocalStorage = localStorage.getItem(
                'CompareProducts'
            )

            if (CompareProductsFromLocalStorage) {
                const clone = JSON.parse(CompareProductsFromLocalStorage)
                const util = []
                clone.map((item) => {
                    if (item.ProductId !== ProductId) util.push(item)
                })
                localStorage.setItem('CompareProducts', JSON.stringify(util))

                dispatch({
                    type: COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS,
                    payload: {
                        ProductId,
                        ProductImage,
                        ProductCatalogType,
                        ProductBrandTitle,
                        ProductSeriesTitle,
                        ProductTitle,
                        ProductSizeSlug,
                        ProductSizeTitle,
                        ProductPrice,
                        ProductPriceId,
                    },
                })
            }
        }
    } catch (e) {
        console.log(
            `Cannot remove product ${
                ProductBrandTitle + ProductSeriesTitle + ProductTitle
            } [ID: ${ProductId}] from Compare List. Error: `,
            e.message || e
        )
        dispatch({
            type: COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_ERROR,
            payload: e.message || e,
        })
    }
}

// Init methods, start get all data from localstorage via reducer
export const init = () => (dispatch) => {
    dispatch({ type: COMPARE_PRODUCT_LIST_INIT })
}
