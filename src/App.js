import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Dictionary App</h1>
      </header>
      <main>
        <Dictionary />
        </main>
      <footer className="App-footer">
        Coded by Yasrah Kapadia
      </footer>
    </div>
  );
}

export default App;
