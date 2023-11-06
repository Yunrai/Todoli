const TaskRow = ({task}) => {
        const finish = () => {
            alert("Task Done!");
        };  
  
  return (
          <tr className="rows" onClick={finish} >
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.level}</td>
                <td>{task.deadline}</td>
                <td>{task.repeating}</td>
          </tr>          

        );

};

export default TaskRow;