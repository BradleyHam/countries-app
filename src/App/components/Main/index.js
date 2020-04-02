import React, { Component, useState } from 'react';
import SearchAndFilter from './SearchAndFilter'
import CardGrid from './CardGrid'
import classes from './Main.module.css'

function Main(props) {
    let MainToggleColors = {
        ...props.toggleColors,
        background: props.darkMode ? 'var(--MidDarkBlue)' : "var(--VeryLightGray)"
    }
    return (
        <main
            className={classes.main}
            style={MainToggleColors}>
            <SearchAndFilter
                toggleColors={props.toggleColors}
                darkMode={props.darkMode}
                getCountrys={props.getCountrys}
                setCurrentRegion={props.setCurrentRegion}
            />
            <CardGrid
                countrys={props.countrys}
                toggleColors={props.toggleColors}
                currentRegion={props.currentRegion}
                dataError={props.dataError}
            />
        </main>
    );
}

export default Main;