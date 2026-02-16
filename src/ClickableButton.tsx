import { useEffect, useState} from "react";

export function ClickableButton(){
const [count, setCount] = useState(0);
const handleClick = ()=>{
 setCount(count + 1);
  console.log("clicked",count);
};

useEffect(()=> {
  console.log('useEffect');
},[count]);


  return <button onClick={handleClick}>Nombre de clique :{count}</button>;
}