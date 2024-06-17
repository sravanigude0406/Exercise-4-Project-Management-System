import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeamList = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('/teams')
            .then(response => setTeams(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Teams</h1>
            <ul>
                {teams.map(team => (
                    <li key={team.id}>{team.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeamList;
