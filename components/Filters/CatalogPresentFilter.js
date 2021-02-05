import styles from './../../styles/components/Filters/CatalogPresentFilter.module.sass'

const CatalogPresetFilter = ({ onClose, className, title, dataList = [] }) => {
    return (
        <div className={styles.catalog_preset_filter}>
            <div
                className={`${styles.mobile_burger_menu_city_choise} mobile_burger_menu_city_choise__${className}`}
            >
                <div className={styles.container}>
                    <div
                        className={
                            styles.mobile_burger_menu_city_choise__labels
                        }
                    >
                        <i onClick={onClose} className={styles.arrow_left}></i>
                        <span>{title}</span>
                    </div>
                    <ul
                        className={
                            styles.mobile_burger_menu_city_choise__moscow_list
                        }
                    >
                        {dataList.map((element) => {
                            return <li>{element}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CatalogPresetFilter
