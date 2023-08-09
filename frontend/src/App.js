import React, { useEffect, useState } from 'react'
import List from './componenets/List';
import axios from 'axios';
import { baseURL } from './utils/constant';



const App = () => {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateID] = useState(null);
  

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
  }, [updateUI], [updateId]);

  //create data save array add task 
  const addTask = () => {
    axios.post(`${baseURL}/save`, {task: input}).then((res) => {
       console.log(res.data);
       setInput("");
       setUpdateUI((prevState) => !prevState)
    });
  };

  // update task 

  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateID(id);
};

// update Task retrive data to text box

const updateTask = () => {
  axios.put(`${baseURL}/update/${updateId}`, {task: input}).then((res) => {
    console.log(res.data);
    setUpdateUI((prevState) => !prevState);
    setUpdateID(null);
    setInput("");
  });
}



    return (
    <main>
      <h1 className="title">MERN CRUD OPERATIONS</h1>

      <div className="input_holder">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value) }/>

      <button type="submit" onClick={updateId ? updateTask : addTask}>{updateId ? "Update Task" : "Add Tasks"}</button>
      </div>

      <ul>
        {tasks.map(task => (
          
          <List
           key={task._id} 
           id={task._id} 
           task={task.task} 
           setUpdateUI={setUpdateUI}
           updateMode={updateMode}

           />
          
          ))} 
      </ul>
    </main> 
    );

  

};

export default App

//this function created using RAFCE code 