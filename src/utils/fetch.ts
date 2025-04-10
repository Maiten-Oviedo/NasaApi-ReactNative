const API_KEY = 'M8fTRceQOXyXIeP3wbebaj7QGPcQ3GToWtiJzODo'
const API_URL = 'https://api.nasa.gov/planetary/apod'

export default async (urlParams?: string) => {
  try {
    const newUrl = `${API_URL}?api_key=${API_KEY}${
      typeof urlParams != 'undefined' && urlParams.length > 0 ? urlParams : ''
    }`
    const response = await fetch(newUrl)

    const data = await response.json()
    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
