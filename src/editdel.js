

const EditTask = ({ editData, handleEditData, handleCancelClick }) => {

        return (
            <tr>
              <td>
                <input type="number" required="required" placeholder="Task Nr." name="Task" value={editData.id} onChange={handleEditData}></input>
              </td>
            <td>
                <input type="text" required="required" placeholder="Name of the Task" name="Name"  value={editData.name} onChange={handleEditData}></input>
              </td>
              <td>
                 <input type="text" required="required" placeholder="Difficulty" name="Difficulty" value={editData.level} onChange={handleEditData}></input>
              </td>
              <td>
                  <input type="text" required="required" placeholder="Deadline" name="Deadline" value={editData.deadline} onChange={handleEditData}></input>
              </td>
              <td> 
                 <input type="text" required="required" placeholder="Repeating?" name="Repeating" value={editData.repeating} onChange={handleEditData}></input>
              </td>
              <td>
                 <button type="submit" className="delbtn">Save</button>
                 <button className="delbtn" onClick={handleCancelClick}>Cancel</button>
              </td>
            </tr>

        )

}

export default EditTask;