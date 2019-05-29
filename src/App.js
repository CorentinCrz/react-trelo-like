import React from 'react';
import Header from "./utils/headerComponent";
import ListComponent from "./components/List/index";
import CardComponent from "./components/Card/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ListComponent name="liste" cardComponent={<ListComponent name="carte" cardComponent={<CardComponent/>}/>}/>
    </div>
  );
}

export default App;
