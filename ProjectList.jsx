import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
