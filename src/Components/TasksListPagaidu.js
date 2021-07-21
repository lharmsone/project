import axios from "axios";
import { useState, useEffect } from "react";
import Task from './Task';

function TasksListPagaidu({ counter, reloadTaskList }) {
    const [tasks, setTasks] = useState({
        loading: false,
        items: [],
    });

    useEffect(() => {
        setInterval(() => {
            setTasks({
                loading: false,
                items: [
                    { _id: '1111', title: 'Task1', isCompleted: true },
                    { _id: '2222', title: 'Task2', isCompleted: true },
                    { _id: '3333', title: 'Task3', isCompleted: true },
                ]
            });

        }, 2000);

    }, [])

    let content = <h5>Loading...</h5>
    if (!tasks.loading) {
        //  content = <h5>No tasks added</h5>
        // } else if (!tasks.loading) {
        const taskElements = tasks.items.map((task, index) => <Task task={task} key={index}/>)
            //            reloadTaskList={reloadTaskList}
            

        content = (
            <ul className="list-group">
                {taskElements}
            </ul>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default TasksListPagaidu;
