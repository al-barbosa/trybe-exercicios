import React from 'react';
import './App.css';

let class1 = true;
let class2 = true;
let class3 = true;

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.state = {
      Btn1: 0,
      Btn2: 0,
      Btn3: 0
    }
  }
  handleClick1() {
    this.state.Btn1 % 2 === 0 ? class1 = false : class1 = true;
    this.setState((estadoAnterior, _props) => ({
      Btn1: estadoAnterior.Btn1 + 1
    }))
  }
  handleClick2() {
    this.state.Btn2 % 2 === 0 ? class2 = false : class2 = true;
    this.setState((estadoAnterior, _props) => ({
      Btn2: estadoAnterior.Btn2 + 1
    }))
  }
  handleClick3() {
    this.state.Btn3 % 2 === 0 ? class3 = false : class3 = true;
    this.setState((estadoAnterior, _props) => ({
      Btn3: estadoAnterior.Btn3 + 1
    }
    ))
  }
  render() {
    return(
    <div>
      <button className={class1 ? 'red' : null} onClick={this.handleClick1}>Btn1: {this.state.Btn1}</button>
      <button className={class2 ? 'red' : null} onClick={this.handleClick2}>Btn2: {this.state.Btn2}</button>
      <button className={class3 ? 'red' : null} onClick={this.handleClick3}>Btn3: {this.state.Btn3}</button>
    </div>
    )
  }
}

export default App;
