import React, { Component, useEffect } from 'react'
import Card from './Card'
import classes from './CardGrid.module.css'


const CardGrid = (props) => {
    let countryJsx;

    if (props.countrys.length > 0 && props.currentRegion) {
        countryJsx =
            props.countrys.filter(country => country.region === props.currentRegion)
                .map(country => <Card country={country} toggleColors={props.toggleColors} />)
    } else if (props.countrys.length > 0) {
        countryJsx = props.countrys.map(country => <Card country={country} toggleColors={props.toggleColors} />)
    } else {
        countryJsx = props.dataError;
    }

    return (
        <div>
            <div className="container">
                <div className={classes.grid}>
                    {countryJsx}
                </div>
            </div>
        </div>

    );
}

export default CardGrid;