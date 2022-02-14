async function apiGetForecast(lat, lon) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_URL_FORECAST}?lat=${lat}&lon=${lon}&lang=es&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_TOKEN}`
    )
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default apiGetForecast
