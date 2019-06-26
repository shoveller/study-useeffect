import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Boo } from "./Boo";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const message = `${count} 번 클릭함`;
  useEffect(() => {
    document.title = message;
  }, [message]);

  // const [obj, setObj] = useState({ value: 0 });
  // useEffect(() => {
  //   console.log("계속 실행되지 않을까?", JSON.stringify(obj));
  // }, [obj]);

  return (
    <div className="App">
      <h5
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {message}
      </h5>
      <Boo key={count} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
