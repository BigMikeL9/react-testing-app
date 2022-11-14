import "./App.css";
import Greetings from "./components/Greetings/Greetings";
import Posts from "./components/Posts/Posts";

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

      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;
