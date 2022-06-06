import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import { Box, Grid } from "@mui/material";

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
        <div className='mx-4'>
            <h1 className='text-center text-primary my-5'>Our Team</h1>
            <Box  className='mx-5'  sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                members.map(member => <TeamMember member={member} key={member._id} ></TeamMember>)
            }
                </Grid>
            </Box>

        </div>
    );
};

export default TeamMembers;