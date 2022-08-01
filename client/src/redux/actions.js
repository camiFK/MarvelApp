import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCharacters = createAsyncThunk(
    'character/getAllCharacters',
    async () => {
        const {data} = await axios.get('http://localhost:3000/characters');
        return await data;
    }
)

export const getCharacterDetail = createAsyncThunk(
    'character/getCharacterDetail',
    async (id) => {
        const {data} = await axios.get(`http://localhost:3000/characters/${id}`);
        return await data;
    }
)

export const getAllComics = createAsyncThunk(
    'comic/getAllComics',
    async () => {
        const {data} = await axios.get('http://localhost:3000/comics');
        return await data;
    }
)
