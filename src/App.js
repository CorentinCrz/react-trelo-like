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
    this.setLists(lists)
  }
  editCard = (listIndex, cardIndex, index, value) => {
    const lists =this.state.lists
    lists[listIndex].list[cardIndex][index] = value
    this.setLists(lists)
  }
  editList = (listIndex) => {
    const lists =this.state.lists
    lists.splice(listIndex, 1)
    this.setLists(lists)
  }
  editModal = (listIndex, cardIndex) => {
    this.setState({
      modal: {
        listIndex: listIndex,
        cardIndex: cardIndex
      }
    })
  }
  setLists = lists => {
    this.setState({
      lists: lists
    })
    Storage.setLists(lists)
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
          editList={this.editList}
        />
      </div>
    )
  }
}

export default App;

// etiquette => label + couleur TagComponent 
// list etiquettes [{name:'',color:''}]
// assign tag to card => add tags list in card object