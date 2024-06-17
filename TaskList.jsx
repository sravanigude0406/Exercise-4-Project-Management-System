import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
