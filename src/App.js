import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>jest testing</h1>

      <button onClick={() => setData("updated data")}>Update data</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
