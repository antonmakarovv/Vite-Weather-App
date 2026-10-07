import styles from './WeatherCard.module.css'
import InputCityName from '../InputCityName/InputCityName.js'
import ManifestBtn from '../MagnifierButton/MagnifierBtn.js';

export default () => {
  return `
    <div class="${styles.root}">
      ${InputCityName()}
      ${ManifestBtn()}
    </div>
  `
}