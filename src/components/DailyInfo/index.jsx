import temp from '../../assets/temp.svg'
import rain from '../../assets/rain.svg'
import {description} from '../../utils/description'

import { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherProvider/context'

const DailyInfo = () => {

  const { weatherInfo } = useContext(WeatherContext)

  const dayWeek = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo']

  return (
    <>
      {weatherInfo.info.dailyData.time.map((date,index) =>(
      <li key={date} className="w-full flex flex-col gap-2 items-center bg-white/10 rounded py-2">
        <div>
          <p>
            <span>
              {index == 0 && 'Hoje'}
              {index == 1 && 'Amanhã'}
              {index > 1 && dayWeek[new Date(date).getDay()]}
            , </span>
            <span className="font-bold font-montserrat">{date.slice(-2)}/{date.slice(-5,-3)}</span>
          </p>
        </div>
        <div className="w-full flex items-center justify-between md:justify-around">
          <div className="flex items-center">
            <img src={temp} alt="" className="w-10"/>
            <p className="font-montserrat font-bold"> {parseInt(weatherInfo.info.dailyData.temperature_2m_max[index])}° / {parseInt(weatherInfo.info.dailyData.temperature_2m_min[index])}°</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={rain} alt="" className="w-7"/>
            <p className="font-montserrat font-bold">{weatherInfo.info.dailyData.precipitation_probability_max[index]}%</p>
          </div>
          <img className="w-14" src={ description[weatherInfo.info.dailyData.weathercode[index]][weatherInfo.info.is_day].image} />
        </div>
      </li>
      ))}
    </>
  )
}

export default DailyInfo
