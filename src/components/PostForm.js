import React, { Component } from "react";
import uuid from "uuid";

export default class PostForm extends Component {
  nameRef = React.createRef();
  titleRef = React.createRef();
  commentRef = React.createRef();

  createPost = event => {
    event.preventDefault();
    const post = {
      id: uuid.v4(),
      name: this.nameRef.current.value,
      title: this.titleRef.current.value,
      comment: this.commentRef.current.value,
      likes: 0,
      time: `Posted: ${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    };
    this.props.addPost(post);
    this.nameRef.current.value = "";
    this.titleRef.current.value = "";
    this.commentRef.current.value = "";
  };
  render() {
    return (
      <form className="form-group" onSubmit={this.createPost}>
        <h3>Add New Post</h3>
        <label htmlFor="name">User First Name:</label>
        <br />
        <input ref={this.nameRef} type="text" required />
        <br />
        <label htmlFor="title">Title:</label>
        <br />
        <input ref={this.titleRef} type="text" />
        <br />
        <label htmlFor="comment">Comment: </label>
        <br />
        <textarea
          ref={this.commentRef}
          name="comment"
          id="comment"
          cols="30"
          rows="5"
          required
        />{" "}
        <br />
        <button className="btn btn-lg btn-dark" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
