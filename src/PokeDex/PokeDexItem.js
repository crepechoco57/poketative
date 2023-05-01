import { useContext } from "react";
import PokeContext from "../data/PokeContext";
import ButtonDetails from "../Buttons/ButtonDetails";

const PokeDexItem = () => {
  const [state, dispatch] = useContext(PokeContext);

  const pokeSetOuQUoi = () => {
    console.log(state.pokeToDisplay);
  };
  return (
    <div className="pokeDexItem">
      {state.pokeList.map((pokemon) => (
        <>
          <p>{pokemon.name}</p>
          {/* au click poketodisplay est setté */}
          <ButtonDetails PokeName={pokemon.name} />
          <button onClick={pokeSetOuQUoi}>Test</button>
          <button>AddToTeam</button>
        </>
      ))}
    </div>
  );
};

export default PokeDexItem;
