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
      <h1>getByLableText</h1>
      <label htmlFor="user-name">username</label>
      <input type="text" id='user-name' defaultValue="aashu" />


      <label htmlFor="skills">skills</label>
      <input type="checkbox" id='skills' />


    </div>
  );
}

export default App;
