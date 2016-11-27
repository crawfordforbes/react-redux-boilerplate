import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import data from './reducers/data'
import meta from './reducers/meta'

const stores = combineReducers({data: data, meta: meta})

export default createStore(stores, applyMiddleware(thunkMiddleware))
