import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [data, setData] = useState("")

  return (
    <div className="App">
      <h1>Props Testing </h1>

      <User name="kamboj" />

    </div>


  );
}

export default App;
