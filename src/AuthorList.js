import React, { Component } from "react";

// Components

import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authors = this.props.authors;
    const authorList = authors.map(author => (
      <AuthorCard key={author.first_name} author={author} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorList}</div>
      </div>
    );
  }
}

export default AuthorList;
