//import { ClickableButton } from "./ClickableButton";
import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

const rawcachedData = localStorage.getItem("todos") ?? '{"todos":[]}';
const cacheData = JSON.parse(rawcachedData);

function App() {
  const [todos, setTodos] = useState<Array<string>>(cacheData.todos);

  const handlTodoAdded = (newTodo: string) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: newTodos,
      }),
    );
  };

  const onItemRemoved = (todoIndex: number) => {
    const todosFilttered = todos.filter((_todo, i) => i !== todoIndex);
    setTodos(todosFilttered);
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: todosFilttered,
      }),
    );
  };

  return (
    <div>
      <h1>TodoList</h1>
      <TodoList todos={todos} onItemRemoved={onItemRemoved} />
      <AddTodo onTodoAdded={handlTodoAdded} />
    </div>
  );
}

export default App;
