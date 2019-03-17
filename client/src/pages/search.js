import React, { Component } from "react";
import Book from "../components/Book/index";
import SearchForm from "../components/SearchForm/index";
import { List } from "../components/List/index";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for books to save and store for later"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data,
          currentPage: 1
        })
      )
      .catch(() => {
        this.setState({
          books: [],
          message: "Your search did not match any book results.",
          currentPage: 1
        });
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-centered">
            <div className="d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center">
              <div>
              <br></br>
                <SearchForm
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 card-content">
            <h2 className="heading-title text-center">Results</h2>

            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookSave(book.id)}
                        className="btn save-button heading-subtitle ml-2"
                      >
                        Save
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <div className="mockup-content">
                <h4 className="heading-title text-center">
                  {this.state.message}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
