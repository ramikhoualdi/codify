import React, { Component } from "react";
import "./style.css";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      amount: "1",
    };
  }
  componentDidMount() {
    console.log("I Mounted");
  }
  componentDidUpdate() {
    console.log("I did Updated ", this.state.counter);
  }
  componentWillUnmount() {
    console.log("I Unmounted");
  }
  increment() {
    this.setState({
      counter: this.state.counter + parseInt(this.state.amount),
    });
  }
  decrement() {
    if (this.state.counter - parseInt(this.state.amount) < 0) {
      this.setState({ counter: 0 });
    } else {
      this.setState({
        counter: this.state.counter - parseInt(this.state.amount),
      });
    }
  } 
  handleChange(e) {
    this.setState({ amount: e.target.value });
  }

  render() {
    return (
      <>
        <h1 className="title">Counter</h1>
        <div className="container">
          <button className="btn" onClick={() => this.increment()}>
            +
          </button>

          <p className="content">{this.state.counter}</p>
          <button className="btn" onClick={() => this.decrement()}>
            -
          </button>
        </div>
        <div className="container">
          <input
            type="text"
            className="input"
            value={this.state.amount}
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </>
    );
  }
}

export default Counter;
