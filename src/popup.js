import { useState } from "react";

const PopUp = () => {
    const [todo, setTask] = useState({
        id:"", 
        name:"", 
        level:"",
        deadline: "",
        repeating:""
    });


    const handleData = (e) => { 
        e.preventDefault();
      
        const newTask =  {
            id: todo.id,
            name: todo.name,
            level: todo.level,
            deadline: todo.deadline,
            repeating: todo.repeating,

        };
    
        

        setTask((newTask)=> {
                return newTask});
        console.log(newTask);

      
                
        fetch('http://localhost:8000/tasks/', 
        {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(newTask)
        }).then(() => console.log("New Task Added") )

        refreshPage();

    };
    
   

    function refreshPage(){
        window.location.reload();
    } 

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
                    
                <form onSubmit={handleData} className="modal2">
                    &nbsp;<label>Number</label> &nbsp;  <br />
                    <input type="number" required="required" value={todo.id} onChange={(e) => setTask({...todo, id: e.target.value})} placeholder="Task Nr." />  <br />
                    &nbsp; <label>Name</label> &nbsp; <br />
                    <input type="text" required="required" value={todo.name} onChange={(e) => setTask({...todo, name: e.target.value})}  />  <br />
                    &nbsp; <label>Level</label> &nbsp; <br />
                    <input type="text" required="required" value={todo.level} onChange={(e) => setTask({...todo, level: e.target.value})}  />  <br />
                    &nbsp; <label>Due to?</label> &nbsp; <br />
                    <input type="text" required="required" value={todo.deadline} onChange={(e) => setTask({...todo, deadline: e.target.value})}  />  <br />
                    &nbsp; <label>Repeating?</label> &nbsp; <br />
                    <input type="text"required="required"  value={todo.repeating} onChange={(e) => setTask({...todo, repeating: e.target.value})}  />  <br />
                    
            
                </form> 
                </div>

                <div className="modal-footer">
                    <button type="submit" className="btn btn-dark" onClick={handleData}>Add New Task</button>
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>


        </>
        );

};


export default PopUp;