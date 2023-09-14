import { Component } from 'react';
import './App.css'
import {Paragraf, UserListClass, UserListFunction} from './components'
// import StateParagraf from './components/stateParagraf';
import StateList from './components/stateList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [ {name: "John", age: 40}, {name: "Bob", age: 30}, {name: "Mack", age: 19}]
    };
  }

  state = {
    users: [ {name: "John", age: 40}, {name: "Bob", age: 30}, {name: "Mack", age: 19}]
  };

  render(){
    return (
      <>
        <h1>z7-z8: components children state</h1>

        <p>App je class-na komponenta</p>

        <h3>Funkcijska komponenta paragrafa:</h3>
        <Paragraf name={this.state.users[0].name} age={this.state.users[0].age} />

        <h3>Class-na komponenta liste:</h3>
        <UserListClass users={this.state.users} />

        <h3>Funkcijska komponenta liste</h3>
        <UserListFunction users={this.state.users} />

        <h3>Funkcijskoj komponenti šaljem children</h3>
        <UserListFunction users={this.state.users}>
          <p>Uz ovu listu ide child</p>
        </UserListFunction>

        {/* <h3>Paragraph with state and two button s</h3>
        <StateParagraf/> */}

        <h3>State lista</h3>
        <StateList users={this.state.users}/>
      </>
    );
  }
}

export default App
