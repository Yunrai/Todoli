

const EditTask = ({ editData, handleEditData, handleCancelClick, handleEditSubmit, handleChecked }) => {

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
                  <div class="form-check">
                    <input class="form-check-input position-static" className="checked" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." onClick={()=> handleChecked(editData.id)}></input>
                  </div>
              </td>
              <td>
                 <button type="submit" className="delbtn" onClick={handleEditSubmit}>Save</button>
                 <button className="delbtn" onClick={handleCancelClick}>Cancel</button>
              </td>
            </tr>

        )

}

export default EditTask;