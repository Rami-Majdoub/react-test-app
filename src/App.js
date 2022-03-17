import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Display from './components/Display/Display'

function App() {
  const [equation, setEquation] = useState('1+2')
  
  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "center"}}>

      <img src={logo} width="100px" />
      <h1>Calculator</h1>
      </div>
      <br />
      <Display equation={equation}/>
      <br/>
      <Button val="0" equation={equation} setEquation={setEquation}></Button>
      <Button val="." equation={equation} setEquation={setEquation}></Button>
      <Button val="*" equation={equation} setEquation={setEquation}></Button>
      <Button val="/" equation={equation} setEquation={setEquation}></Button>
      <br/>
      <Button val="7" equation={equation} setEquation={setEquation}></Button>
      <Button val="8" equation={equation} setEquation={setEquation}></Button>
      <Button val="9" equation={equation} setEquation={setEquation}></Button>
      <Button val="-" equation={equation} setEquation={setEquation}></Button>
      <br/>
      <Button val="4" equation={equation} setEquation={setEquation}></Button>
      <Button val="5" equation={equation} setEquation={setEquation}></Button>
      <Button val="6" equation={equation} setEquation={setEquation}></Button>
      <Button val="+" equation={equation} setEquation={setEquation}></Button>
      <br/>
      <Button val="1" equation={equation} setEquation={setEquation}></Button>
      <Button val="2" equation={equation} setEquation={setEquation}></Button>
      <Button val="3" equation={equation} setEquation={setEquation}></Button>
      <Button val="=" equation={equation} setEquation={setEquation}></Button>

  
    </div>
  );
}

export default App;
