import React from 'react';
import Header from "./utils/headerComponent";
import ListComponent from "./components/List/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ListComponent />
    </div>
  );
}

export default App;
