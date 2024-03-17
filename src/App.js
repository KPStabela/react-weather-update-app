import logo from './logo.svg';
import './App.css';
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Weather Update App</h1>
        <div className='W-App-container'>
          <Form />
          <hr className='foot-breaker'/>
          <footer>
            <p className='coder-info'>Coded by <a href='https://www.shecodes.io/graduates/111516-katleho-percevierence-stabela' target='_blank' rel='noreferrer'>Katleho P Stabela</a>, open sourced on <a href='https://github.com/KPStabela' target='_blank' rel='noreferrer'>GitHub</a> and hosted on <a href='https://app.netlify.com/teams/kpstabela-7oky01i/overview' target='_blank' rel='noreferrer'>Netlify</a>.</p>
          </footer>
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
