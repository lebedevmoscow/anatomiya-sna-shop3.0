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

    for (let i = 0; i < filter_status.length; i++) {
        const id = parseInt(filter_status[i].filter.id)

        for (let j = 0; j < obj.properties.length; j++) {
            const propId = parseInt(
                obj.properties[j].property.match(/\d{1,10}/g)[0]
            )
            const value = obj.properties[j].value
            let clone = null
            let index = null

            if (propId === id) {
                index = i
                clone = Object.assign({}, filter_status[i])

                for (let k = 0; k < clone.inner.length; k++) {
                    // console.log(
                    //     'clone.inner[k].property.value',
                    //     clone.inner[k].property.value
                    // )
                    // console.log('value', value)
                    if (clone.inner[k].property.value === value) {
                        clone.inner[k].status = 'opened'
                    }
                }
            }
            filter_status[index] = clone
        }
    }

    // for (let i = 0; i < obj.properties.length; i++) {
    //     const propId = parseInt(
    //         obj.properties[i].property.match(/\d{1,10}/g)[0]
    //     )
    //     const value = obj.properties[i].value

    //     let clone = null
    //     let index = null
    //     let id = parseInt(filter_status[i].filter.id)

    //     console.log('id', id)
    //     console.log('propId', propId)

    //     for (let j = 0; j < filter_status.length; j++) {
    //         if (id === propId) {
    //             index = j
    //             clone = Object.assign({}, filter_status[j])
    //             console.log('clone', clone)

    //             for (let k = 0; k < clone.inner.length; k++) {
    //                 if (clone.inner[k].property.value === value) {
    //                     clone.inner[k].status = 'opened'
    //                 }
    //             }
    //         }
    //     }
    //     filter_status[index] = clone
    // }

    console.log('filter_status', filter_status)

    return {
        filters: filter_status,
    }
}
