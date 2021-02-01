import { useRef, useEffect } from 'react'

// import SearchIcon from './../../assets/svg/searchicon.svg'

const Searchbar = ({ open, blur }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [open])

    if (!open) {
        return null
    }

    return (
        <div className="searchbar-wrapper">
            <input
                onBlur={blur}
                ref={inputRef}
                type="text"
                placeholder="Поиск..."
            ></input>
            <div className="seachbar-icon-wrapper">
                <span></span>
                {/* <img src={SearchIcon}></img> */}
            </div>
        </div>
    )
}

export default Searchbar
