import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
  function click() {
    // dispatch(addTodo(inputRef.current.value));
    add(inputRef.current.value);
  }
}
