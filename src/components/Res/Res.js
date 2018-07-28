import React from 'react';
import { Route, Link } from 'react-router-dom';

import classes from './Res.css';
// import Confirmation from '../Confirmation/Confirmation';

const res = () => {
    const handleClick = () => {
        console.log('[RES] clicked')
    }

    return (
        <div className={classes.Res}>
            <div>
                <label>First Name:<input type='text' name='firstName' /></label>
                <label>Last Name:<input type='text' name='lastName' /></label>
            </div>
            <div>
                <label>From:<input type='text' name='from' /></label>
                <label>To:<input type='text' name='to' /></label>
            </div>
            
            <Link to='/confirmation'><button onClick={handleClick}>Submit</button></Link>

            
        </div>
    );
};

export default res;