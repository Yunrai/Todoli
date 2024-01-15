import Modal from "./modal";

const PopUp = () => {
        return (

        <>  
         <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#showPopup">Add Customized Task</button>
        

        <div className="modal" id="showPopup" tabindex="-1" role="dialog" aria-labelledby="popupTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="popupTitle">
                                Add New Task Here
                        </h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                           <Modal />
                </div>

                <div className="modal-footer">
                  <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>


        </>
        );

};


export default PopUp;