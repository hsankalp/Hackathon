import React from "react";
import "./App.css";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="App container">
      <header>
        <h2>API Publisher</h2>
      </header>
      <Questions />
    </div>
  );
}

export default App;
