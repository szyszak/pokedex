import React from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
  padding: 16px 0;
`;

const InfoWrapper = styled.div`
  padding: 12px;
  border: solid 3px #000000;
  background-color: #f5f5f5;
  color: #000000;
`;

const Img = styled.img`
  display: block;
  margin: auto;
  margin-bottom: 14px;
  background-color: #ffffff;
  border: 3px solid #000000;
`;

const Header = styled.h2`
  font-size: 20px;
`;

const Paragraph = styled.p`
  margin-top: 4px;
`;

// RENDER
const PokemonInfo = ({ pokemon }) => {
  console.table(pokemon);
  const type = pokemon.types.map((item, idx) => {
    if (idx === pokemon.types.length - 1) {
      return <span key={idx}>{item}</span>;
    }
    return <span key={idx}>{item}, </span>;
  });

  return (
    <Wrapper>
      <Img src={`images/${pokemon.id}.png`} alt={pokemon.name} />
      <InfoWrapper>
        <Header>{pokemon.name}</Header>
        <Paragraph>Number: {pokemon.id}</Paragraph>
        <Paragraph>Type: {type}</Paragraph>
        <Paragraph>Height: {pokemon.height}</Paragraph>
        <Paragraph>Weight: {pokemon.weight}</Paragraph>
        <Paragraph>Description: {pokemon.description}</Paragraph>
      </InfoWrapper>
    </Wrapper>
  );
};

export default PokemonInfo;
