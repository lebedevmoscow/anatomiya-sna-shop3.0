import React, { useEffect, useRef } from 'react'

// EXPEREMENTAL
import useMediaQuery from './../../hooks/useMedia'

import common_styles from './../../styles/common.module.sass'

const IndexPageAssurances = ({ assurances }) => {
    // Breakpoints
    const breakpoint720 = useMediaQuery(720)

    const assurancesRef = useRef(null)
    const display = !breakpoint720 ? 'block' : 'none'

    useEffect(() => {
        if (assurancesRef.current) {
            assurancesRef.current.innerHTML = assurances
        }
    }, [assurancesRef.current])

    return (
        <div style={{ display }} className={common_styles.container}>
            <div ref={assurancesRef} className="assurances"></div>
        </div>
    )
}

export default IndexPageAssurances
