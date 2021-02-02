import useMedia from './../../hooks/useMedia'
import common_styles from './../../styles/common.module.sass'

import HelpPickUp from './../Banners/HelpPickUp'
import MattrassFilter from './../Filters/MattrassFilter'

const MattrassFilterNoSSR = ({ filterAPIData, filterProductsCount }) => {
    const breakpoint1023 = useMedia(1023)
    return (
        <div className={common_styles.container}>
            <div className={common_styles.index_page_filters}>
                <HelpPickUp />
                {!breakpoint1023 && (
                    <MattrassFilter
                        filterAPIData={filterAPIData}
                        filterProductsCount={filterProductsCount}
                    />
                )}
            </div>
        </div>
    )
}

export default MattrassFilterNoSSR
