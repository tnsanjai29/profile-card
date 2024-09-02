import { useState } from 'react';
import './App.css';
import Result from './Result.js'

const secrtNum = Math.ceil(Math.random()*10);

function App() {

  const [term, setTerm] = useState("")

  const handelchange = (e) => {

    setTerm(e.target.value)
    
  }

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">
          Guess the number betweetn 1 to 10 
        </label>
        </div>
        <input id="term" 
        type="text"
        name="term"
        onChange={handelchange}
        />
        <Result secrtNum={secrtNum} term={term}/>
    </div>
  );
}

export default App;
