import React from "react";
import AddComponent from "../../utils/AddComponent";
import CardContainer from "../Card/index";


const ListComponent = props => {    
    const displayList = () => props.list.list.map((card, index) => (
        <li key={card.name}>
            <CardContainer
                card={card}
                editCard={props.editCard}
                listIndex={props.listIndex}
                cardIndex={index}
                modal={props.modal}
                editModal={props.editModal}
            />
        </li>
    ))

    const handleClick = () => {
        if ( window.confirm( `Voulez vous vraiment supprimer la liste "${props.list.name}" ainsi que toutes ses cartes ?` ) ) {
            props.editList()
        }
    }

    return (
        <section className="list">
            <h2>{props.list.name}<button onClick={handleClick} className="close floatR">X</button></h2>
            <ul>{displayList()}</ul>
            <AddComponent name="carte" listIndex={props.listIndex} handleSubmitAdd={props.handleSubmitAdd}/>
        </section>
    )
};
  
  export default ListComponent;