import Link from 'next/link'
import useMediaQuery from './../../hooks/useMedia'
import Mails, { sub } from './../../assets/mails.png'

import subscribe_styles from './../../styles/components/Subscribe/index.module.sass'
import common_styles from './../../styles/common.module.sass'

const Subscribe = () => {
    // Breakpoints
    const breakpoint1023 = useMediaQuery(1023)

    const display = !breakpoint1023 ? 'block' : 'none'

    return (
        <div style={{ display }} className={subscribe_styles.subscribe}>
            <div className={common_styles.container}>
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
