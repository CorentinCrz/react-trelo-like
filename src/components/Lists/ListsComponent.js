import React from "react";
import "./styles/ListsComponent.css";
import AddComponent from "../../utils/AddComponent";
import ListComponent from "../List/index";


const ListsComponent = props => {
    
    const displayList = () => props.lists.map((list, index) => {
        return (
            <li key={index}>
                <ListComponent 
                    handleSubmitAdd={props.handleSubmitAdd} 
                    list={list}
                    listIndex={index}
                />
            </li>
        )
    })

    return (
        <section className="lists">
            <ul className="lists">{displayList()}
            <li><AddComponent name="liste" listIndex={false} handleSubmitAdd={props.handleSubmitAdd}/></li>
            </ul>
        </section>
    )
};
  
  export default ListsComponent;