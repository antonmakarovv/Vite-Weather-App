import './style.css'
import WeatherCard from './components/WeatherCard/WeatherCard.js'; 


const app = document.querySelector('#app').innerHTML = `
  ${WeatherCard()}
`