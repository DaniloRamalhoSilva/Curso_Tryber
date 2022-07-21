import React from "react";
import data from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component{
  render(){
    const pokeElementLIst = data.map((pokemon)=>{
      return <Pokemon key={pokemon.id} pokemon={pokemon} />
    });
    return <div>
      {pokeElementLIst}
    </div>
  }
}

export default Pokedex;