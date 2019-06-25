import React, { useState, useReducer, useEffect } from 'react';
import data from './data';

import Pokemon from './Pokemon';

// REDUCER
const initialState = { current: 68 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'prev':
      if (state.current === 0) {
        return state;
      }
      return { current: state.current - 1 };

    case 'next':
      if (state.current === 150) {
        return state;
      }
      return { current: state.current + 1 };

    case 'set':
      return { current: action.payload - 1 };

    default:
      return state;
  }
};

function App() {
  // STATE
  const [pokemonData] = useState(data);

  // REDUCER
  const [state, dispatch] = useReducer(reducer, initialState);

  // EFFECTS

  useEffect(() => {
    // console.log(pokemonData[current]);
    document.title = `Pokedex - ${pokemonData[state.current].name}`;
  }, [pokemonData, state.current]);

  // RENDER
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      {/* <p>current pokemon number: {state.current}</p> */}
      <button type="button" onClick={() => dispatch({ type: 'prev' })}>
        PREV
      </button>
      <button type="button" onClick={() => dispatch({ type: 'next' })}>
        NEXT
      </button>
      <br />
      <input type="text" onInput={e => dispatch({ type: 'set', payload: e.target.value })} />
      <br />
      <Pokemon pokemon={pokemonData[state.current]} />
    </div>
  );
}

export default App;
