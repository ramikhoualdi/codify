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
        tab.push({ name: this.state.list[i].name, valid: false });
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
  handleUndo(name) {
    let i = 0;
    let tab = [];
    while (i < this.state.list.length) {
      if (this.state.list[i].name === name) {
        tab.push({ name: this.state.list[i].name, valid: true });
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
          <button className="btn1"onClick={() => this.handleAdd()}>add</button>
        </div>
        <div className="container">
          <ul>
            {this.state.list.map((item, index) => (
              <div key={index}>
                {item.valid ? (
                  <div className="todo-container">
                    <li className="todo">{item.name}</li>
                    <button className="btn1"onClick={() => this.handleDo(item.name)}>do</button>
                  </div>
                ) : (
                  <div className="todo-container">
                    <li className="todo-done">{item.name}</li>
                    <button className="btn1"onClick={() => this.handleUndo(item.name)}>
                      undo
                    </button>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TodoList;
