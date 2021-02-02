import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { SlideDown } from 'react-slidedown'
import Modal from 'react-modal'
import ModalArrow from './../../../assets/svg/modal-arrow.svg'

const SaleOnProductCard = ({
    index,
    Title,
    Text,
    BorderColor,
    BackgroundColor,
    TextColor,
    Slug,
    onClickHandler = () => {},
    className,
    dontShow = false,
    viewType = 'several',
    first = false,
}) => {
    const [closed, setClosed] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)

    // Объект window
    const hasWindow = typeof window !== 'undefined'

    // Ширина экрана
    const width = hasWindow ? window.innerWidth : null

    const onModalOpen = () => {
        setModalOpen((p) => !p)
    }

    const customStyles = {
        overlay: { zIndex: 1000 },
        content: {
            left: '-1%',
            top: '-1%',
            width: '90%',
            height: '100%',
            backgroundColor: '#0ca5d3',
        },
    }

    const OpenLabel = () => {
        width > 768 ? setClosed((p) => !p) : onModalOpen((p) => !p)
    }

    return (
        <>
            {!dontShow && hasWindow && width <= 768 && viewType === 'single' && (
                <Modal
                    style={customStyles}
                    isOpen={modalOpen}
                    contentLabel="Example Modal"
                >
                    <div className="product-modal">
                        <div className="product-modal__headline">
                            <img
                                className="product-modal__modalarrow"
                                src={ModalArrow}
                                onClick={onModalOpen}
                            />
                            <div className="product-modal__title">Акция</div>
                        </div>
                        <div className="product-modal__text">{Text}</div>
                        <div className="product-modal__navigation">
                            <Link
                                href={`https://www.anatomiyasna.ru/akciya/${Slug}`}
                            >
                                <a>
                                    <button className="product-modal__btn product-modal__about">
                                        Подробнее
                                    </button>
                                </a>
                            </Link>
                            <button
                                onClick={onModalOpen}
                                className="product-modal__btn product-modal__continue"
                            >
                                Продолжить покупки
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
            <div
                style={dontShow && { cursor: 'unset', width: '200px' }}
                className={`product-card__popup-wrap ${
                    first ? 'product-card__popup-wrap--first' : ''
                }`}
            >
                <span
                    className={`product-card__popup product-card__fulllpopuplist-inner-card ${className}`}
                    style={{
                        borderColor: BorderColor,
                        backgroundColor: BackgroundColor,
                        color: TextColor,
                        cursor: dontShow && 'unset',
                        userSelect: 'none',
                    }}
                    key={index}
                    onClick={() => {
                        onClickHandler()
                        if (width > 768) {
                            setClosed((p) => !p)
                        } else {
                            onModalOpen((p) => !p)
                        }
                    }}
                >
                    {Title}
                </span>
            </div>

            {!dontShow && (
                <SlideDown closed={closed}>
                    <div className="product-card__popup--text">{Text}</div>
                </SlideDown>
            )}
        </>
    )
}

export default SaleOnProductCard
