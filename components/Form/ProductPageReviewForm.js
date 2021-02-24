import Link from 'next/link'

import Star from './../../assets/star.png'
import LoadFilesImage from './../../assets/load-files.png'
import WarningImage from './../../assets/warning.png'
import LeaveReview from '../Button/LeaveReview'

import styles from './../../styles/components/Form/ProductPageReviewForm.module.sass'

const ProductPageReviewForm = () => {
    return (
        <div className={styles.product_page_review_form}>
            <div className={styles.product_page_review_form__title}>
                Оставить отзыв
            </div>
            <div className={styles.product_page_review_form__content}>
                <div className={styles.product_page_review_form__inputs_line}>
                    <input
                        className={`${styles.product_page_review_from__input} ${styles.product_page_review_from__small_input}`}
                        placeholder="Ваше Имя *"
                        type="text"
                        required
                    ></input>
                    <input
                        className={`${styles.product_page_review_from__input} ${styles.product_page_review_from__small_input}`}
                        placeholder="Ваше Email"
                        type="email"
                    ></input>
                    <input
                        className={`${styles.product_page_review_from__input} ${styles.product_page_review_from__small_input}`}
                        placeholder="Ваше город"
                        type="text"
                    ></input>
                </div>
                <input
                    className={`${styles.product_page_review_from__input} ${styles.product_page_review_from__input__green}`}
                    placeholder="Преимущества"
                    type="text"
                ></input>
                <input
                    className={`${styles.product_page_review_from__input} ${styles.product_page_review_from__input__red}`}
                    placeholder="Недостатки"
                    type="text"
                ></input>
                <input
                    className={styles.product_page_review_from__input}
                    placeholder="Комментарий *"
                    type="text"
                    required
                ></input>
                <div
                    className={styles.product_page_review_from__checkboxes_line}
                >
                    <div
                        className={
                            styles.product_page_review_from__checkboxes_line_left_wrap
                        }
                    >
                        <div
                            className={
                                styles.product_page_review_from__checkboxes_line__stars
                            }
                        >
                            <div className={styles.title}>
                                Ваша оценка{' '}
                                <span className={styles.star_required}>*</span>:
                            </div>
                            <ul className={styles.stars_list}>
                                <li>
                                    <img
                                        src={Star}
                                        className={styles.star_image}
                                    ></img>
                                    {/* <Image
                                        src={Star}
                                        height={23.96}
                                        width={25}
                                    /> */}
                                </li>
                                <li>
                                    <img
                                        src={Star}
                                        className={styles.star_image}
                                    ></img>

                                    {/* <Image
                                        src={Star}
                                        height={23.96}
                                        width={25}
                                    /> */}
                                </li>
                                <li>
                                    <img
                                        src={Star}
                                        className={styles.star_image}
                                    ></img>

                                    {/* <Image
                                        src={Star}
                                        height={23.96}
                                        width={25}
                                    /> */}
                                </li>
                                <li>
                                    <img
                                        src={Star}
                                        className={styles.star_image}
                                    ></img>

                                    {/* <Image
                                        src={Star}
                                        height={23.96}
                                        width={25}
                                    /> */}
                                </li>
                                <li>
                                    <img
                                        src={Star}
                                        className={styles.star_image}
                                    ></img>

                                    {/* <Image
                                        src={Star}
                                        height={23.96}
                                        width={25}
                                    /> */}
                                </li>
                            </ul>
                        </div>
                        <div
                            className={
                                styles.product_page_review_from__checkboxes_line__recommend
                            }
                        >
                            <div className={styles.title}>
                                Рекомендуете товар:{' '}
                                <span className={styles.star_required}>*</span>
                            </div>
                            <ul className={styles.checkboxes_list}>
                                <li>
                                    <label
                                        className={
                                            styles.checkboxes_list__checkbox_container
                                        }
                                    >
                                        <input type="checkbox" />
                                        <span
                                            className={
                                                styles.checkboxes_list__checkmark
                                            }
                                        ></span>
                                        <div
                                            className={
                                                styles.checkboxes_list__title
                                            }
                                        >
                                            Да
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label
                                        className={
                                            styles.checkboxes_list__checkbox_container
                                        }
                                    >
                                        <input type="checkbox" />
                                        <span
                                            className={
                                                styles.checkboxes_list__checkmark
                                            }
                                        ></span>
                                        <div
                                            className={
                                                styles.checkboxes_list__title
                                            }
                                        >
                                            Нет
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={
                                styles.product_page_review_from__checkboxes_line__period_of_use
                            }
                        >
                            <div className={styles.title}>
                                Период использования:{' '}
                                <span className={styles.star_required}>*</span>
                            </div>
                            <ul className={styles.checkboxes_list}>
                                <li>
                                    <label
                                        className={
                                            styles.checkboxes_list__checkbox_container
                                        }
                                    >
                                        <input type="checkbox" />
                                        <span
                                            className={
                                                styles.checkboxes_list__checkmark
                                            }
                                        ></span>
                                        <div
                                            className={
                                                styles.checkboxes_list__title
                                            }
                                        >
                                            Менее месяца
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label
                                        className={
                                            styles.checkboxes_list__checkbox_container
                                        }
                                    >
                                        <input type="checkbox" />
                                        <span
                                            className={
                                                styles.checkboxes_list__checkmark
                                            }
                                        ></span>
                                        <div
                                            className={
                                                styles.checkboxes_list__title
                                            }
                                        >
                                            Менее года
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label
                                        className={
                                            styles.checkboxes_list__checkbox_container
                                        }
                                    >
                                        <input type="checkbox" />
                                        <span
                                            className={
                                                styles.checkboxes_list__checkmark
                                            }
                                        ></span>
                                        <div
                                            className={
                                                styles.checkboxes_list__title
                                            }
                                        >
                                            Более года
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={
                            styles.product_page_review_from__checkboxes_line_right
                        }
                    >
                        <span className={styles.star_required}>*</span>{' '}
                        Обязательные поля
                    </div>
                </div>
                <div
                    className={styles.product_page_review_form__load_file_block}
                >
                    <label class={styles.custom_file_upload}>
                        <input type="file" />
                        <img
                            src={LoadFilesImage}
                            className={styles.loadfiles_image}
                        ></img>
                        {/* <Image
                            className="image"
                            width={279}
                            height={56}
                            src={LoadFilesImage}
                        /> */}
                        <span className={styles.hint}>
                            Нажмите или перетащите сюда фотографии или видео для
                            загрузки (0/10)
                        </span>
                    </label>
                </div>
                <div className={styles.product_page_review_form__rules_block}>
                    <div className={styles.title_line}>
                        {/* <Image
                            className="title_line__image"
                            src={WarningImage}
                            width={50}
                            height={43}
                        /> */}
                        <img
                            className={styles.title_line__image}
                            src={WarningImage}
                        ></img>
                        <span className={styles.title_line__text}>
                            В отзывах запрещено:
                        </span>
                    </div>
                    <ul className={styles.product_page_review_form__rules_list}>
                        <li>
                            - Использовать нецензурные выражения, оскорбления,
                            угрозы.
                        </li>
                        <li>
                            - Публиковать адреса, телефоны и ссылки, содержащие
                            прямую рекламу
                        </li>
                        <li>
                            - Обсуждать цену товара в разных регионах и ее
                            изменение
                        </li>
                        <li>
                            - Писать отвлеченные от темы и бессмысленные
                            комментарии
                        </li>
                    </ul>
                    <div className={styles.product_page_review_form__rules_btn}>
                        <LeaveReview />
                    </div>
                    <div
                        className={
                            styles.product_page_review_form__rules_personal_data_agree
                        }
                    >
                        Нажимая кнопу “Оставить отзыв”, я даю согласие на{' '}
                        <Link href="/">
                            <a>обработку персональных данных</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageReviewForm
