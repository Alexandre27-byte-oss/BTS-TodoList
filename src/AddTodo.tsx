import { useState, type ChangeEventHandler } from "react";

type AddTodoProps = {
  onTodoAdded: (newTodo: string) => void;
};

export const AddTodo = (props: AddTodoProps) => {
  const [inputValue, setinputValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setinputValue(event.target.value);
  };

  const handleClick = () => {
    props.onTodoAdded(inputValue);
    setinputValue("");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submitted");
        handleClick();
      }}
    >
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Que faire ?"
        name="Add-todo"
      />
      <button>+Ajouter</button>
    </form>
  );
};
