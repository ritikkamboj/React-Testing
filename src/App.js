import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("")

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => setData("hello")}>click me</button>

    </div>


  );
}

export default App;
