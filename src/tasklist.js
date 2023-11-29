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
   

   
    return (
        <>
        <table className="table table-hover table-responsive ">
         <thead className="table-secondary">
            <tr>
            <th>Task</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Deadline</th>
            <th>Repeating?</th>
            </tr>
         </thead>

        <tbody>
           {tasks.map(t => <TaskRow key={t.id} task={t} />)}
        </tbody>

        </table>

        </>

    )
};

export default TaskList;

