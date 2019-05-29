import React from "react";

export default props => (
    <form onSubmit={props.handleSubmitAdd}>
        <textarea placeholder={`Saisissez le titre de cette ${props.name}`} onChange={props.handleChangeAdd}/>
        <button type="submit">Ajouter une {props.name}</button>
    </form>
);