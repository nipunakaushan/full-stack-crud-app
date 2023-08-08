import React from 'react'
import {BsTrash} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import Axios from 'axios';


const List = ({id, task, setUpdateUI, updateMode }) => {

const removeTask = () => {
  Axios.delete(`{baseURL}/delete/${id}`).then((res) => {
    console.log(res);
    setUpdateUI((prevState) => !prevState);
  });
};

  return (
    <li>
    
        {task}
        <div className="icon_holdder">
            <BiEditAlt className="icon" />
            <BsTrash className="icon" onClick={removeTask}/>
        </div>
    </li>
  )
}

export default List