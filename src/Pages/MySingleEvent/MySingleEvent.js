import React from 'react';

const MySingleEvent = (props) => {

   const {_id, title,desc,banner,date, image} = props.myEvent;
//    console.log(props.myEvent);

    return (
        <div className='col-md-12 col-lg-6'>
            <img src={banner} alt="" height="300px" />
            <h1>{title}</h1>
            <p>{date}</p>
            <span>Volunteer: </span>
            <img src={image} alt="" width="40px" height="40px" style={{borderRadius: "100%"}} />
            <br />
            <br />
            <small>{desc}</small>
            <br />
            <button
              className="btn btn-danger"
              onClick={() => props.handleDelete(_id)}
              >
              Cancel
            </button>
        </div>
    );
};

export default MySingleEvent;