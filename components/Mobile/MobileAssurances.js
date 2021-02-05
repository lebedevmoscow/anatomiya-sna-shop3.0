import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// EXPEREMENTAL
import useMediaQuery from './../../hooks/useMedia'
import styles from './../../styles/components/Mobile/MobileAssurances.module.sass'

import CarSVG from './../../assets/svg/car.svg'
import CertificateSVG from './../../assets/svg/certificate.svg'
import Like from './../../assets/svg/garantee-like.svg'
import Gift from './../../assets/svg/gift.svg'
import Factory from './../../assets/svg/factory.svg'
import Blank from './../../assets/svg/blank.svg'
import Control from './../../assets/svg/list.svg'
import PersonalData from './../../assets/svg/security-personal-data.svg'

const GoodsWithSwiper = () => {
    // Breakpoints
    const breakpoint1023 = useMediaQuery(1023)
    const breakpoint450 = useMediaQuery(450)

    const display = breakpoint1023 ? 'block' : 'none'
    const [list, setList] = useState(null)

    useEffect(() => {
        setList(
            <Swiper
                freeMode={true}
                freeModeMomentum={true}
                resistance={true}
                resistanceRatio={0}
                slidesPerView={'auto'}
                spaceBetween={10}
                autoHeight={true}
            >
                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={CarSVG}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Оперативная доставка и удобные способы оплаты
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={Like}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Гарантия, обмен и возврат товара в полном
                            соответствии закона.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={Factory}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Широкий ассортимент
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={Control}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Контроль качества товаров
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={CertificateSVG}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Сертифицированная продукция
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={Gift}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Скидки и подарочные сертификаты
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={Blank}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Нестандартная продукция
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.assurances__item}>
                        <img
                            src={PersonalData}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Защита персональных данных
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        )
    }, [])

    return (
        <div style={{ display }} className={styles.container}>
            <div className={styles.goods_catalog}>
                <div className={styles.goods_catalog__section_name}>
                    Мы гарантируем
                </div>
                <div className="goods_catalog__list">{list}</div>
            </div>
        </div>
    )
}

export default GoodsWithSwiper
