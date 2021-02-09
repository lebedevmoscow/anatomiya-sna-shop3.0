import { SELECTED_SIZE_SET_AMOUNT } from './SelectedSize'

export const CATALOG_PRODUCT_LIST_LOADING = 'CATALOG_PRODUCT_LIST_LOADING'
export const CATALOG_PRODUCT_LIST_SUCCESS = 'CATALOG_PRODUCT_LIST_SUCCESS'
export const CATALOG_PRODUCT_LIST_ERROR = 'CATALOG_PRODUCT_LIST_ERROR'
export const CATALOG_PRODUCT_LIST_SET_EMPTY = 'CATALOG_PRODUCT_LIST_SET_EMPTY'

export const LoadProductsBySize = (
    size,
    slug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
    IsMobile = false
) => async (dispatch) => {
    const index = IsMobile ? 20 : 21
    dispatch({ type: CATALOG_PRODUCT_LIST_LOADING })

    const mainUrl = 'https://www.anatomiyasna.ru'
    const subUrl = !subCatalogSlug
        ? `/api/filter/filtredProducts/?slug=${slug}`
        : `/api/filter/filtredProducts/?slug=${slug}/${subCatalogSlug}`
    let url = ''
    url = url + '&filter[size]=' + size
    url = url + '&filter[price][selectedMin]=' + oldMin
    url = url + '&filter[price][selectedMax]=' + oldMax
    url = url + `&filter[price][oldMin]=${oldMin}`
    url = url + `&filter[price][oldMax]=${oldMax}`

    const finalUrl = mainUrl + subUrl + encodeURI(url)

    try {
        const reqIds = await fetch(finalUrl)
        const resIds = await reqIds.json()

        dispatch({ type: SELECTED_SIZE_SET_AMOUNT, payload: resIds.length })

        let ids = []
        for (let i = 0; i < index; i++) {
            if (i !== index - 1) {
                ids.push(`products[]=${resIds[i]}&`)
            } else {
                ids.push(`products[]=${resIds[i]}`)
            }
        }
        const productSubUrl = ids.join('')
        const productsURLReq = await fetch(
            `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
        )
        const products = await productsURLReq.json()

        dispatch({ type: CATALOG_PRODUCT_LIST_SUCCESS, payload: products })
    } catch (e) {
        console.log('Cannot load products by size. Error: ', e.message || e)
        dispatch({ type: CATALOG_PRODUCT_LIST_ERROR, payload: e.message || e })
    }
}
