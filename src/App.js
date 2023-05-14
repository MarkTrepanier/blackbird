import logo from "./logo.svg";
import "./App.css";
const newLogo =
  "https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg";
const propellerLink = "https://www.propelleraero.com/dirtmate/";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={newLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={propellerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Propeller
        </a>
      </header>
    </div>
  );
}

export default App;
