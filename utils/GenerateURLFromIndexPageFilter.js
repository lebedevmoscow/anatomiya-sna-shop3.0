export const GenerateURLFromIndexPageFilter = (filters, oldMin, oldMax) => {
    const mainUrl = 'https://www.anatomiyasna.ru'
    const subUrl = '/api/filter/filtredProducts/?slug=matrasy'
    let url = ''

    if (filters.selectedMin) {
        url = url + '&filter[price][selectedMin]=' + filters.selectedMin
    }

    if (filters.selectedMax) {
        url = url + '&filter[price][selectedMax]=' + filters.selectedMax
    }

    if (filters.size) {
        url = url + '&filter[size]=' + filters.size
    }

    if (filters.weight) {
        url = url + '&filter[properties][20]=' + filters.weight
    }

    if (filters.minHeight) {
        url = url + '&filter[properties][3][selectedMin]=' + filters.minHeight
    }

    if (filters.maxHeight) {
        url = url + '&filter[properties][3][selectedMax]=' + filters.maxHeight
    }

    if (filters.rigidityDown) {
        let utilUrl = ''
        let temp = 0
        for (let key in filters.rigidityDown) {
            if (filters.rigidityDown[key]) {
                utilUrl = utilUrl + `&filter[properties][2][${temp}]=${key}`
            }
        }
        url = url + utilUrl
    }

    if (filters.rigidityUp) {
        let utilUrl = ''
        let temp = 0
        for (let key in filters.rigidityUp) {
            if (filters.rigidityUp[key]) {
                utilUrl = utilUrl + `&filter[properties][1][${temp}]=${key}`
            }
        }
        url = url + utilUrl
    }

    if (filters.constructionType) {
        let utilUrl = ''
        let temp = 0
        for (let key in filters.constructionType) {
            if (filters.constructionType[key]) {
                utilUrl = utilUrl + `&filter[properties][5][${temp}]=${key}`
            }
        }
        url = url + utilUrl
    }

    if (filters.options) {
        let utilUrl = ''
        let temp = 0
        for (let key in filters.options) {
            if (filters.options[key]) {
                utilUrl = utilUrl + `&filter[selectedFlags][${temp}]=${key}`
            }
        }
        url = url + utilUrl
    }

    url = url + `&filter[price][oldMin]=${oldMin}`
    url = url + `&filter[price][oldMax]=${oldMax}`

    const finalUrl = mainUrl + subUrl + encodeURI(url)

    return finalUrl
}
