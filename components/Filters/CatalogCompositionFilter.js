import { useState } from 'react'

import styles from './../../styles/components/Filters/CatalogCompositionFilter.module.sass'

const CatalogCompositionFilter = ({
    title,
    onClose,
    className,
    dataList = [],
}) => {
    const [additionalData, setAdditionalData] = useState([])
    const [additionalModalTitle, setAdditionalModalTitle] = useState(null)

    const onAdditionalModalClickHandler = (element) => {
        switch (element) {
            case 'Размер':
                setAdditionalData([
                    'Односпальная',
                    'Полутороспальная',
                    'Двуспальные',
                    'Евро',
                    '70x190',
                    '70x195',
                    '70x200',
                    '80x190',
                    '80x195',
                    '80x200',
                    '90x190',
                    '90x195',
                    '90x200',
                    '110x200',
                    '100x200',
                    '120x190',
                    '120x200',
                    '120x195',
                    '140x190',
                    '150x190',
                    '140x200',
                    '140x195',
                    '150x200',
                    '150x195',
                    '160x190',
                    '180x190',
                    '160x200',
                    '160x195',
                    '180x200',
                    '200x200',
                    '180x195',
                    'D200',
                    'D210',
                    'D220',
                    'D230',
                ])
                break

            case 'Материал':
                setAdditionalData([
                    'Из березы',
                    'Из бука',
                    'Из ДСП',
                    'Из дуба',
                    'Из экокожи',
                    'Из гивеии',
                    'Из ясеня',
                    'Из кожи',
                    'Из ЛДСП',
                    'Из массива дерева',
                    'Из МДФ',
                    'Из шпона',
                    'Из сосны',
                    'Из ткани',
                    'Из велюра',
                ])
                break

            case 'Тип':
                setAdditionalData([
                    'Кованые',
                    'Деревянные',
                    'Интерьерные',
                    'Каркасные',
                    'Никелированные',
                    'Ортопедические',
                    'Двухъярусные',
                    'Поддиумные',
                    'Пружинные',
                    'Трансформер',
                    'Встроенные',
                    'Металлические',
                    'Мягкие',
                    'Резные',
                    'Жесткие',
                    'Разборные',
                    'Парящие',
                    'Кушетки',
                    'Тахта',
                    'Софа',
                ])
                break

            case 'Форма':
                setAdditionalData([
                    'Маленькие',
                    'Большие',
                    'Низкие',
                    'Угловые',
                    'Высокие',
                    'Круглые',
                ])
                break

            case 'Комплектация':
                setAdditionalData([
                    'Без ножек',
                    'С латунными спинками',
                    'На высоких ножках',
                    'С подъемным механизмом',
                    'С обивкой',
                    'С основанием',
                    'С боковой спинкой',
                    'С подстветкой',
                    'С полками',
                    'С ящиками',
                    'С изголовьем',
                    'Без основания',
                    'С матрасом',
                    'Без матраса',
                    'С балдахином',
                ])
                break

            case 'Стоимость':
                setAdditionalData([
                    'Со скидкой',
                    'Элитные из массива',
                    'Недорого',
                    'В рассрочку',
                ])
                break

            case 'Назначение':
                setAdditionalData([
                    'Для пожилых людей',
                    'Для высоких',
                    'Для спальни',
                    'Для людей с большим весом',
                    'Для дачи',
                ])
                break

            case 'Страна':
                setAdditionalData([
                    'Импортные',
                    'Российские',
                    'Малайзия',
                    'Германия',
                    'Италия',
                ])
                break

            case 'Популярное':
                setAdditionalData(['На заказ'])
                break

            case 'Цвет':
                setAdditionalData([
                    'Белые',
                    'Бежевые',
                    'Розовые',
                    'Золотые',
                    'Синие',
                    'Зеленые',
                    'Серые',
                    'Черные',
                    'Голубые',
                    'Желтые',
                    'Фиолетовые',
                    'Красные',
                    'Венге',
                    'Дуб сонома',
                    'Беленый дуб',
                    'Слоновая кость',
                    'Белый глянец',
                    'Ясень шимо светлый',
                ])
                break

            case 'Стиль':
                setAdditionalData([
                    'В восточном стиле',
                    'Кантри',
                    'Скандинавский стиль',
                    'Дизайнерские',
                    'Современный стиль',
                    'Минимализм',
                    'Модерн',
                    'Хай-тек',
                    'Классические',
                    'Лофт',
                    'Прованс',
                    'В японском стиле',
                ])
                break

            case 'Изголовье':
                setAdditionalData([
                    'Мягкое',
                    'Без изголовья',
                    'Металлическое',
                    'Изогнутое',
                    'Наклонное',
                    'Из экокожи',
                    'Тканневое',
                    'Стеганное',
                    'Резное',
                    'Низкое',
                    'Высокое',
                    'Широкое',
                    'До потолка',
                    'С каретной стяжкой',
                    'С регулируемым наклоном',
                    'Бархатное',
                ])
                break

            case 'Декор':
                setAdditionalData([
                    'С каретной стяжкой',
                    'Со стразами',
                    'С пуговицами',
                ])
                break

            case 'Производители':
                setAdditionalData([
                    'Аскона',
                    'DreamLine',
                    'Promtex-Orient',
                    'Chepers',
                    'Sontelle',
                    'Lonax',
                    'Benartti',
                    'Dimax',
                    'Орматек',
                    'Райтон',
                    'Perrino',
                    'Стиллмет',
                    'Sonberry',
                    'Сонум',
                    'Шарм-дизайн',
                    'Capitone Room',
                    'ВМК-Шале',
                    'Sleep Art',
                    'Nuvola',
                    'Alitte',
                    'Labeille',
                    'Торис',
                    'Galaxy',
                    'Компасс',
                    'Francesco Rossi',
                    'Mebel Impex',
                    'OrthoSleep',
                    'ProSon',
                    'Олмеко',
                    'Сильва',
                    'Лером',
                    'Гранд Кволити',
                    'Уют Сервис',
                    'Агат',
                    'Волхова',
                    'Юта',
                    'R-Home',
                    'Евразия Дизайн',
                    'МиК',
                    'Woodville',
                ])
                break

            default:
                setAdditionalData([])
                break
        }

        setAdditionalModalTitle(element)
    }

    return (
        <div className={styles.catalog_composition_filter}>
            <div
                className={`${styles.mobile_burger_menu_city_choise} mobile_burger_menu_city_choise__${className}`}
            >
                <div className={styles.container}>
                    {additionalData.length === 0 && (
                        <div
                            className={
                                styles.mobile_burger_menu_city_choise__labels
                            }
                        >
                            <i
                                onClick={onClose}
                                className={styles.arrow_left}
                            ></i>
                            <span>{title}</span>
                        </div>
                    )}
                    {additionalData.length !== 0 && (
                        <div
                            className={
                                styles.mobile_burger_menu_city_choise__labels
                            }
                        >
                            <i
                                onClick={() => {
                                    setAdditionalData([])
                                }}
                                className={styles.arrow_left}
                            ></i>
                            <span>{additionalModalTitle}</span>
                        </div>
                    )}
                    <ul
                        className={
                            styles.mobile_burger_menu_city_choise__moscow_list
                        }
                    >
                        {additionalData.length === 0 &&
                            dataList.map((element, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            onAdditionalModalClickHandler(
                                                element
                                            )
                                        }}
                                    >
                                        <span>{element}</span>
                                        <i className={styles.arrow_right}></i>
                                    </li>
                                )
                            })}
                        {additionalData.length !== 0 &&
                            additionalData.map((element, index) => {
                                return <li key={index}>{element}</li>
                            })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CatalogCompositionFilter
