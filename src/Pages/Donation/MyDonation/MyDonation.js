import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MySingleDonation from '../MySingleDonation/MySingleDonation';

const MyDonation = () => {
    const {user} = useAuth()
    const [paymentInfo, setPaymentInfo] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/payment/${user.email || ""}`)
        .then(res => res.json())
        .then(data => {
          setPaymentInfo(data);
        })
      }, [])
    return (
        <div>
            <h1>MyDonation</h1>
            {paymentInfo.map(pay =><MySingleDonation pay={pay} key={pay._id}></MySingleDonation>)}
        </div>
    );
};

export default MyDonation;