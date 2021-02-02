import Link from 'next/link'

import help_styles from './../../styles/components/Banners/HelpPickUp.module.sass'

const HelpPickUpMattress = () => {
    return (
        <div className={help_styles.help_pick_up}>
            <div className={help_styles.help_pick_up__content}>
                <div className={help_styles.help_pick_up__title}>
                    Подбор матраса
                </div>
                <div className={help_styles.help_pick_up__desc}>
                    20 секунд и перед вами лучшие варианты!
                </div>
                <Link href="/">
                    <a>
                        <button className={help_styles.help_pick_up__btn}>
                            Подобрать
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default HelpPickUpMattress
