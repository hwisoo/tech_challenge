import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostForm />
      </div>
    );
  }
}

export default App;
