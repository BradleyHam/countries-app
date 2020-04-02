import React, { Component, useState } from 'react'
import classes from './Header.module.css'

function Header(props) {


    return (
        <header
            className={classes.header}
            style={props.toggleColors} >
            <div className="container">
                <div className={classes.headerContent}>
                    <h3 className={classes.heading} >Where in the world? </h3>
                    <button
                        className={classes.button}
                        onClick={props.toggleMode}
                    >Dark Mode</button>
                </div>
            </div>
        </header>
    );
}

export default Header;