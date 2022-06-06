import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';

const TeamMembers = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/teamMembers')
        .then(response => response.json())
        .then(data => {
            setMembers(data);
            // console.log(data);
        })
    }, [])
    
      
    return (
        <div>
            <h1>TeamMember: {members.length} </h1>
            {
                members.map(member => <TeamMember member={member} key={member._id} ></TeamMember>)
            }
        </div>
    );
};

export default TeamMembers;