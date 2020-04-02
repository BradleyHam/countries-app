import React, { Component } from 'react'
import classes from './Cards.module.css'

const Card = (props) => {
    const { name, flag, population, region, capital } = props.country
    return (
        <div className={classes.card} style={props.toggleColors}>
            <img className={classes.flag} src={flag} alt="" />
            <div className={classes.details}>
                <h3>{name}</h3>
                <p><strong>population:</strong><span>{population}</span></p>
                <p><strong>region:</strong><span>{region}</span></p>
                <p><strong>capital:</strong><span>{capital}</span></p>
            </div>

        </div>
    );
}

export default Card;