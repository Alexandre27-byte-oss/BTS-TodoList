import { useState } from "react";

export type TodoItemProps = {
  todo: string;
  onItemRemoved: () => void;
  isOdd: boolean;
};

export const TodoItem = (props: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleClick = () => {
    props.onItemRemoved();
    console.log("Salut");
  };
  return (
    <li
      style={{
        background: props.isOdd ? "white" : "rgba(0,0,0,0.2)",
        padding: "1rem 2rem",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div onClick={() => setIsEdit(true)}>
        {isEdit ? "setIsEdit" : props.todo}
      </div>
      <button onClick={() => handleClick()}>Supprimer</button>
    </li>
  );
};
