import React from "react";
import "./styles/ListComponent.css";
import AddComponent from "../../utils/AddComponent";
import ListComponent from "./ListComponent";


const ListsContainer = props => {
    
    const displayList = () => props.lists.map((list, index) => {
        return (
            <li key={index}>
                <ListComponent 
                    handleSubmitAdd={props.handleSubmitAdd} 
                    list={list}
                    listIndex={index}
                    editCard={props.editCard}
                    modal={props.modal}
                    editModal={props.editModal}
                    editList={props.editList}
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
  
  export default ListsContainer;