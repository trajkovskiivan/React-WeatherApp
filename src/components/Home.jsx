import React, {useState, useEffect} from 'react';
// import React, {Component} from 'react';
import WeatherData from './WeatherData';
import './BodyStyle.scss'


// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: "Skpoje",
//       weatherData: {}
//     }
//   }

//   componentDidMount() {
//     this.fetchData()
//   }

//   fetchData = async () => {
//     const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
//     const result = await data.json();
//     this.setState({
//       city: result.city,
//       weatherData: result.list
//     })
//     // this.state.weatherData = result.list
//     // this.state.city = result.city
//   }
//   render() {
//     console.log(this.state.weatherData)
//     return (
//       <div>
//         {/* <h1 style={{textAlign: 'justify', marginLeft: "35px"}}>{city.name}</h1> */}
//         <div>
//           <input type="text" placeholder="Enter City Here" />
//           <button  >Set Location</button>
//         </div>
//         <WeatherData data={this.state.weatherData} city={this.state.city} />
//       </div>
//     )
//   }
// }

// export default Home;







const Home = () => {
  const [city, setCity] = useState("Skopje");
  const [cityInTheMiddle, setCityInTheMiddle] = useState("");
  const [nextCity, setNextCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    console.log(city)
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