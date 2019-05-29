import React from "react";
import "./styles/CardComponent.css";


class CardComponent extends React.Component {

    render() {
        return (
            <section className="card">
                <h3>{this.props.name}</h3>
            </section>
        );
    }
};
  
  export default CardComponent;