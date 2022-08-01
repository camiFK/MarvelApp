import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import characterReducer from './features/characterSlice.js';
import comicReducer from './features/comicSlice.js';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        character: characterReducer,
        comic: comicReducer,
    },
    devTools: composeWithDevTools(applyMiddleware(thunk))
})