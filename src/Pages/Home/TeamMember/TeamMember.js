import React from 'react';

const TeamMember = (props) => {
    const {banner, image, date, desc, email,  index, key, name, title, _id} = props.member;
    return (
        <div>
            
            <img src={`data:image/png;base64,${banner}`} alt="" width="400px"/>
            <h2>{title}</h2>
            <img src={`data:image/png;base64,${image}`} alt="" width="30px" height="30px" style={{borderRadius: "100%"}} />
            <span>{name}</span>
            {/* <h5>{email}</h5> */}
            <br />
            <h5>{date}</h5>
            <p style={{width: "400px"}}>{desc}</p>
        </div>
    );
};

export default TeamMember;