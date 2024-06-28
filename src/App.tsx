import React, { useState } from "react";
import "./styles/App.css";
import { MultiCheckbox } from "./components/MultiCheckbox";

function App() {
  const [columnCount, setColumnCount] = useState<number>(2);

  // Placeholder data for multi-checkbox group
  const OPTIONS = "abcdefg"
    .split("")
    .map((val) => ({ label: val.repeat(3), value: val }));
  const DEFAULT = "abdz".split("").map((val) => val);

  return (
    <div id="App">
      <MultiCheckbox
        options={OPTIONS}
        onChange={(values) => console.log(values)}
        columnCount={columnCount}
        defaultValues={DEFAULT}
        // Rendering column control input based on multi-checkbox data
        renderControlPanel={(options) => (
          <label id="columns-control">
            <span>columns:</span>
            <input
              value={columnCount}
              type="number"
              min={1}
              max={options.length + 1}
              onChange={(e) => setColumnCount(Number(e.target.value))}
            ></input>
          </label>
        )}
      />
    </div>
  );
}

export default App;
