import { useState, useEffect, useContext } from "react";
import { useReducer } from "react";
import PokeReducer from "./PokeReducer";
import { initialState } from "./PokeReducer";
import PokeContext from "./PokeContext";

const PokeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PokeReducer, initialState);

  return (
    <PokeContext.Provider value={[state, dispatch]}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
