import styles from './../../styles/components/ViewType/DesktopSeveral.module.sass'
import PopupsOnProductCard from './../Popups/PopupsOnProductCard'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'
import StatsImage from './../../assets/svg/stats.svg'
import HeartImage from './../../assets/svg/heart.svg'

const DesktopSeveral = ({
    BrandTitle,
    SeriesTitle,
    Title,
    MainImage,
    CatalogType,
    Id,
    Properties,
    Prices,
    Slug,
    InitialSize = [],
    oldMin,
    oldMax,
    catalogSlug,
    subCatalogSlug = null,
    stylesForViewType,
    stylesForDesktopViewType,
    viewType,
    desktopViewType = 'several',
    ListSalesList,
    IsMobile,
    OptionsList,
    Labels,
    Gifts,
}) => {
    const Price =
        InitialSize.length !== 0
            ? InitialSize[0].PriceDiscount.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ' '
              )
            : Prices[0].PriceDiscount.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ' '
              )

    const PriceRaw =
        InitialSize.length !== 0
            ? InitialSize[0].PriceDiscount
            : Prices[0].PriceDiscount

    const PriceOld =
        InitialSize.length !== 0
            ? InitialSize[0].PriceBasic
            : Prices[0].PriceBasic

    const PriceDiff = PriceOld - PriceRaw

    const SalePercent =
        PriceDiff !== 0 ? Math.floor(100 - (PriceRaw * 100) / PriceOld) : null

    return (
        <div className={styles.catalog_product_card}>
            {/* <PopupsOnProductCard
                Labels={Labels}
                SalePercent={SalePercent}
                key={uuidv4()}
                ListSalesList={ListSalesList}
                IsMobile={IsMobile}
                desktopViewType={desktopViewType}
                Gifts={Gifts}
            /> */}
            <div className={styles.catalog_product_card__column}>
                <div
                    className={
                        styles.catalog_product_card__image_wraper_several
                    }
                >
                    <Image width={275} height={172} src={MainImage.FilePath} />
                </div>
                <div className={styles.catalog_product_card__smalltext}>
                    Купить {CatalogType}
                </div>
                {BrandTitle}
            </div>
            <div className={`${styles.after_title}`}>
                {/* <EqualHeightElement name="CatalogProductCard__Price"> */}
                <div className={styles.catalog_product_card__price_block}>
                    <div
                        className={
                            styles.catalog_product_card__price_block_left
                        }
                    >
                        {PriceDiff !== 0 && (
                            <div
                                className={styles.product_card__price_discount}
                            >
                                <div
                                    className={styles.product_card__price_prev}
                                >
                                    <span>
                                        {PriceOld.toString().replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ' '
                                        )}
                                        <div
                                            className={
                                                styles.product_card__price_diff
                                            }
                                        >
                                            -
                                            {PriceDiff.toString().replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ' '
                                            )}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className={styles.catalog_product_card__price}>
                            {Price} Руб.
                        </div>
                        <div
                            className={
                                styles.catalog_product_card__price_credit
                            }
                        >
                            В рассрочку от {Math.ceil(PriceRaw / 6)} руб/мес
                        </div>
                    </div>

                    <div
                        className={
                            styles.catalog_product_card__price_block_right
                        }
                    >
                        <div
                            className={styles.catalog_product_card__stat_block}
                        >
                            <div
                                className={`${styles.product_card__button__popup} ${styles.product_card__stats_button__popup}`}
                            >
                                Товар добавлен в{' '}
                                <Link href="/">Сравнение!</Link>
                            </div>
                            <div className={styles.stats}>
                                <Image
                                    src={StatsImage}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                        <div
                            className={styles.catalog_product_card__stat_block}
                        >
                            <div
                                className={`${styles.product_card__button__popup} ${styles.product_card__stats_button__popup}`}
                            >
                                Товар добавлен в{' '}
                                <Link href="/">Избранное!</Link>
                            </div>
                            <div className={styles.heart}>
                                <Image
                                    src={HeartImage}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </EqualHeightElement> */}
        </div>
    )
}

export default DesktopSeveral
