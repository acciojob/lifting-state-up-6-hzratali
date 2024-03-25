import React from "react";

const ChildComponent = ({ todos, handleCompleteTodo }) => {
  return (
    <div>
      <div id="child">
        <h2>Child Component</h2>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title}
            {!todo.completed && (
              <button onClick={() => handleCompleteTodo(index)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ChildComponent;
