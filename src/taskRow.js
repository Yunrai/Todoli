const TaskRow = ({task}) => {
        return (
          <tr>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.level}</td>
                <td>{task.deadline}</td>
                <td>{task.repeating}</td>
          </tr>          

        );

};

export default TaskRow;