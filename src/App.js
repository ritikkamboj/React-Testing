import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './Users';

function App() {

  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>jest testing</h1>
      <Users />

    </div>
  );
}

export default App;
