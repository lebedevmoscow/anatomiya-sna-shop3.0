import React from 'react'

const LoadingSpinner = ({
    scale,
    width,
    height,
    marginTop,
    left,
    className,
    other,
}) => {
    return (
        <div
            className={className}
            style={{
                transform: `scale(${scale})`,
                width,
                height,
                marginTop,
                position: 'relative',
                left,
                ...other,
            }}
            className="loading-spinner-wrapper"
        >
            <div class="loader">Loading...</div>
        </div>
    )
}

export default LoadingSpinner
