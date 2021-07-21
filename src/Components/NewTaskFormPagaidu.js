import {useState} from "react";
function NewTaskFormPagaidu() {
const [saving, setSaving] = useState (false);
const[newTaskName, setNewTaskName]=useState('');
const updateNewTaskName = (event) =>{
  setNewTaskName (event.target.value);  
}
const createNewTask = () => {
if (newTaskName == ''){
    alert('Please fill');
    return;
}

setSaving(true);
setTimeout (()=>{
    setSaving(false);
    setNewTaskName('');
},2000);

}

let inputField =<input className="form-control" value={newTaskName} onChange={updateNewTaskName} />
let submitBtn = (
    <button className="btn btn-primary mt-3" onClick={createNewTask}>
        Add new todo
    </button>
)
if (saving) {
    inputField =<input disabled={true} className="form-control" value={newTaskName} onChange={updateNewTaskName} />
    submitBtn = (
        <button className="btn btn-primary mt-3 disabled" onClick={createNewTask} disabled={true}>
            Saving...
        </button>
    )
}

    return (
        <div>
            <div classname="row">
                <div classname="col">
                    <h3>New todo</h3>
                </div>

            </div>
            <div classname="row">
                <div classname="col-2">
                    <label>task name:</label>
                </div>
                <div classname="col-10">
                    {inputField}
                </div>

            </div>
            <div classname="row">
                <div classname="col">
                    {submitBtn}
                </div>

            </div>

        </div>


    )






}
export default NewTaskFormPagaidu;