

const TaskRow = ({task, handleEditClick, handleDeleteClick, handleChecked}) => {

  return (
          <tr className="rows" >
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.level}</td>
                <td>{task.deadline}</td>
                <td>{task.repeating}</td>
                <td><div class="form-check">
                    <input class="form-check-input position-static" className="checked" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." onClick={()=> handleChecked(task.id)}></input>
                  </div>
                  </td>
                <td className="d-flex justify-content-center">
                  <button className="delbtn" onClick={(event)=> handleEditClick(event, task)}>Edit</button>
                  <button className="delbtn" onClick={()=> handleDeleteClick(task.id)}>Delete</button>
                </td>
                
          </tr>          

        );

};

export default TaskRow;