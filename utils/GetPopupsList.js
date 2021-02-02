export const GetPopupsList = (SaleLabelsOrigin, SaleLabelsProduct) => {
    const ListPopups = []
    for (let i = 0; i < SaleLabelsProduct.length; i++) {
        for (let key in SaleLabelsOrigin) {
            if (SaleLabelsProduct[i].toString() === key) {
                ListPopups.push({ data: SaleLabelsOrigin[key] })
            }
        }
    }

    return ListPopups
}
