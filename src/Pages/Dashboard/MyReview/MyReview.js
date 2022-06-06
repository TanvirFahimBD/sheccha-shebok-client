import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyReview = () => {
    const {user} = useAuth()
    const [myReview, setMyReview] = useState({})
    const myEmail = user?.email;
    useEffect(() => {
      fetch(`http://localhost:5000/review/${myEmail}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setMyReview(data);
      })
    }, [myEmail])
    return (
        <div>
            <h1>MyReview</h1>
            <h3>{myReview.message}</h3>
            <p>{myReview.review}</p>
        </div>
    );
};

export default MyReview;