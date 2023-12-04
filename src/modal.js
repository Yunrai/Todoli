import { useState } from "react";


const Modal = () => {

    const [todo, setTask] = useState({
        id:"", 
        name:"", 
        level:"",
        deadline: "",
        repeating:""
    });


    const handleData = (e) => { 
        e.preventDefault();
      
        const newTask =  {
            id: todo.id,
            name: todo.name,
            level: todo.level,
            deadline: todo.deadline,
            repeating: todo.repeating,

        };
    
        

        setTask((newTask)=> {
                return newTask});
        console.log(newTask);

      
                
        fetch('http://localhost:8000/tasks/', 
        {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(newTask)
        }).then(() => console.log("New Task Added") )

        refreshPage();

    };
  

    function refreshPage(){
        window.location.reload();
    } 

         
    return (
       
         <form onSubmit={handleData}>
              &nbsp;<label>Number</label> &nbsp;
              <input type="number" required value={todo.id} onChange={(e) => setTask({...todo, id: e.target.value})} placeholder="Task Nr." />
              &nbsp; <label>Name</label> &nbsp;
              <input type="text" required value={todo.name} onChange={(e) => setTask({...todo, name: e.target.value})}  />
              &nbsp; <label>Level</label> &nbsp;
              <input type="text" required value={todo.level} onChange={(e) => setTask({...todo, level: e.target.value})}  />
              &nbsp; <label>Due to?</label> &nbsp;
              <input type="text" required value={todo.deadline} onChange={(e) => setTask({...todo, deadline: e.target.value})}  />
              &nbsp; <label>Repeating?</label> &nbsp;
              <input type="text" required  value={todo.repeating} onChange={(e) => setTask({...todo, repeating: e.target.value})}  />
              <button type="submit" className="btn btn-dark">Add New Task</button>
        <hr />
        
        </form> 
      
       );

};

export default Modal;



