import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App(props) {
  const [data, setData] = useState(0)

  return (
    <div className="App">
      <h2>heading 2</h2>
      <h5>heading 5</h5>
      <button onClick={() => setData(data => data + 1)}>Click to increase count : {data}</button>
    </div>


  );
}

export default App;
