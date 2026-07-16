import "./App.css";
import { Board } from "./components/Board/Board";

function App() {
  return (
    <div className="app">
      <Board size={25} />
    </div>
  );
}

export default App;
