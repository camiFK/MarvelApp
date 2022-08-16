import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCharacters = createAsyncThunk(
    'character/getAllCharacters',
    async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/characters');
            return [...data];
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const getCharacterDetail = createAsyncThunk(
    'character/getCharacterDetail',
    async (id) => {
        const {data} = await axios.get(`http://localhost:3001/characters/${id}`);
        return data;
    }
)

export const getAllComics = createAsyncThunk(
    'comic/getAllComics',
    async () => {
        const {data} = await axios.get('http://localhost:3001/comics');
        return data;
    }
)
