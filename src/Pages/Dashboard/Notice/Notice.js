import React from 'react';


const Notice = (props) => {
    const {img, name, notice, date} = props.notice;
    return (
        <div className='my-3 p-3' style={{border:" 1px solid gray", borderRadius: "5px"}}>
            <h3>{notice}</h3>
            <h5 className='text-primary' >{date}</h5>
            <img src={img} alt="" width="30px" height="30px" style={{borderRadius: "100%"}} />
            <span>{name}</span>
        </div>
    );
};

export default Notice;