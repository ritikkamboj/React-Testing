import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("")

  return (
    <div className="App">

      <h1>onChnage event testing</h1>
      <h2>{data}</h2>
      <input type="text" placeholder='enter name' onChange={(e) => setData(e.target.value)} />

    </div>


  );
}

export default App;
