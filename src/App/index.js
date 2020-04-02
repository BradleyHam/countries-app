import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import axios from 'axios'
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [countrys, setCountrys] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [dataError, setDataError] = useState('')

  const toggleColors = {
    color: darkMode ? "white" : 'var(--DarkBlue)',
    background: darkMode ? 'var(--DarkBlue)' : "white"
  }

  function toggleMode() {
    setDarkMode(!darkMode)
  }

  function getCountrys(name) {

    axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => setCountrys(response.data))
      .catch(error => {
        setDataError("No Results Found")
        setCountrys([])
      })

  }

  return (
    <div className="App">
      <Header toggleColors={toggleColors} toggleMode={toggleMode} />
      <Main
        toggleColors={toggleColors}
        darkMode={darkMode}
        getCountrys={getCountrys}
        countrys={countrys}
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
        dataError={dataError}
      />
    </div>
  );
}

export default App;
