import React from "react";
import "./styles/ListComponent.css";
import AddComponent from "../../utils/AddComponent";
import CardComponent from "../Card/index";


const ListComponent = props => {    
    const displayList = () => props.list.list.map(card => (
        <li key={card.name}>
            <CardComponent name={card.name}/>
        </li>
    ))

    return (
        <section className="list">
            <h2>{props.list.name}</h2>
            <ul>{displayList()}</ul>
            <AddComponent name="carte" listIndex={props.listIndex} handleSubmitAdd={props.handleSubmitAdd}/>
        </section>
    )
};
  
  export default ListComponent;