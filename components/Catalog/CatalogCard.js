import card_styles from './../../styles/components/Catalog/CatalogCard.module.sass'

const CatalogCard = ({ title, slug, img, count }) => {
    return (
        <div
            className={card_styles.good_item}
            // style={{ background: `url(${img}) no-repeat` }}
            style={{
                background:
                    'url(https://www.anatomiyasna.ru/uploads/images/catalog_images/krovatnye-boksy-anatomiya-sna.png) no-repeat',
            }}
        >
            <div className={card_styles.good_item__shadow}></div>
            <div className={card_styles.good_item__title}>{title}</div>
            <div className={card_styles.good_item__onhover}>
                <div className={card_styles.good_item__onhover_title}>
                    {title}
                </div>
                <div className={card_styles.good_item__onhover_amount}>
                    {count} товаров
                </div>
            </div>
        </div>
    )
}

export default CatalogCard
