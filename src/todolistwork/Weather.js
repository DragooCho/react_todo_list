import React, { useState } from 'react';
import { FaTemperatureLow } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';

function Weather() {
  const [forecast, setForecast] = useState({
    Temperature: '??',
    Place: 'Searching...',
  });
  const { Temperature, Place } = forecast;

  // const [Temperature, setTemperature] = useState('??');
  // const [Place, setPlace] = useState('Searching...');

  const API_KEY = 'f8227a305be5ba70e440a6d93f7e90d0';
  const COORDS = 'coords';

  const weatherIcon = {
    backgroundImage: `url('http://openweathermap.org/img/wn/10d@2x.png')`,
    backgroundColor: '#97979783',
    borderRadius: '30px',
    width: '100px',
    height: '100px',
    marginLeft: '10px',
    padding: '0px',
  };

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
        // const Icon = json.icon;
        setForecast({ Temperature: temperature, Place: place });
        weatherIcon();
        // setTemperature(temperature);
        // setPlace(place);
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
      <FaTemperatureLow style={{ marginBottom: '-5' }} />
      {Temperature}º
      <MdPlace style={{ marginLeft: '15', marginBottom: '-5' }} /> {Place}
      <div style={weatherIcon} />
    </div>
  );
}

export default Weather;
