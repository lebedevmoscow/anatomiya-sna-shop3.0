import '../styles/globals.css'

// Third party styles
import 'react-slidedown/lib/slidedown.css'
import 'reactjs-popup/dist/index.css'
import 'swiper/swiper-bundle.css'

// Styles
import './../styles/fonts.sass'
import './../styles/unmoduled.sass'
import './../styles/spinners.css'

// Redux
import { createWrapper } from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import store from './../store'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

// Обертка от next-redux-wrapper чтобы можно было использовать Redux вместе с next.js
const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
