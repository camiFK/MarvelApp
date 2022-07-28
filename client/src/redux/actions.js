import axios from 'axios';

export const getCharacters = () => {
    try {
        return async (dispatch) => {
          const response = await axios(`http://localhost:3000/characters`);
          return dispatch({ type: 'SET_CHARACTERS', payload: response.data });
        }      
    } catch (error) { console.log(error.message) }
}

export const getCharacterId = (id) => {
    try {
        return async (dispatch) => {
            const response = await axios(`http://localhost:3000/characters/${id}`);
            return dispatch({ type: 'SET_CHARACTER', payload: response.data });
        }
    } catch (error) { console.log(error.message) }
}

export const getComics = () => {
    try {
        return async (dispatch) => {
            const response = await axios(`http://localhost:3000/comics`);
            return dispatch({ type: 'SET_COMICS', payload: response.data });
        }
        
    } catch (error) { console.log(error.message) }
}

export const updateCharacter = (id, character) => {
    try {
        return async () => {
            const response = await axios.put(`http://localhost:3000/characters/${id}`, character);
            return response.data
        }
    } catch (error) { console.log(error.message) }
}