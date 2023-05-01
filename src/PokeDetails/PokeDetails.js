import { useContext } from "react";
import PokeContext from "../data/PokeContext";
import PokeDex from "../PokeDex/PokeDex";
import ButtonDetails from "../Buttons/ButtonDetails";

const PokeDetails = () => {
  const [state, dispatch] = useContext(PokeContext);

  return (
    <div className="poke-details">
      {state.pokeToDisplay === null && <p>ras</p>}
      {state.pokeToDisplay !== null && (
        <>
          <p>{state.pokeToDisplay.name}</p>{" "}
          <img src={state.pokeToDisplay.sprites.front_default} />
        </>
      )}
    </div>
  );
};

export default PokeDetails;
