import Link from 'next/link'
import Image from 'next/image'

import useMedia from './../../hooks/useMedia'

// Styles
import menu_styles from './../../styles/components/Mobile/MobileMenuCatalog.module.sass'

const MobileMenuCatalog = ({ banner, mobilemenuCatalogs }) => {
    const breakpoint769 = useMedia(769)

    return (
        <>
            {banner && breakpoint769 && (
                <Link href={'/' + banner.slug}>
                    <a style={{ display: 'block', marginTop: '43px' }}>
                        <Image
                            className={menu_styles.mobile_menu__mini_banner}
                            src={'https://anatomiyasna.ru' + banner.image}
                            width={688}
                            height={41.02}
                        />
                    </a>
                </Link>
            )}
            <div className={menu_styles.container}>
                <div className={menu_styles.mobile_menu}>
                    <ul className={menu_styles.mobile_menu__list}>
                        {mobilemenuCatalogs.map((catalog, index) => {
                            return (
                                <li
                                    key={index}
                                    className={menu_styles.mobile_menu__item}
                                >
                                    <Image
                                        width={46}
                                        height={46}
                                        src={
                                            'https://www.anatomiyasna.ru' +
                                            catalog.image
                                        }
                                    />
                                    <Link href={'/' + catalog.url}>
                                        <a>
                                            <span>{catalog.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileMenuCatalog
