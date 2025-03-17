import day from '../../assets/clear-day.svg'

import { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherProvider/context'

const HomeScreen = () => {
  const { weatherInfo } = useContext(WeatherContext)

  console.log(weatherInfo)

  return (
    <>
      {!weatherInfo.info && (
        <div className='absolute top-1/2 -translate-y-2/3 font-concert text-5xl text-slate-200'>
          <img className='w-full' src={day} />
          <h1 className='text-center'>App Clima</h1>
        </div>
      )}
    </>
  )
}

export default HomeScreen
