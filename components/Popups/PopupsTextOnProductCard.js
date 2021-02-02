import React from 'react'
import { SlideDown } from 'react-slidedown'

import popups_styles from './../../styles/components/Popups/Popups.module.sass'

const PopupsTextOnProductCard = ({ ListSaleItem, PopupIsClosed, SetClose }) => {
    return (
        <SlideDown
            className={popups_styles.popups_text_on_product_card}
            style={{
                position: 'absolute',
                backgroundColor: '#0ca5d3',
                overflow: 'hidden',
                width: '96%',
                left: '0',
                borderRadius: '4px',
            }}
            closed={PopupIsClosed}
        >
            <div className={popups_styles.popups_text_on_product_card__text}>
                {ListSaleItem.data.Text}
            </div>
            <div
                onClick={() => SetClose(1)}
                className={popups_styles.popups_text_on_product_card__close}
            >
                X
            </div>
        </SlideDown>
    )
}

export default PopupsTextOnProductCard
