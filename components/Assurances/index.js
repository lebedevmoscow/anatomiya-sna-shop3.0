import styles from './../../styles/components/Assurances/index.module.sass'

// SVGs
import CarSVG from './../../assets/svg/car.svg'
import CertificateSVG from './../../assets/svg/certificate.svg'
import Like from './../../assets/svg/garantee-like.svg'
import Gift from './../../assets/svg/gift.svg'
import Factory from './../../assets/svg/factory.svg'
import Blank from './../../assets/svg/blank.svg'
import Control from './../../assets/svg/list.svg'
import PersonalData from './../../assets/svg/security-personal-data.svg'

const IndexPageAssurances = () => {
    return (
        <div className={styles.container}>
            <div className={styles.assurances}>
                <div className={styles.assurances__section_name}>
                    Мы гарантируем
                </div>
                <div className={styles.assurances__list}>
                    <div className={styles.assurances__item}>
                        <img
                            src={CarSVG}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Оперативная доставка и удобные способы оплаты
                        </div>
                    </div>
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
                    <div className={styles.assurances__item}>
                        <img
                            src={Factory}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Широкий ассортимент
                        </div>
                    </div>
                    <div className={styles.assurances__item}>
                        <img
                            src={Control}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Контроль качества товаров
                        </div>
                    </div>
                    <div className={styles.assurances__item}>
                        <img
                            src={CertificateSVG}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Сертифицированная продукция
                        </div>
                    </div>
                    <div className={styles.assurances__item}>
                        <img
                            src={Gift}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Скидки и подарочные сертификаты
                        </div>
                    </div>
                    <div className={styles.assurances__item}>
                        <img
                            src={Blank}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Нестандартная продукция
                        </div>
                    </div>
                    <div className={styles.assurances__item}>
                        <img
                            src={PersonalData}
                            className={styles.assurances__image}
                        ></img>
                        <div className={styles.assurances__desc}>
                            Защита персональных данных
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPageAssurances
