import "./Todo.css";

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
      <ul className="list">
        {props.todos.map((todo, i) => {
          return (
            <li
              key={i}
              style={{
                background: i % 2 === 0 ? "white" : "rgba(0,0,0,0/.2)",
                padding: "1rem 2rem",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {todo};<button onClick={() => handleClick(i)}>Supprimer</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
