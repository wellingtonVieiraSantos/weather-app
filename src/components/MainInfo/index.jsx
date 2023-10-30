import humidity from '../../assets/humidity.svg'
import { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherProvider/context'

const MainInfo = () => {

  const { weatherInfo } = useContext(WeatherContext)

  return (
    <div className="rounded md:w-4/5 md:flex md:flex-col md:p-5">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-xl md:text-4xl">{weatherInfo.info.location.city}  </h2>
        <span className="text-sm md:text-xl">{weatherInfo.info.location.country}</span>
      </div>
      <img src={weatherInfo.info.weatherConditionIcon} className="w-2/3 md:w-1/2 m-auto"></img>
      <div className="flex flex-col items-center gap-2">
        <p className="text-7xl md:text-8xl md:mb-5 font-bold flex font-montserrat">{parseInt(weatherInfo.info.temperature)}°</p>
        <p className="md:text-xl"> {weatherInfo.info.weatherCondition}</p>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-sm md:text-lg font-normal">Umidade</span>
        <img src={humidity} className="w-10 md:w-14"/>
        <p className="text-lg font-bold font-montserrat"> {weatherInfo.info.humidity}%</p>
      </div>
    </div>
  )
}

export default MainInfo
