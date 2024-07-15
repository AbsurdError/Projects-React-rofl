import React, { useContext } from "react";
import { TodosContext } from "../../Context";

export default function Todo({ todo }) {
    const [todos, setTodos] = useContext(TodosContext)
    function changeStatus(todo,id){
        const newTodo = {...todo, 
          completed: !todos[id-1].completed
        }
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(newTodo)
        })
        .then(data => data.json())
        .then(data => setTodos([...todos.slice(0,id-1), data, ...todos.slice(id)]))
      }
  return (
    <div className='card__todo'>
      <h3 className='card__todo__title'>{todo.title}</h3>
      <p className='card__todo__p'>User ID:{todo.userId}</p>
      <p className='card__todo__p'>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
      <button onClick={() => changeStatus(todo, todo.id)}>Change Status</button>
    </div>
  );
}