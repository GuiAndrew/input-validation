import React, { Component } from 'react';
import './App.css';
import ValidationInput from './components/ValidationInput/ValidationInput';
import Char from './components/Char/Char';

class App extends Component {
  state = {
    inputText: ''
  }

  changedHandler = (event) => {
    this.setState({ 
      inputText: event.target.value,
      // inputTextLength:  event.target.value.length,
      // listChar: event.target.value.split('')
    });
    // console.log(this.state.inputTextLength);
  }

  deleteTheCharClickedHandler = (index) => {
    const chars = this.state.inputText.split('');
    chars.splice(index, 1);

    const textWithoutDeleteChar = chars.join('');
    this.setState({ inputText: textWithoutDeleteChar });
  }

  render() {
    const listChar = this.state.inputText.split('').map((character, index) => {
      return <Char character={ character } key={ index } clicked={() => this.deleteTheCharClickedHandler(index) } />
    });

    return (
      <div className="App">
        <input type="text" onChange={ this.changedHandler } value={ this.state.inputText } />
        <p>{ this.state.inputText }</p>

        <ValidationInput validationInfo={ this.state.inputText.length } />
        { listChar }
      </div>
    );
  }
}

export default App;
