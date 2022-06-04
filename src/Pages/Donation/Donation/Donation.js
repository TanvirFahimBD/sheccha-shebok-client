import { Payment } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Donation = () => {
    const [donation, setDonation] = useState([])
    const {eventId} = useParams()
    const { user } = useAuth()
    const [currentDonation, setCurrentDonation] = useState([])
    const [balance, setBalance] = useState("$10")
    useEffect(() => {
      fetch("/donation.json")
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setDonation(data)
      })
    }, [])


    useEffect(() => {
      fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => {
          const match = data.find(dt => dt._id === eventId)
          setCurrentDonation(match)
      })
    }, [])


    const handleDonateAmount=(e) => {
        const amount = e.target.value;
        if(amount>0){
            setBalance(amount)
            console.log(amount)
        }
        e.preventDefault()
    }
    const handleDonate=(e) => {
    //     fetch("/donation",{
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         }
    //     })

        e.preventDefault()
    }
    
    return (
        <div>
           <div >
            <form onSubmit={handleDonate}>
                <input type="text" name="" id="" value={user.email || " "} readOnly/>
                <br />
                <br />
                <input type="text" name="" id="" value={currentDonation.title || " "} readOnly/>
                <br />
                <br />
                <input type="text" name="" id="" value={balance || " "} onChange={handleDonateAmount}/>
                <br />
                <br />
                <input className='btn btn-warning' type="submit" value="Confirm Donate"  />
            </form>
        </div>
        </div>
    );
};

export default Donation;