export const CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING =
    'CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING'

export const CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS =
    'CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS'

export const CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR =
    'CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR'

export const CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY =
    'CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY'

export const LoadProductsByButtonClick = (
    productsIds,
    page,
    selectedSizeId = null,
    catalogSlug,
    subCatalogSlug,
    oldMin,
    oldMax
) => async (dispatch) => {
    dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING })

    let finalUrl = false
    if (selectedSizeId) {
        try {
            const mainUrl = 'https://www.anatomiyasna.ru'
            const subUrl = !subCatalogSlug
                ? `/api/filter/filtredProducts/?slug=${catalogSlug}`
                : `/api/filter/filtredProducts/?slug=${catalogSlug}/${subCatalogSlug}`
            let url = ''
            url = url + '&filter[size]=' + selectedSizeId
            url = url + '&filter[price][selectedMin]=' + oldMin
            url = url + '&filter[price][selectedMax]=' + oldMax
            url = url + `&filter[price][oldMin]=${oldMin}`
            url = url + `&filter[price][oldMax]=${oldMax}`
            finalUrl = mainUrl + subUrl + encodeURI(url)

            console.log('3')

            const reqIds = await fetch(finalUrl)
            const resIds = await reqIds.json()

            console.log('4')

            let ids = []
            for (let i = 21 * page; i < 21 * page * 2; i++) {
                if (i !== resIds.length - 1) {
                    ids.push(`products[]=${resIds[i]}&`)
                } else {
                    ids.push(`products[]=${resIds[i]}`)
                }
            }
            const productSubUrl = ids.join('')
            console.log('productSubUrl', productSubUrl)
            const productsURLReq = await fetch(
                `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
            )
            const products = await productsURLReq.json()

            // const products = {}
            console.log('5')
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
    } else {
        try {
            let ids = []
            if (page > 1) {
                for (let i = 21 * page; i < 21 * page + 21; i++) {
                    if (i < productsIds.length - 1) {
                        console.log('i', i)
                        ids.push(`products[]=${productsIds[i]}&`)
                    } else {
                        return
                    }
                }
            } else if (page === 1) {
                for (let i = 0; i < 21; i++) {
                    if (i < productsIds.length - 1) {
                        console.log('i', i)
                        ids.push(`products[]=${productsIds[i]}&`)
                    } else {
                        return
                    }
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
}
