import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'

import { WeatherInfoProvider } from './contexts/WeatherProvider/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherInfoProvider>
      <App />
    </WeatherInfoProvider>
  </React.StrictMode>
)
