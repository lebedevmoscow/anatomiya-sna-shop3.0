import { useState } from 'react'
import styles from './../../styles/components/Tabs/ProductPageOptionTabContentMobile.module.sass'

const ProductPageOptionTabContentMobile = ({ img, title, price }) => {
    const [active, setActive] = useState(false)

    const onSelectClickHandler = () => {
        setActive((p) => !p)
    }

    return (
        <div
            className={
                styles.product_page_option_tab_content_mobile__content_wrap
            }
        >
            <div
                style={
                    active
                        ? {
                              borderColor: '#0ca5d3',
                              boxShadow: '1px 3px 7px rgba(0,0,0,.19)',
                          }
                        : {}
                }
                className={
                    styles.product_page_option_tab_content_mobile__content
                }
            >
                <div
                    onClick={onSelectClickHandler}
                    className={
                        styles.product_page_option_tab_content_mobile__checkmark
                    }
                >
                    <span
                        style={
                            active ? { display: 'inline' } : { display: 'none' }
                        }
                        className={
                            styles.product_page_option_tab_content_mobile__checkmark_content
                        }
                    ></span>
                </div>
                <img
                    onClick={onSelectClickHandler}
                    className={
                        styles.product_page_option_tab_content_mobile__img
                    }
                    src={img}
                ></img>
                <div
                    onClick={onSelectClickHandler}
                    className={
                        styles.product_page_option_tab_content_mobile__title
                    }
                >
                    {title}
                </div>
                <button
                    onClick={onSelectClickHandler}
                    style={
                        active
                            ? {
                                  background: '#fff',
                                  color: '#444',
                                  boxShadow:
                                      'inset 1px 3px 7px rgba(0,0,0,.19)',
                              }
                            : {}
                    }
                    className={styles.product_page_option_tab_content_mobile__button}
                >
                    {active ? 'Добавлено' : 'Добавить'}
                </button>
            </div>
        </div>
    )
}

export default ProductPageOptionTabContentMobile
