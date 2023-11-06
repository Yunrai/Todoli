import { useState } from "react";
import TaskRow from "./taskRow";

const tasksArr = [
        {
            id:1,
            name: "Read a book",
            level: "Easy",
            deadline: "Today",
            repeating: "Yes"
        },
        {
            id:2,
            name: "Pay Rent",
            level: "Medium",
            deadline: "End of the Week",
            repeating: "No"
        },

];



const TaskList = () =>{
    const [tasks, setTasks] = useState(tasksArr);
    const addTask = () => {
                setTasks([
                        ...tasks,
                    {
                        id:3,
                        name: "Jogging",
                        level: "Medium",
                        deadline: "Today",
                        repeating: "Yes",
                    },    

                ]);
    };
   
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

        <button className="btn btn-dark" onClick={addTask}>Add Task</button>
     
        </>

    )
};

export default TaskList;