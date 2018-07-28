import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.css';

const navbar = () => (
    <div className={classes.Nav}>
        <h1>Chez Jason</h1>
        <div className={classes.Routes}>
            <Link to='/'>Home</Link>
            <Link to='/reservations'>Reservations</Link>
        </div>
    </div>
);

export default navbar;