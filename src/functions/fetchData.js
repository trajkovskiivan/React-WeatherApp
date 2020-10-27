const fetchData = async (city) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
  const result = await data.json();
  return result
}


module.exports = fetchData;