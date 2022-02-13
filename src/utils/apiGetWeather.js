async function apiGetWeather(query) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_URL_BASE}?q=${query}&lang=es&units=metric&appid=${process.env.REACT_APP_TOKEN}`
    )
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default apiGetWeather
