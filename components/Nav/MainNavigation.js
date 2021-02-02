import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import ReactHoverObserver from 'react-hover-observer'

// Styles
import common_styles from './../../styles/common.module.sass'
import nav_styles from './../../styles/components/Nav/MainNavigation.module.sass'

import SelectorFilter from './SelectorFilter'

export const UtilComponent = ({ isHovering, proto, close }) => {
    const hasWindow = typeof window !== 'undefined'

    const handle = () => {
        if (!isHovering && hasWindow) {
            close()
        }
    }

    useEffect(() => {
        if (isHovering && hasWindow) {
            proto()
        }

        if (hasWindow) {
            document.addEventListener('click', handle)
        }

        return () => {
            document.removeEventListener('click', handle)
        }
    }, [isHovering, hasWindow])
    return null
}

const MainNavigation = ({ headerCatalog }) => {
    // Refs
    const saleRef = useRef(null)

    // State
    const [categoryActive, setCategoryActive] = useState(null)
    const [updateFilter, setUpdateFilter] = useState(0)

    // On hover handlers
    const onOverSaleHandler = () => {
        if (saleRef) {
            saleRef.current.style.display = 'flex'
            setCategoryActive(null)
        }
    }

    const onOutSaleHandler = () => {
        setUpdateFilter((p) => ++p)

        if (saleRef.current) {
            saleRef.current.style.display = 'none'
            setCategoryActive(null)
        }
    }

    const onOverCategoryHandler = (data) => {
        setUpdateFilter((p) => ++p)
        setCategoryActive(
            <SelectorFilter categories={data} updateFilter={updateFilter} />
        )
    }

    // On click handlers
    const onSalesCrossClickHandler = () => {
        if (saleRef.current) {
            saleRef.current.style.display = 'none'
        }
    }

    useEffect(() => {
        if (saleRef.current) {
            saleRef.current.style.display = 'none'
        }
    }, [updateFilter])

    return (
        <div className={common_styles.container}>
            <div className={nav_styles.main_navigation}>
                {/* Other tabs */}
                <ul className={nav_styles.main_navigation__list}>
                    <ReactHoverObserver hoverDelayInMs={250}>
                        <UtilComponent
                            proto={onOverSaleHandler}
                            onMouseOut={onOutSaleHandler}
                            close={onSalesCrossClickHandler}
                        />
                        <li className={nav_styles.main_navigation__sale_item}>
                            Акции <span className={nav_styles.arrow}></span>
                            <span className={nav_styles.trinagle}></span>
                        </li>
                    </ReactHoverObserver>
                    {headerCatalog.catalogs.map((catalog, index) => {
                        return (
                            <ReactHoverObserver
                                key={index}
                                hoverDelayInMs={250}
                            >
                                <UtilComponent
                                    proto={() => {
                                        onOverCategoryHandler(catalog.childes)
                                    }}
                                    close={onOutSaleHandler}
                                />
                                <li key={index}>
                                    {catalog.title}
                                    <span className={nav_styles.arrow}></span>
                                    <span
                                        className={nav_styles.trinagle}
                                    ></span>
                                </li>
                            </ReactHoverObserver>
                        )
                    })}
                </ul>

                {/* Active tab */}
                {categoryActive}

                {/* Sale tab */}
                <div
                    className={nav_styles.main_navigation__sale_window}
                    ref={saleRef}
                >
                    {headerCatalog.sales.childes.map((saleData, index) => {
                        let tag
                        if (index === 0) tag = 'left'
                        else if (index === 1) tag = 'center'
                        else if (index === 2) tag = 'right'
                        return (
                            <div
                                // className={`main_navigation__salewindow-${tag}`}
                                key={index}
                            >
                                <div
                                    className={
                                        nav_styles.main_navigation__sale_window_title
                                    }
                                >
                                    {saleData.title}
                                </div>
                                <ul>
                                    {saleData.childes.map((child, index) => {
                                        return (
                                            <Link key={index} href={child.url}>
                                                <a>
                                                    <li>{child.title}</li>
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                    <div
                        className={
                            nav_styles.main_navigation__sale_window_cross
                        }
                        onClick={onSalesCrossClickHandler}
                    >
                        x
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation
