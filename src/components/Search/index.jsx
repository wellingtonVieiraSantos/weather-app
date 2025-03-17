import { AiOutlineSearch } from 'react-icons/ai'
import { description } from '../../utils/description'

import { useRef, useState } from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherProvider/context'

const Search = () => {
  const [listLocations, setListLocations] = useState({
    isLoading: false,
    isError: false,
    list: []
  })

  const { setWeatherInfo } = useContext(WeatherContext)

  const location = useRef(null)

  //chamada de api passando o valor digitado no input para obter uma lista de localizações
  const handleSearch = async () => {
    if (!location.current.value) return
    setListLocations(prev => ({ ...prev, isLoading: true, isError: false }))

    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location.current.value}&count=10&language=pt&format=json`

      const response = await fetch(url)
      const data = await response.json()

      setListLocations(prev => ({
        ...prev,
        isLoading: false,
        list: data.results || []
      }))
    } catch (error) {
      console.log(error)
      setListLocations(prev => ({ ...prev, isLoading: false, isError: true }))
    }
  }

  //usando a latitude e longitude do botao com o listLocations para fazer uma chamada a api e obter os dados da previsão
  const handleFetch = async locationFetch => {
    setWeatherInfo(prev => ({ ...prev, isLoading: true, isError: false }))

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${locationFetch.latitude}&longitude=${locationFetch.longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo`

      const response = await fetch(url)
      const data = await response.json()

      const dayNight = data.current.is_day ? 'day' : 'night'

      const info = {
        location: {
          city: locationFetch.name,
          state: locationFetch.admin1,
          country: locationFetch.country
        },
        is_day: dayNight,
        humidity: data.current.relativehumidity_2m,
        temperature: data.current.temperature_2m,
        dailyData: data.daily,
        weatherCondition:
          description[data.current.weathercode][dayNight].description,
        weatherConditionIcon:
          description[data.current.weathercode][dayNight].image
      }
      setWeatherInfo(prev => ({ ...prev, isLoading: false, info: info }))

      setListLocations(prev => ({ ...prev, list: [] }))
      location.current.value = ''
    } catch (error) {
      console.log(error)
      setWeatherInfo(prev => ({ ...prev, isLoading: false, isError: true }))
    }
  }

  return (
    <div className='w-full flex flex-col'>
      <div className='relative my-2 text-center'>
        <div className='h-12 flex justify-center gap-2'>
          <input
            type='text'
            className='p-2 px-4 text-slate-800 font-montserrat font-semibold outline-none border rounded
               bg-slate-50 shadow'
            ref={location}
            placeholder='Insira o local'
          />
          <button
            className='bg-blue-950 p-2 aspect-square flex justify-center items-center rounded border'
            onClick={handleSearch}
          >
            <AiOutlineSearch className='text-4xl' />
          </button>
        </div>
        <ul
          className={`w-2/3 sm:w-auto m-3 flex flex-col absolute z-10 top-12 left-1/2 -translate-x-1/2 before:absolute before:w-0 before:h-0 before:border-l-8 before:border-l-transparent 
            before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-blue-950 before:-top-2 before:right-1/2 ${
              !location.current || location.current?.value == ''
                ? 'before:opacity-0'
                : 'before:opacity-1'
            }`}
        >
          {listLocations.isError && (
            <li className='bg-blue-950 text-slate-200 p-2 font-montserrat'>
              Ocorreu um erro...
            </li>
          )}
          {listLocations.isLoading && (
            <li className='bg-blue-950 text-slate-200 p-2 font-montserrat'>
              Aguarde, carregando locais...
            </li>
          )}
          {listLocations.list.length && !listLocations.isLoading ? (
            listLocations.list.map(location => (
              <button key={location.id} onClick={() => handleFetch(location)}>
                <li className='bg-blue-950 text-slate-200 px-8 py-1 font-montserrat text-lg hover:bg-blue-800 transition-all'>
                  {location.name},{' '}
                  <span className='text-sm'>
                    {location.admin1} - {location.country}
                  </span>
                </li>
              </button>
            ))
          ) : location.current &&
            location.current.value != '' &&
            !listLocations.isLoading ? (
            <li className='bg-blue-950 text-slate-200 p-2 font-montserrat'>
              Nenhum local encontrado...
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  )
}

export default Search
