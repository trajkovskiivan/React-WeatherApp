import React from 'react';

const WeatherDataComponent = (props) => {
  // console.log(typeof (props))
  console.log(props)
  // if (props) {
  //   console.log(props[0])
  // }

  return (
    // <h1>Hello</h1>
    <p>{new Date(props.dt_txt).getUTCHours()}:00h : {props.main.temp}*C</p>
  )
}


export default WeatherDataComponent;