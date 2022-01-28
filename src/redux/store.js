import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { tokenReducer, jokeSetupReducer, jokeDeliveryReducer } from "./reducers";

const rootReducer = combineReducers({ tokenReducer, jokeSetupReducer, jokeDeliveryReducer })

export const Store = createStore(rootReducer, applyMiddleware(thunk));