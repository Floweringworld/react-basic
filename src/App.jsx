import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const pCount = () => {
    setCount(count + 1);
  };
  const mCount = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="count">{count}</div>
      <div className="btn">
        <button className="plus" onClick={pCount}>
          +
        </button>
        <button className="minus" onClick={mCount}>
          -
        </button>

        <button className="reset" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;
