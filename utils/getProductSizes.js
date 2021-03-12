export const getAllProductSizes = (origin) => {
    const sizes = []
    for (let i = 0; i < origin.length; i++) {
        sizes.push({
            title: origin[i].SizeTitle,
            slug: origin[i].SizeSlug,
            sizeId: origin[i].SizeId,
            id: origin[i].Id,
        })
    }
    return sizes
}

export const getDataBySizeId = (origin, id) => {
    let data = null
    for (let i = 0; i < origin.length; i++) {
        if (origin[i].SizeId === id) {
            data = origin[i]
        }
    }
    return data
}
