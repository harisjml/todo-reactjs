import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

uuidv4(); //initialize id

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]); //insert useState value into todos, setTodos
  //todos is an array
  //function addTodo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]); // put id at each task

    console.log(todos); //debug todos value
  };

  //function handle complete task
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.complete } : todo
      )
    );
  };

  //function handle delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //function set boolean value for isEditing that handle the EditTodoForm
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
        ? //if true
        { 
          ...todo,
          isEditing: !todo.isEditing
        } //false
        : todo
      )
    );
  };

  //function edit task (handle the value at input EditTodoForm)
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {//if true
              ...todo,
              task,
              isEditing: !todo.isEditing,
            }
          : todo //false
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
