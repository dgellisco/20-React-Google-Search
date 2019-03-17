import React, { Component } from "react";
import { List } from "../components/List/index";
import Book from "../components/Book/index";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = async id => {
    const originalBooks = this.state.books;
    try {
      await API.deleteBook(id).then(res => this.getSavedBooks());
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        
      this.setState({ books: originalBooks });
    }
  };
  render() {
    const { length: count } = this.state.books;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="d-flex flex-row bd-highlight mb-3 justify-content-center align-items-center">
              <div className="p-2 bd-highlight">
              <br></br>
                <h4 className="heading-subtitle text-center">
                  Showing {count} books in the database.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 card-content">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book._id}
                    title={book.title}
                    subtitle={book.subtitle}
                    link={book.link}
                    authors={book.authors.join(", ")}
                    description={book.description}
                    image={book.image}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookDelete(book._id)}
                        className="btn delete-button heading-subtitle ml-2"
                      >
                        Delete
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <div className="mockup-content">
                <h2 className="brand-title text-center">
                  No saved books in the database
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
