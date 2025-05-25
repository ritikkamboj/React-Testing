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
      <h1>getAllByRole</h1>
      <button>Click Me</button>
      <button>Click Me</button>

      <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>


    </div>
  );
}

export default App;
