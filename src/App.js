import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App(props) {
  const [data, setData] = useState("")

  return (
    <div className="App">
      <h1>functional props testing</h1>
      <button onClick={props.testFunc}>click</button>
    </div>


  );
}

export default App;
