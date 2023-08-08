import React, { useState } from 'react'
import List from './componenets/List';

const App = () => {

  const [input, setInput] = useState("");

    return (
    <main>
      <h1 className="title">MERN CRUD OPERATIONS</h1>

      <div className="input_holder">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value) }/>

      <button type="submit">Add Tasks</button>
      </div>

      <ul>
        <List />
      </ul>
    </main> 
    );

  

};

export default App

//this function created using RAFCE code 