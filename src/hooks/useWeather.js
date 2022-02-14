import { useState, useMemo } from 'react'
import apiGetWeather from '../utils/apiGetWeather'
import apiGetForecast from '../utils/apiGetForecast'

const useWeather = (lat, lng, query) => {
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)

  useMemo(async () => {
    setCurrent(await apiGetWeather('Corrientes,AR'))
  }, [])

  useMemo(async () => {
    setForecast(await apiGetForecast('-27.4806', '-58.8341'))
  }, [])

  return {
    current,
    forecast,
  }
}

export default useWeather
