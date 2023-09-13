import { Component } from 'react';
import './App.css'
import {Paragraf, UserListClass, UserListFunction} from './components'

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

        <p>App je class-na komponenta</p>

        <h3>Funkcijska komponenta paragrafa:</h3>
        <Paragraf name={this.users[0].name} age={this.users[0].age} />

        <h3>Class-na komponenta liste:</h3>
        <UserListClass users={this.users} />

        <h3>Funkcijska komponenta liste</h3>
        <UserListFunction users={this.users} />

        <h3>Funkcijskoj komponenti šaljem children</h3>
        <UserListFunction users={this.users}>
          <p>Uz ovu listu ide objašnjenje</p>
        </UserListFunction>
      </>
    );
  }
}

export default App
