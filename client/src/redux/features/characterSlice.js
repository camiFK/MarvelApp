import {createSlice} from '@reduxjs/toolkit';
import { getAllCharacters, getCharacterDetail } from '../actions.js';

const initialState = {
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
        builder.addCase(getAllCharacters.fulfilled, (state, action) => {
            state.characters.push(action.payload);
            state.charactersCopy.push(action.payload);
        })
        builder.addCase(getCharacterDetail.fulfilled, (state, action) => {
            state.characterDetail.push(action.payload);
        })
    }
})



export default characterSlice.reducer;