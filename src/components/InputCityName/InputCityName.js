import styles from './InputCityName.module.css'

export default () => {
  return `
    <input id='input-city-name' class="${styles.root}" type="text" placeholder="Enter city name" />
  `
}