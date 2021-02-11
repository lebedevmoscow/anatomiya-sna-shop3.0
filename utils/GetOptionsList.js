export const GetOptionsList = (OptionsIDs, origin) => {
    const Options = []

    for (let i = 0; i < OptionsIDs.length; i++) {
        for (let key in origin) {
            if (OptionsIDs[i].toString() === key) {
                Options.push({ data: origin[key] })
            }
        }
    }

    return Options
}
