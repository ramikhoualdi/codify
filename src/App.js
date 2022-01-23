import "./App.css";
import Counter from "./components/Counter";
import Fetch from "./components/Fetch";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <Timer />
      <Fetch />
      <TodoList />
    </div>
  );
};

export default App;
