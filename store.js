import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// Главный store для всего приложения
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeWithDevTools(applyMiddleware(thunk))
)

export default store
