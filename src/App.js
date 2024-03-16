import logo from './logo.svg';
import './App.css';
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather Update App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="W-App-container">
          <Form />
        </div>
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
