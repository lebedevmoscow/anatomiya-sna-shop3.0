import { combineReducers } from 'redux'

// Reducers
import IndexPageMainFilterReducer from './IndexPageMainFilter'
import FavoritesProductsListReducer from './FavoritesProductsList'
import CompareProductsListReducer from './CompareProductsList'
import SelectedSizeReducer from './SelectedSize'
import CatalogProductListReducer from './CatalogProductList'
import CatalogCommonReducer from './CatalogCommon'
import ProductPageReducer from './ProductPage'

import CatalogReducer from './../catalog_reducers_rebuild/catalog'

// Composition of reducers
const rootReducer = combineReducers({
    IndexPageMainFilterReducer,
    FavoritesProductsListReducer,
    CompareProductsListReducer,
    SelectedSizeReducer,
    CatalogProductListReducer,
    CatalogCommonReducer,
    CatalogReducer,
    ProductPageReducer,
})

export default rootReducer
