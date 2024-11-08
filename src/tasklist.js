import { Fragment, useEffect, useState } from "react";
import TaskRow from "./taskRow";
import EditTask from "./editdel";

 const TaskList = () =>{
    const [tasks, setTasks] = useState([]);
      
    useEffect(()=> {
        fetch('http://localhost:8000/tasks/')
       .then(res => res.json())
       .then(data => {
              setTasks(data)     
        })
    }, [])
   
    const [editData, setData] = useState({
          id: "",
          name: "",
          level: "",
          deadline: "",
          repeating: "",
 });

    useEffect(()=> {
      fetch('http://localhost:8000/tasks/')
     .then(res => res.json())
     .then(data => {
            setData(data)     
      })
  }, [])

    const [editTaskId, setTaskId] = useState(null);

    const handleEditClick = (event, editData) => {
      event.preventDefault();
      setTaskId(editData.id);

      const formValues = {
          id: editData.id,
          name: editData.name,
          level: editData.level,
          deadline: editData.deadline,
          repeating: editData.repeating

      }
      setData(formValues);
    }

  
    const handleEditData = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newData = { ...tasks};

      newData[fieldName] = fieldValue;

      setData(newData);
    }
     
   const handleEditSubmit = (event) => {
      event.preventDefault();
     
      const editedTask = {
        id: editData.id,
        name: editData.name,
        level: editData.level,
        deadline: editData.deadline,
        repeating: editData.repeating
      }

      const newTasks = [...tasks];

      const index = tasks.findIndex((task) => task.id === editData.id);

      newTasks[index] = editedTask;

      setTasks(newTasks);
      setTaskId(null);
   
      fetch(`http://localhost:8000/tasks/${index}`, {
        method: 'PUT',
      })
      .then(res => {
        return res.json()
      })
     
   
   }

    const handleCancelClick = () => {
        setTaskId(null);
    }
   
    const handleDeleteClick = (taskid) => {
      const newTasks= [...tasks];

      const index = tasks.findIndex((task)=>task.id === taskid);
      newTasks.splice(index, 1);
      
      setTasks(newTasks)

      fetch('http://localhost:8000/tasks/' + taskid, {
        method: 'DELETE',
      })
      .then(res => {
        return res.json()
      }) 
   }
   
   const handleChecked = (taskid) =>{ 
    const newTasks= [...tasks];

    const index = tasks.findIndex((task)=>task.id === taskid);
    newTasks.splice(index, 1);
    
    setTasks(newTasks)
    

    fetch('http://localhost:8000/tasks/' + taskid, {
      method: 'DELETE',
    })
    .then(res => {
      return res.json()
    }).then(alert("Task Completed"))
   
 }

    
    return ( 
        <>
       <form onSubmit={handleEditSubmit}>
        <table className="table table-hover table-responsive ">
         <thead className="table-secondary ">
            <tr>
                <th>Task</th>
                <th>Name</th>
                <th>Difficulty</th>
                <th>Deadline</th>
                <th>Repeating?</th>
                <th>Checked</th>
                <th>Action</th>
              
            </tr>
         </thead>

        <tbody>
           {tasks.map(t =>
           <Fragment>
                      {editTaskId === t.id ? (<EditTask editData={editData} handleEditData={handleEditData} handleCancelClick={handleCancelClick} /> ) : 
                    
                   ( <TaskRow key={t.id} task={t} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleChecked={handleChecked}/> )}
                  
            </Fragment> ) 
           }
         
        </tbody>
        </table>
        </form>
        </>

    )
};

export default TaskList;

