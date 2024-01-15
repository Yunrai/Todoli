

const TaskRow = ({task, handleEditClick, handleDeleteClick}) => {
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
                  <button className="delbtn" onClick={(event)=> handleEditClick(event, task)}>Edit</button>
                  <button className="delbtn" onClick={()=> handleDeleteClick(task.id)}>Delete</button>
                </td>
          </tr>          

        );

};

export default TaskRow;