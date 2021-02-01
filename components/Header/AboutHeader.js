import Link from 'next/link'
import { useState } from 'react'

// Styles
import aboutheader_styles from './../../styles/components/Header/AboutHeader.module.sass'

// React components
import CityChoiseDesktop from './CityChoiseDesktop/CityChoiseDesktop'

const AboutHeader = ({ worktimeHead }) => {
    const [Closed, SetClosed] = useState(true)

    return (
        <div className={aboutheader_styles.about_header}>
            <div
                className={aboutheader_styles.about_header__location}
                onClick={() => {
                    SetClosed((p) => !p)
                }}
            >
                <svg className={aboutheader_styles.location_svg}>
                    <path d="M74.95 489c6.3 0 12.4-1.5 18.3-4.3l151.3-74.2 151.4 74.3c5.8 2.9 12 4.3 18.3 4.3 13.7 0 26.6-7 34.3-18.6 7.7-11.5 9-25.6 3.6-38.6L282.55 25.3c-6.5-15.6-21.1-25.3-38-25.3s-31.5 9.7-38 25.3L36.95 431.9c-5.4 13-4.1 27 3.6 38.6 7.8 11.6 20.6 18.6 34.4 18.5zm-15.4-47.7l169.6-406.6c4-9.5 12.8-10.3 15.4-10.3 2.6 0 11.4.7 15.4 10.3l169.6 406.6c3 7.2.4 12.8-1.4 15.5-4.6 7-13.7 9.7-21.4 5.9l-156.8-76.9c-1.7-.8-3.5-1.3-5.4-1.3s-3.7.4-5.4 1.3l-156.8 76.9c-7.8 3.8-16.8 1.1-21.4-5.9-1.8-2.7-4.4-8.3-1.4-15.5z"></path>
                </svg>

                <h6>Москва</h6>
                <span></span>
            </div>
            {/* <CityChoiseDesktop closed={Closed} setClosed={SetClosed} /> */}
            <div className={aboutheader_styles.about_header__worktime}>
                Время работы: {worktimeHead}
            </div>
            <div className={aboutheader_styles.about_header__list}>
                <ul>
                    <Link href="/">
                        <a>
                            <li>О компании</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <li>Отзывы</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <li>Гарантия</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <li>Обмен и возврат</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <li>Доставка и оплата</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <li>Контакты</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <li>Оптовикам</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <li>Партнерам</li>
                        </a>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default AboutHeader
