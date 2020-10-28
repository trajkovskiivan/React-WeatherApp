// import React, {useState, useEffect} from 'react';
import React, {Component} from 'react';
import WeatherData from './WeatherData';
import './BodyStyle.scss'


// const Home = () => {
//   const [city, setCity] = useState("Skopje");
//   const [cityInTheMiddle, setCityInTheMiddle] = useState("");
//   const [nextCity, setNextCity] = useState("");
//   const [weatherData, setWeatherData] = useState({});
//   useEffect(() => {
//     // console.log(city)
//     fetchData(city);
//   }, [cityInTheMiddle])

//   const fetchData = async (city) => {
//     const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
//     const result = await data.json();
//     setWeatherData(result.list)
//     setCity(result.city)
//   }



//   const handleOnChangeInput = e => {
//     setNextCity(e.target.value);
//   }
//   const changeCityBtn = () => {
//     setCity(nextCity)
//     setCityInTheMiddle(city)
//     // console.log(city)
//     // console.log(nextCity)
//   }


//   // console.log("WeatherData from home", weatherData)
//   // console.log(nextCity)
//   // console.log(weatherData)
//   return (
//     <div>
//       {/* <h1 style={{textAlign: 'justify', marginLeft: "35px"}}>{city.name}</h1> */}
//       <div className="city-input-div">
//         <input type="text" placeholder="Enter City Here" onChange={(e) => handleOnChangeInput(e)} />
//         <button onClick={changeCityBtn} >Set Location</button>
//       </div>
//       <WeatherData data={weatherData} city={city} />
//     </div>
//   )
// }

// export default Home















class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Skopje",
      nextCity: "",
      weatherData: []
    }
  }

  componentDidMount() {
    // fetchData(city);
    this.fetchData(this.state.city)
  }



  // const [city, setCity] = useState("Skopje");
  // const [cityInTheMiddle, setCityInTheMiddle] = useState("");
  // const [nextCity, setNextCity] = useState("");
  // const [weatherData, setWeatherData] = useState({});
  // useEffect(() => {
  //   // console.log(city)
  //   fetchData(city);
  // }, [cityInTheMiddle])


  fetchData = async (city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
    const result = await data.json();
    // setWeatherData(result.list)
    // setCity(result.city)
    this.setState({
      city: result.city,
      weatherData: result.list
    })
  }



  handleOnChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeCityBtn = () => {
    this.fetchData(this.state.nextCity)
  }


  render() {
    return (
      <div>
        {/* <h1 style={{textAlign: 'justify', marginLeft: "35px"}}>{city.name}</h1> */}
        <div className="city-input-div">
          {/* <input type="text" name="city" placeholder="Enter City Here" onChange={(e) => handleOnChangeInput(e)} /> */}
          <input type="text" name="nextCity" placeholder="Enter City Here" onChange={this.handleOnChangeInput} />
          {/* <button onClick={changeCityBtn} >Set Location</button> */}
          <button onClick={this.changeCityBtn} >Set Location</button>
        </div>
        <WeatherData data={this.state.weatherData} city={this.state.city} />
      </div>
    );
  }
}

export default Home;