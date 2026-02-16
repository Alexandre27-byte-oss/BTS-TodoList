import "./Todo.css";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Array<string>;
  onItemRemoved: (i: number) => void;
};

export const TodoList = (props: TodoListProps) => {
  const nbTodos = props.todos.length;

  const handleClick = (i: number) => {
    props.onItemRemoved(i);
    console.log("Salut");
  };

  return (
    <>
      <h2>{nbTodos} todos itms</h2>
      <ul className="list" style={{ maxWidth: "30rem" }}>
        {props.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              isOdd={i % 2 === 0}
              todo={todo}
              onItemRemoved={() => handleClick(i)}
            />
          );
        })}
      </ul>
    </>
  );
};
