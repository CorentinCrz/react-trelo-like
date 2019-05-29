import React from "react";
import "./styles/ListComponent.css";
import AddComponent from "../../utils/AddComponent";


class ListComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            adding: false,
            list: ['toto']
        }
    }
    name = 'carte'
    handleClick = () => {
        this.setState({
            adding: true 
        })
    }
    handleSubmitAdd = (event) => {
        event.preventDefault()
        this.setState({
            list: this.state.list.concat(this.state.name),
            adding: false 
        })
    }
    handleChangeAdd = (event) => {
        this.setState({name: event.target.value});
    }
    displayList = () => this.state.list.map(card => (
        <li key={card}>{card}</li>
    ))

    render() {
        return (
            <section className="list">
                <ul>{this.displayList()}</ul>
                { this.state.adding &&
                    <AddComponent name={this.name} handleSubmitAdd={this.handleSubmitAdd} handleChangeAdd={this.handleChangeAdd}/>
                }
                { !this.state.adding && 
                    <button onClick={this.handleClick}>Ajouter une {this.name}</button>
                }
            </section>
        );
    }
};
  
  export default ListComponent;