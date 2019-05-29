import React from 'react';
import Header from "./utils/headerComponent";
import ListComponent from "./components/List/index";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list1: [],
      list2: []
    }
  }
  handleSubmitAdd = (name, listIndex) => {
    let list = {};
    list[listIndex] = this.state[listIndex].concat(name)
    this.setState(list)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ListComponent 
          name="liste" 
          handleSubmitAdd={this.handleSubmitAdd} 
          lists={this.state.list1}
          listIndex="list1"
        />
        <ListComponent 
          name="liste" 
          handleSubmitAdd={this.handleSubmitAdd} 
          lists={this.state.list2}
          listIndex="list2"
        />
      </div>
    )
  }
}

export default App;
