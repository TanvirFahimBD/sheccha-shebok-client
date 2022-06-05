import React from 'react';

const MySingleDonation = (props) => {
    const {transaction, email, event, eventBanner} = props.pay;
    const amount = props.pay.amount /100;

    return (
        <div>
            <img src={eventBanner} alt="" height="200px" />
            <h2>{event}</h2>
            <h2>{amount}</h2>
            {/* <h5>{email}</h5> */}
            <h6>{transaction.substring(3,27)}</h6>
        </div>
    );
};

export default MySingleDonation;