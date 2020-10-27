import React from 'react';

const calculateStatistics = require("../functions/caluclateStatistics")

const CurrentWeather = (props) => {
  const {fullData} = props;

  let s;

  if (fullData[0]) {
    s = calculateStatistics(fullData)
  }
  return (
    <React.Fragment>
      <div className="daily-stats"><span>MAX TEMP TODAY: </span> <span className="value">{s && s.temperature.max}*C</span> </div>
      <div className="daily-stats"><span>MIN TEMP TODAY:</span> <span className="value"> {s && s.temperature.min}*C</span> </div>
      <div className="daily-stats"><span>AVG HUJMIDITY TODAY:</span> <span className="value">{s && s.humidity.avg}</span></div>
      <div className="daily-stats"><span>AVG PRESSURE:</span> <span className="value">{s && s.pressure}bar</span></div>
    </React.Fragment>

  );
}

export default CurrentWeather;