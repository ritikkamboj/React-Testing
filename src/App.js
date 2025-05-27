import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()


  }, [])


  const getData = async () => {
    let results = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await results.json();
    setData(data)

  }
  console.log(data)
  return (
    <div className="App">
      {/* <h1>API Calls</h1> */}
      <h2>List of users</h2>
      {
        data.map((item) => <li key={item.id}>{item.name}</li>)
      }
    </div>


  );
}

export default App;
