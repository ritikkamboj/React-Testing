import './App.css';

function App() {
  let login = true;


  return (
    <div className="App">
      <h1>   QueryBy and QueryByAll</h1>


      {
        login ? <button>logout</button> : <button>login</button>
      }


    </div>

  );
}

export default App;
