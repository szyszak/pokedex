import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import data from './data';

import PokemonInfo from './PokemonInfo';
import SelectPokemon from './SelectPokemon';

// STYLES
const Wrapper = styled.div`
  max-width: 400px;
  padding: 30px;
  background-color: #db0c2c;
`;

const MainHeader = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  background-color: #009bff;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

// REDUCER
const initialState = { current: 24 };

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
      if (action.payload < 0 || action.payload > 151) {
        return state;
      }
      return { current: action.payload };

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
    document.title = `Pokedex - ${pokemonData[state.current].name}`;
  }, [pokemonData, state]);

  // HADNLE SELECT
  const handleSelect = (ev) => {
    dispatch({ type: 'set', payload: ev.currentTarget.value });
  };

  // RENDER
  return (
    <Wrapper>
      <MainHeader>POKEDEX</MainHeader>

      <PokemonInfo pokemon={pokemonData[state.current]} />

      <ButtonsWrapper>
        <Button type="button" onClick={() => dispatch({ type: 'prev' })}>
          PREV
        </Button>

        <SelectPokemon data={data} value={state.current} handleSelect={handleSelect} />

        <Button type="button" onClick={() => dispatch({ type: 'next' })}>
          NEXT
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default App;
