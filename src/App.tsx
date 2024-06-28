import React, { useState } from "react";
import "./styles/App.css";
import { MultiCheckbox } from "./components/MultiCheckbox";

function App() {
  const [columns, setColumns] = useState<number>(2);
  const OPTIONS = "abcdefg"
    .split("")
    .map((val) => ({ label: val.repeat(3), value: val }));
  const DEFAULT = "abcz".split("").map((val) => val);

  return (
    <div id="App">
      <MultiCheckbox
        options={OPTIONS}
        onChange={(values) => console.log(values)}
        columns={columns}
        defaultValues={DEFAULT}
        renderControlPanel={(options) => (
          <label id="columns-control">
            <span>columns:</span>
            <input
              value={columns}
              type="number"
              min={1}
              max={options.length + 1}
              onChange={(e) => setColumns(Number(e.target.value))}
            ></input>
          </label>
        )}
      />
    </div>
  );
}

export default App;
