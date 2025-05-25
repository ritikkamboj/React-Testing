import './App.css';
import { useState } from 'react';
import handleOtherMethod from './helper';

function App() {

  const [data, setData] = useState("");

  const handleData = () => {
    setData("hello")
  }

  return (
    <div className="App">
      <h1>getByRole</h1>
      <input type="text" defaultValue="hello" disabled />
      <button>Click me </button>


    </div>
  );
}

export default App;
