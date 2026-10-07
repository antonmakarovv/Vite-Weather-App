import styles from './WeatherCard.module.css'
import InputCityName from '../InputCityName/InputCityName.js'
import GetWeatherBtn from '../GetWeatherBtn/GetWeatherBtn.js';
import ShowWeatherPage from '../ShowWeatherPage/ShowWeatherPage.js';
import ShowStatPage from '../ShowStatPage/ShowStatPage.js';

export default () => {
  return `
    <div class="${styles.root}">
      ${InputCityName()}
      ${GetWeatherBtn()}
      ${ShowWeatherPage()}
      ${ShowStatPage()}
    </div>
  `
}