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
      <h1>getByText and getAllByText</h1>
      <button>login</button>
      <p>p tag testing</p>
      <h1>heading</h1>
      <h1>heading</h1>
    </div>
  );
}

export default App;
