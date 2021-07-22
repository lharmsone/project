import { useState } from 'react';
import axios from 'axios';

function Feedback({ feedback, reloadFeedbackList }) {
    const [feedbackCompleted, setFeedbackCompleted] = useState(feedback.isCompleted);
    const [checkboxDisabled, setCheckboxDisabled] = useState(false);
    const [deletingFeedback, setDeletingFeedback] = useState(false);

    const toggleComletion = async () => {
        //setCheckboxDisabled(true);
        const data = {
            title: feedback.title,
            user: feedback.user,
            lables: feedback.lables,
            createdAt: feedback.createdAt,
            // isCompleted: !taskCompleted,
        };
        const url = `http://localhost:8071/tasks/${feedback._id}`;
        try {
            await axios.put(url, data);
            setFeedbackCompleted(!feedbackCompleted);
            setCheckboxDisabled(false);
        } catch (e) {
            alert('Whoops, something went wrong');
        }
    }





    return (
        <div>
            <li className="list-group-item">
                <div>{feedback.createdAt}</div>
                <div>{feedback.user} : {feedback.title}</div>
                
            </li>

        </div>
    )
}

export default Feedback;
