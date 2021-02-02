import { combineReducers } from 'redux'

// Reducers
import IndexPageMainFilterReducer from './IndexPageMainFilter'
import FavoritesProductsListReducer from './FavoritesProductsList'
import CompareProductsListReducer from './CompareProductsList'
import SelectedSizeReducer from './SelectedSize'
import CatalogProductListReducer from './CatalogProductList'

// Composition of reducers
const rootReducer = combineReducers({
    IndexPageMainFilterReducer,
    FavoritesProductsListReducer,
    CompareProductsListReducer,
    SelectedSizeReducer,
    CatalogProductListReducer,
})

export default rootReducer
