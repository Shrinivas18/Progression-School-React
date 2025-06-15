import React from "react";
import { addTodo, deleteTodo, updateTodo } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function ToDo() {
  const [inputText, setInputText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch the action -- dispatch will come from redux
    if (isEdit) {
      dispatch(updateTodo(editId, inputText));
      setIsEdit(false);
      setEditId(null);
    } else {
      dispatch(addTodo(inputText));
    }
    setInputText("");
  };

  const patchData = (id) => {
    setIsEdit(true);
    const data = todos.find((item) => item.id === id);
    setEditId(id);
    setInputText(data.text);
  };

  const deleteData = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-container">
      <h1>ToDo</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText || ""}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter Todo Here..."
        />
        <button type="submit">{isEdit ? "Update Todo" : "Add Todo"}</button>
      </form>

      <ul>
        {todos.map((item) => {
          return (
            <div className="todo-item" key={item.id}>
              <li>{item.text}</li>
              <button onClick={() => patchData(item.id)}>Edit</button>
              <button onClick={() => deleteData(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo;
