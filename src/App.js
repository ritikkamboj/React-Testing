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
      <h1>getBytestId and getAllByTextId </h1>
      <div data-testid="div-test-id">
        Testing with test id method div1
      </div>
      <div data-testid="div-test-id">
        Testing with test id method div2
      </div>
      <h2 data-testid="h2-test-id">h2 tag testing </h2>

    </div>
  );
}

export default App;
