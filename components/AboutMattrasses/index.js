import PNG from './../../assets/about-mattrasses-text.webp'
import MattrassImage1 from './../../assets/mattrasses/premialnye-matrasy-anatomiya-sna.webp'
import MattrassImage2 from './../../assets/mattrasses/toppery-anatomiya-sna_1.webp'
import MattrassImage3 from './../../assets/mattrasses/klassicheskie-matrasy-anatomiya-sna.webp'
import MattrassImage4 from './../../assets/mattrasses/detskie-matrasy-anatomiya-sna.webp'
import MattrassImage5 from './../../assets/mattrasses/nedorogie-matrasy-anatomiya-sna.webp'
import MattrassImage6 from './../../assets/mattrasses/ortopedicheskie-matrasy-anatomiya-sna.webp'

import styles from './../../styles/components/AboutMattrasses/index.module.sass'

const IndexPageAboutMattrassesText = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.about_mattrasses_text}>
                    <div className={styles.about_mattrasses_text__left}>
                        <p>
                            Большое разнообразие матрасов для комфортного
                            ночного отдыха представлено на сайте Московского
                            онлайн-магазина «Анатомия сна». Покупателю
                            предлагается фирменная продукция, соответствующая
                            европейским стандартам, а также популярные изделия
                            для взрослых и детей. Можно подобрать подходящий
                            комплект постельного белья из большого ассортимента
                            спального текстиля.
                        </p>
                        <p>
                            Покупателям предоставляются скидки, регулярно
                            проводятся акции и снижение цен на продукцию.
                            Поэтому здесь стоит приобрести фирменные изделия!
                        </p>
                        <p>
                            Нужна новая кровать, надоел неудобный матрас, нужно
                            уютное комфортное место для сна? В каталоге точно
                            найдется нужный товар. Удобный подбор поможет
                            самостоятельному подбору подходящей модели, также
                            можно получить совет менеджера по телефону +7(495)
                            287-87-95 или в онлайн-чате на сайте.
                        </p>
                    </div>
                    <div className={styles.about_mattrasses_text__right}>
                        <img
                            className={styles.about_mattrasses_text__image}
                            src={PNG}
                        ></img>
                    </div>
                </div>
                <div className={styles.about_mattrasses}>
                    <div className={styles.about_mattrasses__section_name}>
                        О наших матрасах
                    </div>
                    <div className={styles.about_mattrasses__list}>
                        <div className={styles.about_mattrasses__item}>
                            <img
                                className={styles.about_mattrasses__image}
                                src={MattrassImage1}
                            ></img>
                            <div className={styles.about_mattrasses__text}>
                                <div className={styles.about_mattrasses__title}>
                                    Премиум
                                </div>
                                <div className={styles.about_mattrasses__desc}>
                                    Выбирают те, кому важны личный комфорт и
                                    спокойствие. В линейке при изготовлении
                                    используются гипоаллергенные
                                    высококачественные материалы. Отдельный
                                    раздел посвящен ортопедическим товарам,
                                    обеспечивающим здоровый сон.
                                </div>
                            </div>
                        </div>

                        <div className={styles.about_mattrasses__item}>
                            <img
                                className={styles.about_mattrasses__image}
                                src={MattrassImage3}
                            ></img>
                            <div className={styles.about_mattrasses__text}>
                                <div className={styles.about_mattrasses__title}>
                                    Классические
                                </div>
                                <div className={styles.about_mattrasses__desc}>
                                    Традиционная конструкция матрасов на
                                    пружинах или поролоне. Представлены
                                    различными производителями по доступным
                                    ценам. Продукция соответствует стандартам,
                                    отличается высокими потребительскими
                                    качествами. Большое разнообразие товаров
                                    позволит найти необходимое, соответствующую
                                    персональным запросам, в том числе, по
                                    уровню жесткости, используемым материалам,
                                    наличию пружинного блока.
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_mattrasses__item}>
                            <img
                                className={styles.about_mattrasses__image}
                                src={MattrassImage2}
                            ></img>
                            <div className={styles.about_mattrasses__text}>
                                <div className={styles.about_mattrasses__title}>
                                    Топеры
                                </div>
                                <div className={styles.about_mattrasses__desc}>
                                    Обеспечат комфортный ночной отдых даже в
                                    самом неудобном месте. Прекрасно
                                    располагается поверх мягкой мебели и создает
                                    уютное место для ночного отдыха. Не
                                    требовательны в уходе, просты в
                                    эксплуатации, обладают высокой
                                    гигроскопичностью.
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_mattrasses__item}>
                            <img
                                className={styles.about_mattrasses__image}
                                src={MattrassImage4}
                            ></img>
                            <div className={styles.about_mattrasses__text}>
                                <div className={styles.about_mattrasses__title}>
                                    Детские
                                </div>
                                <div className={styles.about_mattrasses__desc}>
                                    Для детей разного возраста, как для
                                    новорожденных, младенцев, так и детей более
                                    старшего возраста, вплоть до подростков.
                                    Продукция из качественных материалов,
                                    соответствующих стандартам, при ее
                                    изготовлении соблюдались необходимые нормы,
                                    она соответствует ГОСТу и СанПину.
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_mattrasses__item}>
                            <img
                                className={styles.about_mattrasses__image}
                                src={MattrassImage5}
                            ></img>
                            <div className={styles.about_mattrasses__text}>
                                <div className={styles.about_mattrasses__title}>
                                    Детские
                                </div>
                                <div className={styles.about_mattrasses__desc}>
                                    Несмотря на невысокую стоимость,
                                    характеризуются высокой надежностью,
                                    долговечностью. Располагая лишь небольшой
                                    суммой можно подобрать качественную
                                    продукцию.
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_mattrasses__item}>
                            <img
                                className={styles.about_mattrasses__image}
                                src={MattrassImage6}
                            ></img>
                            <div className={styles.about_mattrasses__text}>
                                <div className={styles.about_mattrasses__title}>
                                    Ортопедические
                                </div>
                                <div className={styles.about_mattrasses__desc}>
                                    Предназначены для сна, подстраиваются под
                                    анатомическую форму, запоминают его.
                                    Обеспечивают спокойный сон даже с больной
                                    спиной или натруженными травмированными
                                    мышцами.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexPageAboutMattrassesText
