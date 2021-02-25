import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ProductPageOptionTabContentMobile from './ProductPageOptionTabContentMobile'
import ProductPageTechTabContentMobile from './ProductPageTechTabContentMobile'
import ProductPageImageTabContentMobile from './ProductPageImageTabContentMobile'
import ProductPageTextTabContentMobile from './ProductPageTextTabContentMobile'
import ProductPageDeliveryTabContentMobile from './ProductPageDeliveryTabContentMobile'
import ProductPageReviewTabContentMobile from './ProductPageReviewTabContentMobile'

// Images
import MaterialImage1 from './../../assets/materials/material1.jpg'
import MaterialImage2 from './../../assets/materials/material2.jpg'
import MaterialImage3 from './../../assets/materials/material3.jpg'
import FoundamentImage1 from './../../TEMP/foundament/1.jpg'
import FoundamentImage2 from './../../TEMP/foundament/2.jpg'
import FoundamentImage3 from './../../TEMP/foundament/3.jpg'
import EmptyStar from './../../assets/empty-star.png'
import ImportantImage from './../../assets/warning.png'
import LoadFilesImage from './../../assets/load-files.png'

import styles from './../../styles/components/Tabs/ProductPageMobileTabs.module.sass'

const ProductPageMobileTabs = () => {
    const content1 = (
        <>
            <p>
                Как выбрать самую удобную кровать для спокойного сна? Какие
                идеальные размеры кроватей? Из каких материалов должна быть
                изготовлена кровать? Влияет ли качество кровати на ваш сон?
                Читая дальше, вы найдете ответы на эти вопросы, потому что мы
                подготовили руководство, чтобы помочь вам выбрать кровать в
                соответствии с вашими потребностями.
            </p>
            <p>
                Необходимое пространство для размещения кровати и подходящий
                размер:
            </p>
            <ol>
                <li>
                    Измерьте доступное пространство – то, где вы планируете
                    установить кровать. Помните, что кровать должна быть как
                    минимум на 20 см длиннее роста тех, кто будет на ней спать.
                </li>
                <li>
                    Не задвигайте кровать вплотную к стенам, необходимо оставить
                    достаточно места для вашего комфортного передвижения.
                </li>
                <li>
                    Правильный размер кровати, особенно матраса - спальной
                    поверхности, даст вам свободу движения и удобство в течение
                    ночи, а также благоприятно повлияет на качество вашего сна.
                    Кровать следует выбирать в соответствии с вашими
                    предпочтениями и предпочтениями вашего партнера. Выбирая
                    размер кровати, необходимо обращать внимание на все детали:
                    спите вы один или нет, ваш возраст и комплекцию вашего тела.
                </li>
                <li>
                    Минимальная ширина спального места на одного человека – 90
                    см, следовательно если вы спите вдвоем, то вам необходима
                    кровать шириной 180 см. Будьте внимательны, чтобы не выбрать
                    слишком маленькую кровать, но в то же время, чтобы она была
                    пропорциональна спальне и интерьеру.
                </li>
                <li>
                    Наиболее распространенные размеры кроватей и матрасов: 80 ×
                    200 см, 90 × 200 см, 120 × 200 см, 140 × 200 см, 160 × 200
                    см, 180 × 200 см.
                </li>
            </ol>
            <p>
                <strong>Высота кровати</strong>. Данный аспект связан с
                предпочтениями каждого из нас.
            </p>
            <ul>
                <li>
                    Низкими кроватями считаются те, у которых расстояние между
                    каркасом и полом совсем небольшое 2-15 см. Обычно такую
                    ​​кровать выбирают молодые люди и только из эстетических
                    соображений.
                </li>
                <li>
                    Стандартные кровати - высотой около 45 см. Они являются
                    наиболее покупаемыми моделями, так как эти кровати более
                    удобны и практичны, также прекрасно подойдут пожилым людям.
                </li>
            </ul>
        </>
    )

    const content2 = (
        <>
            <p>
                <strong>Металл</strong> - обычно думая о кровати, изготовленной
                из металла в голову приходят только односпальные модели, но
                сейчас очень востребованы именно двуспальные кровати,
                изготовленные из металла. Сегодня вас удивит разнообразие
                дизайна и то, как они с легкостью вписываются в любой
                современный интерьер. Прочные и долговечные, они придают
                помещению богемную нотку, но в то же время выглядят современно и
                минималистично.
            </p>
            <p>
                <strong>Мягкие кровати</strong>. Кровати с обивкой в последнее
                время стали все больше и больше приобретать популярность. Каркас
                кровати этого типа обычно изготавливается из ДСП, МДФ или
                дерева, а затем «одевается» в текстильные материалы (обычно
                ткань) или кожу (натуральную или экологическую). Кровать с
                кожаным каркасом придает спальне изысканный вид. А разнообразие
                цветом, фактур и качества матерьяла, позволяет каждому найти
                вариант на свой вкус.
            </p>
            <p>
                <strong>Из массива дерева</strong> – самый прочный и
                рекомендуемый вариант с точки зрения качества, является одним из
                самых дорогих вариантов. Двуспальная кровать с каркасом из
                массива дерева прочна, выглядит статно и поможет вам создать
                действительно царский интерьер или наоборот: станет органичным
                дополнением популярного сейчас стиля хюгге.
            </p>
            <h5>Как определиться с цветом и фактурой кровати?</h5>
            <p>
                Контраст – пожалуй самый эффектный вариант, так как данный прием
                придаст динамичности вашей спальной комнате. Можно сыграть на
                классических вариантах, а именно: белый черный, темно коричневый
                и светло бежевый, также стоит попробовать окрасить стены в
                насыщенные цвета, а в контраст этому приобрести полностью белую
                кровать. Все зависит от вашего воображения и вкуса.
            </p>
            <p>
                Иным вариантом будет выбрать цвет кровати, который будет
                совпадать с цветом&nbsp;стен. Данный прием поможет создать
                комфортное пространство, и визуально увеличит пространство.
                Поэтому можете взять на вооружение данный прием, в случае если
                вы обладаете спальней маленьких габаритов.
            </p>
            <p>
                Узоры на стенах – в данном случае не стоит перегружать
                пространство спальной комнаты. Будет уместным приобрести
                однотонную кровать, базовых оттенков в минималистичном стиле.
                Ученые выясняли, что самыми благоприятными цветами для спальни
                (чтобы быстрее высыпаться) считаются: синий, желтый, зеленый,
                серебристый и оранжевый.
            </p>
        </>
    )

    const content3 = (
        <>
            <p>
                <strong>
                    Кровать с выдвижным ящиком или подъемным механизмом
                </strong>{' '}
                очень практична. Благодаря внутреннему пространству кровати, у
                вас появляется дополнительное место для хранения постельных
                принадлежностей. Если вы выбираете кровать с ящиками для
                хранения вещей, вам нужно убедиться, что у вас достаточно места
                в спальне, чтобы их выдвигать (открывать). Ведь никто не должно
                препятствовать к их доступу.
            </p>
            <p>
                <strong>Кровать с ящиком для хранения в изголовье</strong>. В
                этой модели достаточно места для хранения одеял, подушек и
                постельного белья. Также на такое изголовье можно поставить
                декоративные элементы или книги.
            </p>
            <p>
                <strong>Спинка у изголовья и изножье.</strong> Эти предметы не
                являются обязательными и служат скорее для украшения и для
                повышения комфорта. Например, при чтении книги перед сном
                намного удобнее опираться на высокую мягкую спинку. А край
                эстетичных ножек зрительно отделяет спальное пространство от
                всей спальни и являются акцентом, от которого ваш интерьер
                только выиграет.
            </p>
        </>
    )

    const content4 = (
        <div
            className={
                styles.product_page_review_tab_content_mobile__form_block
            }
        >
            <div
                className={
                    styles.product_page_review_tab_content_mobile__input_wrapper
                }
            >
                <input
                    className={
                        styles.product_page_review_tab_content_mobile__input
                    }
                    placeholder="Ваше имя*"
                ></input>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__input_wrapper
                }
            >
                <input
                    className={
                        styles.product_page_review_tab_content_mobile__input
                    }
                    placeholder="Ваш Email"
                ></input>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__input_wrapper
                }
            >
                <input
                    className={
                        styles.product_page_review_tab_content_mobile__input
                    }
                    placeholder="Город"
                ></input>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__input_wrapper
                }
            >
                <input
                    className={`${styles.product_page_review_tab_content_mobile__input} ${styles.product_page_review_tab_content_mobile__input_green}`}
                    placeholder="Преимущества"
                ></input>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__input_wrapper
                }
            >
                <input
                    className={`${styles.product_page_review_tab_content_mobile__input} ${styles.product_page_review_tab_content_mobile__input__red}`}
                    placeholder="Недостатки"
                ></input>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__input_wrapper
                }
            >
                <input
                    className={
                        styles.product_page_review_tab_content_mobile__input
                    }
                    placeholder="Комментарий*"
                ></input>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__your_rating
                }
            >
                <div className={styles.title}>Ваша оценка*:</div>
                <ul className={styles.stars_list}>
                    <li>
                        <img
                            src={EmptyStar}
                            className={styles.star_list__image}
                        ></img>
                        {/* <Image src={EmptyStar} width={25} height={24} /> */}
                    </li>
                    <li>
                        <img
                            src={EmptyStar}
                            className={styles.star_list__image}
                        ></img>
                        {/* <Image src={EmptyStar} width={25} height={24} /> */}
                    </li>
                    <li>
                        <img
                            src={EmptyStar}
                            className={styles.star_list__image}
                        ></img>
                        {/* <Image src={EmptyStar} width={25} height={24} /> */}
                    </li>
                    <li>
                        <img
                            src={EmptyStar}
                            className={styles.star_list__image}
                        ></img>
                        {/* <Image src={EmptyStar} width={25} height={24} /> */}
                    </li>
                    <li>
                        <img
                            src={EmptyStar}
                            className={styles.star_list__image}
                        ></img>
                        {/* <Image src={EmptyStar} width={25} height={24} /> */}
                    </li>
                </ul>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__do_you_recommend
                }
            >
                <div className={styles.title}>Рекоммендуете товар:*</div>
                <ul className={styles.buttons_list}>
                    <button
                        className={`${styles.product_page_review_tab_content_mobile__button_2} ${styles.product_page_review_tab_content_mobile__button_2__active}`}
                    >
                        Да
                    </button>
                    <button
                        className={
                            styles.product_page_review_tab_content_mobile__button_2
                        }
                    >
                        Нет
                    </button>
                </ul>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__period_of_use
                }
            >
                <div className={styles.title}>Период использования:*</div>
                <ul className={styles.buttons_list}>
                    <button
                        className={`${styles.product_page_review_tab_content_mobile__button_2} ${styles.product_page_review_tab_content_mobile__button_2__active}`}
                    >
                        Менее месяца
                    </button>
                    <button
                        className={
                            styles.product_page_review_tab_content_mobile__button_2
                        }
                    >
                        Менее года
                    </button>
                    <button
                        className={
                            styles.product_page_review_tab_content_mobile__button_2
                        }
                    >
                        Более года
                    </button>
                </ul>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__important_field
                }
            >
                * Обязательные поля
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__load_file_block
                }
            >
                <label className={styles.custom_file_upload}>
                    <input type="file" />
                    <Image
                        className="image"
                        width={200}
                        height={40}
                        src={LoadFilesImage}
                    />
                    <span className={styles.hint}>
                        Нажмите или перетащите сюда фотографии или видео для
                        загрузки (0/10)
                    </span>
                </label>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__rules_block
                }
            >
                <div className={styles.title}>
                    <Image
                        className="image"
                        width={50}
                        height={43}
                        src={ImportantImage}
                    />
                    <span>В отзывах запрещено:</span>
                </div>
                <ul
                    className={
                        styles.product_page_review_tab_content_mobile__rules_list
                    }
                >
                    <li
                        className={
                            styles.product_page_review_tab_content_mobile__rules_list_item
                        }
                    >
                        - Использовать нецензурные выражения, оскорбления,
                        угрозы.
                    </li>
                    <li
                        className={
                            styles.product_page_review_tab_content_mobile__rules_list_item
                        }
                    >
                        - Публиковать адреса, телефоны и ссылки, содержащие
                        прямую рекламу
                    </li>
                    <li
                        className={
                            styles.product_page_review_tab_content_mobile__rules_list_item
                        }
                    >
                        - Обсуждать цену товара в разных регионах и ее изменение
                    </li>
                    <li
                        className={
                            styles.product_page_review_tab_content_mobile__rules_list_item
                        }
                    >
                        - Писать отвлеченные от темы и бессмысленные комментарии
                    </li>
                </ul>
                <button
                    className={
                        styles.product_page_review_tab_content_mobile__rules_button__reveal
                    }
                >
                    Оставить отзыв
                </button>
            </div>
            <div
                className={
                    styles.product_page_review_tab_content_mobile__policy
                }
            >
                Нажимая кнопу “Оставить отзыв”, я даю согласие на{' '}
                <Link href="/">
                    <a>обработку персональных данных</a>
                </Link>
            </div>
        </div>
    )

    const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false)

    const [tabs, setTabs] = useState([
        {
            title: 'Палитра и доп. опции',
            state: 'closed',
            content: [
                <div
                    className={
                        styles.product_page_option_tab_content_mobile_wrapper
                    }
                >
                    <div
                        className={
                            styles.product_page_option_tab_content_mobile__block
                        }
                    >
                        <div
                            className={
                                styles.product_page_option_tab_content_mobile__title_block
                            }
                        >
                            Материал каркаса
                        </div>
                        <div
                            className={
                                styles.product_page_option_tab_content_mobile
                            }
                        >
                            <ProductPageOptionTabContentMobile
                                img={MaterialImage1}
                                title={'ЛДСП, цвет дуб молочный'}
                            />
                            ,
                            <ProductPageOptionTabContentMobile
                                img={MaterialImage2}
                                title={'ЛДСП, цвет дуб венге'}
                            />
                            ,
                            <ProductPageOptionTabContentMobile
                                img={MaterialImage3}
                                title={'ЛДСП, цвет итальянский орех'}
                            />
                            ,
                        </div>
                    </div>
                    <div
                        className={
                            styles.product_page_option_tab_content_mobile__block
                        }
                    >
                        <div
                            className={
                                styles.product_page_option_tab_content_mobile__title_block
                            }
                        >
                            Основание
                        </div>
                        <div
                            className={
                                styles.product_page_option_tab_content_mobile
                            }
                        >
                            <ProductPageOptionTabContentMobile
                                img={FoundamentImage1}
                                title={
                                    'Реечное основание из фанеры толщиной 1,2 см'
                                }
                            />
                            ,
                            <ProductPageOptionTabContentMobile
                                img={FoundamentImage2}
                                title={
                                    'Реечное основание из фанеры толщиной 1,2 см'
                                }
                                price={510}
                            />
                            ,
                            <ProductPageOptionTabContentMobile
                                img={FoundamentImage3}
                                title={
                                    'Реечное основание из фанеры толщиной 1,2 см'
                                }
                                price={4650}
                            />
                        </div>
                    </div>
                </div>,
            ],
        },
        {
            title: 'Характеристики',
            state: 'closed',
            content: <ProductPageTechTabContentMobile />,
        },
        {
            title: 'Сертификаты и инструкции',
            state: 'closed',
            content: <ProductPageImageTabContentMobile />,
        },
        {
            title: 'Описание',
            state: 'closed',
            content: (
                <div>
                    <h1>Здесь будет описание из Word</h1>
                </div>
            ),
        },
        {
            title: 'Как выбрать кровать?',
            state: 'closed',
            content: <ProductPageTextTabContentMobile content={content1} />,
        },
        {
            title: 'Тип кровати',
            state: 'closed',
            content: <ProductPageTextTabContentMobile content={content2} />,
        },
        {
            title: 'Пространство для хранения',
            state: 'closed',
            content: <ProductPageTextTabContentMobile content={content3} />,
        },
        {
            title: 'Оставьте отзыв',
            state: 'closed',
            content: (
                <ProductPageReviewTabContentMobile
                    title={'rofl'}
                    className={'closed'}
                    // className={reviewModalIsOpen ? '' : 'closed'}
                    // onClose={() => setReviewModalIsOpen(false)}
                    // onClick={() => {
                    //     setReviewModalIsOpen(true)
                    // }}
                    content={content4}
                />
            ),
        },
        {
            title: 'Доставка и оплата',
            state: 'closed',
            content: <ProductPageDeliveryTabContentMobile />,
        },
    ])

    // useEffect(() => {
    //     const clone = tabs.concat()

    //     for (let i = 0; i < clone.length; i++) {
    //         if (clone[i].title === 'Оставьте отзыв') {
    //             clone[i].content = (
    //                 <ProductPageReviewTabContentMobile
    //                     title={'Оставить отзыв'}
    //                     className={reviewModalIsOpen ? '' : 'closed'}
    //                     onClose={() => setReviewModalIsOpen(false)}
    //                     onClick={() => {
    //                         setReviewModalIsOpen(true)
    //                     }}
    //                     content={content4}
    //                 />
    //             )
    //         }
    //     }

    //     setTabs(clone)
    // }, [reviewModalIsOpen])
    const onTabClickHandler = (title, e) => {
        const clone = tabs.concat()

        if (
            e.target.classList.contains(
                styles.product_page_mobile_tabs__list_item
            ) ||
            e.target.classList.contains(
                styles.product_page_mobile_tabs__list_item_title
            )
        ) {
            for (let i = 0; i < clone.length; i++) {
                if (clone[i].title === title) {
                    if (clone[i].state === 'closed') {
                        clone[i].state = 'opened'
                    } else if (clone[i].state === 'opened') {
                        clone[i].state = 'closed'
                    }
                }
            }

            setTabs(clone)
        }
    }

    const onReviewOpenClickHandler = () => {
        setReviewModalIsOpen((p) => !p)
    }

    return (
        <div className={styles.product_page_mobile_tabs}>
            <ul className={styles.product_page_mobile_tabs__list}>
                {tabs.map((tab, index) => {
                    return (
                        <li
                            onClick={(e) => onTabClickHandler(tab.title, e)}
                            className={`${
                                styles.product_page_mobile_tabs__list_item
                            } ${
                                tab.state === 'opened'
                                    ? `${styles.product_page_mobile_tabs__list_item__opened}`
                                    : ''
                            }`}
                            key={index}
                        >
                            <div
                                className={
                                    styles.product_page_mobile_tabs__list_item_title
                                }
                            >
                                {tab.title}
                            </div>
                            <div
                                style={
                                    tab.state === 'closed'
                                        ? {
                                              display: 'none',
                                              marginTop: '0px',
                                          }
                                        : {
                                              display: 'block',
                                              marginTop: '20px',
                                          }
                                }
                                className={`${
                                    styles.product_page_mobile_tabs__list_item_content
                                } ${
                                    tab.state === 'opened'
                                        ? `${styles.opened}`
                                        : ''
                                }`}
                            >
                                {tab.content}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductPageMobileTabs
