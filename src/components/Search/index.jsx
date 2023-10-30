import {AiOutlineSearch, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
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
  const [isOpen, setIsOpen] = useState(false)

  const { setWeatherInfo } = useContext(WeatherContext)

  const location = useRef(null)

  //chamada de api passando o valor digitado no input para obter uma lista de localizações
  const handleSearch = async () =>{

    if(!location.current.value) return
    setListLocations(prev=>({...prev, isLoading: true, isError: false}))

    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location.current.value}&count=10&language=pt&format=json`
    
      const response = await fetch(url)
      const data = await response.json() 
      
      setListLocations(prev=>({...prev, isLoading: false, list: data.results || []}))
      
    } catch (error) {
      console.log(error);
      setListLocations(prev=>({...prev, isLoading: false, isError: true}))

    }
  }

  //usando a latitude e longitude do botao com o listLocations para fazer uma chamada a api e obter os dados da previsão
  const handleFetch = async (location) => {

    setWeatherInfo(prev=>({...prev, isLoading: true, isError: false}))
    setIsOpen(false)

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo`
        
      const response = await fetch(url)
      const data = await response.json()
  
      const dayNight = data.current.is_day ? 'day' : 'night'
  
      const info = {
        location: 
        {
          city:location.name, 
          state: location.admin1, 
          country: location.country
        },
        is_day: dayNight,
        humidity:data.current.relativehumidity_2m,
        temperature: data.current.temperature_2m,
        dailyData: data.daily,
        weatherCondition:description[data.current.weathercode][dayNight].description,
        weatherConditionIcon:description[data.current.weathercode][dayNight].image,
  
      } 
      setWeatherInfo(prev => ({...prev, isLoading: false, info: info}))
  
      setListLocations(prev=>({...prev, list: []}))

    } catch (error) {
      console.log(error);
      setWeatherInfo(prev=>({...prev, isLoading: false, isError: true}))
    }
  }

  //botão de abrir e fechar a pesquisa por nome
  const handleOpen = () =>{
    setIsOpen(prev => !prev)
    setListLocations(prev=>({...prev, isError: false, isLoading: false, list: []}))
  }

  return (
    <div className="w-full flex flex-col">
        <div className="p-2 flex justify-end">
          {isOpen ?
            <button className="text-3xl md:text-4xl" onClick={handleOpen}><AiOutlineClose/></button> :
            <button className="text-3xl md:text-4xl flex justify-start" onClick={handleOpen}><AiOutlineMenu/></button>
          }
        </div>
        {isOpen &&
          <div className="relative my-2 text-center">
            <div className='h-12 flex justify-center gap-2'>
              <input type="text" className="p-2 px-4 text-slate-800 font-montserrat font-semibold outline-none border rounded
               bg-slate-50 shadow" ref={location} placeholder="Insira o local"/>
              <button className='bg-blue-950 p-2 aspect-square flex justify-center items-center rounded border'
                onClick={handleSearch}
              ><AiOutlineSearch className='text-4xl'/></button>
            </div>
            <ul className={`w-2/3 sm:w-auto m-3 flex flex-col absolute z-10 top-12 left-1/2 -translate-x-1/2 before:absolute before:w-0 before:h-0 before:border-l-8 before:border-l-transparent 
            before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-blue-900 before:-top-2 before:right-1/2 ${!location.current && 'before:opacity-0'}`}>
            {listLocations.isError && <li className="bg-blue-900 text-slate-200 p-2 font-montserrat">Ocorreu um erro...</li> }
            {listLocations.isLoading && <li className="bg-blue-900 text-slate-200 p-2 font-montserrat">Aguarde, carregando locais...</li> }
            {listLocations.list.length && !listLocations.isLoading ? listLocations.list.map((location)=>(
              <button key={location.id} onClick={()=>handleFetch(location)}>
                <li className="bg-blue-900 text-slate-200 p-2 font-montserrat text-lg" >{location.name}, <span className="text-sm">{location.admin1} - {location.country}</span></li>
              </button>
            )) :
              location.current && !listLocations.isLoading ?
              <li className="bg-blue-900 text-slate-200 p-2 font-montserrat" >Nenhum local encontrado...</li> 
              : ''
            }
            </ul>
          </div>
        }
      </div>
  )
}

export default Search
