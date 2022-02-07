async function apiGet(params) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_URL_GEO}?q=${params}&appid=${process.env.REACT_APP_TOKEN}`
    )
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default apiGet
