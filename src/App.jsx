import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const textChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    const newDate = {
      id: new Date().getTime(),
      text,
      Completed: true,
    };
    setTodo([...todo, newDate]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const Delete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>오늘 할 일 목록</h1>
      <input
        type="text"
        id="text"
        value={text}
        onChange={textChange}
        placeholder="오늘의 할 일 작성"
      />
      <button onClick={onClick}>추가</button>
      <ul>
        {todo.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button
              onClick={() => {
                toggleTodo(todo.id);
              }}
            >
              {todo.completed ? "취소" : "완료"}
            </button>
            <button
              onClick={() => {
                Delete(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
