import EmptryStar from './../../assets/empty-star.png'
import Star from './../../assets/star.png'

import LeaveReview from './../Button/LeaveReview'
import ProductPageReviewForm from './../Form/ProductPageReviewForm'
import styles from './../../styles/components/Tabs/ReviewTab.module.sass'

const ReviewTab = () => {
    return (
        <div className={styles.review_tab}>
            <div className={styles.review_tab__rate}>
                <div className={styles.review_tab__rate_wrap}>
                    <div className={styles.review_tab__rating}>
                        Рейтинг <span>0</span> из 5.0
                    </div>
                    <div className={styles.review_tab__rate_stats}>
                        <div className={styles.review_tab__rate_stats__common}>
                            <span className={styles.common}>
                                Общая оценка:{' '}
                            </span>
                            <ul className={styles.stars_list}>
                                <li>
                                    <img
                                        src={EmptryStar}
                                        className={styles.star_image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptryStar}
                                        className={styles.star_image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptryStar}
                                        className={styles.star_image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptryStar}
                                        className={styles.star_image}
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={EmptryStar}
                                        className={styles.star_image}
                                    ></img>
                                </li>
                            </ul>
                            <span className={styles.count}>(0 отзывов)</span>
                        </div>
                        <div
                            className={
                                styles.review_tab__rate_stats__count_wrapper
                            }
                        >
                            <div
                                className={styles.review_tab__rate_stats__count}
                            >
                                <span className={styles.order}>5</span>
                                <ul className={styles.stars_list}>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                </ul>
                                <span className={styles.count}>
                                    (0 отзывов)
                                </span>
                            </div>
                            <div
                                className={styles.review_tab__rate_stats__count}
                            >
                                <span className={styles.order}>4</span>
                                <ul className={styles.stars_list}>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                </ul>
                                <span className={styles.count}>
                                    (0 отзывов)
                                </span>
                            </div>
                            <div
                                className={styles.review_tab__rate_stats__count}
                            >
                                <span className={styles.order}>3</span>
                                <ul className={styles.stars_list}>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                </ul>
                                <span className={styles.count}>
                                    (0 отзывов)
                                </span>
                            </div>
                            <div
                                className={styles.review_tab__rate_stats__count}
                            >
                                <span className={styles.order}>2</span>
                                <ul className={styles.stars_list}>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                </ul>
                                <span className={styles.count}>
                                    (0 отзывов)
                                </span>
                            </div>
                            <div
                                className={styles.review_tab__rate_stats__count}
                            >
                                <span className={styles.order}>1</span>
                                <ul className={styles.stars_list}>
                                    <li>
                                        <img
                                            src={Star}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                    <li>
                                        <img
                                            src={EmptryStar}
                                            className={styles.star_image}
                                        ></img>
                                    </li>
                                </ul>
                                <span className={styles.count}>
                                    (0 отзывов)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.review_tab__rate_btn}>
                    <LeaveReview />
                </div>
            </div>
            <div className={styles.review_tab__form}>
                <ProductPageReviewForm />
            </div>
        </div>
    )
}

export default ReviewTab
