import React from 'react';
// import styled from 'styled-components';

const SelectPokemon = ({ data, value, handleSelect }) => {
  const options = data.map((pokemon, idx) => (
    <option key={idx} value={idx}>
      {pokemon.name}
    </option>
  ));

  return (
    <select value={value} onChange={handleSelect}>
      {options}
    </select>
  );
};

export default SelectPokemon;
