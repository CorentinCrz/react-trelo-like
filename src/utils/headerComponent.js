import React from "react";
import logo from "../assets/img/logo.svg";

const headerComponent = ({ params }) => (
    <header>
        <h1>Trello</h1>
        <img src={logo} alt="website logo" />
    </header>
);

export default headerComponent;