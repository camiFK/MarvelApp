import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

async function getAllCharacters(){
   const {data} = await axios.get('http://localhost:3000/characters');
   console.log(data)
   return data;
}

const initialState = {
         characters: getAllCharacters(),
         charactersCopy: [],
         characterDetail: [],
         characterFiltered: [],
 }


export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {

    }
})

console.log(characterSlice)

export default characterSlice.reducer;