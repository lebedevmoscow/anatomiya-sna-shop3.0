import Star from './../../assets/star.png'
import EmptyStar from './../../assets/empty-star.png'
import styles from './../../styles/components/Tabs/ProductPageReviewTabContentMobile.module.sass'

const ProductPageReviewTabContentMobile = ({
    title,
    content,
    className,
    onClose,
    onClick,
}) => {
    return (
        <>
            <div
                style={
                    className === `${styles.styles}`
                        ? { display: 'none' }
                        : { display: 'block' }
                }
                className={`${styles.mobile_burger_menu_city_choise}`}
            >
                <div className={styles.mobile_burger_menu_city_choise__labels}>
                    <i onClick={onClose} className={styles.arrow_left}></i>
                    <span>{title}</span>
                </div>
                <div className={styles.container}>
                    <ul
                        className={
                            styles.mobile_burger_menu_city_choise__moscow_list
                        }
                    >
                        {/* {content} */}
                    </ul>
                </div>
            </div>

            <div className={styles.product_page_review_tab_content_mobile}>
                <div
                    className={
                        styles.product_page_review_tab_content_mobile__content
                    }
                >
                    <div
                        className={
                            styles.product_page_review_tab_content_mobile__rating
                        }
                    >
                        Рейтинг <span>0</span> из 5.0
                    </div>
                    <div
                        className={
                            styles.product_page_review_tab_content_mobile__rate_stats
                        }
                    >
                        <div
                            className={
                                styles.product_page_review_tab_content_mobile__common_rate
                            }
                        >
                            <strong>Общая оценка:</strong>
                            <ul className={styles.stars_list}>
                                <li>
                                    <img
                                        src={EmptyStar}
                                        className={styles.star__image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptyStar}
                                        className={styles.star__image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptyStar}
                                        className={styles.star__image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptyStar}
                                        className={styles.star__image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptyStar}
                                        className={styles.star__image}
                                    ></img>
                                </li>
                            </ul>
                            <div className={styles.count}>(0 отзывов)</div>
                        </div>
                    </div>
                    <ul
                        className={
                            styles.product_page_review_tab_content_mobile__rate_list
                        }
                    >
                        <li
                            className={
                                styles.product_page_review_tab_content_mobile__rate_list_item
                            }
                        >
                            <span className={styles.id}>5</span>
                            <ul className={styles.stars_list}>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                            </ul>
                            <div className={styles.count}>0 отзывов</div>
                        </li>
                        <li
                            className={
                                styles.product_page_review_tab_content_mobile__rate_list_item
                            }
                        >
                            <span className={styles.id}>4</span>
                            <ul className={styles.stars_list}>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                            </ul>
                            <div className={styles.count}>0 отзывов</div>
                        </li>
                        <li
                            className={
                                styles.product_page_review_tab_content_mobile__rate_list_item
                            }
                        >
                            <span className={styles.id}>3</span>
                            <ul className={styles.stars_list}>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                            </ul>
                            <div className={styles.count}>0 отзывов</div>
                        </li>
                        <li
                            className={
                                styles.product_page_review_tab_content_mobile__rate_list_item
                            }
                        >
                            <span className={styles.id}>2</span>
                            <ul className={styles.stars_list}>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                            </ul>
                            <div className={styles.count}>0 отзывов</div>
                        </li>
                        <li
                            className={
                                styles.product_page_review_tab_content_mobile__rate_list_item
                            }
                        >
                            <span className={styles.id}>1</span>
                            <ul className={styles.stars_list}>
                                <img
                                    src={Star}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                                <img
                                    src={EmptyStar}
                                    className={styles.star__image}
                                ></img>
                            </ul>
                            <div className={styles.count}>0 отзывов</div>
                        </li>
                    </ul>
                </div>
            </div>
            <button
                onClick={onClick}
                className={
                    styles.product_page_review_tab_content_mobile__button
                }
            >
                Оставить отзыв
            </button>
        </>
    )
}

export default ProductPageReviewTabContentMobile
