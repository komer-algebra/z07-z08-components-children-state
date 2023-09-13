import { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.users = [
      {name: "John", age: 40},
      {name: "Bob", age: 30},
      {name: "Mack", age: 19}
    ];
  }

  render(){
    return (
      <>
        <h1>z7-z8: components children state</h1>
        <p>first user is {this.users[0].name}, {this.users[0].age} years old</p>
      </>
    );
  }
}

export default App
