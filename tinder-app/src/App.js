import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import TinderCards from "./Components/TinderCards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
