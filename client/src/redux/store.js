import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers/indexReducer.js';
import thunk from 'redux-thunk';

const store = configureStore(
   {reducer: reducers},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store;