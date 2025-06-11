import { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
const todoReducer = (currentState, action) => {
  switch (action.type) {
    case "Add_Todo":
      let newTask = { ...action.task, id: uuid() };
      return [...currentState, newTask];
    case "Delete_Todo":
      return currentState.filter((item) => item.id !== action.task);
    case "Update_Todo":
      return currentState.map((item) =>
        item.id === action.task.id ? action.data : item
      );
  }
};

function ToDo() {
  const [task, setTask] = useState({
    name: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const addTodo = () => {
    if (isEdit) {
      dispatch({ type: "Update_Todo", task: { id: task.id }, data: task });
    } else {
      dispatch({ type: "Add_Todo", task: task });
    }
    setTask({ name: "" });
    setIsEdit(false);
  };
  const deleteTodo = (id) => {
    dispatch({ type: "Delete_Todo", task: id });
  };

  const pathData = (id) => {
    setIsEdit(true);
    let data = todos.find((item) => item.id === id);
    setTask(data);
  };

  return (
    <div>
      <input
        name="name"
        value={task.name}
        type="task"
        onChange={handleChange}
        placeholder="enter todo here"
      />
      <button onClick={addTodo}>{isEdit ? "Update" : "Add"}</button>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <button onClick={() => deleteTodo(item.id)}>Delete Todo</button>
            <button onClick={() => pathData(item.id)}>Edit Todo</button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDo;
