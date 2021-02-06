import Image from 'next/image'

import BedImage from './../../assets/bed2.jpg'
import StarImage from './../../assets/star.png'
import CalendarImage from './../../assets/date.png'

import styles from './../../styles/components/Reviews/CatalogDesktopReviewCard.module.sass'

const CatalogReviewCard = () => {
    return (
        <div className={styles.catalog_review_card}>
            <div className={styles.catalog_review_card__left}>
                <div className={styles.catalog_review_card__product_smalltext}>
                    Отзыв на кровать
                </div>
                <div className={styles.catalog_review_card__product_title}>
                    BestMebelShop Олимп с ящиком
                </div>
                <div className={styles.catalog_review_card__image}>
                    <img src={BedImage}></img>
                </div>
                <div className={styles.catalog_review_card__price}>
                    6 599 Руб.
                </div>
                <div className={styles.catalog_review_card__credit}>
                    В рассрочку от 1 100 руб/мес
                </div>
            </div>
            <div className={styles.catalog_review_card__right}>
                <div className={styles.catalog_review_card__author_block}>
                    <div
                        className={
                            styles.catalog_review_card__author_block_left
                        }
                    >
                        <div
                            className={styles.catalog_review_card__author_name}
                        >
                            Владислав
                        </div>
                        <div
                            className={styles.catalog_review_card__author_stars}
                        >
                            <Image src={StarImage} width={18} height={16} />
                            <Image src={StarImage} width={18} height={16} />
                            <Image src={StarImage} width={18} height={16} />
                            <Image src={StarImage} width={18} height={16} />
                            <Image src={StarImage} width={18} height={16} />
                        </div>
                        <div
                            className={
                                styles.catalog_review_card__author_home_town
                            }
                        >
                            Санкт-Петербург
                        </div>
                    </div>
                    <div
                        className={
                            styles.catalog_review_card__author_block_right
                        }
                    >
                        <img src={CalendarImage}></img>
                        <span>16.12.2020</span>
                    </div>
                </div>
                <div className={styles.catalog_review_card__text}>
                    Заказывал эту кровать ребёнку в комнату. Ящик был необходим,
                    так как его игрушки уже никуда не помещаются. За свою цену
                    кровать просто идеальная. Ребенок спит с удовольствием
                </div>
                <div className={styles.catalog_reivew_card__period_of_use}>
                    Период использования: <span>Менее месяца</span>
                </div>
            </div>
        </div>
    )
}

export default CatalogReviewCard
