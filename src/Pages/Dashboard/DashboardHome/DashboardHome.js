import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AdminHome from '../AdminHome/AdminHome';
import UserHome from '../UserHome/UserHome';
import VolunteerHome from '../VolunteerHome/VolunteerHome';

const DashboardHome = () => {
    const {admin, volunteer} = useAuth()
    return (
        <div>
            {admin && <AdminHome></AdminHome>}
            {volunteer && <VolunteerHome></VolunteerHome>}
            {(!admin && !volunteer) && <UserHome></UserHome>}
        </div>
    );
};

export default DashboardHome;