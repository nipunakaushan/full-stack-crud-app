import React, { useEffect, useState } from 'react'
import List from './componenets/List';
import Axios from 'axios';
import { baseURL } from './utils/constant';


const App = () => {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  

  useEffect(() => {
    Axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
  }, [updateUI]);

  //create data save array
  const addTask = () => {
    Axios.poat(`${baseURL}/save`, {task: input}).then((res) => {
       console.log(res.data);
       setInput("");
       setUpdateUI((prevState) => !prevState);
    });
  };


    return (
    <main>
      <h1 className="title">MERN CRUD OPERATIONS</h1>

      <div className="input_holder">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value) }/>

      <button type="submit" onClick={addTask}>Add Tasks</button>
      </div>

      <ul>
        {tasks.map(task => (
          
          <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI}/>
          
          ))};
      </ul>
    </main> 
    );

  

};

export default App

//this function created using RAFCE code 