import Link from 'next/link'
import styles from './../../styles/components/Filters/CatalogPresentFilter.module.sass'

const CatalogPresetFilter = ({ onClose, className, title, dataList = [] }) => {
    console.log('dataList', dataList)
    return (
        <div
            className={`${styles.mobile_burger_menu_city_choise} mobile_burger_menu_city_choise__${className}`}
        >
            <div className={styles.container}>
                <div className={styles.mobile_burger_menu_city_choise__labels}>
                    <i onClick={onClose} className={styles.arrow_left}></i>
                    <span>{title}</span>
                </div>
                <ul
                    className={
                        styles.mobile_burger_menu_city_choise__moscow_list
                    }
                >
                    {dataList.map((element) => {
                        return (
                            <Link href={'http://localhost:3000' + element.url}>
                                <a>
                                    <li>{element.title}</li>
                                </a>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CatalogPresetFilter
