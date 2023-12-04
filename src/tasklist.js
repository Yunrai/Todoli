import { useEffect, useState } from "react";
import TaskRow from "./taskRow";

 const TaskList = () =>{
    const [tasks, setTasks] = useState([]);
      
    useEffect(()=> {
        fetch('http://localhost:8000/tasks/')
       .then(res => res.json())
       .then(data => {
              setTasks(data)     
        })
    }, [])
   
  
    const deleteTask = id => {
        fetch(`http://localhost:8000/tasks/${id}`, {
          method: "DELETE",
        })
          .then(response => response.json())
          .then(() => {
            setTasks(values => {
              return values.filter(item => item.id !== id)
            })
  
          })
      }
   
    return ( 
        <>
        <table className="table table-hover table-responsive ">
         <thead className="table-secondary ">
            <tr>
            <th>Task</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Deadline</th>
            <th>Repeating?</th>
            <th>Action</th>
              
            </tr>
         </thead>

        <tbody>
           {tasks.map(t => <TaskRow key={t.id} task={t} />)}
        </tbody>

        </table>

        </>

    )
};
export const deleteTask = () => {};
export default TaskList;

