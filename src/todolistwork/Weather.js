import React, { useState } from 'react';
import { FaTemperatureLow } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';

function Weather() {
  const [forecast, setForecast] = useState({
    Temperature: '??',
    Place: 'Searching...',
    WIcon: '???',
  });
  const { Temperature, Place, WIcon } = forecast;

  const API_KEY = 'f8227a305be5ba70e440a6d93f7e90d0'; // user: deagoocho
  // const API_KEY = 'e6c2edba7c9e1616e2470a320349f652'; // user: deagoocho2
  const COORDS = 'coords';

  function getWeather(lat, log) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        const icon = json.weather[0].icon;
        setForecast({ Temperature: temperature, Place: place, WIcon: icon });
      });
  }

  function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  }

  function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  }

  function handleGeoError() {
    console.log('Cant access geo location');
  }

  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  }

  function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parsedCoords = JSON.parse(loadedCoords);
      getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
  }

  function init() {
    loadCoords();
  }

  init();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaTemperatureLow style={{ marginBottom: '-5' }} alt="Temperature here" />
      {Temperature}º
      <MdPlace
        style={{ marginLeft: '15', marginBottom: '-5' }}
        alt="My place"
      />{' '}
      {Place}
      <img
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.445)',
          color: 'rgb(0, 0, 0)',
          borderRadius: '40px',
          marginLeft: '10px',
        }}
        src={`http://openweathermap.org/img/wn/${WIcon}@2x.png`}
        alt="Weather icons"
        width="80"
        height="80"
      />
    </div>
  );
}

export default Weather;
