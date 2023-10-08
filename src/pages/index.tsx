import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React, { useCallback, useMemo, useState } from 'react'
import { fetchIpData } from 'src/services/IPStack'
import { CITIES } from 'src/const/cities'
import WeatherView, {
  TransformedWeatherData,
} from 'components/sections/WeatherView'
import { OpenWeatherData } from 'src/types'
import { fetchWeatherData, getWeatherApiUrl } from 'src/services/openWeather'
import { useFetchData } from 'src/hooks/useFetchData'
import { Container } from 'components/layouts'
import SelectInput from 'components/inputs/Select'
import { mapSelectInputData } from 'src/utils/mappers/mapSelectInputData'
import { setCookie } from 'cookies-next'
import { CITY_COOKIE_KEY } from 'src/const/global'
import { transformWeatherData } from 'src/utils/mappers/mapWeatherFeature'
import { Alert } from 'components/global/Alert'

function Home({
  cities,
  initialWeatherData,
  initialCity,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [city, setCity] = useState<string>(initialCity)
  const { data: weatherData, error } = useFetchData<
    OpenWeatherData,
    TransformedWeatherData
  >(getWeatherApiUrl(city), {
    transformResponse: transformWeatherData,
  })
  const handleCityChange = useCallback((city: string) => {
    setCity(city)
    setCookie(CITY_COOKIE_KEY, city)
  }, [])

  const cityOptions = useMemo(() => mapSelectInputData(cities), [cities])

  return (
    <>
      <Head>
        <title>Weather App - Home Page</title>
        <meta
          name="description"
          content="This website shows weather condition"
        />
      </Head>
      <Container>
        <SelectInput
          options={cityOptions}
          name="city"
          onChange={handleCityChange}
          label="Select a city:"
          initialValue={city}
        />
        {!error ? (
          <WeatherView weatherData={weatherData || initialWeatherData} />
        ) : (
          <Alert>Server Error: please try again later</Alert>
        )}
      </Container>
    </>
  )
}
export default Home

interface ServerSideProps {
  cities: string[]
  initialWeatherData: TransformedWeatherData | null
  initialCity: string
}
export const getServerSideProps = (async ({ req }) => {
  const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for']

  const ipData = await fetchIpData(ip)

  let cities = CITIES

  if (ipData && ipData?.city && !cities.includes(ipData?.city)) {
    cities = [ipData.city, ...cities]
  }
  let initialCity = cities[0]
  if (
    req.cookies[CITY_COOKIE_KEY] &&
    cities.includes(req.cookies[CITY_COOKIE_KEY])
  ) {
    initialCity = req.cookies[CITY_COOKIE_KEY]
  }

  const initialWeatherData = await fetchWeatherData(initialCity)
  return {
    props: {
      cities,
      initialCity,
      initialWeatherData: transformWeatherData(initialWeatherData),
    },
  }
}) satisfies GetServerSideProps<ServerSideProps>
