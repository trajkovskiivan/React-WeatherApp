

const calculateStatistics = (data, day) => {
  let temperatureSum = 0;
  let pressureSum = 0;
  let highestTemp = data[0];
  let lowestTemp = data[0];
  let humiditySum = 0;
  let highestHumidity = data[0];
  let lowestHumidity = data[0];
  let arrOfIcons = [];



  for (const item of data) {
    temperatureSum += item.main.temp;
    humiditySum += item.main.humidity;
    pressureSum += item.main.pressure;
    if (highestTemp.main.temp < item.main.temp) {
      highestTemp = item;
    }
    if (lowestTemp.main.temp > item.main.temp) {
      lowestTemp = item;
    }
    if (highestHumidity.main.humidity < item.main.humidity) {
      highestHumidity = item;
    }
    if (lowestHumidity.main.humidity > item.main.humidity) {
      lowestHumidity = item;
    }
    arrOfIcons.push(item.weather[0].description)
  }
  return {
    temperature: {
      max: highestTemp.main.temp,
      avg: (temperatureSum / data.length).toFixed(2),
      min: lowestTemp.main.temp
    },
    humidity: {
      max: highestHumidity.main.humidity,
      avg: humiditySum / data.length,
      min: lowestHumidity.main.humidity
    },
    pressure: pressureSum / data.length,
    warmestTime: new Date(highestTemp.dt * 1000),
    coldestTime: new Date(lowestTemp.dt * 1000),
    arrOfIcons: arrOfIcons
  };
}


export default calculateStatistics;