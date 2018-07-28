import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Confirmation.css';

const confirmation = () => {
    const handleClick = () => {
        console.log('[CONFIRMATON] clicked')
    }

    return (
        <div className={classes.Con}>
            <p>Hi xxx xxx, you are booked from xxxx to xxxx</p>
            <div>
                <Link to='/reservations'><button onClick={handleClick}>Update Reservation</button></Link>
                <Link to='/'><button onClick={handleClick}>Delete Reservation</button></Link>
            </div>
        </div>
    );
};

export default confirmation;