import './App.css';
import { useState, useEffect } from 'react';
import Todo from './components/todo/Todo';
import Todos from './components/todos/Todos';
import { TodosContext } from './Context';

function App() {
  const [count, setCount] = useState(0);
  let val = 0;
  const [isOnline, setIsOnline] = useState(false);
  const [todos,setTodos] =useState([])
  function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(data => data.json())
    .then(data => {setTodos(data); console.log(data)})
  }
  useEffect(() => {
    getTodos()
  }, [])
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
    <div className="App">
      <TodosContext.Provider value={[todos, setTodos]}>
        <Todos/> 
      </TodosContext.Provider>

      {count}<br/>
      {val}<br/>
      <button onClick={() => {setCount(count + 1); val ++}}>Click</button>
      <p>{isOnline ? "On line" : "Not on line"}</p>
    </div>
  );
}

export default App;
