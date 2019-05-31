import React from 'react';
import Header from "./utils/headerComponent";
import ListContainer from "./components/List/index";
import Storage from "./utils/Storage";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modal: {
        listIndex: null,
        cardIndex: null
      },
      lists: Storage.getLists()
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
    Storage.setLists(lists)
  }
  editCard = (listIndex, cardIndex, index, value) => {
    const lists =this.state.lists
    lists[listIndex].list[cardIndex][index] = value
    this.setState({
      lists: lists
    })
    Storage.setLists(lists)
  }
  editModal = (listIndex, cardIndex) => {
    this.setState({
      modal: {
        listIndex: listIndex,
        cardIndex: cardIndex
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ListContainer 
          handleSubmitAdd={this.handleSubmitAdd} 
          lists={this.state.lists}
          modal={this.state.modal}
          editModal={this.editModal}
          editCard={this.editCard}
        />
      </div>
    )
  }
}

export default App;
