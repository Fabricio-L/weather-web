import React, { useState, createContext } from 'react'

export const CityContext = createContext(null)

const CityProvider = (props) => {
  const [city, setCity] = useState({
    name: 'Corrientes,AR',
    lat: '-27.4806',
    lng: '-58.8341',
  })

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {props.children}
    </CityContext.Provider>
  )
}

export default CityProvider
