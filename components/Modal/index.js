import { useEffect } from 'react'
import Link from 'next/link'
import styles from './../../styles/components/Modal/index.module.sass'
import InputMask from 'react-input-mask'

const Modal = ({
    title,
    closed,
    text,
    onClose,
    html,
    IsMore = true,
    Popup = false,
    isCart,
    BuyOneClick = false,
}) => {
    const hasWindow = typeof window !== 'undefined'

    useEffect(() => {
        if (!closed && hasWindow) {
            document.querySelector('html').style.overflowY = 'hidden'
        } else if (closed && hasWindow) {
            document.querySelector('html').style.overflowY = 'visible'
        }
    }, [closed])

    return (
        <div
            style={closed ? { display: 'none' } : { display: 'block' }}
            className={styles.catalog_main_mobile_filter}
        >
            <div className={`${styles.mobile_burger_menu_city_choise}`}>
                <div className={styles.container}>
                    <div
                        className={
                            styles.mobile_burger_menu_city_choise__labels
                        }
                    >
                        <i
                            onClick={() => {
                                onClose()
                            }}
                            className={styles.arrow_left}
                        ></i>
                        <span className={styles.modal_titel}>{title}</span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.text}>{text || html}</div>
                    {IsMore && (
                        <div className={styles.buttons}>
                            <button
                                onClick={() => onClose()}
                                className={styles.button__more}
                            >
                                Готово
                            </button>
                        </div>
                    )}
                    {Popup && (
                        <div className={styles.buttons}>
                            <Link href="/">
                                <a>
                                    <button className={styles.button__moreinfo}>
                                        Подробнее
                                    </button>
                                </a>
                            </Link>
                            <button className={styles.button__proceed}>
                                Продолжить покупки
                            </button>
                        </div>
                    )}
                    {isCart && (
                        <div className={styles.cart_wrapper}>
                            <div className={styles.cart_title}>
                                Добавлен в корзину!
                            </div>
                            <button className={styles.go_to_cart}>
                                Перейти в корзину
                            </button>
                            <button
                                onClick={() => onClose()}
                                className={styles.proceed}
                            >
                                Продолжить покупки
                            </button>
                        </div>
                    )}
                    {BuyOneClick && (
                        <div className={styles.buy_one_click_wrap}>
                            <div className={styles.buy_one_click_wrap_title}>
                                Заполните форму быстрого заказа, и наши
                                менеджеры свяжутся с вами.
                            </div>
                            <div className={styles.buy_one_click_form_title}>
                                Ваш телефон*
                            </div>
                            <div className={styles.buy_one_click_form_wrap}>
                                <InputMask
                                    placeholder={'+7 (___) ___  __ __'}
                                    mask="+7 (999) 99 99"
                                    maskChar="_"
                                />
                            </div>
                            <button className={styles.go_to_cart}>
                                Отправить заказ
                            </button>
                            <div className={styles.buy_one_click_copy}>
                                Нажимая на кнопку, я даю согласие на <br />
                                <Link href="/">
                                    <a>обработку персональных данных</a>
                                </Link>
                            </div>
                            <button
                                onClick={() => onClose()}
                                className={styles.proceed}
                            >
                                Продолжить покупки
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal
