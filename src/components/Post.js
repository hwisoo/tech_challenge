import React from "react";
import { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editClicked: false
    };
  }
  nameRef = React.createRef();
  commentRef = React.createRef();

  allowEdit = () => {
    this.setState({ editClicked: !this.state.editClicked });
  };

  editPost = event => {
    event.preventDefault();
    this.setState({ editClicked: !this.state.editClicked });
    const post = {
      id: this.props.post.id,
      name: this.nameRef.current.value,
      comment: this.commentRef.current.value,
      likes: this.props.post.likes,
      time: `Last edited: ${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    };
    this.props.editPost(post);
    this.nameRef.current.value = "";
    this.commentRef.current.value = "";
  };

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
                this.allowEdit(this.props.post);
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
            {this.state.editClicked ? (
              <div user={this.props.user} post={this.props.post}>
                <form className="form-group" onSubmit={this.editPost}>
                  <label htmlFor="name">User Name:</label>
                  <br />
                  <input
                    ref={this.nameRef}
                    type="text"
                    defaultValue={this.props.post.name}
                  />
                  <br />
                  <label htmlFor="comment">Comment: </label>
                  <br />
                  <textarea
                    ref={this.commentRef}
                    defaultValue={this.props.post.comment}
                    name="comment"
                    id=""
                    cols="30"
                    rows="5"
                  />{" "}
                  <br />
                  <button className="btn btn-lg btn-dark" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}
