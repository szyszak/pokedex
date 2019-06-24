import React from 'react';

const Pokemon = ({ pokemon }) => {
  console.table(pokemon);

  return (
    <>
      <img src={`images/${pokemon.id}.png`} alt="pokemon.name" />
      <h2>{pokemon.name}</h2>
      <p>number: {pokemon.id}</p>
      <p>type: </p>
      <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p>
      <p>description: {pokemon.description}</p>
    </>
  );
};

export default Pokemon;
