import Axios from "axios";
import { useState } from "react";

function NewFeedbackForm({reloadFeedbacksList}) {
    const [saving, setSaving] = useState(false);
    const [newFeedbackName, setNewFeedbackName] = useState('');
    const [newFeedbackUser, setNewFeedbackUser] = useState('');
   
    const updateNewFeedbackName = (event) => {
        setNewFeedbackName(event.target.value);
    }
    const updateNewFeedbackUser = (event) => {
        setNewFeedbackUser(event.target.value);
    }
    const createNewFeedback = async () => {
        if (newFeedbackName == '') {
            alert('Please provide the feedback!');
            return;
        }

        setSaving(true);

        const url = 'http://localhost:8071/feedbacks';
        const data = {
            title: newFeedbackName,
            user: newFeedbackUser,
            lables: [],
        };
        
        try {
            await Axios.post(url, data);
            setSaving(false);
            setNewFeedbackName('');
            setNewFeedbackUser('');
           // reloadFeedbacksList();
        } catch (e) {
            alert('Something went wrong when talking to the server');
            setSaving(false);
        }
    }

    let inputField1 = <input className="form-control" value={newFeedbackName} onChange={updateNewFeedbackName} />
    let inputField2 = <input className="form-control" value={newFeedbackUser} onChange={updateNewFeedbackUser} />
    let submitBtn = (
        <button className="btn btn-primary mt-3" onClick={createNewFeedback}>
            Provide feedback
        </button>
    )
    if (saving) {
        inputField1 = <input disabled={true} className="form-control" value={newFeedbackName} onChange={updateNewFeedbackName} />
        inputField2 = <input disabled={true} className="form-control" value={newFeedbackUser} onChange={updateNewFeedbackUser} />
        submitBtn = (
            <button className="btn btn-primary mt-3 disabled" onClick={createNewFeedback} disabled={true}>
                Saving...
            </button>
        )
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="col">
                <h3>New todo</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                <label>User:</label>
                </div>
                <div className="col-10">
                    {inputField2}
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                <label>Message:</label>
                </div>
                <div className="col-10">
                    {inputField1}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {submitBtn}
                </div>
            </div>
        </div>
    )
}

export default NewFeedbackForm;