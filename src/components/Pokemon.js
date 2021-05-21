import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function Pokemon({ pokemon }) {
  const [pokemonId, getPokemonId] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url).then((response) => {
      getPokemonId(response.data.id);
    });
  });
  return (
    <div className="col-6 col-md-3 my-2">
      <Card>
        <Card.Title className="text-center">{pokemon.name}</Card.Title>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
          alt={pokemon.name}
        />
        {/* <Parent /> */}
      </Card>
    </div>
  );
}

export default Pokemon;
