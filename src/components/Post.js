import React from "react";

import { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <p className="card-text">Comment: {this.props.post.comment}</p>
            <span>
              By <span className="user">{this.props.post.name}</span>{" "}
            </span>
            <span>{this.props.post.time}</span>
            <button
              onClick={() => {
                this.props.editPost(this.props.post);
              }}
              className="postButton btn btn-warning text-white"
            >
              Edit
            </button>
            <button
              onClick={() => {
                this.props.deletePost(this.props.post);
              }}
              className="postButton btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
