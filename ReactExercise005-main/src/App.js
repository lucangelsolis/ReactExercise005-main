import { useState } from "react";
import './App.css';

function App() {

  function generadorNum() {
    let nums = [];
    for (let i = 0; i < 5; i++)
      nums[i] = Math.trunc(Math.random() * 10)
    setNumeros(nums)
  }



  const [nums, setNumeros] = useState([0, 0, 0, 0, 0]);


  return (
    <div className="App-Gnt">
      <h1>Random Number</h1>
      <div className="rdm-nm">
        {nums.map(num => (<p>{num}</p>))}
      </div>
      <button onClick={generadorNum} className="btn-gen">Random Me</button>
    </div>
  );

}
export default App;