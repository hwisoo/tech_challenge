import React from "react";

import { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.post.title}</h5>
            <p className="card-text">Comment: {this.props.post.comment}</p>
            <span>By {this.props.post.name}</span>{" "}
            <span>{this.props.post.time}</span>
          </div>
        </div>
      </div>
    );
  }
}
