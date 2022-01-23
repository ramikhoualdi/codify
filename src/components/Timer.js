import React, { Component } from "react";
import "./style.css";

export class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
      <h1 className="title" >Timer</h1>
      <div className="container">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
      </>
    );
  }
}

export default Timer;
