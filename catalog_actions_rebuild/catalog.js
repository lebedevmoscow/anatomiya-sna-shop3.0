export const CATALOG_SET_PAGE = 'CATALOG_SET_PAGE'
export const CATALOG_SET_SIZE_ID = 'CATALOG_SET_SIZE_ID'
export const CATALOG_SET_FILTERS = 'CATALOG_SET_FILTERS'
export const CATALOG_SET_SELECT = 'CATALOG_SET_SELECT'
export const CATALOG_SET_PRICE = 'CATALOG_SET_PRICE'
export const CATALOG_SET_COLORS = 'CATALOG_SET_COLORS'
export const CATALOG_SET_SORT = 'CATALOG_SET_SORT'
export const CATALOG_SET_SORT_MOBILE = 'CATALOG_SET_SORT_MOBILE'
export const CATALOG_SET_NEW = 'CATALOG_SET_NEW'
export const CATALOG_SET_ALL = 'CATALOG_SET_ALL'
export const CATALOG_SET_UPDATE_LIST = 'CATALOG_SET_UPDATE_LIST'
export const CATALOG_SET_AMOUNT = 'CATALOG_SET_AMOUNT'
export const CATALOG_SET_LOADING = 'CATALOG_SET_LOADING'
export const CATALOG_SET_DESKTOP_VIEWTYPE = 'CATALOG_SET_DESKTOP_VIEWTYPE'
export const CATALOG_SET_MOBILE_VIEWTYPE = 'CATALOG_SET_MOBILE_VIEWTYPE'
export const CATALOG_SET_PRELOAD_GET_PARAMS = 'CATALOG_SET_PRELOAD_GET_PARAMS'

export const CatalogLoadByFilter = (
    IsMobile = false,
    selectedSizeId = null,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
    filters = null,
    price = null,
    sortType = null,
    colors,
    select,
    sortMobile = null
) => async (dispatch) => {
    try {
        dispatch({ type: CATALOG_SET_LOADING, payload: true })

        const amount = IsMobile ? 20 : 21
        const root = 'https://www.anatomiyasna.ru'
        const useful_url = !subCatalogSlug
            ? `/api/filter/filtredProducts/?slug=${catalogSlug}`
            : `/api/filter/filtredProducts/?slug=${catalogSlug}/${subCatalogSlug}`

        let params = ''

        // Check for params
        if (selectedSizeId) {
            if (selectedSizeId) {
                params = params + '&filter[size]=' + selectedSizeId
            }
        }

        // If price is selected, inject his in params, else inject oldMin and oldMax value as default
        // Price is an object that has following structure:
        // {minValue, maxValue}

        if (price) {
            params =
                params +
                '&filter[price][selectedMin]=' +
                price[0]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            params =
                params +
                '&filter[price][selectedMax]=' +
                price[1]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        } else {
            params =
                params +
                '&filter[price][selectedMin]=' +
                oldMin.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            params =
                params +
                '&filter[price][selectedMax]=' +
                oldMax.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }

        // Check if sort type is selected
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
                        params = params + '&filter[sorting]=price_up'
                    } else if (
                        sortType[i].title === 'Цене' &&
                        sortType[i].isActive &&
                        sortType[i].sort &&
                        sortType[i].sort === 'down-to-up'
                    ) {
                        params = params + '&filter[sorting]=price_down'
                    } else if (
                        sortType[i].title === 'Популярности' &&
                        sortType[i].isActive
                    ) {
                        params = params + '&filter[sorting]=popular'
                    }
                } else {
                    if (
                        sortType[i].title === 'Дате доставки' &&
                        sortType[i].isActive
                    ) {
                        params =
                            params + `&filter[selectedFlags][]=deliverySorting`
                    }
                    if (
                        sortType[i].title === 'Скидка' &&
                        sortType[i].isActive
                    ) {
                        params = params + `&filter[selectedFlags][]=discount`
                    }
                    if (
                        sortType[i].title === 'Новинка' &&
                        sortType[i].isActive
                    ) {
                        params = params + `&filter[selectedFlags][]=newest`
                    }
                    if (
                        sortType[i].title === 'Бесплатная доставка' &&
                        sortType[i].isActive
                    ) {
                        params =
                            params + `&filter[selectedFlags][]=free_delivery`
                    }
                }
            }
        }

        if (sortMobile && sortMobile.length > 0) {
            for (let i = 0; i < sortMobile.length; i++) {
                if (
                    sortMobile[i].title === 'По популярности' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=popular'
                }
                if (
                    sortMobile[i].title === 'По убыванию цены' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=price_down'
                }
                if (
                    sortMobile[i].title === 'По возрастанию цены' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=price_up'
                }
                if (
                    sortMobile[i].title === 'Со скидкой' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=discount'
                }
                if (
                    sortMobile[i].title === 'Новинка' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=newest'
                }
                if (
                    sortMobile[i].title === 'С подарком' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=gift'
                }
                if (
                    sortMobile[i].title === 'Выбор покупателей' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=recommended'
                }
                if (
                    sortMobile[i].title === 'Бесплатная доставка' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=free_delivery'
                }
            }
        }

        // Check for any select widget
        if (select && select.length > 0) {
            for (let i = 0; i < select.length; i++) {
                params =
                    params +
                    `&filter[properties][${select[i].id}]=${select[i].initial.value}`
            }
        }

        // Check for selected colors

        if (colors.length > 0) {
            for (let i = 0; i < colors.length; i++) {
                params = params + `&filter[colors][]=${colors[i]}`
            }
        }

        // Add default required values
        params = params + `&filter[price][oldMin]=${oldMin}`
        params = params + `&filter[price][oldMax]=${oldMax}`

        let filter_params = ''

        if (filters && filters.length > 0) {
            for (let i = 0; i < filters.length; i++) {
                for (let j = 0; j < filters[i].inner.length; j++) {
                    if (filters[i].inner[j].status === 'opened') {
                        filter_params += `&filter[properties][${filters[i].filter.id}][]=${filters[i].inner[j].property.value}`
                    }
                }
            }
        }

        let rawurl = params + filter_params
        rawurl = rawurl.slice(1)
        console.log('rawurl', rawurl)

        window.history.pushState(
            '',
            '',
            `http://localhost:3000/${catalogSlug}?${encodeURI(rawurl)}`
        )

        const finalUrl =
            root + useful_url + encodeURI(params) + encodeURI(filter_params)

        const reqIds = await fetch(finalUrl)
        const resIds = await reqIds.json()

        let ids = []

        for (let i = 0; i < amount; i++) {
            if (i !== resIds.length) {
                ids.push(`products[]=${resIds[i]}&`)
            } else {
                break
            }
        }

        const productSubUrl = ids.join('')
        const productsURLReq = await fetch(
            `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
        )
        const products = await productsURLReq.json()

        // Set new products to reducer
        dispatch({ type: CATALOG_SET_LOADING, payload: false })
        dispatch({ type: CATALOG_SET_AMOUNT, payload: resIds.length })
        dispatch({ type: CATALOG_SET_NEW, payload: products })
    } catch (e) {
        console.log('Cannot load products by filter', e.message || e)
    }
}

export const CatalogLoadProductsByFilter = (
    IsMobile = false,
    selectedSizeId = null,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
    filters = null,
    price = null,
    sortType = null,
    colors,
    select,
    sortMobile = null
) => async (dispatch) => {
    try {
        dispatch({ type: CATALOG_SET_LOADING, payload: true })

        const amount = IsMobile ? 20 : 21
        const root = 'https://www.anatomiyasna.ru'
        const useful_url = !subCatalogSlug
            ? `/api/filter/filtredProducts/?slug=${catalogSlug}`
            : `/api/filter/filtredProducts/?slug=${catalogSlug}/${subCatalogSlug}`

        let params = ''

        // Check for params
        if (selectedSizeId) {
            if (selectedSizeId) {
                params = params + '&filter[size]=' + selectedSizeId
            }
        }

        // If price is selected, inject his in params, else inject oldMin and oldMax value as default
        // Price is an object that has following structure:
        // {minValue, maxValue}

        if (price) {
            params =
                params +
                '&filter[price][selectedMin]=' +
                price[0]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            params =
                params +
                '&filter[price][selectedMax]=' +
                price[1]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        } else {
            params =
                params +
                '&filter[price][selectedMin]=' +
                oldMin.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            params =
                params +
                '&filter[price][selectedMax]=' +
                oldMax.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }

        // Check if sort type is selected
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
                        params = params + '&filter[sorting]=price_up'
                    } else if (
                        sortType[i].title === 'Цене' &&
                        sortType[i].isActive &&
                        sortType[i].sort &&
                        sortType[i].sort === 'down-to-up'
                    ) {
                        params = params + '&filter[sorting]=price_down'
                    } else if (
                        sortType[i].title === 'Популярности' &&
                        sortType[i].isActive
                    ) {
                        params = params + '&filter[sorting]=popular'
                    }
                } else {
                    if (
                        sortType[i].title === 'Дате доставки' &&
                        sortType[i].isActive
                    ) {
                        params =
                            params + `&filter[selectedFlags][]=deliverySorting`
                    }
                    if (
                        sortType[i].title === 'Скидка' &&
                        sortType[i].isActive
                    ) {
                        params = params + `&filter[selectedFlags][]=discount`
                    }
                    if (
                        sortType[i].title === 'Новинка' &&
                        sortType[i].isActive
                    ) {
                        params = params + `&filter[selectedFlags][]=newest`
                    }
                    if (
                        sortType[i].title === 'Бесплатная доставка' &&
                        sortType[i].isActive
                    ) {
                        params =
                            params + `&filter[selectedFlags][]=free_delivery`
                    }
                }
            }
        }

        if (sortMobile && sortMobile.length > 0) {
            for (let i = 0; i < sortMobile.length; i++) {
                if (
                    sortMobile[i].title === 'По популярности' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=popular'
                }
                if (
                    sortMobile[i].title === 'По убыванию цены' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=price_down'
                }
                if (
                    sortMobile[i].title === 'По возрастанию цены' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=price_up'
                }
                if (
                    sortMobile[i].title === 'Со скидкой' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=discount'
                }
                if (
                    sortMobile[i].title === 'Новинка' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=newest'
                }
                if (
                    sortMobile[i].title === 'С подарком' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=gift'
                }
                if (
                    sortMobile[i].title === 'Выбор покупателей' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=recommended'
                }
                if (
                    sortMobile[i].title === 'Бесплатная доставка' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=free_delivery'
                }
            }
        }

        // Check for any select widget
        if (select && select.length > 0) {
            for (let i = 0; i < select.length; i++) {
                params =
                    params +
                    `&filter[properties][${select[i].id}]=${select[i].initial.value}`
            }
        }

        // Check for selected colors

        if (colors) {
            for (let i = 0; i < colors.length; i++) {
                params = params + `&filter[colors][]=${colors[i]}`
            }
        }

        // Add default required values
        params = params + `&filter[price][oldMin]=${oldMin}`
        params = params + `&filter[price][oldMax]=${oldMax}`

        let filter_params = ''

        if (filters && filters.length > 0) {
            for (let i = 0; i < filters.length; i++) {
                for (let j = 0; j < filters[i].inner.length; j++) {
                    if (filters[i].inner[j].status === 'opened') {
                        filter_params += `&filter[properties][${filters[i].filter.id}][]=${filters[i].inner[j].property.value}`
                    }
                }
            }
        }

        const finalUrl =
            root + useful_url + encodeURI(params) + encodeURI(filter_params)

        const reqIds = await fetch(finalUrl)
        const resIds = await reqIds.json()

        let ids = []

        for (let i = 0; i < amount; i++) {
            if (i !== resIds.length) {
                ids.push(`products[]=${resIds[i]}&`)
            } else {
                break
            }
        }

        const productSubUrl = ids.join('')
        const productsURLReq = await fetch(
            `https://www.anatomiyasna.ru/api/productService/getShortProductModels/?${productSubUrl}`
        )
        const products = await productsURLReq.json()

        // Set new products to reducer
        dispatch({ type: CATALOG_SET_LOADING, payload: false })
        dispatch({ type: CATALOG_SET_NEW, payload: products })
        dispatch({ type: CATALOG_SET_AMOUNT, payload: resIds.length })
    } catch (e) {
        console.log('Cannot load products by filter', e.message || e)
    }
}

export const CatalogLoadProductsByLoadMoreButton = (
    IsMobile = false,
    page = 1,
    selectedSizeId = null,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
    filters = null,
    price = null,
    sortType = null,
    colors,
    select,
    sortMobile = null
) => async (dispatch) => {
    try {
        dispatch({ type: CATALOG_SET_LOADING, payload: true })
        const amount = IsMobile ? 20 : 21
        const root = 'https://www.anatomiyasna.ru'
        const useful_url = !subCatalogSlug
            ? `/api/filter/filtredProducts/?slug=${catalogSlug}`
            : `/api/filter/filtredProducts/?slug=${catalogSlug}/${subCatalogSlug}`

        let params = ''

        // Check for params
        if (selectedSizeId) {
            if (selectedSizeId) {
                params = params + '&filter[size]=' + selectedSizeId
            }
        }

        // If price is selected, inject his in params, else inject oldMin and oldMax value as default
        // Price is an object that has following structure:
        // {minValue, maxValue}

        if (price) {
            params =
                params +
                '&filter[price][selectedMin]=' +
                price[0]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            params =
                params +
                '&filter[price][selectedMax]=' +
                price[1]
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        } else {
            params =
                params +
                '&filter[price][selectedMin]=' +
                oldMin.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            params =
                params +
                '&filter[price][selectedMax]=' +
                oldMax.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }

        // Check if sort type is selected
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
                        params = params + '&filter[sorting]=price_up'
                    } else if (
                        sortType[i].title === 'Цене' &&
                        sortType[i].isActive &&
                        sortType[i].sort &&
                        sortType[i].sort === 'down-to-up'
                    ) {
                        params = params + '&filter[sorting]=price_down'
                    } else if (
                        sortType[i].title === 'Популярности' &&
                        sortType[i].isActive
                    ) {
                        params = params + '&filter[sorting]=popular'
                    }
                } else {
                    if (
                        sortType[i].title === 'Дате доставки' &&
                        sortType[i].isActive
                    ) {
                        params =
                            params + `&filter[selectedFlags][]=deliverySorting`
                    }
                    if (
                        sortType[i].title === 'Скидка' &&
                        sortType[i].isActive
                    ) {
                        params = params + `&filter[selectedFlags][]=discount`
                    }
                    if (
                        sortType[i].title === 'Новинка' &&
                        sortType[i].isActive
                    ) {
                        params = params + `&filter[selectedFlags][]=newest`
                    }
                    if (
                        sortType[i].title === 'Бесплатная доставка' &&
                        sortType[i].isActive
                    ) {
                        params =
                            params + `&filter[selectedFlags][]=free_delivery`
                    }
                }
            }
        }

        if (sortMobile && sortMobile.length > 0) {
            for (let i = 0; i < sortMobile.length; i++) {
                if (
                    sortMobile[i].title === 'По популярности' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=popular'
                }
                if (
                    sortMobile[i].title === 'По убыванию цены' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=price_down'
                }
                if (
                    sortMobile[i].title === 'По возрастанию цены' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[sorting]=price_up'
                }
                if (
                    sortMobile[i].title === 'Со скидкой' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=discount'
                }
                if (
                    sortMobile[i].title === 'Новинка' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=newest'
                }
                if (
                    sortMobile[i].title === 'С подарком' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=gift'
                }
                if (
                    sortMobile[i].title === 'Выбор покупателей' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=recommended'
                }
                if (
                    sortMobile[i].title === 'Бесплатная доставка' &&
                    sortMobile[i].status === 'active'
                ) {
                    params = params + '&filter[selectedFlags][]=free_delivery'
                }
            }
        }

        // Check for any select widget
        if (select && select.length > 0) {
            for (let i = 0; i < select.length; i++) {
                params =
                    params +
                    `&filter[properties][${select[i].id}]=${select[i].initial.value}`
            }
        }

        // Check for selected colors

        if (colors) {
            for (let i = 0; i < colors.length; i++) {
                params = params + `&filter[colors][]=${colors[i]}`
            }
        }

        // Add default required values
        params = params + `&filter[price][oldMin]=${oldMin}`
        params = params + `&filter[price][oldMax]=${oldMax}`

        let filter_params = ''

        if (filters && filters.length > 0) {
            for (let i = 0; i < filters.length; i++) {
                for (let j = 0; j < filters[i].inner.length; j++) {
                    if (filters[i].inner[j].status === 'opened') {
                        filter_params += `&filter[properties][${filters[i].filter.id}][]=${filters[i].inner[j].property.value}`
                    }
                }
            }
        }

        const finalUrl =
            root + useful_url + encodeURI(params) + encodeURI(filter_params)

        const reqIds = await fetch(finalUrl)
        const resIds = await reqIds.json()

        let ids = []

        if (page === 1) {
            for (let i = 0; i < amount; i++) {
                if (i !== resIds.length) {
                    ids.push(`products[]=${resIds[i]}&`)
                } else {
                    break
                }
            }
        } else if (page > 1) {
            for (
                let i = amount * (page - 1);
                i < amount * (page - 1) + amount;
                i++
            ) {
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

        // Set new products to reducer
        dispatch({ type: CATALOG_SET_LOADING, payload: false })
        dispatch({ type: CATALOG_SET_NEW, payload: products })
        dispatch({ type: CATALOG_SET_AMOUNT, payload: resIds.length })

        console.log('products', products)
    } catch (e) {
        console.log('Cannot load products by load more button', e.message || e)
    }
}
