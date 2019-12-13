import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

import { SmurfContext } from "./../contexts/SmurfContext";


function App() {
  const [smurfsApiDate, setSmurfsApiDate] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
      //console.log(response.data)
      setSmurfsApiDate(response.data)
    })
    .catch( error => {
      console.log("error", error.message)
    })
  },[])
  console.log(smurfsApiDate);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <SmurfContext.Provider value={{ smurfsApiDate }}>
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
