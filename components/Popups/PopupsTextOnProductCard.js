import React from 'react'
import { SlideDown } from 'react-slidedown'

import popups_styles from './../../styles/components/Popups/Popups.module.sass'

const PopupsTextOnProductCard = ({
    ListSaleItem = null,
    GiftItem = null,
    PopupIsClosed,
    SetClose,
    DontShowText = false,
}) => {
    if (DontShowText) {
        return
    }

    if (GiftItem) {
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
                <div
                    className={popups_styles.popups_text_on_product_card__text}
                >
                    <img
                        className={popups_styles.popups__gift_image}
                        src={
                            'https://www.anatomiyasna.ru' +
                            GiftItem.data.ProductImage.FilePath
                        }
                    ></img>
                    <p className={popups_styles.popups__gift_title}>
                        {GiftItem.data.ProductTitle}
                    </p>
                    <p className={popups_styles.popups__gift_count}>
                        {GiftItem.data.Quantity + ' шт.'}
                    </p>
                    <p className={popups_styles.popups__gift_oldprice}>
                        {'Цена от ' + Math.ceil(GiftItem.data.Price)}
                    </p>
                    <p className={popups_styles.popups__gift_itsgift}>
                        Подарок
                    </p>
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

    if (ListSaleItem) {
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
                <div
                    className={popups_styles.popups_text_on_product_card__text}
                >
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
}

export default PopupsTextOnProductCard
