import React, { useState, useEffect } from 'react';
import classes from './SearchBar.module.css'

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState('');
    const [showError, setShowError] = useState(false);

    function updateSearch(e) {
        setSearchInput(e.target.value)
    }
    function clearSearch(e) {
        setSearchInput('')
    }
    function enter(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            props.getCountrys(e.target.value)
            setShowError(false)
        } else if (e.keyCode === 13 && e.target.value === '') {
            setShowError(true)
        }
    }

    return (
        <div className={classes.searchBar} style={props.toggleColors}>
            <div>
                <span className={classes.icon}>icon</span>
                <input
                    type="text"
                    className={classes.searchBarInput}
                    style={props.toggleColors}
                    value={searchInput}
                    onChange={updateSearch}
                    placeholder='Search for a country ...'
                    onKeyUp={enter}
                />
            </div>
            {showError && <div className={classes.error}>Please enter a Country</div>}
        </div>

    );
}

export default SearchBar;