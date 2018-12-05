import React, { Component } from "react";
import authors from "./data";

class AuthorCard extends Component {
  render() {
    let authors = this.props.authors;
    return (
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={authors.imageUrl}
            alt={authors.first_name + " " + authors.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{authors.first_name + " " + authors.last_name}</span>
          </h5>
          <small className="card-text">{authors.books.length} books</small>
        </div>
      </div>
    );
  }
}

export default AuthorCard;
