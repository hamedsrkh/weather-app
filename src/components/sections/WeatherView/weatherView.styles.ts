import styled from 'styled-components'

const StyledWeatherFeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`
const StyledWeatherFeatureDetail = styled.div``
const StyledWeatherFeatureTitle = styled.div`
  color: ${({ theme: { Color } }) => Color.ACCENT};
  font-size: 1.6rem;
  margin-bottom: 10px;
`
const StyledWeatherFeatureValue = styled.div`
  font-size: 2.4rem;
`

const StyledWeatherCondition = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  color: ${({ theme: { Color } }) => Color.ACCENT};
`

const StyledWeatherTemperature = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-left: 10px;
`

const StyledWeatherDescription = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme: { Color } }) => Color.ACCENT};
`

export {
  StyledWeatherFeatureWrapper,
  StyledWeatherFeatureDetail,
  StyledWeatherFeatureValue,
  StyledWeatherFeatureTitle,
  StyledWeatherCondition,
  StyledWeatherTemperature,
  StyledWeatherDescription,
}
