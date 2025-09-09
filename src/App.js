import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState("");

  return (
    <div className="App">
      {/* <p>First React Test case</p> */}

      {/* <input type='text' placeholder='Enter User Name' name='username' id='userid' /> */}

      <input type='text' value={data} onChange={(e) => setData(e.target.value+"test")} />
 
    </div>
  );
}

export default App;
