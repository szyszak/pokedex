import React, { useState, useEffect } from 'react';
import data from './data';

import Pokemon from './Pokemon';

function App() {
  // STATE
  const [pokemonData] = useState(data);
  const [current, setCurrent] = useState(68);

  // const setPokemon = (current, num) => {
  //   if (current === 1) return 151;
  //   if (current === 151) return 1;

  //   return current += num;
  // };

  // EFFECTS

  // useEffect(() => {
  //   console.log(pokemonData[current]);
  // }, [pokemonData, current]);

  // RENDER
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <p>
        current pokemon number:
        {current}
      </p>
      <p>
        current pokemon name:
        {pokemonData[current].name}
      </p>
      <button type="button" onClick={() => setCurrent(current - 1)}>
        PREV
      </button>
      <button type="button" onClick={() => setCurrent(current + 1)}>
        NEXT
      </button>
      <br />
      <input type="text" onInput={e => setCurrent(e.target.value)} />
      <br />
      <Pokemon pokemon={pokemonData[current]} />
    </div>
  );
}

export default App;
