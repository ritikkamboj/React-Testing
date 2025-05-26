import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(false)
  useEffect(() => {
    setTimeout(() => setData(true))
  }, 2000)

  return (
    <div className="App">
      <h1 id='testId'>hello world</h1>
    </div>

  );
}

export default App;
