import React, {useState, useEffect} from 'react';
// import React, {Component} from 'react';
import WeatherData from './WeatherData';
import './BodyStyle.scss'

const Home = () => {
  const [city, setCity] = useState("Skopje");
  const [cityInTheMiddle, setCityInTheMiddle] = useState("");
  const [nextCity, setNextCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    // console.log(city)
    fetchData(city);
  }, [cityInTheMiddle])

  const fetchData = async (city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
    const result = await data.json();
    setWeatherData(result.list)
    setCity(result.city)
  }



  const handleOnChangeInput = e => {
    setNextCity(e.target.value);
  }
  const changeCityBtn = () => {
    setCity(nextCity)
    setCityInTheMiddle(city)
    // console.log(city)
    // console.log(nextCity)
  }


  // console.log("WeatherData from home", weatherData)
  // console.log(nextCity)
  // console.log(weatherData)
  return (
    <div>
      {/* <h1 style={{textAlign: 'justify', marginLeft: "35px"}}>{city.name}</h1> */}
      <div className="city-input-div">
        <input type="text" placeholder="Enter City Here" onChange={(e) => handleOnChangeInput(e)} />
        <button onClick={changeCityBtn} >Set Location</button>
      </div>
      <WeatherData data={weatherData} city={city} />
    </div>
  )
}

export default Home