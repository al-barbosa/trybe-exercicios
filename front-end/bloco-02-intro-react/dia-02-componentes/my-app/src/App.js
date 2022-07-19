// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {pokemons.map((pokemon) => <Pokedex key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    );
  }
}

export default App;