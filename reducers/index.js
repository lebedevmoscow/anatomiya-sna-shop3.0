import { combineReducers } from 'redux'

// Reducers
import IndexPageMainFilterReducer from './IndexPageMainFilter'
import FavoritesProductsListReducer from './FavoritesProductsList'
import CompareProductsListReducer from './CompareProductsList'
import SelectedSizeReducer from './SelectedSize'
import CatalogProductListReducer from './CatalogProductList'
import NewCatalogProductListReducer from './NewCatalogProductList'
import CatalogCommonReducer from './CatalogCommon'

// Composition of reducers
const rootReducer = combineReducers({
    IndexPageMainFilterReducer,
    FavoritesProductsListReducer,
    CompareProductsListReducer,
    SelectedSizeReducer,
    CatalogProductListReducer,
    NewCatalogProductListReducer,
    CatalogCommonReducer,
})

export default rootReducer
