import styles from './../../styles/components/Modal/index.module.sass'

const Modal = ({ title, closed, text, onClose }) => {
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
                        <span>{title}</span>
                    </div>
                    <div className={styles.text}>{text}</div>
                    <div className={styles.buttons}>
                        <button className={styles.button__more}>
                            Подробнее
                        </button>
                        <button
                            onClick={() => {
                                onClose()
                            }}
                            className={styles.button__proceed}
                        >
                            Продолжить покупки
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal