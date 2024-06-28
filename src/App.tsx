import React, { useState } from "react";
import "./styles/App.css";
import { MultiCheckbox } from "./components/MultiCheckbox";

function App() {
  const [columns, setColumns] = useState<number>(2);
  const OPTIONS = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((val) => ({ label: val.repeat(3), value: val }));

  return (
    <div id="App">
      <MultiCheckbox
        options={OPTIONS}
        onChange={(values) => console.log(values)}
        columns={columns}
      />
      <input
        type="number"
        min={1}
        max={99}
        onChange={(e) => setColumns(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default App;
