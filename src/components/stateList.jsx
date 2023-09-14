import { Component } from "react";

class StateList extends Component{
  state = {
    users: [...this.props.users]
  }

  resetList = () => {
    this.setState({users:[]});
  }

  addUser = () => {
    let nameVal = document.getElementById('iName').value;
    let ageVal = document.getElementById('iAge').value;
      this.setState(prevState =>
        (
          { users: [...prevState.users, {name: nameVal, age: ageVal }]}
        )
      );
    }

  render(){
    const users = this.state.users;
    const userItems = users.map( i => <li key="">{i.name} - {i.age}</li>) ;
    return (
      <>
        <ul>
          {userItems}
        </ul>
        <form>
            <label htmlFor="iName">Name:</label>
            <input type="text" id="iName" name="iName" autoComplete></input><br/>
            <label htmlFor="iAge">Age:</label>
            <input type="number" id="iAge" name="iAge"></input><br/>
            <button onClick={this.resetList}>RESET LIST</button>
            <button onClick={this.addUser}>ADD USER</button>
        </form>
      </>
    );
  }
}

export default StateList;
