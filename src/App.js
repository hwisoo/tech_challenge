import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";

class App extends Component {
  addPost = post => {
    console.table(post);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <PostForm addPost={this.addPost} />
      </div>
    );
  }
}

export default App;
