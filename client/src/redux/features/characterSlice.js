import {createSlice} from '@reduxjs/toolkit';
import { getAllCharacters, getCharacterDetail } from '../actions.js';

const initialState = {
         loading: false,
         characters: [],
         charactersCopy: [],
         characterDetail: [],
         characterFiltered: [],
 }


export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCharacters.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(getAllCharacters.fulfilled, (state, action) => {
            state.loading = false;
            state.characters = action.payload;
            state.charactersCopy = action.payload;
        })
        builder.addCase(getCharacterDetail.fulfilled, (state, action) => {
            state.characterDetail.push(action.payload);
        })
    }
})


export default characterSlice.reducer;