import Link from 'next/link'

// Styles
import styles from './../../styles/components/Header/AdvertBanner.module.sass'

const AdvertBanner = ({ banner }) => {
    if (!banner) {
        return null
    }
    return (
        <Link href={banner.slug}>
            <a>
                <div className={styles.header__sale}>
                    <img src={'https://anatomiyasna.ru/' + banner.image} />
                </div>
            </a>
        </Link>
    )
}

export default AdvertBanner
