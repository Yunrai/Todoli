import { useState } from "react";
import { tasksArr } from "./tasklist";


const Modal = () => {
    const [todo, setTask] = useState({
        id:"", 
        name:"", 
        level:"",
        deadline: "",
        repeating:""
    });

   

    const submit = (e) => {
        e.preventDefault();
      
    };

    const handleData = (e) => {
        e.preventDefault();

        const newTask = {
            id: todo.id,
            name: todo.name,
            level: todo.level,
            deadline: todo.deadline,
            reapting: todo.repeating,

        };
        const newTasks = [...tasksArr, newTask];
        setTask(newTasks);

    };
    const showInput = () =>{
        console.log(todo);
    }

    const taskStr = JSON.stringify(todo);


    return (
       
         <form onSubmit={handleData}>
              &nbsp;<label>Number</label> &nbsp;
              <input type="number" value={todo.id} onChange={(e) => setTask({...todo, id: e.target.value})} placeholder="Task Nr." />
              &nbsp; <label>Name</label> &nbsp;
              <input type="text" value={todo.name} onChange={(e) => setTask({...todo, name: e.target.value})}  />
              &nbsp; <label>Level</label> &nbsp;
              <input type="text" value={todo.level} onChange={(e) => setTask({...todo, level: e.target.value})}  />
              &nbsp; <label>Due to?</label> &nbsp;
              <input type="text" value={todo.deadline} onChange={(e) => setTask({...todo, deadline: e.target.value})}  />
              &nbsp; <label>Repeating?</label> &nbsp;
              <input type="text" value={todo.repeating} onChange={(e) => setTask({...todo, repeating: e.target.value})}  />
              <button type="submit" className="btn btn-dark">Add New Task</button>
        <hr />
        <h2>
            <i>{taskStr}</i>
            
        </h2>
        </form> 
      
       );

};

export default Modal;
