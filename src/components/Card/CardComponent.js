import React from "react";


const CardComponent = props => {
    const handleChangeName = (event) => {
        props.editCard(props.listIndex, props.cardIndex, 'name', event.target.value)
    }

    return (
        <section className="over">
            <form className="card">
                <input onChange={handleChangeName} value={props.card.name} autoFocus/>
                <button onClick={() => props.editModal(null, null)} className="close">X</button>
            </form>
        </section>
    )
};
  
  export default CardComponent;