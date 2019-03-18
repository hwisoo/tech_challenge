import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Postlist from "./components/Postlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      posts: []
    };
  }
  addPost = post => {
    this.setState({
      posts: [...this.state.posts, post]
    });
    console.log(this.state.posts);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <PostForm addPost={this.addPost} />
          <Postlist posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
