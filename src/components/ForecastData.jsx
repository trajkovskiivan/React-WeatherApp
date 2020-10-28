import React from 'react';
import ForecastDay from './ForecastDay';


const ForecastData = (props) => {
  const {fullData} = props;

  return (
    <div className="forecast-days">
      <ForecastDay someDate={fullData && fullData} calcDay={1} />
      <ForecastDay someDate={fullData && fullData} calcDay={2} />
      <ForecastDay someDate={fullData && fullData} calcDay={3} />
      <ForecastDay someDate={fullData && fullData} calcDay={4} />
      <ForecastDay someDate={fullData && fullData} calcDay={5} />
    </div>
  )
}

export default ForecastData;