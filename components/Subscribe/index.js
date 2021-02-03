import Link from 'next/link'
import Mails from './../../assets/mails.png'

import subscribe_styles from './../../styles/components/Subscribe/index.module.sass'

const Subscribe = () => {
    return (
        <div className={subscribe_styles.subscribe}>
            <div className={subscribe_styles.container}>
                <div className={subscribe_styles.subscribe__list}>
                    <div className={subscribe_styles.subscribe__left}>
                        <div className={subscribe_styles.subscribe__title}>
                            Подписывайтесь!
                        </div>
                        <div className={subscribe_styles.subscribe__desc}>
                            Узнавайте свежую информацию о скидках и акциях
                            первыми.
                        </div>
                    </div>
                    <div className={subscribe_styles.subscribe__center}>
                        <div className={subscribe_styles.subscribe__form}>
                            <input
                                placeholder="Ваш email"
                                type="email"
                                className={subscribe_styles.subscribe__input}
                            ></input>
                            <button
                                className={subscribe_styles.subscribe__button}
                            >
                                Подписаться
                            </button>
                        </div>
                        <div className={subscribe_styles.subscribe__disclaimer}>
                            * Нажимая на кнопку "Подписаться", я даю согласие на{' '}
                            <Link href="/">
                                <a>обработку персональных данных</a>
                            </Link>
                        </div>
                    </div>
                    <div className={subscribe_styles.subscribe__right}>
                        <img
                            src={Mails}
                            className={subscribe_styles.subscribe__mails_img}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
