import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import characterReducer from './features/characterSlice.js';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        character: characterReducer
    },
    devTools: composeWithDevTools(applyMiddleware(thunk))
})