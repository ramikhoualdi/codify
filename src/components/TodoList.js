import React, { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      list: [],
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleAdd() {
    if (this.state.value) {
      let todos = [...this.state.list];
      todos.push({
        name: this.state.value,
        valid: true,
      });
      this.setState({
        list: todos,
      });
      this.setState({ value: "" });
    }
  }
  handleDo(name) {
    let i = 0;
    let tab = [];
    while (i < this.state.list.length) {
      if (this.state.list[i].name === name) {
        tab.push({
          name: this.state.list[i].name,
          valid: !this.state.list[i].valid,
        });
      } else {
        tab.push({
          name: this.state.list[i].name,
          valid: this.state.list[i].valid,
        });
      }
      i++;
    }
    this.setState({ list: tab });
  }
  handleIsDone() {
    let s = 0;
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].valid === true) {
        s++;
      }
    }
    return s;
  }
  render() {
    return (
      <>
        <h1 className="title">TodoList</h1>
        <div className="container">
          <input
            className="input1"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button className="btn1" onClick={() => this.handleAdd()}>
            add
          </button>
        </div>
        <div className="container">
          <p>
            {this.handleIsDone()} remaining out of {this.state.list.length} tasks
          </p>
        </div>
        <div className="container">
          <ul>
            {this.state.list.map((item, index) => (
              <div key={index}>
                <div className="todo-container">
                  <li
                    className={item.valid ? "todo" : "todo-done"}
                    onClick={() => this.handleDo(item.name)}
                  >
                    {item.name}
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TodoList;
