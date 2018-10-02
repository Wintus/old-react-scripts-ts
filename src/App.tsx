import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
import { Game } from "./tic-tac-toe";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <h2>Tic Tac Toe</h2>
        <Game />
      </div>
    );
  }
}

export default App;
