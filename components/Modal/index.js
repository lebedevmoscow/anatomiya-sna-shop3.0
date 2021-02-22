import { useEffect } from 'react'
import Link from 'next/link'
import styles from './../../styles/components/Modal/index.module.sass'

const Modal = ({
    title,
    closed,
    text,
    onClose,
    html,
    IsMore = true,
    Popup = false,
}) => {
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
                <div className={styles.container}>
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
                    </div>
                    <div className={styles.text}>{text || html}</div>
                    {IsMore && (
                        <div className={styles.buttons}>
                            <button className={styles.button__more}>
                                Готово
                            </button>
                        </div>
                    )}
                    {Popup && (
                        <div className={styles.buttons}>
                            <Link href="/">
                                <a>
                                    <button className={styles.button__moreinfo}>
                                        Подробнее
                                    </button>
                                </a>
                            </Link>
                            <button className={styles.button__proceed}>
                                Продолжить покупки
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal
