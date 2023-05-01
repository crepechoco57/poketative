export const initialState = {
  pokeList: [],
  pokeToDisplay: null,
};

const PokeReducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokeList: action.payload,
      };
    case "SET_POKEMONS_TO_DISPLAY":
      return {
        ...state,
        pokeToDisplay: action.payload,
      };

    default:
      return state;
  }
};

export default PokeReducer;
