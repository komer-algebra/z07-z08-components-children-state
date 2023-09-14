import { Component } from "react";

class StateParagraf extends Component{
  state = {num: 0};
  changeState = () => {
    let newVal = this.state.num +1;
    this.setState({num: newVal});
   }
  resetState = () => {
    this.setState({num: 0})
  }
  render(){
    return (
        <>
          <p>State: {this.state.num}</p>
          <button onClick={this.changeState}> STATE +1 </button>
          <button onClick={this.resetState}> RESET STATE </button>
        </>
      );
  }
}
export default StateParagraf;
