import React from "react";
import { Component } from "react";
import Post from "./Post";
export default class Postlist extends Component {
  render() {
    return (
      <div>
        <h3>Comments</h3>
        {this.props.posts.map(post => (
          <Post
            post={post}
            key={post.id}
            addLikes={this.props.addLikes}
            data={this.props.posts}
            deletePost={this.props.deletePost}
          />
        ))}
      </div>
    );
  }
}
