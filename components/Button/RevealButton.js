import Link from 'next/link'
import styles from './../../styles/components/Button/RevealButton.module.sass'

const RevealButton = ({
    state,
    onClick,
    text = false,
    textAdditional = false,
    href,
}) => {
    if (href && state === 'unfolded' && textAdditional) {
        return (
            <Link href={href}>
                <a>
                    <button onClick={onClick} className={styles.reveal_button}>
                        {state === 'folded' && (text || 'Развернуть +')}
                        {state === 'unfolded' &&
                            (textAdditional || 'Свернуть -')}
                    </button>
                </a>
            </Link>
        )
    }
    return (
        <button onClick={onClick} className={styles.reveal_button}>
            {state === 'folded' && (text || 'Развернуть +')}
            {state === 'unfolded' && (textAdditional || 'Свернуть -')}
        </button>
    )
}

export default RevealButton
