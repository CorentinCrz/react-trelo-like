import React from "react";


const CardComponent = props => {
    const handleChangeName = (event) => {
        props.editCard(props.listIndex, props.cardIndex, 'name', event.target.value)
    }
    const handleChangeDescription = (event) => {
        props.editCard(props.listIndex, props.cardIndex, 'descritpion', event.target.value)
    }

    return (
        <section className="over">
            <form className="card">
                <label for="title">Titre</label>
                <input onChange={handleChangeName} value={props.card.name} id="title"/>
                <label for="descritpion">Descritpion</label>
                <textarea onChange={handleChangeDescription} value={props.card.descritpion} id="descritpion"/>
                <button onClick={() => props.editModal(null, null)} className="close">X</button>
            </form>
        </section>
    )
};
  
  export default CardComponent;