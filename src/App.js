import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Postlist from "./components/Postlist";
import firebase from "./constants/firebaseConfig";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      posts: []
    };
  }

  fetchData() {
    const postsRef = firebase.database().ref("posts");
    postsRef.on("value", snapshot => {
      let posts = snapshot.val();
      let newState = [];
      for (let key in posts) {
        newState.push({
          id: key,
          name: posts[key].name,
          comment: posts[key].comment,
          likes: posts[key].likes,
          time: posts[key].time
        });
      }
      this.setState({
        posts: newState
      });
    });
  }

  componentWillMount() {
    this.fetchData();
  }

  addPost = post => {
    const postsRef = firebase.database().ref("posts");
    postsRef.push(post);
  };

  deletePost = post => {
    const postRef = firebase.database().ref("posts/" + post.id);
    postRef.remove();
    setTimeout(() => {
      this.fetchData();
    }, 200);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <PostForm addPost={this.addPost} />
          <Postlist posts={this.state.posts} deletePost={this.deletePost} />
        </div>
      </div>
    );
  }
}

export default App;
