import { useState } from "react";

const Modal = () => {
    const [task, setTask] = useState({
        id:"", 
        name:"", 
        level:"",
        deadline: "",
        repeating:""
    });
    
    const submit = (e) => {
        e.preventDefault();
    };
    
    const showInput = () =>{
        console.log(task);
    }

    return (
         
         <form onSubmit={submit}>
              &nbsp;<label>Number</label> &nbsp;
              <input type="number" value={task.id} onChange={(e) => setTask({...task, id: e.target.value})} placeholder="Task Nr." />
              &nbsp; <label>Name</label> &nbsp;
              <input type="text" value={task.name} onChange={(e) => setTask({...task, name: e.target.value})}  />
              &nbsp; <label>Level</label> &nbsp;
              <input type="text" value={task.level} onChange={(e) => setTask({...task, level: e.target.value})}  />
              &nbsp; <label>Due to?</label> &nbsp;
              <input type="text" value={task.deadline} onChange={(e) => setTask({...task, deadline: e.target.value})}  />
              &nbsp; <label>Repeating?</label> &nbsp;
              <input type="text" value={task.repeating} onChange={(e) => setTask({...task, repeating: e.target.value})}  />
              <button type="submit" className="btn btn-dark" onClick={showInput}>Add New Task</button>
        </form> 
       
       );

};

export default Modal;
