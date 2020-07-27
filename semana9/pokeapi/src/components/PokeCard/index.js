import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const ExibePokemon = pokemon;

  return (
    <div>
      <p>{ExibePokemon.name}</p>
      <p>{ExibePokemon.weight} Kg</p>
      {ExibePokemon.types && <p>{ExibePokemon.types[0].type.name}</p>}
      {ExibePokemon.sprites && (
        <img src={ExibePokemon.sprites.front_default} alt={ExibePokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;