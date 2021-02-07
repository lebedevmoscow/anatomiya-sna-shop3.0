export const CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING =
    'CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING'

export const CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS =
    'CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS'

export const CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR =
    'CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR'

export const LoadProductsByButtonClick = (productsIds, page) => async (
    dispatch
) => {
    dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING })

    try {
        let ids = []
        for (let i = 21 * page; i < 21 * page + 21; i++) {
            if (i !== productsIds.length - 1) {
                ids.push(`products[]=${productsIds[i]}&`)
            } else {
                ids.push(`products[]=${productsIds[i]}`)
            }
        }

        const productSubUrl = ids.join('')

        const productsURLReq = await fetch(
            `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
        )
        const products = await productsURLReq.json()

        dispatch({
            type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS,
            payload: products,
        })
    } catch (e) {
        console.log(
            'Cannot load products on catalog page due button click. Error: ',
            e.message || e
        )
        dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR })
    }
}
