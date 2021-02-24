import { useEffect, useState } from 'react'

import RevealButton from './../Button/RevealButton'
import UsefulArticles from './../Article/UsefulArticleOnProductPage'

import styles from './../../styles/components/Tabs/ProductPageDescriptionTab.module.sass'

const ProductPageDescriptionTab = ({ articles }) => {
    const hasWindow = typeof window !== 'undefined'
    const [width, setWidth] = useState(null)

    // Unfolded and folded text content
    const [unfoldedContent, setUnfoldedContnet] = useState([
        {
            title: 'Как выбрать кровать?',
            status: 'folded',
        },
        {
            title: 'Тип кровати',
            status: 'folded',
        },
        {
            title: 'Пространство для хранения',
            status: 'folded',
        },
    ])

    const findElement = (title) => {
        for (let i = 0; i < unfoldedContent.length; i++) {
            if (unfoldedContent[i].title === title) {
                return unfoldedContent[i]
            }
        }
        return null
    }

    const changeFondedContentStatus = (title) => {
        const clone = unfoldedContent.concat()

        for (let i = 0; i < clone.length; i++) {
            if (clone[i].title === title) {
                if (clone[i].status === 'folded') {
                    clone[i].status = 'unfolded'
                } else if (clone[i].status === 'unfolded') {
                    clone[i].status = 'folded'
                }
            }
        }

        setUnfoldedContnet(clone)
    }

    useEffect(() => {
        if (hasWindow) {
            setWidth(window.innerWidth)
        }
    }, [hasWindow])

    return (
        <div className={styles.product_page__description_tab}>
            <div className={styles.product_page__description_tab__left}>
                <div
                    className={styles.product_page__description_tab__hint_title}
                >
                    Характеристики
                </div>
                <div
                    className={
                        styles.product_page__description_tab__specifications
                    }
                >
                    <div
                        className={
                            styles.product_page__description_tab__specifications_list
                        }
                    >
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Производитель:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Волхова
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Страна бренда:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Россия
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Страна производитель:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Россия
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Гарантия:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                2 года
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Высота изголовья, см:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                73
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Форма:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Прямоугольная
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Материал каркаса:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                ЛДСП
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Основание:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Доп.опция
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Возможные опции:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Реечное основание (настил)
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Декор:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Без декора
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Углы каркаса кровати:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Прямые
                            </div>
                        </div>
                        <div
                            className={
                                styles.product_page__description_tab__specification_list_item
                            }
                        >
                            <div
                                className={
                                    styles.product_page__description_tab__manufacturer
                                }
                            >
                                Матрас:
                            </div>
                            <div
                                className={
                                    styles.product_page__description_tab__output
                                }
                            >
                                Приобретается отдельно
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_page__description_tab__right}>
                <div
                    className={
                        styles.product_page__description_tab__right_text_block
                    }
                >
                    <div
                        className={`${styles.product_page__description_tab__right_text_block_title} ${styles.first_title}`}
                    >
                        Как выбрать кровать?
                    </div>
                    <div
                        style={
                            findElement('Как выбрать кровать?') !== null &&
                            findElement('Как выбрать кровать?').status ===
                                'folded'
                                ? { height: '136px', overflow: 'hidden' }
                                : { height: '100%', overflow: 'visible' }
                        }
                        className={`${
                            styles.product_page__description_tab__right_text_block_text
                        } ${
                            findElement('Как выбрать кровать?') !== null &&
                            findElement('Как выбрать кровать?').status ===
                                'folded'
                                ? `${styles.folded}`
                                : `${styles.unfolded}`
                        }`}
                    >
                        <p>
                            Как выбрать самую удобную кровать для спокойного
                            сна? Какие идеальные размеры кроватей? Из каких
                            материалов должна быть изготовлена кровать? Влияет
                            ли качество кровати на ваш сон? Читая дальше, вы
                            найдете ответы на эти вопросы, потому что мы
                            подготовили руководство, чтобы помочь вам выбрать
                            кровать в соответствии с вашими потребностями.
                        </p>
                        <p>
                            Необходимое пространство для размещения кровати и
                            подходящий размер:
                        </p>
                        <ol>
                            <li>
                                Измерьте доступное пространство – то, где вы
                                планируете установить кровать. Помните, что
                                кровать должна быть как минимум на 20 см длиннее
                                роста тех, кто будет на ней спать.
                            </li>
                            <li>
                                Не задвигайте кровать вплотную к стенам,
                                необходимо оставить достаточно места для вашего
                                комфортного передвижения.
                            </li>
                            <li>
                                Правильный размер кровати, особенно матраса -
                                спальной поверхности, даст вам свободу движения
                                и удобство в течение ночи, а также благоприятно
                                повлияет на качество вашего сна. Кровать следует
                                выбирать в соответствии с вашими предпочтениями
                                и предпочтениями вашего партнера. Выбирая размер
                                кровати, необходимо обращать внимание на все
                                детали: спите вы один или нет, ваш возраст и
                                комплекцию вашего тела.
                            </li>
                            <li>
                                Минимальная ширина спального места на одного
                                человека – 90 см, следовательно если вы спите
                                вдвоем, то вам необходима кровать шириной 180
                                см. Будьте внимательны, чтобы не выбрать слишком
                                маленькую кровать, но в то же время, чтобы она
                                была пропорциональна спальне и интерьеру.
                            </li>
                            <li>
                                Наиболее распространенные размеры кроватей и
                                матрасов: 80 × 200 см, 90 × 200 см, 120 × 200
                                см, 140 × 200 см, 160 × 200 см, 180 × 200 см.
                            </li>
                        </ol>
                        <p>
                            <strong>Высота кровати.</strong> Данный аспект
                            связан с предпочтениями каждого из нас.
                        </p>
                        <ul>
                            <li>
                                Низкими кроватями считаются те, у которых
                                расстояние между каркасом и полом совсем
                                небольшое 2-15 см. Обычно такую ​​кровать
                                выбирают молодые люди и только из эстетических
                                соображений.
                            </li>
                            <li>
                                Стандартные кровати - высотой около 45 см. Они
                                являются наиболее покупаемыми моделями, так как
                                эти кровати более удобны и практичны, также
                                прекрасно подойдут пожилым людям.
                            </li>
                        </ul>
                    </div>
                    <RevealButton
                        onClick={() =>
                            changeFondedContentStatus('Как выбрать кровать?')
                        }
                        state={findElement('Как выбрать кровать?').status}
                    />
                </div>
                <div
                    className={
                        styles.product_page__description_tab__right_text_block
                    }
                >
                    <div
                        className={
                            styles.product_page__description_tab__right_text_block_title
                        }
                    >
                        Тип кровати
                    </div>
                    <div
                        style={
                            findElement('Тип кровати') !== null &&
                            findElement('Тип кровати').status === 'folded'
                                ? { height: '136px', overflow: 'hidden' }
                                : { height: '100%', overflow: 'visible' }
                        }
                        className={`${
                            styles.product_page__description_tab__right_text_block_text
                        } ${
                            findElement('Тип кровати') !== null &&
                            findElement('Тип кровати').status === 'folded'
                                ? `${styles.folded}`
                                : `${styles.unfolded}`
                        }`}
                    >
                        <p>
                            <strong>Металл</strong> - обычно думая о кровати,
                            изготовленной из металла в голову приходят только
                            односпальные модели, но сейчас очень востребованы
                            именно двуспальные кровати, изготовленные из
                            металла. Сегодня вас удивит разнообразие дизайна и
                            то, как они с легкостью вписываются в любой
                            современный интерьер. Прочные и долговечные, они
                            придают помещению богемную нотку, но в то же время
                            выглядят современно и минималистично.
                        </p>
                        <p>
                            <strong>Мягкие кровати.</strong> Кровати с обивкой в
                            последнее время стали все больше и больше
                            приобретать популярность. Каркас кровати этого типа
                            обычно изготавливается из ДСП, МДФ или дерева, а
                            затем «одевается» в текстильные материалы (обычно
                            ткань) или кожу (натуральную или экологическую).
                            Кровать с кожаным каркасом придает спальне
                            изысканный вид. А разнообразие цветом, фактур и
                            качества матерьяла, позволяет каждому найти вариант
                            на свой вкус.
                        </p>
                        <p>
                            <strong>Из массива дерева</strong> – самый прочный и
                            рекомендуемый вариант с точки зрения качества,
                            является одним из самых дорогих вариантов.
                            Двуспальная кровать с каркасом из массива дерева
                            прочна, выглядит статно и поможет вам создать
                            действительно царский интерьер или наоборот: станет
                            органичным дополнением популярного сейчас стиля
                            хюгге.
                        </p>
                        <h6>Как определиться с цветом и фактурой кровати?</h6>
                        <p>
                            Контраст – пожалуй самый эффектный вариант, так как
                            данный прием придаст динамичности вашей спальной
                            комнате. Можно сыграть на классических вариантах, а
                            именно: белый черный, темно коричневый и светло
                            бежевый, также стоит попробовать окрасить стены в
                            насыщенные цвета, а в контраст этому приобрести
                            полностью белую кровать. Все зависит от вашего
                            воображения и вкуса.
                        </p>
                        <p>
                            Иным вариантом будет выбрать цвет кровати, который
                            будет совпадать с цветом стен. Данный прием поможет
                            создать комфортное пространство, и визуально
                            увеличит пространство. Поэтому можете взять на
                            вооружение данный прием, в случае если вы обладаете
                            спальней маленьких габаритов.
                        </p>
                        <p>
                            Узоры на стенах – в данном случае не стоит
                            перегружать пространство спальной комнаты. Будет
                            уместным приобрести однотонную кровать, базовых
                            оттенков в минималистичном стиле. Ученые выясняли,
                            что самыми благоприятными цветами для спальни (чтобы
                            быстрее высыпаться) считаются: синий, желтый,
                            зеленый, серебристый и оранжевый.
                        </p>
                    </div>
                    <RevealButton
                        onClick={() => changeFondedContentStatus('Тип кровати')}
                        state={findElement('Тип кровати').status}
                    />
                </div>
                <div
                    className={
                        styles.product_page__description_tab__right_text_block
                    }
                >
                    <div
                        className={
                            styles.product_page__description_tab__right_text_block_title
                        }
                    >
                        Пространство для хранения
                    </div>
                    <div
                        style={
                            findElement('Пространство для хранения') !== null &&
                            findElement('Пространство для хранения').status ===
                                'folded'
                                ? { height: '136px', overflow: 'hidden' }
                                : { height: '100%', overflow: 'visible' }
                        }
                        className={`${
                            styles.product_page__description_tab__right_text_block_text
                        } ${
                            findElement('Пространство для хранения') !== null &&
                            findElement('Пространство для хранения').status ===
                                'folded'
                                ? `${styles.folded}`
                                : `${styles.unfolded}`
                        }`}
                    >
                        <p>
                            <strong>
                                Кровать с выдвижным ящиком или подъемным
                                механизмом
                            </strong>
                            очень практична. Благодаря внутреннему пространству
                            кровати, у вас появляется дополнительное место для
                            хранения постельных принадлежностей. Если вы
                            выбираете кровать с ящиками для хранения вещей, вам
                            нужно убедиться, что у вас достаточно места в
                            спальне, чтобы их выдвигать (открывать). Ведь никто
                            не должно препятствовать к их доступу.
                        </p>
                        <p>
                            <strong>
                                Кровать с ящиком для хранения в изголовье.
                            </strong>{' '}
                            В этой модели достаточно места для хранения одеял,
                            подушек и постельного белья. Также на такое
                            изголовье можно поставить декоративные элементы или
                            книги.
                        </p>
                        <p>
                            <strong>Спинка у изголовья и изножье.</strong> Эти
                            предметы не являются обязательными и служат скорее
                            для украшения и для повышения комфорта. Например,
                            при чтении книги перед сном намного удобнее
                            опираться на высокую мягкую спинку. А край
                            эстетичных ножек зрительно отделяет спальное
                            пространство от всей спальни и являются акцентом, от
                            которого ваш интерьер только выиграет.
                        </p>
                    </div>
                    <RevealButton
                        onClick={() =>
                            changeFondedContentStatus(
                                'Пространство для хранения'
                            )
                        }
                        state={findElement('Пространство для хранения').status}
                    />
                </div>
                {width && width > 1024 && (
                    <UsefulArticles articles={articles} />
                )}
            </div>
        </div>
    )
}

export default ProductPageDescriptionTab
