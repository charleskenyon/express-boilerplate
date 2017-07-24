import { combineReducers } from 'redux';
import productReducer from './product-reducer';
import searchReducer from './search-reducer';

var reducers = combineReducers({
    productState: productReducer,
    searchState: searchReducer
});

export default reducers;