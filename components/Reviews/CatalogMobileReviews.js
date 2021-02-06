import Image from 'next/image'

import BedImage from './../../assets/bed2.jpg'
import CalendarImage from './../../assets/date.png'
import StarImage from './../../assets/star.png'

import styles from './../../styles/components/Reviews/CatalogMobileReviws.module.sass'

const CatalogMobileReviews = () => {
    return (
        <div className={styles.catalog_mobile_review_section}>
            <div className={styles.catalog_mobile_review_section__smalltext}>
                Отзыв на кровать
            </div>
            <div className={styles.catalog_mobile_review_section__title}>
                BestMebelShop Олимп с ящиком
            </div>
            <div className={styles.catalog_mobile_review_section__image}>
                <Image src={BedImage} width={350} height={221.88} />
            </div>
            <div className={styles.catalog_mobile_review_section__price}>
                6 599 Руб.
            </div>
            <div className={styles.catalog_mobile_review_section__price_credit}>
                В рассрочку от 1 100 руб/мес
            </div>
            <div className={styles.catalog_mobile_review_section__author}>
                <div
                    className={styles.catalog_mobile_review_section__authorname}
                >
                    Владислав
                </div>
                <div className={styles.catalog_mobile_review_section__date}>
                    <img className="image" src={CalendarImage}></img>
                    <span>16.12.2020</span>
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_from
                    }
                >
                    Отзыв предоставлен компанией yandex.ru
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__rate}>
                <div className={styles.catalog_mobile_review_section__stars}>
                    <Image src={StarImage} width={16.83} height={16} />
                    <Image src={StarImage} width={16.83} height={16} />
                    <Image src={StarImage} width={16.83} height={16} />
                    <Image src={StarImage} width={16.83} height={16} />
                    <Image src={StarImage} width={16.83} height={16} />
                </div>
                <div className={styles.catalog_mobile_review_section__opinion}>
                    Рекомендую
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__period_of_use
                    }
                >
                    Период использования: менее месяца
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__pros}>
                <div className={styles.catalog_mobile_review_section__subtitle}>
                    Преимщуества:
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_text
                    }
                >
                    цена, качество
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__cons}>
                <div className={styles.catalog_mobile_review_section__subtitle}>
                    Недостатки:
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_text
                    }
                >
                    -
                </div>
            </div>
            <div className={styles.catalog_mobile_review_section__comment}>
                <div className={styles.catalog_mobile_review_section__subtitle}>
                    Комментарий:
                </div>
                <div
                    className={
                        styles.catalog_mobile_review_section__review_text
                    }
                >
                    Заказывал эту кровать ребёнку в комнату. Ящик был необходим,
                    так как его игрушки уже никуда не помещаются. За свою цену
                    кровать просто идеальная. Ребенок спит с удовольствием
                </div>
            </div>
            <span className={styles.catalog_mobile_review_section__line}></span>
        </div>
    )
}

export default CatalogMobileReviews
