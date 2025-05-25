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
      <h1>ByPlaceHolderText</h1>
      <input type="text" placeholder='enter username' defaultValue='ak' />
      <input type="text" placeholder='enter username' defaultValue='ak' />

    </div>
  );
}

export default App;
