const MobileBurgerMenuChoiseCity = ({
    onCloseCityList,
    className,
    regions,
}) => {
    const onRegionItemClickHandler = (target) => {
        if (hasWindow) {
            const list = document.querySelectorAll(
                '.mobile-burger-menu-city-choise__region-item'
            )
            for (let i = 0; i < list.length; i++) {
                if (
                    list[i].querySelector(
                        '.mobile-burger-menu-city-choise__grand-letter'
                    ).innerHTML === target
                ) {
                    list[i].classList.toggle('region-item-opened')
                }
            }
        }
    }

    const hasWindow = typeof window !== 'undefined'

    return (
        <div
            style={{ display: 'block' }}
            className={`mobile-burger-menu-city-choise mobile-burger-menu-city-choise--${className}`}
        >
            <div className="container">
                <div className="mobile-burger-menu-city-choise__labels">
                    <i onClick={onCloseCityList} className="arrow-left"></i>
                    <span>Выбор города</span>
                </div>
                <div className="mobile-burger-menu-city-choise__title">
                    Москва и МО
                </div>
                <ul className="mobile-burger-menu-city-choise__moscow-list">
                    {regions &&
                        regions.moscow.map((region, id) => {
                            return (
                                <li>
                                    <label className="main-filter__checkbox-container">
                                        <input type="checkbox" />
                                        <span className="main-filter__checkmark"></span>
                                        <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                            {region.title}
                                        </div>
                                    </label>
                                </li>
                            )
                        })}
                </ul>
                <div className="mobile-burger-menu-city-choise__title">
                    Регионы
                </div>
                {/* {regions.other.map((region, id) => {
                    return <div className="mobile-burger-menu-city-choise__region-item" onClick={() => region}></div>
                })} */}
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('А')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        А
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Ангарск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Архангельск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Астрахань
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Б')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Б
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Барнаул
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Белгород
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Брянск
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('В')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        В
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Владивосток
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Владикавказ
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Владимир
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Волгоград
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Вологда
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Воронеж
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Е')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Е
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Екатеринбург
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('И')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        И
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Иваново
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Ижевск
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('К')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        К
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Казань
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Калининград
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Калуга
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Кемерово
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Киров
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Кострома
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Краснодар
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Красноярск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Курган
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Курск
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Л')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Л
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Липецк
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('М')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        М
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Магнитогорск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Мурманск
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Н')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Н
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Набережные Челны
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Нижний Новгород
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Новокузнецск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Новосибирск
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('О')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        О
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Омск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Орёл
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Оренбург
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('П')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        П
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Пенза
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Пермь
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Петрозаводск
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Р')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Р
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Ростов-на-Дону
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Рязань
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('С')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        С
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Самара
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Санкт-Петербург
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Саратов
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Севастополь
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Симферополь
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Смоленск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Сочи
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Ставрополь
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Сургут
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Т')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Т
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Тамбов
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Тверь
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Тольятти
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Томск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Тула
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Тюмень
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('У')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        У
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Ульяновск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Уфа
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Х')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Х
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Хабаровск
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Ч')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Ч
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Чебоксары
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Челябинск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Череповец
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Чита
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className="mobile-burger-menu-city-choise__region-item"
                    onClick={() => onRegionItemClickHandler('Р')}
                >
                    <div className="mobile-burger-menu-city-choise__grand-letter">
                        Я
                    </div>
                    <ul className="mobile-burger-menu-city-choise__region-list">
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Якутск
                                </div>
                            </label>
                        </li>
                        <li className="mobile-burger-menu-city-choise__region-list-item">
                            <label className="main-filter__checkbox-container">
                                <input type="checkbox"></input>
                                <span className="main-filter__checkmark"></span>
                                <div className="mobile-burger-menu-city-choise__moscow-city-name">
                                    Ярославль
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileBurgerMenuChoiseCity
