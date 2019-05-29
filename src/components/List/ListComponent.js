import React from "react";
import "./styles/ListComponent.css";
import AddComponent from "../../utils/AddComponent";
import CardComponent from "../Card/index";


class ListComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            adding: false,
            list: []
        }
    }
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
        <li key={card}>
            <h2>{card}</h2>
            {this.props.cardComponent}
        </li>
    ))

    render() {
        return (
            <section className="list">
                <ul>{this.displayList()}</ul>
                { this.state.adding &&
                    <AddComponent name={this.props.name} handleSubmitAdd={this.handleSubmitAdd} handleChangeAdd={this.handleChangeAdd}/>
                }
                { !this.state.adding && 
                    <button onClick={this.handleClick}>Ajouter une {this.props.name}</button>
                }
            </section>
        );
    }
};
  
  export default ListComponent;