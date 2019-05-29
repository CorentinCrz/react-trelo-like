import React from "react";
import "./styles/ListComponent.css";
import AddComponent from "../../utils/AddComponent";
import CardComponent from "../Card/index";


const ListComponent = props => {
    
    const displayList = () => props.lists.map(card => (
        <li key={card}>
            <CardComponent name={card}/>
        </li>
    ))

    return (
        <section className="list">
            <ul>{displayList()}</ul>
            <AddComponent name={props.name} handleSubmitAdd={props.handleSubmitAdd} listIndex={props.listIndex}/>
        </section>
    )
};
  
  export default ListComponent;