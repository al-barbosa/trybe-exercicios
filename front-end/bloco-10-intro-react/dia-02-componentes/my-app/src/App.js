// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

let selecaoAtual = []

class App extends React.Component {
  constructor() {
    super()
    this.nextPkm = this.nextPkm.bind(this)
    this.increseState = this.increseState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.state = {
      Index: 0,
      Type: 'Fire'
    }
    this.fireOnly()
  }

  increseState() {
    this.setState((state, _props) => ({
      Index: state.Index + 1
    }))
  }

  resetState() {
    this.setState((_state, _props) => ({
      Index: 0
    }))
  }

  nextPkm() {
    this.state.Index >= selecaoAtual.length - 1 ? this.resetState() : this.increseState()
  }

  fireOnly = () => {
    this.setState((_state, _props) => ({
      Type: 'Fire'
    }))
    this.resetState()
    selecaoAtual = pokemons.filter((pokemon) => pokemon.type === this.state.Type)
  }

  psychicOnly = () => {
    this.setState((_state, _props) => ({
      Type: 'Psychic'
    }))
    this.resetState()
    selecaoAtual = pokemons.filter((pokemon) => pokemon.type === this.state.Type)
  }

  render() {
    return (
      <div className="App">
        <Pokedex pokemon={selecaoAtual[this.state.Index]}/>
        <button onClick={this.nextPkm}>Próximo</button>
        <button onClick={this.fireOnly}>Fire</button>
        <button onClick={this.psychicOnly}>Psychic</button>
      </div>
    );
  }
}

export default App;