import styles from './WeatherCard.module.css'
import InputCityName from '../InputCityName/InputCityName.js'
import ManifestBtn from '../MagnifierButton/MagnifierBtn.js';
import ShowWeatherPage from '../ShowWeatherPage/ShowWeatherPage.js';
import ShowStatPage from '../ShowStatPage/ShowStatPage.js';

export default () => {
  return `
    <div class="${styles.root}">
      ${InputCityName()}
      ${ManifestBtn()}
      ${ShowWeatherPage()}
      ${ShowStatPage()}
    </div>
  `
}