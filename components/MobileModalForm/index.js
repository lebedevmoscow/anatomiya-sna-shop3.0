import { useEffect } from 'react'
import styles from './../../styles/components/MobileModalForm/index.module.sass'

const MobileModalForm = ({ title, closed, text, onClose, html, content }) => {
    const hasWindow = typeof window !== 'undefined'

    useEffect(() => {
        if (!closed && hasWindow) {
            document.querySelector('html').style.overflowY = 'hidden'
        } else if (closed && hasWindow) {
            document.querySelector('html').style.overflowY = 'visible'
        }
    }, [closed])

    return (
        <div
            style={closed ? { display: 'none' } : { display: 'block' }}
            className={styles.catalog_main_mobile_filter}
        >
            <div className={`${styles.mobile_burger_menu_city_choise}`}>
                <div className={styles.container2}>
                    <div
                        className={
                            styles.mobile_burger_menu_city_choise__labels
                        }
                    >
                        <i
                            onClick={() => {
                                onClose()
                            }}
                            className={styles.arrow_left}
                        ></i>
                        <span className={styles.modal_titel}>{title}</span>
                        {/* <span className={styles.line}></span> */}
                    </div>
                </div>
                <div className={styles.container}>{content && content}</div>
            </div>
        </div>
    )
}

export default MobileModalForm
