import IconNames from 'components/global/Icon/icon-names'
import { OpenWeatherData } from 'src/types'

export const transformWeatherData = (weatherData: OpenWeatherData) => {
  return {
    weather: {
      ...weatherData.weather[0],
      temp: weatherData.main.temp,
    },
    features: [
      {
        iconName: IconNames.PRESSURE,
        title: 'Pressure',
        value: weatherData.main.pressure,
        unit: 'hPa',
      },
      {
        iconName: IconNames.WINDSPEED,
        title: 'wind',
        value: weatherData.wind.speed,
        unit: 'Km/h',
      },
      {
        iconName: IconNames.VISIBILITY,
        title: 'Feels Like',
        value: weatherData.main.feels_like,
        unit: '°c',
      },
      {
        iconName: IconNames.HUMIDITY,
        title: 'Humidity',
        value: weatherData.main.humidity,
        unit: '%',
      },
    ],
  }
}
