import {createSlice} from '@reduxjs/toolkit';
import { getAllComics } from '../actions.js';

const initialState = {
    comics: [],
    comicsCopy: [],
}

export const comicSlice = createSlice({
    name: 'comic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllComics.fulfilled, (state, action) => {
            state.comics.push(action.payload);
            state.comicsCopy.push(action.payload);
        })
    }
})


export default comicSlice.reducer;