import Search from '../components/Search/index.jsx'
import HomeScreen from '../components/HomeScreen'
import WeatherInfo from '../components/WeatherInfo/index.jsx'

import { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherProvider/context.js'
function App() {
  const { weatherInfo } = useContext(WeatherContext)

  return (
    <main className='w-full min-h-[100dvh] flex flex-col items-center relative bg-main text-slate-200'>
      {!weatherInfo.isLoading && <HomeScreen />}
      <Search />
      <WeatherInfo />
    </main>
  )
}

export default App
