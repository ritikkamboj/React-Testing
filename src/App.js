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
      <h1>getAllByLabelText</h1>
      <label htmlFor="username">username</label>
      <input type="text" id='username' defaultValue="anil" />

      <label htmlFor="username2">username</label>
      <input type="text" id='username2' defaultValue="anil" />

      <label htmlFor="username3">username</label>
      <input type="text" id='username3' defaultValue="anil" />


      <label htmlFor="skill">skill</label>
      <input type="checkbox" id='skill' defaultChecked={true} />

      <label htmlFor="skill2">skill</label>
      <input type="checkbox" id='skill2' defaultChecked={true} />


      <label htmlFor="skill3">skill</label>
      <input type="checkbox" id='skill3' defaultChecked={true} />



    </div>
  );
}

export default App;
