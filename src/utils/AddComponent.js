import React from "react";
import { directive } from "@babel/types";

export default class props extends React.Component {
    constructor(props){
    super(props)
        this.state = {
            name: '',
            adding: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.adding && this.state.name !== '') {
            this.setState({adding: false})
            this.props.handleSubmitAdd(this.state.name, this.props.listIndex);
        } else {
            this.setState({adding: true})
        }
    }
    handleChange = (event) => {
        this.setState({name: event.target.value})
    }
    handleClick = () => {
        this.setState({adding: false})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add">
                { this.state.adding && 
                    <input placeholder={`Saisissez le titre de cette ${this.props.name}`} onChange={this.handleChange} className="addText"/>
                }
                <div className="buttons">
                    <button type="submit" className={this.state.adding ? 'adding' : 'notAdding'}>Ajouter une {this.props.name}</button>
                    { this.state.adding && 
                        <button onClick={this.handleClick} className="close">X</button>
                    }
                </div>
            </form>
        )
    }
}