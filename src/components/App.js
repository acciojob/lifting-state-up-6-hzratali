import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent from "./ChildComponent";

const App = () => {
  const [todos, setTodos] = useState([
    { title: "Learn React" },
    { title: "Build a React App" },
    { title: "Deploy the React app" },
  ]);

  const handleCompleteTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: true,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div id="main">
      <h1>Parent component</h1>
      <ChildComponent todos={todos} handleCompleteTodo={handleCompleteTodo} />
    </div>
  );
};

export default App;
