import { useContext } from "react";
import PokeContext from "../data/PokeContext";
import PokeDexItem from "./PokeDexItem";

const PokeDex = () => {
  const [state, dispatch] = useContext(PokeContext);
  return (
    <div className="pokedex">
      <h1> PokeDex</h1>

      {state.pokeList.length > 0 &&
        state.pokeList.map((pokemon, i) => (
          <PokeDexItem key={i} pokeName={pokemon.name} />
        ))}
    </div>
  );
};

export default PokeDex;
