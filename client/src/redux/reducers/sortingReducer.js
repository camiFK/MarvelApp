const initialState = {

}

export const sortingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters: action.payload,
                charactersCopy: action.payload,
            }
        case 'SET_CHARACTER':
            return {
                ...state,
                character: action.payload,
            }
        case 'SET_COMICS':
            return {
                ...state,
                comics: action.payload,
            }
        case 'SEARCH_CHARACTERS':
            return {
                ...state,
                characters: state.charactersCopy.filter(character => character.name.toLowerCase().includes(action.payload.toLowerCase())),
            }
        default:
            return state;
    }
}