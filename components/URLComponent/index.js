import styles from './../URLComponent/index'

const Url = () => {
    return (
        <div className={styles.url_list}>
            <span className={styles.black}>Главная</span>
            <span className={styles.delimiter}>/</span>
            <span className={styles.blue}>Кровати</span>
        </div>
    )
}

export default Url
