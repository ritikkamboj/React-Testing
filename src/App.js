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
      <h1>Mutiple items with Role</h1>
      <h1>Custom Role </h1>
      <button>Click 1</button>
      <button>Click 2</button>
      <label htmlFor="input1">User Name</label>
      <input type="text" id='input1' />
      <label htmlFor="input2">User Age</label>
      <input type="text" id='input2' />
      <div role='dummy'>Dummy Text </div>



    </div>
  );
}

export default App;
