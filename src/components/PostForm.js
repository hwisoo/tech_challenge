import React, { Component } from "react";

export default class PostForm extends Component {
  nameRef = React.createRef();
  titleRef = React.createRef();
  contentRef = React.createRef();
  render() {
    return (
      <form className="form-group" onSubmit={this.createPost}>
        <h3>Add New Post</h3>
        <label htmlFor="name">User First Name:</label>
        <br />
        <input ref={this.nameRef} type="text" />
        <br />
        <label htmlFor="title">Title:</label>
        <br />
        <input ref={this.titleRef} type="text" />
        <br />
        <label htmlFor="content">Content: </label>
        <br />
        <textarea
          ref={this.contentRef}
          name="content"
          id="content"
          cols="30"
          rows="5"
        />{" "}
        <br />
        <button className="btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
