import Model from "./Model";
import React, { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Simplest demo of google model-viewer in a react app</h1>
      Click the button to cause the parent component to re-render. This must not
      cause the model-viewer component to re-render.
      <br />
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Counter {counter}
      </button>
      <Model />
      Model should be shown above.
    </div>
  );
}
