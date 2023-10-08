import Image from 'next/image'
import { Column, Row } from 'components/layouts'
import Card from 'components/global/Card'
import Icon from 'components/global/Icon'
import {
  StyledWeatherFeatureWrapper,
  StyledWeatherFeatureDetail,
  StyledWeatherFeatureValue,
  StyledWeatherFeatureTitle,
  StyledWeatherCondition,
  StyledWeatherTemperature,
  StyledWeatherDescription,
} from 'components/sections/WeatherView/weatherView.styles'
import { getWeatherIconUrl } from 'src/services/openWeather'
import { transformWeatherData } from 'src/utils/mappers/mapWeatherFeature'

export type TransformedWeatherData = ReturnType<typeof transformWeatherData>

interface WeatherViewProps {
  weatherData: TransformedWeatherData
}

function WeatherView({ weatherData }: WeatherViewProps) {
  return (
    <Row>
      <Column>
        <Card>
          <StyledWeatherCondition>
            <Image
              src={getWeatherIconUrl(weatherData.weather.icon)}
              width={100}
              height={100}
              alt={weatherData.weather.main}
              loading="lazy"
            />
            <StyledWeatherDescription>{weatherData.weather.description}</StyledWeatherDescription>
          </StyledWeatherCondition>
          <StyledWeatherTemperature>
            {weatherData.weather.temp} °c
          </StyledWeatherTemperature>
        </Card>
      </Column>
      {weatherData.features.map((feature) => (
        <Column $col={{ LG: 3, MD: 6, SM: 12 }} key={feature.title}>
          <WeatherFeature {...feature} />
        </Column>
      ))}
    </Row>
  )
}
interface WeatherFeatherProps {
  iconName?: string
  title?: string
  value?: string | number
  unit?: string
}
function WeatherFeature({ iconName, title, value, unit }: WeatherFeatherProps) {
  return (
    <Card>
      <StyledWeatherFeatureWrapper>
        <Icon name={iconName} size="75px" />
        <StyledWeatherFeatureDetail>
          <StyledWeatherFeatureTitle>{title}</StyledWeatherFeatureTitle>
          <StyledWeatherFeatureValue>
            {value} {unit}
          </StyledWeatherFeatureValue>
        </StyledWeatherFeatureDetail>
      </StyledWeatherFeatureWrapper>
    </Card>
  )
}

export default WeatherView
