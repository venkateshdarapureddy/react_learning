import logo from './logo.svg';
import './App.css';
import Button from './component/buttons/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     <Button text="click" bgcolor="primary" btn_link="solid"/>
     <Button text="click" bgcolor="secondary" btn_link="solid"/>
     <Button text="click" bgcolor="white" btn_link="solid"/>
     <Button text="click" bgcolor="black" btn_link="solid"/>
     <Button text="click" bgcolor="primary" btn_link="outline"/>
     <Button text="click" bgcolor="secondary" btn_link="outline"/>
     <Button text="click" bgcolor="white" btn_link="outline"/>
     <Button text="click" bgcolor="black" btn_link="outline"/>
      </header>
    </div>
  );
}



export default App; 
