import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>PROFILE</h1>
            <img src={user.photoURL} alt="" style={{borderRadius: "100%"}} />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
    );
};

export default Profile;