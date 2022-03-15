import logo from "./logo.svg";
import "./App.css";
import ArrayMethods from "./Components/array-methods";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Array Methods</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-array-methods"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <ArrayMethods />
      </header>
    </div>
  );
}

export default App;
