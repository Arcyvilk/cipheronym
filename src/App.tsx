import { Board } from "./components/Board/Board";
import { Navigation } from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Board size={25} />
    </div>
  );
}

export default App;
