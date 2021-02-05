import { Swiper, SwiperSlide } from 'swiper/react'
import URL from './../../components/URLComponent'

import styles from './../../styles/components/Mobile/CatalogLeftMobile.module.sass'

const CatalogLeftMobile = ({
    onClick,
    onCompositionClick,
    onMainFilterClick,
    updateViewType,
    viewType,
}) => {
    return (
        <div className={styles.catalog_left_mobile}>
            <div className={styles.catalog_left_mobile__url}>
                <URL />
            </div>
            <div className={styles.catalog_left_mobile__title}>Кровати</div>
            <div className={styles.catalog_left_mobile__filters}>
                <Swiper
                    className={
                        styles.catalog_left_mobile__filters_list +
                        ' ' +
                        'catalog_left_mobile__filters_list'
                    }
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    autoHeight={true}
                >
                    <SwiperSlide>
                        <div
                            onClick={onCompositionClick}
                            className={`${styles.catalog_left_mobile__filters_list_item} ${styles.catalog_left_mobile__filters_list_item__more}`}
                        >
                            <span></span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Размер', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Размер
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Материал', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Материал
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Тип', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Тип
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Форма', [
                                    'Маленькие',
                                    'Большие',
                                    'Низкие',
                                    'Угловые',
                                    'Высокие',
                                    'Круглые',
                                ])
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Форма
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Комплектация', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Комплектация
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Стоимость', [
                                    'Со скидкой',
                                    'Элитные из массива',
                                    'Недорого',
                                    'В рассрочку',
                                ])
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Стоимость
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Назначение', [
                                    'Для пожилых людей',
                                    'Для высоких',
                                    'Для спальни',
                                    'Для людей с большим весом',
                                    'Для дачи',
                                ])
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Назначение
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Страна', [
                                    'Импортные',
                                    'Российские',
                                    'Малайзия',
                                    'Германия',
                                    'Италия',
                                ])
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Страна
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() => onClick('Популярное', ['На заказ'])}
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Популярное
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Цвет', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Цвет
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Стиль', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Стиль
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Изголовье', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Изголовье
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Декор', [
                                    'С каретной стяжкой',
                                    'Со стразами',
                                    'С пуговицами',
                                ])
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Декор
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            onClick={() =>
                                onClick('Производители', [
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
                            }
                            className={
                                styles.catalog_left_mobile__filters_list_item
                            }
                        >
                            Производители
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    className={
                        styles.catalog_left_mobile__popular_filters_list +
                        ' ' +
                        'catalog_left_mobile__filters_list'
                    }
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    // slidesPerView={4}
                    spaceBetween={5}
                    autoHeight={false}
                >
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item__first_child
                            }
                        >
                            Популярное:
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Двуспальные
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Недорого
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Трансформер
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Подъемные
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Односпальные
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            С ящиками
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Двуспальные
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Изголовье кровати
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Двухярусные
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Аскона
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Мягкие
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Белые
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            140х200
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            160х200
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            200х200
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Из дерева
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Большие
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Распродажа
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Железные
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Тахта
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Малогабаритные
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Круглые
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Угловые
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            Орматек
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            На заказ
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__popular_filters_list_item
                            }
                        >
                            90х200
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    className={
                        styles.catalog_left_mobile__main_filters +
                        ' ' +
                        'catalog_left_mobile__filters_list'
                    }
                    freeMode={true}
                    freeModeMomentum={true}
                    resistance={true}
                    resistanceRatio={0}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    autoHeight={false}
                >
                    <SwiperSlide>
                        <div
                            onClick={onMainFilterClick}
                            className={styles.catalog_left_mobile__main_filter}
                        >
                            <div className={styles.filter_mobile_btn__icon}>
                                <span
                                    className={styles.filter_mobile_btn__icon_1}
                                ></span>
                                <span
                                    className={styles.filter_mobile_btn__icon_2}
                                ></span>
                                <span
                                    className={styles.filter_mobile_btn__icon_3}
                                ></span>
                            </div>
                            <div className={styles.filter_mobile_text}>
                                Фильтр
                            </div>
                            <div className={styles.filter_mobile_count}>1</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={styles.catalog_left_mobile__price_order}
                        >
                            По возрастанию цены
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={
                                styles.catalog_left_mobile__view_type_block
                            }
                            onClick={() => {
                                if (viewType === 'single') {
                                    updateViewType('several')
                                }
                                if (viewType === 'several') {
                                    updateViewType('single')
                                }
                            }}
                        >
                            <div
                                className={
                                    styles.catalog_left_mobile__view_type_block__by_two_card
                                }
                            >
                                {viewType === 'several' && (
                                    <>
                                        <span
                                            className={styles.big_square}
                                        ></span>
                                        <span className={styles.line}></span>
                                    </>
                                )}
                                {viewType === 'single' && (
                                    <>
                                        <div className={styles.first_line}>
                                            <span
                                                className={styles.square}
                                            ></span>
                                            <span
                                                className={styles.square}
                                            ></span>
                                        </div>
                                        <div className={styles.second_line}>
                                            <span
                                                className={styles.square}
                                            ></span>
                                            <span
                                                className={styles.square}
                                            ></span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div
                                className={
                                    styles.catalog_left_mobile__view_type_block__by_one_card
                                }
                            >
                                {/* <div className="first-line">
                                    <span className="square"></span>
                                    <span className="square"></span>
                                </div>
                                <div className="second-line">
                                    <span className="square"></span>
                                    <span className="square"></span>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* <div className="catalog_left_mobile__main-filters">
                    <div
                        onClick={onMainFilterClick}
                        className="catalog_left_mobile__main-filter"
                    >
                        <div className="filter-mobile-btn__icon">
                            <span className="filter-mobile-btn__icon-1"></span>
                            <span className="filter-mobile-btn__icon-2"></span>
                            <span className="filter-mobile-btn__icon-3"></span>
                        </div>
                        <div className="filter-mobile-text">Фильтр</div>
                        <div className="filter-mobile-count">1</div>
                    </div>
                    <div className="catalog_left_mobile__price-order">
                        По возрастанию цены
                    </div>
                    <div className="catalog_left_mobile__view-type-block">
                        <div className="catalog_left_mobile__view-type-block--by-two-card">
                            <span className="big-square"></span>
                            <span className="line"></span>
                        </div>
                        <div className="catalog_left_mobile__view-type-block--by-one-card">
                            <div className="first-line">
                                <span className="square"></span>
                                <span className="square"></span>
                            </div>
                            <div className="second-line">
                                <span className="square"></span>
                                <span className="square"></span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CatalogLeftMobile
