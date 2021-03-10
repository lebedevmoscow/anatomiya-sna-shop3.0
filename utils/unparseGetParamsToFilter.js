export const unparseGetParamsToFilter = (origin, obj) => {
    // PROPERTIES
    const filter_status = []
    for (let i = 0; i < origin.properties.length; i++) {
        let clone = []
        if (
            origin.properties[i].checkboxes &&
            origin.properties[i].checkboxes.length !== 0
        ) {
            for (let j = 0; j < origin.properties[i].checkboxes.length; j++) {
                if (origin.properties[i].checkboxes[j].productCount !== 0) {
                    clone.push({
                        property: origin.properties[i].checkboxes[j],
                        status: 'closed',
                    })
                }
            }
        }
        filter_status.push({ filter: origin.properties[i], inner: clone })
        clone = []
    }
    for (let i = 0; i < obj.properties.length; i++) {
        const propId = obj.properties[i].property.match(/\d{1,10}/g)[0]
        const value = obj.properties[i].value
        console.log('propId', propId)

        let clone = null
        let index = null
        let id = filter_status[i].filter.id.toString()

        for (let j = 0; j < filter_status.length; j++) {
            if (id === propId) {
                index = j
                clone = Object.assign({}, filter_status[j])

                for (let k = 0; k < clone.inner.length; k++) {
                    if (clone.inner[k].property.value === value) {
                        clone.inner[k].status = 'opened'
                    }
                }
            }
        }
        filter_status[index] = clone
    }

    return {
        filters: filter_status,
    }
}
