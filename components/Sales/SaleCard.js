import { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import useMediaQuery from './../../hooks/useMedia'
import DateImage from './../../assets/date.png'

import card_styles from './../../styles/components/Sales/SaleCard.module.sass'

const Sale = ({ sale }) => {
    // Breakpoints
    const breakpoint1250 = useMediaQuery(1250)
    const breakpoint720 = useMediaQuery(720)

    const salesDisclaimerRef = useRef(null)
    const [backgroundSizeType, setBackgroundTypeSize] = useState('cover')

    useEffect(() => {
        setBackgroundTypeSize(breakpoint1250 ? 'contain' : 'cover')
        if (breakpoint720) {
            setBackgroundTypeSize('cover')
        }
    }, [breakpoint1250, breakpoint720])

    useEffect(() => {
        if (salesDisclaimerRef.current) {
            salesDisclaimerRef.current.innerHTML = sale.annotation
        }
    }, [salesDisclaimerRef.current])

    const dateStartParsed = moment().format('l')

    const now = moment(new Date())
    const end = moment(sale.dateEnd)
    const duration = moment.duration(now.diff(end))
    const days = Math.floor(duration.asDays() * -1)
    const hours = Math.floor(duration.hours() * -1)
    const minutes = Math.floor(duration.minutes() * -1)

    return (
        <div className={card_styles.sale_item__wrapper}>
            <div
                className={card_styles.sale_item}
                style={{
                    background: `url(${sale.image}) no-repeat`,
                    backgroundSize: `${backgroundSizeType}`,
                    backgroundPosition: 'top center',
                    // backgroundSize: 'contain',
                }}
            >
                <div className={card_styles.sale_item__date}>
                    <img
                        className={card_styles.sale_item__calendar_image}
                        src={DateImage}
                    ></img>
                    <span>{dateStartParsed}</span>
                </div>
                <div className={card_styles.sale_item__tillend}>
                    <div className={card_styles.sale_item__tillend_small_text}>
                        До конца акции осталось:
                    </div>
                    <div className={card_styles.sale_item__counter}>
                        <div className={card_styles.sale_item__days}>
                            <span className={card_styles.sale_item__number}>
                                {days}
                            </span>
                            <span
                                className={card_styles.sale_item__date_string}
                            >
                                Дней
                            </span>
                        </div>
                        <span className={card_styles.sale_item__delimiter}>
                            :
                        </span>
                        <div className={card_styles.sale_item__days}>
                            <span className={card_styles.sale_item__number}>
                                {hours}
                            </span>
                            <span
                                className={card_styles.sale_item__date_string}
                            >
                                Часов
                            </span>
                        </div>
                        <span className={card_styles.sale_item__delimiter}>
                            :
                        </span>

                        <div className={card_styles.sale_item__days}>
                            <span className={card_styles.sale_item__number}>
                                {minutes}
                            </span>
                            <span
                                className={card_styles.sale_item__date_string}
                            >
                                Минут
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={card_styles.sale_item__title}>{sale.title}</div>
            {sale.annotation && (
                <div
                    ref={salesDisclaimerRef}
                    className={card_styles.sales__disclaimer}
                ></div>
            )}
        </div>
    )
    return null
}

export default Sale
