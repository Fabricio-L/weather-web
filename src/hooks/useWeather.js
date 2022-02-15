import { useState, useMemo, useContext } from 'react'
import { CityContext } from '../context/CityContext'
import apiGetWeather from '../utils/apiGetWeather'
import apiGetForecast from '../utils/apiGetForecast'

const useWeather = () => {
  const context = useContext(CityContext)
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)

  console.log(context)

  useMemo(async () => {
    setCurrent(await apiGetWeather(context.city.name))
  }, [context.city])

  useMemo(async () => {
    setForecast(await apiGetForecast(context.city.lat, context.city.lng))
  }, [context.city])

  return {
    current,
    forecast,
  }
}

export default useWeather
