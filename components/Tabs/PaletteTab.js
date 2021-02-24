import MaterialImage1 from './../../assets/materials/material1.jpg'
import MaterialImage2 from './../../assets/materials/material2.jpg'
import MaterialImage3 from './../../assets/materials/material3.jpg'
import FoundamentImage1 from './../../TEMP/foundament/1.jpg'
import FoundamentImage2 from './../../TEMP/foundament/2.jpg'
import FoundamentImage3 from './../../TEMP/foundament/3.jpg'
import FoundamentImage4 from './../../TEMP/foundament/4.jpg'

import styles from './../../styles/components/Tabs/PaletteTab.module.sass'

const PaletteTab = () => {
    return (
        <div className={styles.palette_tab}>
            <div className={styles.palette_tab__block}>
                <div className={styles.palette_tab__subtitle}>
                    Материал каркаса
                </div>
                <div className={styles.palette_tab__options}>
                    <ul className={styles.palette_tab__options_list}>
                        <li className={styles.palette_tab__options_list_item}>
                            {/* <Image
                                src={MaterialImage1}
                                width={68.44}
                                height={68.44}
                            /> */}
                            <img
                                className={
                                    styles.palette_tab__options_list_item_image
                                }
                                src={MaterialImage1}
                            ></img>
                            <div className={styles.palette_tab__hover_element}>
                                <img src={MaterialImage1} />
                                <span
                                    className={
                                        styles.palette_tab__hover_element_title
                                    }
                                >
                                    ЛДСП, цвет дуб молочный
                                </span>
                            </div>
                        </li>
                        <li className={styles.palette_tab__options_list_item}>
                            {/* <Image
                                src={MaterialImage2}
                                width={68.44}
                                height={68.44}
                            /> */}
                            <img
                                className={
                                    styles.palette_tab__options_list_item_image
                                }
                                src={MaterialImage2}
                            ></img>
                            <div className={styles.palette_tab__hover_element}>
                                <img src={MaterialImage2} />
                                <span
                                    className={
                                        styles.palette_tab__hover_element_title
                                    }
                                >
                                    ЛДСП, цвет дуб молочный
                                </span>
                            </div>
                        </li>
                        <li className={styles.palette_tab__options_list_item}>
                            {/* <Image
                                src={MaterialImage3}
                                width={68.44}
                                height={68.44}
                            /> */}
                            <img
                                className={
                                    styles.palette_tab__options_list_item_image
                                }
                                src={MaterialImage3}
                            ></img>
                            <div className={styles.palette_tab__hover_element}>
                                <img src={MaterialImage3} />
                                <span
                                    className={
                                        styles.palette_tab__hover_element_title
                                    }
                                >
                                    ЛДСП, цвет дуб молочный
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.palette_tab__block}>
                <div className={styles.palette_tab__subtitle}>Основание</div>
                <div className={styles.palette_tab__options}>
                    <ul className={styles.palette_tab__options_list}>
                        <li className={styles.palette_tab__options_list_item}>
                            {/* <Image
                                src={FoundamentImage1}
                                width={68.44}
                                height={68.44}
                            /> */}
                            <img
                                className={
                                    styles.palette_tab__options_list_item_image
                                }
                                src={FoundamentImage1}
                            ></img>
                            <div className={styles.palette_tab__hover_element}>
                                <img src={FoundamentImage1} />
                                <span
                                    className={
                                        styles.palette_tab__hover_element_title
                                    }
                                >
                                    ЛДСП, цвет дуб молочный
                                </span>
                            </div>
                        </li>
                        <li className={styles.palette_tab__options_list_item}>
                            {/* <Image
                                src={FoundamentImage2}
                                width={68.44}
                                height={68.44}
                            /> */}
                            <img
                                className={
                                    styles.palette_tab__options_list_item_image
                                }
                                src={FoundamentImage2}
                            ></img>
                            <div className={styles.palette_tab__hover_element}>
                                <img src={FoundamentImage2} />
                                <span
                                    className={
                                        styles.palette_tab__hover_element_title
                                    }
                                >
                                    ЛДСП, цвет дуб молочный
                                </span>
                            </div>
                        </li>
                        <li className={styles.palette_tab__options_list_item}>
                            {/* <Image
                                src={FoundamentImage3}
                                width={68.44}
                                height={68.44}
                            /> */}
                            <img
                                className={
                                    styles.palette_tab__options_list_item_image
                                }
                                src={FoundamentImage3}
                            ></img>
                            <div className={styles.palette_tab__hover_element}>
                                <img src={FoundamentImage3} />
                                <span
                                    className={
                                        styles.palette_tab__hover_element_title
                                    }
                                >
                                    ЛДСП, цвет дуб молочный
                                </span>
                            </div>
                        </li>
                        <li className={styles.palette_tab__options_list_item}>
                            {/* <Image
                                src={FoundamentImage4}
                                width={68.44}
                                height={68.44}
                            /> */}
                            <img
                                className={
                                    styles.palette_tab__options_list_item_image
                                }
                                src={FoundamentImage4}
                            ></img>
                            <div className={styles.palette_tab__hover_element}>
                                <img src={FoundamentImage4} />
                                <span
                                    className={
                                        styles.palette_tab__hover_element_title
                                    }
                                >
                                    ЛДСП, цвет дуб молочный
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PaletteTab
