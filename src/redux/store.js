import {createStore, combineReducers } from 'redux';

import nosotros from './reducers/nosotros'
import servicios from './reducers/services';

const reducer = combineReducers({
    nosotros,
    servicios
});

const store = createStore(reducer);

export default store;