import React, { useState } from "react";

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const Submit = e =>{
    e.preventDefault(); //prevent reload page after submit

    editTodo(value, task.id); //pass value to addTodo function

    setValue(""); //after submit, input will be blank
  } 

  return (
    <form className="TodoForm" onSubmit={Submit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
