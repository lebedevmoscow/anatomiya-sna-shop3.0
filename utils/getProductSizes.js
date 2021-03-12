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
