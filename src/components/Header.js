import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <header className="App-header">
      <h1>
        <img src={logo} className="App-logo" alt="logo" />
        Tech Challenge
      </h1>
    </header>
  );
}
