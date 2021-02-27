import styles from './../../styles/components/Popups/ProductPageDesktopPopup.module.sass'
import { SlideDown } from 'react-slidedown'
import { useState, useEffect } from 'react'

const ProductPageDesktopPopup = ({
    bgc,
    borderColor,
    txtColor,
    title,
    text,
    dontShowPopup = false,
}) => {
    const [popupIsClosed, setPopupIsClosed] = useState(true)

    useEffect(() => {
        console.log('popupIsClosed', popupIsClosed)
    }, [popupIsClosed])

    return (
        <div
            style={{
                backgroundColor: bgc,
                border: `1px solid ${borderColor}`,
                color: txtColor,
                cursor: dontShowPopup ? 'default' : 'pointer',
            }}
            className={styles.product_page_desktop_popup}
        >
            <span onClick={() => setPopupIsClosed((p) => !p)}>{title}</span>
            <div className={styles.popup__inner__wrap}>
                <SlideDown
                    className={styles.popup__inner}
                    closed={popupIsClosed}
                >
                    <div
                        style={{
                            padding: '30px 20px 1px',
                            paddingBottom: '30px',
                        }}
                    >
                        {text}
                    </div>
                </SlideDown>
            </div>
        </div>
    )
}

export default ProductPageDesktopPopup
