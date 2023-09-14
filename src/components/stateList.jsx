import { Component } from "react";
import generateName from 'sillyname';

class StateList extends Component{

  constructor(){
    super();
    this.state = {
      users: []
    };
  }

  resetList = () => {
    this.setState({users: []});
  }

  addUser = () => {
    const {users} = this.state;
    let nameVal = document.getElementById('iName').value;
    let ageVal = document.getElementById('iAge').value;
    let newUsers;
    if (nameVal && ageVal) {
      newUsers = [...users, {name: nameVal, age: ageVal}];
    } else {
      const randomName = generateName();
      const randomAge = this.random(18, 99);
      newUsers = [...users, {name: randomName, age: randomAge }]
    }
    this.setState({users: newUsers});
    document.getElementById('iName').value= "";
    document.getElementById('iAge').value = "";
  }

  random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

  render(){
    const { users } = this.state;
    const userItems = users.map( i => <li key="">{i.name} - {i.age}</li>) ;
    return (
      <>
        <form>
          <label htmlFor="iName">Name:</label>
          <input type="text" id="iName" name="iName" required></input><br/>
          <label htmlFor="iAge">Age:</label>
          <input type="number" id="iAge" name="iAge" required></input><br/>
        </form>
        <button onClick={this.resetList}>RESET LIST</button>
            <button onClick={this.addUser}>ADD USER</button>
        <ul>
          {userItems}
        </ul>
      </>
    );
  }
}

export default StateList;
