import { deleteTask } from "./tasklist";

const TaskRow = ({task}) => {
      //   const finish = () => {
      //       alert("Task Done!");
      //   };  

       

  return (
          <tr className="rows" >
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.level}</td>
                <td>{task.deadline}</td>
                <td>{task.repeating}</td>
                <td className="d-flex justify-content-center">
                  <button className="delbtn">Edit</button>
                  <button className="delbtn" onClick={deleteTask}>Delete</button>
                </td>
          </tr>          

        );

};

export default TaskRow;