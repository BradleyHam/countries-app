import React from 'react'
import SearchBar from './SearchBar'
import classes from './SearchAndFilter.module.css'
import FilterBar from './FilterBar'

function SearchAndFilter(props) {
    return (
        <div className={classes.searchAndFilterBackground}>
            <div className="container">
                <div className={classes.searchAndFilter}>
                    <SearchBar toggleColors={props.toggleColors} getCountrys={props.getCountrys} />
                    <FilterBar toggleColors={props.toggleColors} darkMode={props.darkMode} setCurrentRegion={props.setCurrentRegion} />
                </div>
            </div>
        </div>
    )
}

export default SearchAndFilter;