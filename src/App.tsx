import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section>
        <Board nrOfCards={25} />
      </section>

      <section id="spacer"></section>
    </div>
  );
}

export default App;
