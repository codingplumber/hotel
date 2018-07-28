import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Home.css';

const home = () => (
    <div className={classes.Home}>
        Filler text
        <Link to='/reservations'>Make a Reservation!</Link>
    </div>
);

export default home;