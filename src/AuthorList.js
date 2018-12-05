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
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div>{authorList}</div>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="image">
                <img
                  className="card-img-top img-fluid"
                  src={authors[1].imageUrl}
                  alt={authors[1].first_name + " " + authors[1].last_name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <span>
                    {authors[1].first_name + " " + authors[1].last_name}
                  </span>
                </h5>
                <small className="card-text">
                  {authors[1].books.length} books
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="image">
                <img
                  className="card-img-top img-fluid"
                  src={authors[2].imageUrl}
                  alt={authors[2].first_name + " " + authors[2].last_name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <span>
                    {authors[2].first_name + " " + authors[2].last_name}
                  </span>
                </h5>
                <small className="card-text">
                  {authors[2].books.length} books
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="image">
                <img
                  className="card-img-top img-fluid"
                  src={authors[3].imageUrl}
                  alt={authors[3].first_name + " " + authors[3].last_name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <span>
                    {authors[3].first_name + " " + authors[3].last_name}
                  </span>
                </h5>
                <small className="card-text">
                  {authors[3].books.length} books
                </small>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default AuthorList;
