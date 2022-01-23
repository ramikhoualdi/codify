import React, { Component } from "react";
import "./style.css";

export class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      books: [],
      selectedBooks: [],
    };
  }
  async componentDidMount() {
    await fetch("https://fakerapi.it/api/v1/books?_quantity=1000")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ books: res.data });
        console.log(res.data);
      });
  }
  handleChange(e) {
    this.setState({ value: e.target.value }, () => {
      let i = 0;
      let tab = [];
      if (this.state.value.length === 0) {
        this.setState({ selectedBooks: [] });
        return false;
      } else {
        while (i < this.state.books.length && tab.length < 10) {
          if (
            this.state.value.toUpperCase() ===
            this.state.books[i].title
              .substr(0, this.state.value.length)
              .toUpperCase()
          ) {
            tab.push({
              title: this.state.books[i].title,
              image: this.state.books[i].image,
            });
          }
          i++;
        }
      }
      this.setState({ selectedBooks: tab });
    });
  }

  render() {
    return (
      <div className="container2">
        <h1 className="title">Fetch</h1>
        <div className="container">
          <input
            className="input1"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        {this.state.selectedBooks.length !== 0 ? (
          this.state.selectedBooks.map((book, index) => (
            <div key={index} className="container1">
              <img src={book.image} alt={book.title} className="fetch_img" />
              <p className="fetch_title">{book.title}</p>
            </div>
          ))
        ) : (
          <p className="fetch_title">No content available.</p>
        )}
      </div>
    );
  }
}

export default Fetch;
