import React from 'react';

const MySingleEvent = (props) => {

   const {_id, title,desc,banner,date, image} = props.myEvent;
//    console.log(props.myEvent);

    return (
        <div  style={{width: "400px"}} className='col-md-12 col-lg-6 mx-2 mb-5'>
            <img src={banner} alt="" height="300px" />
            <h1  className='text-primary'>{title}</h1>
            <p>{date}</p>
            <div className='mt-3'>
            <img src={image} alt="" width="40px" height="40px" style={{borderRadius: "100%"}} />
            <span className='text-primary'> &nbsp; Volunteer </span>
            </div>
            <br />
            <small>{desc}</small>
            <br />
            <button
              className="btn btn-danger mt-2"
              onClick={() => props.handleDelete(_id)}
              >
              Cancel Event
            </button>
        </div>
    );
};

export default MySingleEvent;