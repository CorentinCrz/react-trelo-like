import React from 'react';
import Header from "./utils/headerComponent";
import ListsComponent from "./components/Lists/index";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lists: []
    }
  }
  handleSubmitAdd = (name, listIndex) => {
    const list = {
      name: name,
      list: []
    }
    let lists = this.state.lists;
    listIndex === false ? lists.push(list) : lists[listIndex].list.push(list)
    this.setState({
      lists: lists
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ListsComponent 
          handleSubmitAdd={this.handleSubmitAdd} 
          lists={this.state.lists}
        />
      </div>
    )
  }
}

export default App;
