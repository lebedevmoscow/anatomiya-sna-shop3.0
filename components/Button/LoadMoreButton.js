import Link from 'next/link'

// Styles
import button_styles from './../../styles/components/Button/LoadMoreButton.module.sass'

const LoadMoreButton = ({ ready, firstText, secondText, href }) => {
    if (ready) {
        return (
            <Link href={href}>
                <a>
                    <button className={button_styles.load_more_button}>
                        {secondText}
                    </button>
                </a>
            </Link>
        )
    } else {
        return (
            <button className={button_styles.load_more_button}>
                {firstText}
            </button>
        )
    }
}

export default LoadMoreButton
