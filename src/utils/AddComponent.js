import React from "react";

export default class props extends React.Component {
    constructor(props){
    super(props)
        this.state = {
            name: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmitAdd(this.state.name, this.props.listIndex);
    }
    handleChange = (event) => {
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea placeholder={`Saisissez le titre de cette ${this.props.name}`} onChange={this.handleChange}/>
                <button type="submit">Ajouter une {this.props.name}</button>
            </form>
        )
    }
}