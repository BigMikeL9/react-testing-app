import "./App.css";
import Greetings from "./components/Greetings/Greetings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
