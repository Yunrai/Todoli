const PopUp = () => {
        return (

        <>  
         <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#showPopup">Add Customized Task</button>
        

        <div className="modal" id="showPopup" tabindex="-1" role="dialog" aria-labelledby="popupTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="popupTitle">
                                Add your new Task here
                        </h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                            <form> 
                                <label for="id">Task Number</label> &nbsp;
                                <input type="number" id="id" ></input>
                                <br /><br />
                                <label for="name">Task Name</label> &nbsp;
                                <input type="text" id="name"></input>
                                <br /><br />
                                <label for="level">Difficulty Level</label> &nbsp;
                                <input type="text" id="level"></input>
                                <br /> <br /> 
                                <label for="deadline">Due to?</label> &nbsp;
                                <input type="text" id="deadline"></input>
                                <br /> <br />
                                <label for="repeating">Repeating?</label> &nbsp;
                                <label for="repeating">Yes</label> &nbsp;
                                <input type="radio" id="repeating" value="Yes"></input> &nbsp;&nbsp;
                                
                                <label for="repeating">No</label> &nbsp;
                                <input type="radio" id="repeating" value="No"></input> 

                            </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal" >Add Task</button>
                </div>

                </div>
            </div>
        </div>


        </>
        );

};


export default PopUp;