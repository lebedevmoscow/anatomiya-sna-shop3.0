// Constants
export const FAVORITES_PRODUCT_LIST_ADD_TO_LIST_LOADING =
    'FAVORITES_PRODUCT_LIST_ADD_TO_LIST_LOADING'

export const FAVORITES_PRODUCT_LIST_ADD_TO_LIST_SUCCESS =
    'FAVORITES_PRODUCT_LIST_ADD_TO_LIST_SUCCESS'

export const FAVORITES_PRODUCT_LIST_ADD_TO_LIST_ERROR =
    'FAVORITES_PRODUCT_LIST_ADD_TO_LIST_ERROR'

export const FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_LOADING =
    'FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_LOADING'

export const FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS =
    'FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS'

export const FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_ERROR =
    'FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_ERROR'

export const FAVORITES_PRODUCT_LIST_INIT = 'FAVORITES_PRODUCT_LIST_INIT'

// Methods add current product to favorite list
export const AddProductToFavoriteList = (
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
    dispatch({ type: FAVORITES_PRODUCT_LIST_ADD_TO_LIST_LOADING })

    try {
        const req = await fetch(
            `https://www.anatomiyasna.ru/api/customer/addFavouriteProduct/?product=${ProductId}&productPrice=${ProductPriceId}`
        )

        if (req.status !== 500 && req.status !== 404) {
            const FavoritesProductsFromLocalStorage = localStorage.getItem(
                'FavoritesProducts'
            )

            if (!FavoritesProductsFromLocalStorage) {
                localStorage.setItem(
                    'FavoritesProducts',
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
                const clone = JSON.parse(FavoritesProductsFromLocalStorage)
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
                localStorage.setItem('FavoritesProducts', JSON.stringify(clone))
            }
            dispatch({
                type: FAVORITES_PRODUCT_LIST_ADD_TO_LIST_SUCCESS,
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
            } [ID: ${ProductId}] to Favorite List. Error: `,
            e.message || e
        )
        dispatch({
            type: FAVORITES_PRODUCT_LIST_ADD_TO_LIST_ERROR,
            payload: e.message || e,
        })
    }
}

// Methods removes current product from favorite list
export const RemoveProductFromFavoriteList = (
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
    dispatch({ type: FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_LOADING })

    try {
        const req = await fetch(
            `https://www.anatomiyasna.ru/api/customer/removeFavouriteProduct/?product=${ProductId}&productPrice=${ProductPriceId}`
        )

        if (req.status !== 500 && req.status !== 404) {
            const FavoritesProductsFromLocalStorage = localStorage.getItem(
                'FavoritesProducts'
            )
            if (FavoritesProductsFromLocalStorage) {
                const clone = JSON.parse(FavoritesProductsFromLocalStorage)
                const util = []
                clone.map((item) => {
                    if (item.ProductId !== ProductId) util.push(item)
                })
                localStorage.setItem('FavoritesProducts', JSON.stringify(util))

                dispatch({
                    type: FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS,
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
            } [ID: ${ProductId}] from Favorite List. Error: `,
            e.message || e
        )
        dispatch({
            type: FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_ERROR,
            payload: e.message || e,
        })
    }
}

// Init methods, start get all data from localstorage via reducer
export const init = () => (dispatch) => {
    dispatch({ type: FAVORITES_PRODUCT_LIST_INIT })
}
