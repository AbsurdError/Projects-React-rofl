import { useContext } from "react";
import React from "react";
import Todo from "../todo/Todo";
import { TodosContext } from "../../Context";

export default function Todos(){
    const [todos, setTodos] = useContext(TodosContext);

    const printTodos = todos.map(todo => {
        return(
            <Todo key={todo.id} todo={todo}/>
        )
      })
    return(
        <div>
            {printTodos}
        </div>
    )
}