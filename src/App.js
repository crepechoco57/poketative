import "./App.css";
import Header from "./Header/Header";
import { useEffect, useContext } from "react";
import PokeContext from "./data/PokeContext";
import Test from "./Test/Test";
import PokeDex from "./PokeDex/PokeDex";
import PokeDetails from "./PokeDetails/PokeDetails";

function App() {
  const [state, dispatch] = useContext(PokeContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let foundedData = data.results;
        dispatch({ type: "SET_POKEMONS", payload: foundedData });
      });
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <PokeDex />
        <PokeDetails />
      </div>
    </>
  );
}

export default App;
