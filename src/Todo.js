import { addTodo, deleteTodo } from "features/todo/todoSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const state = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="todo">
      <h3>Simple Todo App</h3>
      <div className="input__container">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          onClick={() => {
            if (!todo) return;
            dispatch(addTodo(todo));
            setTodo("");
          }}
          type="submit"
        >
          Add Todo
        </button>
      </div>
      <ol>
        {state.length > 0 &&
          state.map((todo, index) => {
            return (
              <li key={index}>
                <h6>{todo} </h6>

                <button name="edit">Edit</button>

                <button
                  name="delete"
                  onClick={() => dispatch(deleteTodo(index))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Todo;
