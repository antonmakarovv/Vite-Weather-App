import styles from './ShowWeatherPage.module.css'; 
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import TemperatureStat from '../TemperatureStat/TemperatureStat';
import CityName from '../CityName/CityName';
import Description from '../Description/Description';

export default () => {
  return `
  <div class='${styles.root}'>
    ${WeatherIcon()}
    ${TemperatureStat()}
    ${CityName()}
    ${Description()}
  </div>
  `
}