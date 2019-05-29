import React from "react";
import "./styles/CardComponent.css";


class CardComponent extends React.Component {

    render() {
        return (
            <section className="card">
                <h2>{this.props.name}</h2>
            </section>
        );
    }
};
  
  export default CardComponent;