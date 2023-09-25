import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import fetchProductsReducer from '../reducers/fetchProductsReducer'

const rootReducer = combineReducers({
    productList: fetchProductsReducer,
    // users: usersReducer
})

const middlewareEnhancer = applyMiddleware(thunk,
    // logger
)

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const rootStore = createStore(rootReducer, composedEnhancers)