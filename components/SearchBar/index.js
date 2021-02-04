import { useRef, useEffect } from 'react'

import SearchIcon from './../../assets/svg/searchicon.svg'
import styles from './../../styles/components/SearchBar/index.sass'

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
        <div className={styles.searchbar_wrapper}>
            <input
                onBlur={blur}
                ref={inputRef}
                type="text"
                placeholder="Поиск..."
            ></input>
            <div className={styles.seachbar_icon_wrapper}>
                <span></span>
                <img src={SearchIcon}></img>
            </div>
        </div>
    )
}

export default Searchbar
