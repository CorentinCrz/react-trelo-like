import React from "react";
import "./styles/CardComponent.css";
import CardComponent from "./CardComponent";


const CardContainer = props => (
    <section className="card">
        <h3 onClick={() => props.editModal(props.listIndex, props.cardIndex)}>{props.card.name}</h3>
        {props.modal.listIndex === props.listIndex && props.modal.cardIndex === props.cardIndex &&
            <CardComponent 
                card={props.card}
                editCard={props.editCard}
                listIndex={props.listIndex}
                cardIndex={props.cardIndex}
                modal={props.modal}
                editModal={props.editModal}
            />
        }
    </section>
);
  
  export default CardContainer;