import { useContext } from "react";
import PokeContext from "../data/PokeContext";

const ButtonDetails = ({ PokeName }) => {
  const [state, dispatch] = useContext(PokeContext);
  const getDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName}`)
      .then((response) => response.json())
      .then((foundedData) => {
        dispatch({ type: "SET_POKEMONS_TO_DISPLAY", payload: foundedData });
      });
  };

  return <button onClick={getDetails}>Details</button>;
};

export default ButtonDetails;
