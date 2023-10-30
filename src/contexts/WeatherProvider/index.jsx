import { useState } from 'react'
import P from 'prop-types'
import { WeatherContext } from './context'

export const WeatherInfoProvider = ({children}) =>{

  const [weatherInfo, setWeatherInfo] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    info: undefined
  })

  return(
    <WeatherContext.Provider value={{weatherInfo, setWeatherInfo}}>
      {children}
    </WeatherContext.Provider>
  )
}

WeatherInfoProvider.propTypes = {
  children:P.node.isRequired
}