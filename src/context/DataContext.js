import React, {createContext, useState} from 'react';
const fetchData = require('../functions/fetchData');
const calculateStatistics = require('../functions/caluclateStatistics')

export const DataContext = createContext();


const DataContextProvider = async (props) => {
  const [city, setCity] = useState("Skopje");
  const [data, setData] = useState({})

  const res = await fetchData(city)
  // console.log(res)


  return (
    <DataContext.Provider value={{city, setCity, data, setData}} >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;