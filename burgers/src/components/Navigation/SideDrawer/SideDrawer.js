import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NaviggationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    //... conditionally add classes
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo  />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;