export const GetGiftsList = (GiftId, origin) => {
    const Gifts = []

    for (let i = 0; i < GiftId.length; i++) {
        for (let key in origin) {
            if (GiftId[i].toString() === key) {
                Gifts.push({ data: origin[key] })
            }
        }
    }

    return Gifts
}
