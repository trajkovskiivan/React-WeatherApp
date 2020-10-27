

const calculateStatistics = (data, day) => {
  let today = new Date().getUTCDate();
  let temperatureSum = 0;
  let pressureSum = 0;
  let highestTemp = data[0];
  let lowestTemp = data[0];
  let humiditySum = 0;
  let highestHumidity = data[0];
  let lowestHumidity = data[0];
  let arrOfIcons = [];

  let dayInArr = (day) => new Date(day).getUTCDate();


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

module.exports = calculateStatistics



















// const calculateStatistics = (data) => {
//   let todayDate = new Date().getUTCDate();
//   let tomorowDate = new Date().getUTCDate() + 1;
//   let twoDaysAfter = new Date().getUTCDate() + 2;
//   let threeDaysAfter = new Date().getUTCDate() + 3;
//   let fourDaysAfter = new Date().getUTCDate() + 4;
//   let fiveDaysAfter = new Date().getUTCDate() + 5;

//   //Today
//   let temperatureSum = 0;
//   let feelsLikeSum = 0;
//   let pressureSum = 0;
//   let highestTemp = data[0];
//   let lowestTemp = data[0];
//   let humiditySum = 0;
//   let highestHumidity = data[0];
//   let lowestHumidity = data[0];

//   // Tomorow
//   let temperatureSumTomorrow = 0;
//   let feelsLikeSumTomorrow = 0;
//   let pressureSumTomorrow = 0;
//   let highestTempTomorrow = data[0];
//   let lowestTempTomorrow = data[0];
//   let humiditySumTomorrow = 0;
//   let highestHumidityTomorrow = data[0];
//   let lowestHumidityTomorrow = data[0];

//   // 2days after
//   let temperatureSum2Days = 0;
//   let feelsLikeSum2Days = 0;
//   let pressureSum2Days = 0;
//   let highestTemp2Days = data[0];
//   let lowestTemp2Days = data[0];
//   let humiditySum2Days = 0;
//   let highestHumidity2Days = data[0];
//   let lowestHumidity2Days = data[0];


//   // 3days after
//   let temperatureSum3Days = 0;
//   let feelsLikeSum3Days = 0;
//   let pressureSum3Days = 0;
//   let highestTemp3Days = data[0];
//   let lowestTemp3Days = data[0];
//   let humiditySum3Days = 0;
//   let highestHumidity3Days = data[0];
//   let lowestHumidity3Days = data[0];


//   // 4days after
//   let temperatureSum4Days = 0;
//   let feelsLikeSum4Days = 0;
//   let pressureSum4Days = 0;
//   let highestTemp4Days = data[0];
//   let lowestTemp4Days = data[0];
//   let humiditySum4Days = 0;
//   let highestHumidity4Days = data[0];
//   let lowestHumidity4Days = data[0];


//   // 5Days after
//   let temperatureSum5Days = 0;
//   let feelsLikeSum5Days = 0;
//   let pressureSum5Days = 0;
//   let highestTemp5Days = data[0];
//   let lowestTemp5Days = data[0];
//   let humiditySum5Days = 0;
//   let highestHumidity5Days = data[0];
//   let lowestHumidity5Days = data[0];



//   for (const item of data) {

//     // today
//     temperatureSum += item.main.temp;
//     humiditySum += item.main.humidity;
//     feelsLikeSum += item.main.feels_like;
//     pressureSum += item.main.pressure;
//     if (highestTemp.main.temp < item.main.temp && todayDate === new Date(item.dt_text)) {
//       highestTemp = item;
//     }
//     if (lowestTemp.main.temp > item.main.temp && todayDate === new Date(item.dt_text)) {
//       lowestTemp = item;
//     }
//     if (highestHumidity.main.humidity < item.main.humidity && todayDate === new Date(item.dt_text)) {
//       highestHumidity = item;
//     }
//     if (lowestHumidity.main.humidity > item.main.humidity && todayDate === new Date(item.dt_text)) {
//       lowestHumidity = item;
//     }



//     // tomorow
//     temperatureSumTomorrow += item.main.temp;
//     humiditySumTomorrow += item.main.humidity;
//     feelsLikeSumTomorrow += item.main.feels_like;
//     pressureSumTomorrow += item.main.pressure;
//     if (highestTempTomorrow.main.temp < item.main.temp && tomorowDate === new Date(item.dt_text)) {
//       highestTempTomorrow = item;
//     }
//     if (lowestTempTomorrow.main.temp > item.main.temp && tomorowDate === new Date(item.dt_text)) {
//       lowestTemp = item;
//     }
//     if (highestHumidityTomorrow.main.humidity < item.main.humidity && tomorowDate === new Date(item.dt_text)) {
//       highestHumidity = item;
//     }
//     if (lowestHumidityTomorrow.main.humidity > item.main.humidity && tomorowDate === new Date(item.dt_text)) {
//       lowestHumidityTomorrow = item;
//     }


//     // 2days after
//     temperatureSum2Days += item.main.temp;
//     humiditySum2Days += item.main.humidity;
//     feelsLikeSum2Days += item.main.feels_like;
//     pressureSum2Days += item.main.pressure;
//     if (highestTemp2Days.main.temp < item.main.temp && twoDaysAfter === new Date(item.dt_text)) {
//       highestTemp2Days = item;
//     }
//     if (lowestTemp2Days.main.temp > item.main.temp && twoDaysAfter === new Date(item.dt_text)) {
//       lowestTemp2Days = item;
//     }
//     if (highestHumidity2Days.main.humidity < item.main.humidity && twoDaysAfter === new Date(item.dt_text)) {
//       highestHumidity2Days = item;
//     }
//     if (lowestHumidity2Days.main.humidity > item.main.humidity && twoDaysAfter === new Date(item.dt_text)) {
//       lowestHumidity2Days = item;
//     }


//     // 3days after
//     temperatureSum3Days += item.main.temp;
//     humiditySum3Days += item.main.humidity;
//     feelsLikeSum3Days += item.main.feels_like;
//     pressureSum3Days += item.main.pressure;
//     if (highestTemp3Days.main.temp < item.main.temp && threeDaysAfter === new Date(item.dt_text)) {
//       highestTemp3Days = item;
//     }
//     if (lowestTemp3Days.main.temp > item.main.temp && threeDaysAfter === new Date(item.dt_text)) {
//       lowestTemp3Days = item;
//     }
//     if (highestHumidity3Days.main.humidity < item.main.humidity && threeDaysAfter === new Date(item.dt_text)) {
//       highestHumidity = item;
//     }
//     if (lowestHumidity3Days.main.humidity > item.main.humidity && threeDaysAfter === new Date(item.dt_text)) {
//       lowestHumidity3Days = item;
//     }




//     // 4days after
//     temperatureSum4Days += item.main.temp;
//     humiditySum4Days += item.main.humidity;
//     feelsLikeSum4Days += item.main.feels_like;
//     pressureSum4Days += item.main.pressure;
//     if (highestTemp4Days.main.temp < item.main.temp && fourDaysAfter === new Date(item.dt_text)) {
//       highestTemp4Days = item;
//     }
//     if (lowestTemp4Days.main.temp > item.main.temp && fourDaysAfter === new Date(item.dt_text)) {
//       lowestTemp4Days = item;
//     }
//     if (highestHumidity4Days.main.humidity < item.main.humidity && fourDaysAfter === new Date(item.dt_text)) {
//       highestHumidity4Days = item;
//     }
//     if (lowestHumidity4Days.main.humidity > item.main.humidity && fourDaysAfter === new Date(item.dt_text)) {
//       lowestHumidity4Days = item;
//     }



//     // 5Days after
//     temperatureSum5Days += item.main.temp;
//     humiditySum5Days += item.main.humidity;
//     feelsLikeSum5Days += item.main.feels_like;
//     pressureSum5Days += item.main.pressure;
//     if (highestTemp5Days.main.temp < item.main.temp && fiveDaysAfter === new Date(item.dt_text)) {
//       highestTemp5Days = item;
//     }
//     if (lowestTemp5Days.main.temp > item.main.temp && fiveDaysAfter === new Date(item.dt_text)) {
//       lowestTemp5Days = item;
//     }
//     if (highestHumidity5Days.main.humidity < item.main.humidity && fiveDaysAfter === new Date(item.dt_text)) {
//       highestHumidity5Days = item;
//     }
//     if (lowestHumidity5Days.main.humidity > item.main.humidity && fiveDaysAfter === new Date(item.dt_text)) {
//       lowestHumidity5Days = item;
//     }
//   }
//   return {


//     today: {
//       temperature: {
//         max: highestTemp.main.temp,
//         avg: temperatureSum / data.length,
//         min: lowestTemp.main.temp
//       },
//       humidity: {
//         max: highestHumidity.main.humidity,
//         avg: (humiditySum / data.length).toFixed(2),
//         min: lowestHumidity.main.humidity
//       },
//       feels_like: {
//         avg: (feelsLikeSum / data.length).toFixed(2)
//       },
//       pressure: {
//         avg: (pressureSum / data.length).toFixed(2)
//       },
//       warmestTime: new Date(highestTemp.dt * 1000),
//       coldestTime: new Date(lowestTemp.dt * 1000)
//     },


//     tomorrow: {
//       temperature: {
//         max: highestTempTomorrow.main.temp,
//         avg: temperatureSumTomorrow / data.length,
//         min: lowestTempTomorrow.main.temp
//       },
//       humidity: {
//         max: highestHumidityTomorrow.main.humidity,
//         avg: (humiditySumTomorrow / data.length).toFixed(2),
//         min: lowestHumidityTomorrow.main.humidity
//       },
//       feels_like: {
//         avg: (feelsLikeSumTomorrow / data.length).toFixed(2)
//       },
//       pressure: {
//         avg: (pressureSumTomorrow / data.length).toFixed(2)
//       },
//       warmestTime: new Date(highestTempTomorrow.dt * 1000),
//       coldestTime: new Date(lowestTempTomorrow.dt * 1000),
//     },



//     after2Days: {
//       temperature: {
//         max: highestTemp2Days.main.temp,
//         avg: temperatureSum2Days / data.length,
//         min: lowestTemp2Days.main.temp
//       },
//       humidity: {
//         max: highestHumidity2Days.main.humidity,
//         avg: (humiditySum2Days / data.length).toFixed(2),
//         min: lowestHumidity2Days.main.humidity
//       },
//       feels_like: {
//         avg: (feelsLikeSum2Days / data.length).toFixed(2)
//       },
//       pressure: {
//         avg: (pressureSum2Days / data.length).toFixed(2)
//       },
//       warmestTime: new Date(highestTemp2Days.dt * 1000),
//       coldestTime: new Date(lowestTemp2Days.dt * 1000)
//     },

//     // 3Days
//     after3Days: {
//       temperature: {
//         max: highestTemp3Days.main.temp,
//         avg: temperatureSum3Days / data.length,
//         min: lowestTemp3Days.main.temp
//       },
//       humidity: {
//         max: highestHumidity3Days.main.humidity,
//         avg: (humiditySum3Days / data.length).toFixed(2),
//         min: lowestHumidity3Days.main.humidity
//       },
//       feels_like: {
//         avg: (feelsLikeSum3Days / data.length).toFixed(2)
//       },
//       pressure: {
//         avg: (pressureSum3Days / data.length).toFixed(2)
//       },
//       warmestTime: new Date(highestTemp3Days.dt * 1000),
//       coldestTime: new Date(lowestTemp3Days.dt * 1000)
//     },


//     // 4Days
//     after4Days: {
//       temperature: {
//         max: highestTemp4Days.main.temp,
//         avg: temperatureSum4Days / data.length,
//         min: lowestTemp4Days.main.temp
//       },
//       humidity: {
//         max: highestHumidity4Days.main.humidity,
//         avg: (humiditySum4Days / data.length).toFixed(2),
//         min: lowestHumidity4Days.main.humidity
//       },
//       feels_like: {
//         avg: (feelsLikeSum4Days / data.length).toFixed(2)
//       },
//       pressure: {
//         avg: (pressureSum4Days / data.length).toFixed(2)
//       },
//       warmestTime: new Date(highestTemp4Days.dt * 1000),
//       coldestTime: new Date(lowestTemp4Days.dt * 1000)
//     },


//     after5Days: {
//       temperature: {
//         max: highestTemp5Days.main.temp,
//         avg: temperatureSum5Days / data.length,
//         min: lowestTemp5Days.main.temp
//       },
//       humidity: {
//         max: highestHumidity5Days.main.humidity,
//         avg: (humiditySum5Days / data.length).toFixed(2),
//         min: lowestHumidity5Days.main.humidity
//       },
//       feels_like: {
//         avg: (feelsLikeSum5Days / data.length).toFixed(2)
//       },
//       pressure: {
//         avg: (pressureSum5Days / data.length).toFixed(2)
//       },
//       warmestTime: new Date(highestTemp5Days.dt * 1000),
//       coldestTime: new Date(lowestTemp5Days.dt * 1000)
//     }
//   };
// }


// module.exports = calculateStatistics;