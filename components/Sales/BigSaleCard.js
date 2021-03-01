import { useState, useEffect } from 'react'
import moment from 'moment'
import styles from './../../styles/components/Sales/BigSaleCard.module.sass'

// Images
import DateImage from './../../assets/date.png'

const BigSaleCard = ({ sale }) => {
    const dateStartParsed = moment().format('l')

    const now = moment(new Date())
    const end = moment(sale.dateEnd)
    const duration = moment.duration(now.diff(end))
    const days = Math.floor(duration.asDays() * -1)
    const hours = Math.floor(duration.hours() * -1)
    const minutes = Math.floor(duration.minutes() * -1)

    const [backgroundSizeType, setBackgroundTypeSize] = useState('cover')

    const SaleIsEnd = days < 0 ? true : false

    return (
        <div className={styles.bigsalecard}>
            <div className={styles.sale_item__date}>
                <img
                    className={styles.sale_item__calendar_image}
                    src={DateImage}
                ></img>
                <span>{dateStartParsed}</span>
            </div>
            <span className={styles.title}>{sale.title}</span>
            <span className={styles.image_wrapper}>
                <img src={sale.image}></img>
            </span>

            <div
                style={
                    !SaleIsEnd
                        ? {
                              backgroundColor: '#0ca5d3',
                          }
                        : {
                              backgroundColor: '#333333',
                              padding: '15px 12px',
                          }
                }
                className={styles.sale_item__tillend}
            >
                {!SaleIsEnd && (
                    <div className={styles.sale_item__tillend_small_text}>
                        До конца акции осталось:
                    </div>
                )}
                {!SaleIsEnd && (
                    <div className={styles.sale_item__counter}>
                        <div className={styles.sale_item__days}>
                            <span className={styles.sale_item__number}>
                                {days}
                            </span>
                            <span className={styles.sale_item__date_string}>
                                Дней
                            </span>
                        </div>
                        <span className={styles.sale_item__delimiter}>:</span>
                        <div className={styles.sale_item__days}>
                            <span className={styles.sale_item__number}>
                                {hours}
                            </span>
                            <span className={styles.sale_item__date_string}>
                                Часов
                            </span>
                        </div>
                        <span className={styles.sale_item__delimiter}>:</span>

                        <div className={styles.sale_item__days}>
                            <span className={styles.sale_item__number}>
                                {minutes}
                            </span>
                            <span className={styles.sale_item__date_string}>
                                Минут
                            </span>
                        </div>
                    </div>
                )}
                {SaleIsEnd && (
                    <div className={card_styles.sale_is_end}>
                        Акция закончилась
                    </div>
                )}
            </div>
        </div>
    )
}

export default BigSaleCard
