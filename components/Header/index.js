// Styles
import common_styels from './../../styles/common.module.sass'

// React components
import AdvertBanner from './AdvertBanner'
import AboutHeader from './AboutHeader'
import MainHeader from './MainHeader'

const Header = ({ worktimeHead, phoneCommon, banner }) => {
    return (
        <header className={common_styels.header}>
            <div className={common_styels.util_container}>
                <AdvertBanner banner={banner} />
            </div>
            <div className={common_styels.container}>
                <AboutHeader worktimeHead={worktimeHead} />
                <MainHeader phoneCommon={phoneCommon} />
            </div>
        </header>
    )
}

export default Header
