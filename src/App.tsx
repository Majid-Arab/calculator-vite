import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@mantine/core/styles.css";

import { Button, Grid, Input, MantineProvider } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // const [result, setResult] = useState("");

  function handleButton(value: string) {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setInput((prev) => prev + value);
    }
  }

  function calculateResult() {
    setInput(eval(input));
  }

  function clearInput() {
    setInput("");
  }

  return (
    <MantineProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Input value={input} placeholder="Input" readOnly />
        <Grid>
          <Grid.Col>
            <Button onClick={() => handleButton("=")}>=</Button>
            <Button onClick={() => handleButton("C")}>C</Button>
          </Grid.Col>
          <Grid.Col>
            <Button onClick={() => handleButton("/")}>/</Button>
            <Button onClick={() => handleButton("*")}>*</Button>
            <Button onClick={() => handleButton("-")}>-</Button>
            <Button onClick={() => handleButton("+")}>+</Button>
          </Grid.Col>
          <Grid.Col>
            <Button onClick={() => handleButton("1")}>1</Button>
            <Button onClick={() => handleButton("2")}>2</Button>
            <Button onClick={() => handleButton("3")}>3</Button>
            <Button onClick={() => handleButton("4")}>4</Button>
            <Button onClick={() => handleButton("5")}>5</Button>
            <Button onClick={() => handleButton("6")}>6</Button>
            <Button onClick={() => handleButton("7")}>7</Button>
            <Button onClick={() => handleButton("8")}>8</Button>
            <Button onClick={() => handleButton("9")}>9</Button>
            <Button onClick={() => handleButton("0")}>0</Button>
          </Grid.Col>
        </Grid>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </MantineProvider>
  );
}

export default App;
