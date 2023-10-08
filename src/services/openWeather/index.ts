export function getWeatherApiUrl(city: string) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
}

export function getWeatherIconUrl(icon: string) {
  return `https://openweathermap.org/img/wn/${icon}@4x.png`
}

export async function fetchWeatherData(city: string) {
  try {
    const response = await fetch(getWeatherApiUrl(city))
    if (!response.ok) {
      throw new Error('Network Error')
    }
    return await response.json()
  } catch (error: any) {
    return null
  }
}
