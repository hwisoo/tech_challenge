import React from "react";
import logo from "../logo.svg";
import Clock from "react-live-clock";
export default function Header() {
  return (
    <header className="App-header">
      <h1>
        <img src={logo} className="App-logo" alt="logo" />
        Tech Challenge
      </h1>
      <h4 className="myName">James Cho</h4>
      <Clock
        format={"dddd, h:mm:ss A"}
        ticking={true}
        timezone={"US/Pacific"}
      />
    </header>
  );
}
