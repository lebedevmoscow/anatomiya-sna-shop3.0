import { SELECTED_SIZE_SET_AMOUNT } from './SelectedSize'

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
    oldMax,
    IsMobile = false
) => async (dispatch) => {
    dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING })

    let finalUrl = false
    const index = IsMobile ? 20 : 21

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

            const reqIds = await fetch(finalUrl)
            const resIds = await reqIds.json()

            let ids = []
            for (let i = index * page; i < index * page + index; i++) {
                if (i !== resIds.length - 1) {
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

            // const products = {}
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
                for (
                    let i = index * (page - 1);
                    i < index * (page - 1) + index;
                    i++
                ) {
                    if (i < productsIds.length - 1) {
                        ids.push(`products[]=${productsIds[i]}&`)
                    } else {
                        break
                    }
                }
            } else if (page === 1) {
                for (let i = 0; i < index; i++) {
                    if (i < productsIds.length - 1) {
                        ids.push(`products[]=${productsIds[i]}&`)
                    } else {
                        break
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

export const LoadByFilters = (
    productsIds,
    page,
    selectedSizeId = null,
    catalogSlug,
    subCatalogSlug,
    oldMin,
    oldMax,
    filters,
    price = null,
    size,
    sortType,
    IsMobile = false,
    colors = null,
    selectedActive,
    topFilter = []
) => async (dispatch) => {
    // dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING })

    let finalUrl = false
    try {
        const mainUrl = 'https://www.anatomiyasna.ru'
        const subUrl = !subCatalogSlug
            ? `/api/filter/filtredProducts/?slug=${catalogSlug}`
            : `/api/filter/filtredProducts/?slug=${catalogSlug}/${subCatalogSlug}`
        let url = ''

        if (selectedSizeId || size) {
            if (selectedSizeId) {
                url = url + '&filter[size]=' + selectedSizeId
            } else if (size) {
                url = url + '&filter[size]=' + size.value
            }
        }

        if (price) {
            url =
                url +
                '&filter[price][selectedMin]=' +
                price[0]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            url =
                url +
                '&filter[price][selectedMax]=' +
                price[1]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        } else {
            url =
                url +
                '&filter[price][selectedMin]=' +
                oldMin.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            url =
                url +
                '&filter[price][selectedMax]=' +
                oldMax.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }

        if (sortType) {
            for (let i = 0; i < sortType.length; i++) {
                if (
                    sortType[i].title === 'Цене' ||
                    sortType[i].title === 'Популярности'
                ) {
                    if (
                        sortType[i].title === 'Цене' &&
                        sortType[i].isActive &&
                        sortType[i].sort &&
                        sortType[i].sort === 'up-to-down'
                    ) {
                        url = url + '&filter[sorting]=price_up'
                    } else if (
                        sortType[i].title === 'Цене' &&
                        sortType[i].isActive &&
                        sortType[i].sort &&
                        sortType[i].sort === 'down-to-up'
                    ) {
                        url = url + '&filter[sorting]=price_down'
                    } else if (
                        sortType[i].title === 'Популярности' &&
                        sortType[i].isActive
                    ) {
                        url = url + '&filter[sorting]=popular'
                    }
                } else {
                    if (
                        sortType[i].title === 'Дате доставки' &&
                        sortType[i].isActive
                    ) {
                        url = url + `&filter[selectedFlags][]=deliverySorting`
                    }
                    if (
                        sortType[i].title === 'Скидка' &&
                        sortType[i].isActive
                    ) {
                        url = url + `&filter[selectedFlags][]=discount`
                    }
                    if (
                        sortType[i].title === 'Новинка' &&
                        sortType[i].isActive
                    ) {
                        url = url + `&filter[selectedFlags][]=newest`
                    }
                    if (
                        sortType[i].title === 'Бесплатная доставка' &&
                        sortType[i].isActive
                    ) {
                        url = url + `&filter[selectedFlags][]=free_delivery`
                    }
                }
            }
        }

        if (topFilter.length > 0) {
            console.log('topFilter', topFilter)
            for (let i = 0; i < topFilter.length; i++) {
                if (
                    topFilter[i].title === 'По популярности' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[sorting]=popular'
                }
                if (
                    topFilter[i].title === 'По убыванию цены' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[sorting]=price_down'
                }
                if (
                    topFilter[i].title === 'По возрастанию цены' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[sorting]=price_up'
                }
                if (
                    topFilter[i].title === 'Со скидкой' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[selectedFlags][]=discount'
                }
                if (
                    topFilter[i].title === 'Новинка' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[selectedFlags][]=newest'
                }
                if (
                    topFilter[i].title === 'С подарком' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[selectedFlags][]=gift'
                }
                if (
                    topFilter[i].title === 'Выбор покупателей' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[selectedFlags][]=recommended'
                }
                if (
                    topFilter[i].title === 'Бесплатная доставка' &&
                    topFilter[i].status === 'active'
                ) {
                    url = url + '&filter[selectedFlags][]=free_delivery'
                }
            }
        }

        if (selectedActive && selectedActive.length > 0) {
            console.log('selectedActive ACTION', selectedActive)
            url =
                url +
                `&filter[properties][${selectedActive.id}]=${selectedActive.data.value}`
        }

        if (colors) {
            for (let i = 0; i < colors.length; i++) {
                // ('colors', colors[i])
                url = url + `&filter[colors][]=${colors[i]}`
            }
        }

        url = url + `&filter[price][oldMin]=${oldMin}`
        url = url + `&filter[price][oldMax]=${oldMax}`

        let sub = ''

        if (filters) {
            for (let i = 0; i < filters.length; i++) {
                for (let j = 0; j < filters[i].inner.length; j++) {
                    if (filters[i].inner[j].status === 'opened') {
                        sub += `&filter[properties][${filters[i].filter.id}][]=${filters[i].inner[j].property.value}`
                    }
                }
            }
        }

        const finalUrl = mainUrl + subUrl + encodeURI(url) + encodeURI(sub)

        console.log('final', finalUrl)
        const reqIds = await fetch(finalUrl)
        const resIds = await reqIds.json()

        let ids = []

        dispatch({ type: SELECTED_SIZE_SET_AMOUNT, payload: resIds.length })

        const index = IsMobile ? 20 : 21

        if (index * (page - 1) >= resIds.length) {
            return
        } else {
            if (page !== 1) {
                for (
                    let i = index * (page - 1);
                    i < index * (page - 1) + index;
                    i++
                ) {
                    if (i !== resIds.length) {
                        ids.push(`products[]=${resIds[i]}&`)
                    } else {
                        break
                    }
                }
            } else if (page === 1) {
                for (let i = 0; i < index; i++) {
                    if (i !== resIds.length) {
                        ids.push(`products[]=${resIds[i]}&`)
                    } else {
                        break
                    }
                }
            }

            const productSubUrl = ids.join('')
            const productsURLReq = await fetch(
                `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
            )
            const products = await productsURLReq.json()

            // const products = {}
            dispatch({
                type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS,
                payload: products,
            })
        }
    } catch (e) {
        console.log(
            'Cannot load products on catalog page due button click. Error: ',
            e.message || e
        )
        dispatch({ type: CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR })
    }
}
