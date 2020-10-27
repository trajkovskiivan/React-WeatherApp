const calculateStatistics = (data) => {
  let rightNow = new Date().getUTCMinutes < 30 ? new Date().getUTCHours + 1 : new Date().getUTCHours + 2;

  //Today
  let temperatureSum = 0;
  let feelsLikeSum = 0;
  let pressureSum = 0;
  let highestTemp = data[0];
  let lowestTemp = data[0];
  let humiditySum = 0;
  let highestHumidity = data[0];
  let lowestHumidity = data[0];




  for (const item of data) {

    // today
    temperatureSum += item.main.temp;
    humiditySum += item.main.humidity;
    feelsLikeSum += item.main.feels_like;
    pressureSum += item.main.pressure;
    if (highestTemp.main.temp < item.main.temp && todayDate === new Date(item.dt_text)) {
      highestTemp = item;
    }
    if (lowestTemp.main.temp > item.main.temp && todayDate === new Date(item.dt_text)) {
      lowestTemp = item;
    }
    if (highestHumidity.main.humidity < item.main.humidity && todayDate === new Date(item.dt_text)) {
      highestHumidity = item;
    }
    if (lowestHumidity.main.humidity > item.main.humidity && todayDate === new Date(item.dt_text)) {
      lowestHumidity = item;
    }


    return {


      today: {
        temperature: {
          max: highestTemp.main.temp,
          avg: temperatureSum / data.length,
          min: lowestTemp.main.temp
        },
        humidity: {
          max: highestHumidity.main.humidity,
          avg: (humiditySum / data.length).toFixed(2),
          min: lowestHumidity.main.humidity
        },
        feels_like: {
          avg: (feelsLikeSum / data.length).toFixed(2)
        },
        pressure: {
          avg: (pressureSum / data.length).toFixed(2)
        },
        warmestTime: new Date(highestTemp.dt * 1000),
        coldestTime: new Date(lowestTemp.dt * 1000)
      },


    };
  }
}


module.exports = calculateStatistics;