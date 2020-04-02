import React, { useState, useEffect } from 'react'
import classes from './FilterBar.module.css'
import './darkListItem.css'

const FilterBar = (props) => {
    const [regions, setRegions] = useState(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
    const [isOpen, setIsOpen] = useState(false)
    const [currentRegion, setCurrentRegion] = useState("Filter by Region")

    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if (!e.target.classList.contains('filterBar') && !e.target.classList.contains('li')) {
                setIsOpen(false)
            }
        })
    }, [])


    let regionsJsx = regions.map(region => {
        return <li
            className={`${classes.listItem} ${props.darkMode && 'darkListItem'} li`}
            onClick={() => {
                setCurrentRegion(region)
                props.setCurrentRegion(region)
                setIsOpen(false)

            }}
        >{region}</li>
    })

    return (
        <div className={classes.filterBarContainer}>
            <div
                className={`${classes.filterBar} filterBar`}
                style={props.toggleColors}
                onClick={() => setIsOpen(!isOpen)}>
                {currentRegion}
            </div>
            {isOpen &&
                <ul style={props.toggleColors} className={classes.regionsList}>{
                    regionsJsx
                }</ul>}

        </div>

    );
}

export default FilterBar;