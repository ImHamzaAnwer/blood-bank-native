import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import donorFormReducer from './reducers/donorFormReducer';
import donorReducer from './reducers/donorReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    donorForm: donorFormReducer,
    donors: donorReducer
})

const createStoreWithMiddleware = applyMiddleware(thunk, createLogger());

let store = createStore(rootReducer, createStoreWithMiddleware)


export default store;