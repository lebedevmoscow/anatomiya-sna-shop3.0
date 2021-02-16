import React, { useState, useRef, useEffect } from 'react'
import { SlideDown } from 'react-slidedown'
import { v4 as uuidv4 } from 'uuid'
import PopupsTextOnProductCard from './PopupsTextOnProductCard'
import OutsideClickHandler from 'react-outside-click-handler'
import Modal from './../Modal'
import { capitalizeFirstLetter } from './../../utils/capitalizeFirstLetter'

import popups_styles from './../../styles/components/Popups/Popups.module.sass'

const PopupOnProductCard = ({
    ListSaleItem = null,
    index,
    isSale,
    Mobile = false,
    ListLabel = null,
    GiftLabel = null,
}) => {
    const [PopupIsClosed, SetPopupIsClosed] = useState(true)
    const [Close, SetClose] = useState(0)

    // useEffect(() => {
    //     if (Close === 1) {
    //         SetPopupIsClosed(true)
    //         SetClose(0)
    //     }
    // }, [Close])

    if (isSale) {
        return (
            <li
                style={{
                    border: `1px solid #e71616`,
                    backgroundColor: '#e71616',
                    color: '#fff',
                    padding: '4px 10px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    marginTop: '5px',
                    marginRight: '5px',
                    cursor: 'pointer',
                    zIndex: 10 - index,
                    listStyle: 'none',
                    width: 'fit-content',
                }}
                onClick={() => {
                    SetClose(1)
                    SetPopupIsClosed((p) => !p)
                }}
                key={index}
            >
                {ListSaleItem}
            </li>
        )
    }

    if (ListSaleItem) {
        return (
            <>
                {/* Modals */}
                {Mobile && (
                    <Modal
                        title={ListSaleItem.data.Title}
                        text={ListSaleItem.data.Text}
                        onClose={() => SetPopupIsClosed(true)}
                        closed={PopupIsClosed}
                    />
                )}

                <li
                    onClick={() => {
                        setTimeout(() => {
                            SetPopupIsClosed((p) => !p)
                        }, 10)
                    }}
                    style={{
                        border: `1px solid ${ListSaleItem.data.BorderColor}`,
                        backgroundColor: ListSaleItem.data.BackgroundColor,
                        color: ListSaleItem.data.TextColor,
                        padding: '4px 10px',
                        fontSize: '14px',
                        borderRadius: '5px',
                        marginTop: '5px',
                        cursor: 'pointer',
                        zIndex: 10 - index,
                        listStyle: 'none',
                        width: 'fit-content',
                    }}
                    key={index}
                >
                    <OutsideClickHandler
                        useCapture={true}
                        onOutsideClick={(e) => {
                            SetPopupIsClosed(true)
                        }}
                    >
                        {ListSaleItem.data.Title}
                        {!Mobile && (
                            <PopupsTextOnProductCard
                                ListSaleItem={ListSaleItem}
                                PopupIsClosed={PopupIsClosed}
                                SetClose={SetClose}
                            />
                        )}
                    </OutsideClickHandler>
                </li>
            </>
        )
    }

    if (GiftLabel) {
        return (
            <>
                <li
                    style={{
                        border: `1px solid #bd2cd2`,
                        backgroundColor: '#fff',
                        color: '#000',
                        padding: '4px 10px',
                        fontSize: '14px',
                        borderRadius: '5px',
                        marginTop: '5px',
                        cursor: 'pointer',
                        zIndex: 2,
                        listStyle: 'none',
                        width: 'fit-content',
                        cursor: 'pointer',
                    }}
                    key={index}
                    onClick={() => {
                        if (!PopupIsClosed) {
                        }

                        SetPopupIsClosed((p) => !p)
                    }}
                >
                    {capitalizeFirstLetter(GiftLabel.data.Title) + ' в ПОДАРОК'}
                    {!Mobile && (
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                SetPopupIsClosed(true)
                            }}
                        >
                            <PopupsTextOnProductCard
                                GiftItem={GiftLabel}
                                PopupIsClosed={PopupIsClosed}
                                SetClose={SetClose}
                            />
                        </OutsideClickHandler>
                    )}
                </li>
            </>
        )
    }

    if (ListLabel) {
        return (
            <>
                {/* Modals */}
                {Mobile && <Modal title={ListSaleItem.Title} />}

                <li
                    style={{
                        border: `1px solid ${ListLabel.BorderColor}`,
                        backgroundColor: ListLabel.BackgroundColor,
                        color: ListLabel.TextColor,
                        padding: '4px 10px',
                        fontSize: '14px',
                        borderRadius: '5px',
                        marginTop: '5px',
                        cursor: 'pointer',
                        zIndex: 1,
                        listStyle: 'none',
                        width: 'fit-content',
                        cursor: 'default',
                    }}
                    key={index}
                    onClick={() => {
                        SetPopupIsClosed((p) => !p)
                    }}
                >
                    {ListLabel.Title}
                </li>
            </>
        )
    }
}

const PopupsOnProductCard = ({
    ListSalesList,
    SalePercent,
    IsMobile,
    desktopViewType,
    Labels = [],
    Gifts = [],
}) => {
    const Ref = useRef(null)
    const [IsClosed, SetIsClosed] = useState(true)

    return (
        <div
            style={
                desktopViewType === 'single'
                    ? { left: '1%', flexDirection: 'column', width: 'auto' }
                    : {}
            }
            className={popups_styles.product_card__popups}
        >
            <div
                ref={Ref}
                onClick={() => SetIsClosed(false)}
                style={
                    IsClosed
                        ? {
                              overflow: 'hidden !important',
                              marginBottom: '5px',
                              opacity: '1',
                              display: 'block',
                              position: 'absolute',
                              right: !IsMobile ? '-30px' : '-25px',
                          }
                        : {
                              overflow: 'hidden !important',
                              marginBottom: '5px',
                              opacity: '0',
                              display: 'none !important',
                              position: 'absolute',
                              right: !IsMobile ? '-30px' : '0px',
                          }
                }
                className={`${popups_styles.product_card__popup} ${popups_styles.product_card__popup_load_more}`}
            >
                <span>
                    <svg
                        style={{
                            width: '20px',
                            height: '20px',
                            transform:
                                'scale(0.6) rotate(270deg) translate(4px, -6px)',
                            fill: '#0CA5D3',
                        }}
                        className={popups_styles.arrow}
                    >
                        <path d="M19 9.14q0 .179-.14.316l-6.538 6.407Q12.182 16 12 16t-.322-.137L5.14 9.456Q5 9.32 5 9.14q0-.178.14-.316l.701-.687Q5.981 8 6.164 8q.182 0 .322.137L12 13.541l5.514-5.404q.14-.137.322-.137.183 0 .323.137l.7.687q.141.138.141.316z"></path>
                    </svg>
                </span>
            </div>

            {SalePercent && (
                <PopupOnProductCard
                    isSale={true}
                    ListSaleItem={SalePercent + '%'}
                    index={0}
                    key={uuidv4()}
                />
            )}

            {!IsMobile && (
                <PopupOnProductCard
                    Mobile={IsMobile}
                    ListSaleItem={ListSalesList[0]}
                    index={0}
                    key={uuidv4()}
                />
            )}

            <SlideDown
                className={popups_styles.product_card__fulllpopuplist}
                closed={IsClosed}
                style={desktopViewType === 'single' ? { width: '200px' } : {}}
            >
                <ul
                    style={
                        desktopViewType === 'single'
                            ? { flexDirection: 'column' }
                            : {}
                    }
                >
                    {console.log('ListSalesList', ListSalesList)}
                    {ListSalesList.map((ListSaleItem, index) => {
                        if (!IsMobile && index === 0) return
                        return (
                            <PopupOnProductCard
                                Mobile={IsMobile}
                                ListSaleItem={ListSaleItem}
                                index={index}
                                key={uuidv4()}
                            />
                        )
                    })}
                    {Labels.length > 0 &&
                        Labels.map((label, index) => {
                            return (
                                <PopupOnProductCard
                                    Mobile={IsMobile}
                                    ListSaleItem={ListSaleItem}
                                    isSale={false}
                                    ListLabel={label}
                                    index={index}
                                    key={uuidv4()}
                                />
                            )
                        })}

                    {Gifts.length > 0 &&
                        Gifts.map((gift, index) => {
                            return (
                                <PopupOnProductCard
                                    Mobile={IsMobile}
                                    isSale={false}
                                    GiftLabel={gift}
                                    index={index}
                                    key={uuidv4()}
                                />
                            )
                        })}
                </ul>
                <div
                    onClick={() => SetIsClosed(true)}
                    style={{ boxSizing: 'border-box' }}
                    className={`${popups_styles.product_card__popup} ${popups_styles.product_card__popup_last_child} ${popups_styles.product_card__fulllpopuplist_inner_card}`}
                >
                    <span>
                        <svg viewBox="0 0 24 24">
                            <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"></path>
                        </svg>
                    </span>
                </div>
            </SlideDown>
        </div>
    )
}

export default PopupsOnProductCard
