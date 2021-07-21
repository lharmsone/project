import { useState } from 'react';
function Task({task}) {
    return (
        <li className="list-group-item">
            {task.title}
        </li>
    )




}




export default Task;