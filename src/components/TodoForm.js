import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const Submit = e =>{
    e.preventDefault(); //prevent reload page after submit

    addTodo(value); //pass value to addTodo function

    setValue(""); //after submit, input will be blank
  } 

  return (
    <form className="TodoForm" onSubmit={Submit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
